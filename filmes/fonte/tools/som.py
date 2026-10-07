# Trilha e sound design industrial dos filmes Downway — sintetizados a partir dos cues do filme.
# uso: python3 som.py cues.json duracao saida.wav
import json, sys, wave
import numpy as np

SR = 48000
cues = json.load(open(sys.argv[1])); DUR = float(sys.argv[2])
N = int(SR * (DUR + 3)); L = np.zeros(N); R = np.zeros(N)
rng = np.random.default_rng(11)
tt = lambda d: np.arange(max(1, int(d * SR))) / SR

def spec_filter(x, fn):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); return np.fft.irfft(X * fn(f), len(x))
lp = lambda x, fc, o=2: spec_filter(x, lambda f: 1 / np.sqrt(1 + (f / fc) ** (2 * o)))
hp = lambda x, fc, o=2: spec_filter(x, lambda f: 1 - 1 / np.sqrt(1 + (f / fc) ** (2 * o)))
bp = lambda x, f0, q=4: spec_filter(x, lambda f: 1 / (1 + (q * (f / f0 - f0 / np.maximum(f, 1))) ** 2))
noise = lambda d: rng.standard_normal(len(tt(d)))
def brown(d):
    x = np.cumsum(noise(d)); x -= np.linspace(x[0], x[-1], len(x)); return x / (np.max(np.abs(x)) + 1e-9)
def env(d, a=0.01, r=0.1):
    t = tt(d); e = np.minimum(1, t / max(a, 1e-4)) * np.minimum(1, (d - t) / max(r, 1e-4)); return np.clip(e, 0, 1)
def add(sig, t0, g=1.0, pan=0.0):
    i = int(t0 * SR)
    if i >= N or i + len(sig) <= 0: return
    if i < 0: sig = sig[-i:]; i = 0
    sig = sig[: N - i]
    L[i:i + len(sig)] += sig * g * np.sqrt(1 - pan) ; R[i:i + len(sig)] += sig * g * np.sqrt(1 + pan)
REV = None
def reverb(x, wet=0.25, dur=1.6):
    global REV
    if REV is None:
        REV = lp(rng.standard_normal(int(SR * dur)), 2400) * np.exp(-tt(dur) * 3.6); REV /= np.sqrt(np.sum(REV ** 2))
    n = len(x) + len(REV); y = np.fft.irfft(np.fft.rfft(x, n) * np.fft.rfft(REV, n), n)
    out = np.zeros(n); out[: len(x)] = x; return out + y * wet
def sweep(f0, f1, d, k=3.0):
    t = tt(d); f = f1 + (f0 - f1) * np.exp(-t * k / d * 3); return np.sin(2 * np.pi * np.cumsum(f) / SR)
saw = lambda f, t: 2 * ((f * t) % 1) - 1
def partials(fs, d, decays, amps=None):
    t = tt(d); amps = amps or [1] * len(fs); return sum(a * np.sin(2 * np.pi * f * t) * np.exp(-t * k) for f, k, a in zip(fs, decays, amps))

# ---------- sons ----------
def s_click(): t = tt(0.03); return hp(noise(0.03), 1500) * np.exp(-t * 300) * 0.5 + np.sin(2 * np.pi * 2200 * t) * np.exp(-t * 400) * 0.2
def s_key(): t = tt(0.04); return bp(noise(0.04), 2600 + rng.random() * 1200, 2) * np.exp(-t * 160) * 0.9 + np.sin(2 * np.pi * 140 * t) * np.exp(-t * 80) * 0.15
def s_tick(): t = tt(0.02); return np.sin(2 * np.pi * 2100 * t) * np.exp(-t * 280) * 0.3
def s_pen(): t = tt(0.12); return bp(noise(0.12), 3800, 1.5) * np.sin(np.pi * t / 0.12) * 0.25
def s_notif(): t = tt(0.5); return (np.sin(2 * np.pi * 880 * t) * np.exp(-t * 9) + 0.7 * np.sin(2 * np.pi * 1318.5 * t) * np.exp(-t * 7) * (t > 0.09)) * 0.16
def s_relay(): t = tt(0.12); return hp(noise(0.12), 900) * np.exp(-t * 180) * 0.7 + np.sign(np.sin(2 * np.pi * 120 * t)) * np.exp(-t * 60) * 0.05
def s_chime(): return reverb(partials([1046.5, 1568, 2637], 1.6, [3, 4, 6], [0.25, 0.14, 0.05]), 0.35)
def s_glitch(): t = tt(0.25); return np.sign(np.sin(2 * np.pi * (180 + 600 * (np.floor(t * 40) % 3)) * t)) * env(0.25, 0.005, 0.05) * 0.12
def s_clack(soft=False): t = tt(0.4); s = partials([1850, 3100, 4700], 0.4, [25, 35, 50], [0.5, 0.3, 0.15]) + hp(noise(0.4), 2000) * np.exp(-t * 90) * 0.4 + np.sin(2 * np.pi * 90 * t) * np.exp(-t * 30) * 0.5; return reverb(s * (0.5 if soft else 0.9), 0.15)
def s_metal(): t = tt(2.0); s = partials([223, 547, 1181, 2333, 3460], 2.0, [2.5, 3.2, 4.5, 6, 9], [0.4, 0.35, 0.25, 0.15, 0.08]) + np.sin(2 * np.pi * 55 * t) * np.exp(-t * 8) * 0.8 + lp(noise(2.0), 1500) * np.exp(-t * 25) * 0.6; return reverb(s, 0.35)
def s_thump(): t = tt(0.6); return np.tanh(sweep(110, 38, 0.6, 2) * np.exp(-t * 7) * 1.5) * 0.8
def s_door(): d = 0.9; t = tt(d); slide = bp(noise(d), 700, 1.2) * np.sin(np.pi * np.clip(t / 0.7, 0, 1)) * 0.25; out = slide.copy(); c = s_clack(); i = int(0.7 * SR); out = np.concatenate([out, np.zeros(len(c))]); out[i:i + len(c)] += c * 0.9; return out
def s_pneumatic(): t = tt(0.5); return hp(noise(0.5), 2500) * np.exp(-t * 9) * 0.45
def ratchet():
    out = np.zeros(int(0.22 * SR))
    for k in range(3):
        c = (hp(noise(0.02), 2500) * np.exp(-tt(0.02) * 250) * 0.6); i = int(k * 0.05 * SR); out[i:i + len(c)] += c
    return out
def s_phone():
    d = 1.1; t = tt(d); burst = ((t % 0.5) < 0.35).astype(float); return np.sign(np.sin(2 * np.pi * 172 * t)) * lp(burst, 40) * 0.18 + np.sin(2 * np.pi * 172 * t) * burst * 0.1
def s_whoosh(d=0.6): t = tt(d); e = np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2; return hp(lp(noise(d), 3000), 250) * e * 0.4
def s_riser(d): t = tt(d); return (np.sin(2 * np.pi * np.cumsum(np.linspace(160, 900, len(t))) / SR) * 0.15 + hp(noise(d), 2500) * 0.25) * (t / d) ** 2.5
def s_sub(): t = tt(3.0); return np.sin(2 * np.pi * 41 * t) * np.exp(-t * 1.3) * 0.9 * np.minimum(1, t / 0.02)
def s_end(): t = tt(3.0); s = np.tanh(sweep(120, 36, 3.0, 1.3) * np.exp(-t * 1.8) * 1.4) + partials([392, 785, 1569], 3.0, [1.5, 2, 3], [0.06, 0.04, 0.02]); return reverb(s * 0.8, 0.3)
def s_servo(d): t = tt(d); f = 340 + 160 * np.sin(np.pi * np.clip(t / d, 0, 1)); return (np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.12 + bp(noise(d), 1200, 3) * 0.05) * env(d, 0.05, 0.08)
def s_hydraulic(d): t = tt(d); return (lp(noise(d), 900) * 0.3 + np.sin(2 * np.pi * 95 * t) * 0.12) * env(d, 0.08, 0.25)
def s_spindleUp(d, f=210): t = tt(d); fr = f * (0.2 + 0.8 * np.clip(t / d, 0, 1) ** 0.6); ph = 2 * np.pi * np.cumsum(fr) / SR; return (np.sin(ph) * 0.1 + np.sin(2 * ph) * 0.06 + np.sin(3 * ph) * 0.04) * np.clip(t / d, 0, 1)
def s_spindle(d, f=210, clean=False):
    t = tt(d); ph = 2 * np.pi * f * t + 0.6 * np.sin(2 * np.pi * 0.7 * t)
    tone = np.sin(ph) * 0.09 + np.sin(2 * ph) * 0.06 + np.sin(3 * ph) * 0.05 + np.sin(5.03 * ph) * 0.02
    cut = bp(noise(d), 1800 if not clean else 3200, 2) * (0.6 + 0.4 * np.sin(2 * np.pi * f / 20 * 3 * t)) * (0.06 if not clean else 0.035)
    return (tone + cut) * env(d, 0.15, 0.3)
def s_chips(d):
    out = np.zeros(len(tt(d)))
    for k in range(int(d * 28)):
        i = int(rng.random() * len(out)); f = 2800 + rng.random() * 4200; c = np.sin(2 * np.pi * f * tt(0.05)) * np.exp(-tt(0.05) * 120) * (0.03 + rng.random() * 0.05); out[i:i + len(c)] += c[: len(out) - i]
    return out
def s_coolant(d): return hp(lp(noise(d), 5000), 1500) * 0.018 * env(d, 0.3, 0.4)
def s_stepper(d):
    t = tt(d); f = np.repeat(380 + 420 * rng.random(int(d * 9) + 1), int(SR / 9) + 1)[: len(t)]; return np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.045 * env(d, 0.05, 0.1)
def s_machine(d):
    t = tt(d); hum = sum(np.sin(2 * np.pi * 60 * k * t) * a for k, a in [(1, 0.06), (2, 0.05), (3, 0.02)])
    whine = np.sin(2 * np.pi * (780 + 15 * np.sin(2 * np.pi * 0.3 * t)) * t) * 0.012
    rumble = lp(noise(d), 300) * 0.12 * (0.8 + 0.2 * np.sin(2 * np.pi * 1.6 * t))
    return (hum + whine + rumble) * env(d, 0.4, 0.4)
def s_stop(): d = 1.8; t = tt(d); f = 60 * (1 - 0.8 * (t / d) ** 0.7); ph = 2 * np.pi * np.cumsum(f) / SR; return (np.sin(ph) * 0.1 + np.sin(2 * ph) * 0.06 + lp(noise(d), 300) * 0.1 * (1 - t / d)) * (1 - t / d) + s_pneumatic_pad(d)
def s_pneumatic_pad(d): x = np.zeros(len(tt(d))); p = s_pneumatic(); i = int(1.2 * SR); x[i:i + len(p)] += p[: len(x) - i] * 0.8; return x
def s_crane(d): t = tt(d); return (sum(np.sin(2 * np.pi * 50 * k * t) * a for k, a in [(1, 0.05), (2, 0.04), (4, 0.015)]) + bp(noise(d), 400, 2) * 0.06 * (1 + 0.3 * np.sin(2 * np.pi * 0.5 * t))) * env(d, 0.6, 0.6)
def s_room(d):
    t = tt(d); x = brown(d) * 0.08 + np.sin(2 * np.pi * 120 * t) * 0.006
    for k in range(int(d / 3)):
        c = s_metal() * 0.04; i = int(rng.random() * len(x)); x[i:i + len(c)] += c[: len(x) - i]
    return lp(x, 900) * env(d, 0.8, 0.8)
def s_clock(d, accel=False):
    out = np.zeros(len(tt(d))); tcur = 0.0; k = 0
    while tcur < d:
        f = 2600 if k % 2 == 0 else 2100
        c = (np.sin(2 * np.pi * f * tt(0.03)) * np.exp(-tt(0.03) * 200) + hp(noise(0.03), 3000) * np.exp(-tt(0.03) * 300) * 0.5) * 0.18
        i = int(tcur * SR); out[i:i + len(c)] += c[: len(out) - i]
        rate = 1.0 if not accel else 1.0 + 7.0 * (tcur / d) ** 1.6
        tcur += 1.0 / rate; k += 1
    return out
def s_keys(d):
    out = np.zeros(len(tt(d))); tcur = 0.0
    while tcur < d:
        c = s_key() * (0.6 + rng.random() * 0.5); i = int(tcur * SR); out[i:i + len(c)] += c[: len(out) - i]
        tcur += 0.06 + rng.random() * 0.12
    return out

# ---------- música ----------
def s_drone(d, level=1.0):
    t = tt(d); x = sum(saw(f * (1 + dt), t) for f in (55, 82.4, 110) for dt in (-0.003, 0.003))
    x = lp(x, 380) * 0.035 * level * (0.85 + 0.15 * np.sin(2 * np.pi * 0.07 * t))
    return x * env(d, 2.0, 1.5)
def s_pulse(d, bpm=96):
    b = 60 / bpm; t = tt(d); out = np.zeros(len(t))
    notes = [220, 261.6, 329.6, 392, 329.6, 261.6, 196, 246.9]
    nb = int(d / b)
    for i in range(nb):
        t0 = i * b
        k = np.tanh(sweep(95, 42, 0.35, 2) * np.exp(-tt(0.35) * 9) * 1.2) * 0.45
        j = int(t0 * SR); out[j:j + len(k)] += k[: len(out) - j]
        for h in (0, 0.5):  # arpejo em colcheias
            f = notes[(i * 2 + int(h * 2)) % len(notes)]; tn = tt(0.22)
            p = (saw(f, tn) * 0.5 + np.sin(2 * np.pi * f * tn)) * np.exp(-tn * 14) * 0.05
            j2 = int((t0 + h * b) * SR); out[j2:j2 + len(p)] += p[: len(out) - j2]
        if i % 2 == 1:
            hh = hp(noise(0.03), 7000) * np.exp(-tt(0.03) * 140) * 0.05; j3 = int((t0 + b / 2) * SR); out[j3:j3 + len(hh)] += hh[: len(out) - j3]
    bass = np.zeros(len(t))
    for bar in range(int(d / (4 * b)) + 1):
        f = [55, 43.65, 65.41, 49][bar % 4]; a = bar * 4 * b; i0, i1 = int(a * SR), min(len(t), int((a + 4 * b) * SR))
        if i0 >= len(t): break
        tl = t[i0:i1] - a; bass[i0:i1] = np.sin(2 * np.pi * f * tl) * 0.18 + np.tanh(saw(f, tl) * 1.5) * 0.05
    out += lp(bass, 300)
    return lp(out, 6000) * env(d, 0.6, 0.8)
def s_resolve(d):
    t = tt(d + 2); ch = [110, 164.8, 220, 277.2, 329.6, 440]  # Lá maior com 5ª e 9ª implícita — resolução contida
    x = sum(saw(f * (1 + dt), t) for f in ch for dt in (-0.004, 0.004)) * 0.02
    return reverb(lp(x, 1600) * env(d + 2, 1.2, 2.0), 0.3)

FN = {
    "click": lambda c: s_click(), "key": lambda c: s_key(), "tick": lambda c: s_tick(), "pen": lambda c: s_pen(), "notif": lambda c: s_notif(),
    "relay": lambda c: s_relay(), "chime": lambda c: s_chime(), "glitch": lambda c: s_glitch(), "clack": lambda c: s_clack(c.get("soft", False)),
    "metal": lambda c: s_metal(), "thump": lambda c: s_thump(), "door": lambda c: s_door(), "pneumatic": lambda c: s_pneumatic(), "ratchet": lambda c: ratchet(),
    "phone": lambda c: s_phone(), "whoosh": lambda c: s_whoosh(c.get("dur", 0.6)), "riser": lambda c: s_riser(c.get("dur", 1.0)), "sub": lambda c: s_sub(), "end": lambda c: s_end(),
    "servo": lambda c: s_servo(c.get("dur", 0.6)), "hydraulic": lambda c: s_hydraulic(c.get("dur", 1.0)), "spindleUp": lambda c: s_spindleUp(c.get("dur", 0.8), c.get("f", 210)),
    "stop": lambda c: s_stop(),
}
SPAN = {
    "spindle": lambda c, d: s_spindle(d, c.get("f", 210), c.get("clean", False)), "chips": lambda c, d: s_chips(d), "coolant": lambda c, d: s_coolant(d),
    "stepper": lambda c, d: s_stepper(d), "machine": lambda c, d: s_machine(d), "crane": lambda c, d: s_crane(d), "room": lambda c, d: s_room(d),
    "clock": lambda c, d: s_clock(d, c.get("accel", False)), "keys": lambda c, d: s_keys(d), "drone": lambda c, d: s_drone(d, c.get("level", 1.0)),
    "pulse": lambda c, d: s_pulse(d, c.get("bpm", 96)),
}
GAIN = {"room": 0.8, "machine": 0.9, "crane": 0.8, "drone": 1.0, "pulse": 0.9, "keys": 0.6, "clock": 0.7}
for c in cues:
    ty, t0 = c["type"], c["t"]
    if ty in FN: add(FN[ty](c), t0, 1.0, (rng.random() - 0.5) * 0.3 if ty in ("key", "click", "tick", "clack") else 0)
    elif ty in SPAN: d = max(0.05, c.get("until", t0 + 1) - t0); add(SPAN[ty](c, d), t0, GAIN.get(ty, 1.0))
    elif ty == "resolve": add(s_resolve(c.get("dur", 3.0)), t0)
    elif ty == "freeze": add(s_riser(0.5)[::-1] * 0.6, t0 - 0.5)
    else: print("cue desconhecido:", ty, file=sys.stderr)

mix = np.stack([L, R], 1)
# congelamento: tudo cai para quase silêncio e volta
for c in cues:
    if c["type"] == "freeze":
        a, d = c["t"], c.get("dur", 1.2); g = np.ones(N)
        i0, i1, i2 = int(a * SR), int((a + 0.06) * SR), int((a + d) * SR); i3 = int((a + d + 0.3) * SR)
        g[i0:i1] = np.linspace(1, 0.04, i1 - i0); g[i1:i2] = 0.04; g[i2:i3] = np.linspace(0.04, 1, i3 - i2)
        mix *= g[:, None]
mix = mix[: int(SR * DUR)]
mix = np.tanh(mix * 1.1); mix /= np.max(np.abs(mix)) + 1e-9; mix *= 0.89
fo = int(0.5 * SR); mix[-fo:] *= np.linspace(1, 0, fo)[:, None]
with wave.open(sys.argv[3], "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mix * 32767).astype("<i2").tobytes())
print("ok", sys.argv[3])
