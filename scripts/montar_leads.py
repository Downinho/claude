"""Monta leads/leads.json a partir da pesquisa (busca web, 06/10/2026).
Dados vêm de títulos e resumos de busca: confirmar no perfil antes de abordar."""
import csv, json, re, unicodedata, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

def slug(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

# (prioridade, especialidade, nome, @, bairro, seguidores, registro, chips, destaques, site, obs)
P = [
 # Advocacia
 ('A','trabalhista','Jonas Figueiredo Advocacia','jonasfigueiredoadv','São Paulo',5756,'',['Atendimento online e presencial'],['Atuação em casos de gestantes, PJ e acidente de trabalho'],'nao encontrado',''),
 ('B','trabalhista','Advocacia Trabalhista Borges','borgesadvocacia','São Paulo',20000,'',[],['Mais de 40 anos de atuação'],'verificar','Escritório antigo, pode ter site'),
 ('B','trabalhista','Naylin Nunes Advocacia','naylinnunes','São Paulo',None,'',[],[],'nao encontrado','Confirmar área de atuação'),
 ('B','trabalhista','Alexandre Ferreira Advocacia','alexandreferreira_adv','São Paulo',None,'',[],[],'nao encontrado','Confirmar área de atuação'),
 ('A','previdenciario','Suzana de Amorim Advocacia','suzanadeamorim','São Paulo',49000,'',['Atende todo o Brasil e o exterior'],['Foco em encontrar o melhor benefício no INSS'],'nao encontrado','Atende Brasil todo = site traz cliente de fora'),
 ('A','previdenciario','Fernanda Diniz Advocacia Previdenciária','fernandadinizprev','São Paulo',None,'',['100% online','Todo o Brasil'],['16 anos de experiência em benefícios do INSS'],'nao encontrado',''),
 ('B','previdenciario','Dantas Advocacia','dantas.advocacia','São Paulo',None,'',['Brasil e exterior'],['Mais de 40 anos de história'],'verificar','Escritório antigo, pode ter site'),
 ('B','previdenciario','Elisangela Coelho Advocacia','elisangelacoelhoadvogada','São Paulo',None,'',[],[],'nao encontrado',''),
 ('B','previdenciario','Taís Santos Advocacia','taissantosadv','São Paulo',None,'',[],[],'nao encontrado',''),
 ('A','familia','Andreia Pereira Advocacia','andreiapereira.adv','São Paulo',28000,'',['Atendimento online e presencial'],['Divórcio e proteção patrimonial'],'nao encontrado',''),
 ('A','familia','Ana Ricarte Advocacia','anaricarteadvogada','São Paulo',14000,'',[],['32 anos de experiência','Divórcio consensual e empresas familiares'],'nao encontrado',''),
 ('A','familia','Barbara Ferreira Advocacia','baferreiraadv','São Paulo',7362,'',['Atende todo o Brasil'],['Divórcio, guarda, pensão e sucessões'],'nao encontrado',''),
 ('A','familia','Ligia Bertaggia Advocacia','direitodefamiliaesucessoes','São Paulo',13000,'',[],['Mais de 24 anos de advocacia em família e sucessões'],'nao encontrado',''),
 ('A','familia','Mariana Regis Advocacia','marianaregisadvogada','São Paulo',34000,'',[],['Advogada e professora','Direitos de mulheres e crianças'],'nao encontrado',''),
 ('B','familia','Mariana Diaz Advocacia','marianagdiaz','São Paulo',None,'',[],[],'nao encontrado',''),
 ('A','imobiliario','Vanessa Leite Advocacia','vanessaleite_adv','São Paulo',4621,'',[],['Especialista em direito imobiliário'],'nao encontrado',''),
 ('A','consumidor','Caio De Luccas Advocacia','caiodeluccas.adv','São Paulo',12000,'',[],['Especialista em defesa do consumidor'],'nao encontrado',''),
 ('A','consumidor','Victor Tosta Advocacia','advvictortosta','São Paulo',6244,'',[],['Advogado do consumidor'],'nao encontrado',''),
 ('B','bancario','Jéssica Abreu Advocacia','jessicaabreuadv','São Paulo',71000,'',[],['Especialista em direito bancário'],'verificar','Perfil grande, pode ter site'),
 # Medicina
 ('A','dermatologia','Dra. Carmem Durazzo','carmemdermatologista','São Paulo',None,'CRM 59801 · RQE 45813',[],['Rugas, flacidez, manchas, queda de cabelo e estrias'],'nao encontrado',''),
 ('B','dermatologia','Dra. Sarah Brasil','sarahbrasildermato','São Paulo',None,'RQE 5241',[],['Lasers, tecnologias e injetáveis'],'nao encontrado','Confirmar cidade e CRM'),
 ('B','dermatologia','Dra. Maria Bussade','mariabussade','São Paulo',None,'CRM-SP 118.804 · RQE 39.393',[],[],'verificar',''),
 ('B','dermatologia','Clínica Derma A','dermaaclinica','São Paulo',None,'',[],[],'verificar','Confirmar responsável técnico'),
 ('B','dermatologia','Dermic Dermatologia Integrada','clinicadermic','São Paulo',None,'',[],[],'verificar',''),
 ('A','cardiologia','Dr. Lucas Trindade','drlucastrindade','Itaim Bibi',None,'CRM-SP 168.448',['Consultório no Itaim Bibi'],[],'nao encontrado',''),
 ('A','endocrinologia','Dra. Paula Pires Giacomini','drapaulapires','São Paulo',None,'CRM 138809 · RQE 47818',['Formação USP'],[],'nao encontrado',''),
 ('B','ortopedia','Dr. Rafael Carboni','drrafaelcarboni','São Paulo',None,'',[],['Cirurgia de coluna'],'verificar',''),
 # Nutrição
 ('A','nutricao','Tainá Carvalho Nutricionista','nutricionistaesportivo_taina','São Paulo',None,'CRN 34890',['Formação USP'],['Emagrecimento, hipertrofia e nutrição esportiva'],'nao encontrado',''),
 ('A','nutricao','Paula Paraíso Nutricionista','nutripaulaparaiso','São Paulo',None,'',['Consultório e online'],['Mais de 20 anos de experiência'],'nao encontrado',''),
 ('A','nutricao','Patricia Davidson Nutricionista','patriciadavidson.nutri','São Paulo',None,'',[],['Mais de 20 anos de experiência','Foco em emagrecimento feminino'],'nao encontrado',''),
 ('B','nutricao','Isabella Lacerda Nutricionista','isabellalacerda_nutri','São Paulo',None,'',[],[],'verificar','Vende programa online, pode ter página'),
 ('B','nutricao','Gabi Gavioli Nutricionista','gabigaviolinutri','São Paulo',None,'',[],[],'nao encontrado',''),
 ('A','nutricao_infantil','Paula Stancari Nutrição Materno-Infantil','nutripaulastancari','Vila Mariana',None,'',['Consultório na Vila Mariana'],[],'nao encontrado','Endereço: R. Cubatão, 929'),
 ('A','nutricao_infantil','Luana Faustino Nutricionista Infantil','nutriluanafaustino','Tatuapé',None,'',['Consultório no Tatuapé'],[],'wix gratuito','Tem site Wix com domínio grátis: vender upgrade'),
 ('A','nutricao','Thais Pereira Nutrição Esportiva','thaispereiranutri','Mooca',None,'',['Consultório na Mooca'],['Nutrição sistêmica e esportiva','Faixa preta de taekwondo'],'nao encontrado',''),
 ('B','nutricao_infantil','Ninho Espaço Materno Infantil','espaco.ninho','São Paulo',None,'',[],[],'verificar',''),
 # Psicologia
 ('A','psicologia','Psicologia Clínica Tatuapé','psicotatuape','Tatuapé',None,'',['Presencial e online'],['Abordagem psicanalítica','Crianças, jovens e adultos'],'nao encontrado',''),
 ('A','psicologia','Beatriz Sampaio Arraes Psicóloga','psicologadeplantao','São Paulo',None,'CRP 06/145121',['Atendimento online'],['Ansiedade e depressão'],'nao encontrado',''),
 ('A','psicologia','Clínica Internaliza Psicologia','internalizapsicologia','São Paulo',None,'CRP 06/11127/J',['Presencial e online'],[],'nao encontrado',''),
 # Odontologia
 ('A','odontologia','Prez Odonto Tatuapé','prezodonto','Tatuapé',10000,'',[],['Lentes, implantes, alinhadores e odontopediatria'],'nao encontrado',''),
 ('A','odontologia','Odonto8 Tatuapé','odonto8.tatuape','Tatuapé',7116,'CRO-CL 17739',[],['Responsável: Profa. Dra. Mayra Quitero (CRO 95220)'],'nao encontrado',''),
 ('B','odontologia','Dentecare Ipiranga','dentecare.ipiranga','Ipiranga',573,'CRO 112844 (RT)',[],[],'nao encontrado','Perfil pequeno'),
 ('B','odontologia','Pandola Odontologia','pandolaodontologia','São Paulo',None,'',[],[],'verificar',''),
 # Quiropraxia / fisio
 ('A','quiropraxia','SPQuiro Clínica de Quiropraxia','sp.quiro','Zona Norte',None,'',[],[],'nao encontrado','Endereço: R. Maria Amália Lopes de Azevedo, 250, sala 02'),
 ('B','quiropraxia','Carlos Diaz Quiropraxia','carlosdiaz_quiropraxia','Santana',None,'',[],[],'nao encontrado','Atende na Provital Santana'),
 ('B','quiropraxia','Gabriela Ferreira Fisioterapia','gferreira_fisio','São Paulo',None,'',[],['Drenagem e terapia manual'],'nao encontrado',''),
]

CAT = {'trabalhista':'Advogado','previdenciario':'Advogado','familia':'Advogado','imobiliario':'Advogado','consumidor':'Advogado','bancario':'Advogado',
       'dermatologia':'Médico','cardiologia':'Médico','endocrinologia':'Médico','ortopedia':'Médico','nutricao':'Nutricionista','nutricao_infantil':'Nutricionista',
       'psicologia':'Psicólogo','odontologia':'Dentista','quiropraxia':'Quiropraxia/Fisio'}
ENDERECOS = {'nutripaulastancari':'R. Cubatão, 929 - Vila Mariana, São Paulo','sp.quiro':'R. Maria Amália Lopes de Azevedo, 250 - São Paulo'}

leads = []
for pr, esp, nome, ig, bairro, seg, reg, chips, dest, site, obs in P:
    leads.append(dict(slug=slug(ig), prioridade=pr, tipo='profissional', categoria=CAT[esp], especialidade=esp, nome=nome,
        instagram='@'+ig, bairro=bairro, cidade='São Paulo', endereco=ENDERECOS.get(ig,''), seguidores=seg, registro=reg,
        chips=chips, destaques=dest, site=site, observacao=obs))

# Negócios locais prioridade A do mapeamento anterior
NICHO_LABEL = {'barbearia':'Barbearia','salao':'Salão de beleza','pet':'Pet shop','lash':'Cílios/sobrancelhas','unhas':'Unhas','estetica':'Clínica de estética',
  'hamburgueria':'Hamburgueria','pizzaria':'Pizzaria','confeitaria':'Confeitaria','marcenaria':'Marcenaria','estetica_auto':'Estética automotiva','pilates':'Pilates/funcional'}
for r in csv.DictReader(open(ROOT/'prospects/mapeamento-sp.csv', encoding='utf-8')):
    if r['prioridade'] != 'A': continue
    ig = r['instagram'].lstrip('@')
    end = r['bairro_endereco']
    tem_end = any(ch.isdigit() for ch in end)
    bairro = end.split(' - ')[-1] if tem_end else end
    leads.append(dict(slug=slug(ig), prioridade='B' if r['site_proprio']=='verificar' else 'A', tipo='local', categoria=NICHO_LABEL[r['nicho']],
        nicho=r['nicho'], nome=r['nome'], instagram='@'+ig, bairro=bairro, cidade='São Paulo',
        endereco=(end + ', São Paulo') if tem_end else '', seguidores=int(r['seguidores']) if r['seguidores'] else None, registro='',
        chips=[], destaques=[x.strip() for x in r['o_que_o_perfil_mostra'].split(';') if x.strip()][:3] or None,
        site=r['site_proprio'], observacao=r['observacao']))

json.dump(leads, open(ROOT/'leads/leads.json','w',encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(leads), 'leads |', sum(l['tipo']=='profissional' for l in leads), 'profissionais |', sum(l['prioridade']=='A' for l in leads), 'prioridade A')
