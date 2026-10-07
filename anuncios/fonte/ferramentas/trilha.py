# Gera a trilha de um anúncio a partir dos cues (JSON) — tudo sintetizado, 120 bpm.
# uso: python3 trilha.py cues.json duracao saida.wav
import json, sys, wave
import numpy as np

SR = 48000
cues = json.load(open(sys.argv[1]))
DUR = float(sys.argv[2])
N = int(SR * (DUR + 0.5))
L = np.zeros(N); Rr = np.zeros(N)
rng = np.random.default_rng(7)
BEAT = 0.5

def lowpass(x, fc):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    return np.fft.irfft(X / np.sqrt(1 + (f / fc) ** 4), len(x))
def highpass(x, fc):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    return np.fft.irfft(X * (1 - 1 / np.sqrt(1 + (f / fc) ** 4)), len(x))
def add(sig, t, gain=1.0, pan=0.0):
    i = int(t * SR)
    if i >= N: return
    sig = sig[: N - i]
    L[i:i + len(sig)] += sig * gain * np.sqrt(0.5 * (1 - pan)) * 1.41
    Rr[i:i + len(sig)] += sig * gain * np.sqrt(0.5 * (1 + pan)) * 1.41
def tt(d): return np.arange(int(d * SR)) / SR
def sweep(f0, f1, d, curve=3.0):
    t = tt(d); f = f1 + (f0 - f1) * np.exp(-t * curve / d * 3)
    return np.sin(2 * np.pi * np.cumsum(f) / SR)
def saw(f, t):
    return 2 * ((f * t) % 1) - 1
REV = None
def reverb(x, wet=0.25):
    global REV
    if REV is None:
        REV = lowpass(rng.standard_normal(int(SR * 1.8)), 2200) * np.exp(-tt(1.8) * 3.5)
        REV /= np.sqrt(np.sum(REV ** 2))
    y = np.fft.irfft(np.fft.rfft(x, len(x) + len(REV)) * np.fft.rfft(REV, len(x) + len(REV)))
    out = np.zeros(len(y)); out[: len(x)] += x; return out + y * wet

def kick(g=1.0):
    t = tt(0.45); s = sweep(160, 42, 0.45, 2.2) * np.exp(-t * 7)
    click = lowpass(rng.standard_normal(len(t)), 4000) * np.exp(-t * 120) * 0.4
    return np.tanh((s + click) * 1.6) * g
def impact(big=False, glitch=False):
    d = 2.2 if big else 1.4; t = tt(d)
    boom = sweep(130, 32, d, 1.4) * np.exp(-t * (2.2 if big else 3.5))
    nz = lowpass(rng.standard_normal(len(t)), 2500) * np.exp(-t * 9) * 0.6
    hit = np.tanh((boom * 1.4 + nz) * 1.5)
    if glitch:
        sq = np.sign(np.sin(2 * np.pi * np.where(t < 0.3, 220 * (1 + (np.floor(t * 40) % 4)), 0) * t)) * np.exp(-t * 10) * 0.25
        hit = hit + sq
    return reverb(hit, 0.35 if big else 0.22) * (1.0 if big else 0.8)
def whoosh(d=0.6):
    t = tt(d); env = np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2
    return highpass(lowpass(rng.standard_normal(len(t)), 3500), 300) * env * 0.5
def riser(d):
    t = tt(d); s = np.sin(2 * np.pi * np.cumsum(np.linspace(180, 1400, len(t))) / SR) * (t / d) ** 2 * 0.25
    n = highpass(rng.standard_normal(len(t)), 2000) * (t / d) ** 3 * 0.35
    return s + n
def tick(p):
    t = tt(0.05); return np.sin(2 * np.pi * (700 + p * 55) * t) * np.exp(-t * 90) * 0.5
def key():
    t = tt(0.025); return highpass(rng.standard_normal(len(t)), 2500) * np.exp(-t * 300) * 0.35
def blip():
    t = tt(0.07); return np.sign(np.sin(2 * np.pi * 1320 * t)) * np.exp(-t * 60) * 0.12
def zap():
    t = tt(0.35); return sweep(2600, 180, 0.35, 1.5) * np.exp(-t * 6) * 0.35

pads = [c for c in cues if c["type"] == "pad"]
drop = next((c["t"] for c in cues if c["type"] == "drop"), None)
end = next((c["t"] for c in cues if c["type"] == "end"), DUR)

# pad sombrio (Lá menor) antes do drop
for c in pads:
    d = c["until"] + 1.2 - c["t"]; t = tt(d)
    sig = sum(saw(f * (1 + dt), t) for f in (55, 110, 130.81, 164.81) for dt in (-0.004, 0.004))
    sig = lowpass(sig, 600) * np.minimum(1, t / 0.8) * np.clip((c["until"] + 1.2 - c["t"] - t) / 1.2, 0, 1) * 0.06
    add(sig, c["t"], 1.0)

# groove a partir do drop
if drop is not None:
    prog = [55.0, 43.65, 65.41, 49.0]  # Lá, Fá, Dó, Sol
    nb = int((DUR - drop) / BEAT)
    duck = np.ones(N)
    for b in range(nb):
        t0 = drop + b * BEAT
        late = t0 >= end
        add(kick(0.9 if not late else 0.6), t0)
        i = int(t0 * SR); dl = int(0.22 * SR)
        if i < N: duck[i:i + dl] = np.minimum(duck[i:i + dl], np.linspace(0.15, 1, min(dl, N - i)))
        if not late:
            hh = highpass(rng.standard_normal(int(0.04 * SR)), 7000) * np.exp(-tt(0.04) * 120) * 0.18
            add(hh, t0 + BEAT / 2, 1, 0.3)
            add(hh * 0.5, t0 + BEAT / 4, 1, -0.3); add(hh * 0.5, t0 + 3 * BEAT / 4, 1, -0.3)
            if b % 2 == 1:
                cl = reverb(highpass(rng.standard_normal(int(0.12 * SR)), 1200) * np.exp(-tt(0.12) * 35) * 0.35, 0.3)
                add(cl, t0)
    # baixo
    t = np.arange(N) / SR
    bass = np.zeros(N)
    for bar in range(int((DUR - drop) / 2) + 1):
        a = drop + bar * 2; i0, i1 = int(a * SR), min(N, int((a + 2) * SR))
        if i0 >= N: break
        f = prog[bar % 4]; tl = t[i0:i1] - a
        bass[i0:i1] = (np.tanh(saw(f, tl) * 2) * 0.6 + np.sin(2 * np.pi * f * tl) * 0.8)
    bass = lowpass(bass, 380) * 0.22 * duck
    fade = np.clip((t - drop) / 0.05, 0, 1)
    L += bass * fade; Rr += bass * fade

for c in cues:
    ty = c["type"]; t0 = c["t"]
    if ty == "impact": add(impact(c.get("big", False), c.get("glitch", False)), t0)
    elif ty == "end": add(impact(True), t0, 1.1)
    elif ty == "whoosh": add(whoosh(0.6), t0 - 0.1, 0.9, -0.4)
    elif ty == "swoosh": add(whoosh(0.3), t0 - 0.05, 0.6, 0.4 if int(t0 * 4) % 2 else -0.4)
    elif ty == "riser": add(riser(c.get("dur", 0.6)), t0)
    elif ty == "tick": add(tick(c.get("pitch", 1)), t0)
    elif ty == "key": add(key(), t0, 1, (rng.random() - 0.5) * 0.4)
    elif ty == "blip": add(blip(), t0, 1, (rng.random() - 0.5) * 0.6)
    elif ty == "zap": add(zap(), t0, 1, 0.2)
    elif ty == "drop": add(impact(True), t0, 0.9)

mix = np.stack([L, Rr], 1)[: int(SR * DUR)]
mix = np.tanh(mix * 0.9)
mix /= np.max(np.abs(mix)) + 1e-9
mix *= 0.89
fo = int(0.6 * SR); mix[-fo:] *= np.linspace(1, 0, fo)[:, None]
with wave.open(sys.argv[3], "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((mix * 32767).astype("<i2").tobytes())
print("ok", sys.argv[3])
