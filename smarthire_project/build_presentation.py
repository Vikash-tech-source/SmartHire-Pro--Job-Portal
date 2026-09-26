from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import landscape
from reportlab.lib import colors
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.lib.utils import ImageReader
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import textwrap, math

ROOT=Path('/mnt/data/smarthire_project')
PRES=ROOT/'presentation'; PRES.mkdir(exist_ok=True)
PDF=PRES/'SmartHire_Project_Presentation.pdf'
W,H=(13.333*72,7.5*72)  # 16:9

font_reg='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
font_bold='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
pdfmetrics.registerFont(TTFont('DV',font_reg)); pdfmetrics.registerFont(TTFont('DVB',font_bold))

# helper to create UI mockups
f_reg=ImageFont.truetype(font_reg,16); f_small=ImageFont.truetype(font_reg,12); f_bold=ImageFont.truetype(font_bold,20); f_huge=ImageFont.truetype(font_bold,34)
def rr(d,box,r,fill,outline=None,width=1): d.rounded_rectangle(box,radius=r,fill=fill,outline=outline,width=width)
def rrc(c,x1,y1,x2,y2,r,fill,stroke=None,width=1):
    c.setFillColor(fill); c.roundRect(x1,y1,x2-x1,y2-y1,r,fill=1,stroke=0)
    if stroke is not None:
        c.setStrokeColor(stroke); c.setLineWidth(width); c.roundRect(x1,y1,x2-x1,y2-y1,r,fill=0,stroke=1)

def make_dashboard(path):
    im=Image.new('RGB',(1360,760),'#f6f7fb'); d=ImageDraw.Draw(im)
    rr(d,(0,0,205,760),0,'#10182b'); d.text((25,28),'S',font=f_bold,fill='white'); d.text((60,28),'SmartHire',font=f_bold,fill='white'); d.text((60,54),'Career Navigator',font=f_small,fill='#8290aa')
    items=['Dashboard','Find Jobs','Saved Jobs','Applications','My Profile']
    for i,t in enumerate(items):
        y=120+i*52
        if i==0: rr(d,(15,y-10,190,y+32),10,'#1d2943')
        d.text((34,y),['⌂','⌕','♡','✓','◉'][i],font=f_small,fill='#aeb9ce'); d.text((65,y),t,font=f_small,fill='white' if i==0 else '#9eabc2')
    d.text((240,28),'GOOD EVENING, VIKASH',font=f_small,fill='#7c6cff')
    d.text((240,55),'Build your next career move.',font=f_huge,fill='#182033')
    d.text((240,100),'Discover jobs matched to your skills, education and preferred location.',font=f_small,fill='#7b8698')
    rr(d,(240,142,815,190),12,'#ffffff','#e3e6ef'); d.text((258,157),'Search job title, skill or company',font=f_small,fill='#9aa3b2'); rr(d,(690,148,807,184),9,'#6f62ff'); d.text((710,159),'Search Jobs',font=f_small,fill='white')
    rr(d,(850,32,1318,218),22,'#2b285a'); rr(d,(1125,72,1268,166),14,'#ffffff'); d.text((1142,88),'Profile Match',font=f_small,fill='#7a8496'); d.text((1142,120),'86%',font=f_huge,fill='#182033'); rr(d,(1142,165,1250,171),4,'#e9ebf3'); rr(d,(1142,165,1235,171),4,'#6f62ff')
    for i,(title,val) in enumerate([('Available Jobs','1,248'),('Recommended','24'),('Applications','8')]):
        x=240+i*290; rr(d,(x,238,x+270,330),14,'#ffffff','#eceef4'); d.text((x+20,258),title,font=f_small,fill='#7b869a'); d.text((x+20,284),val,font=f_bold,fill='#182033')
    d.text((240,365),'Recommended for you',font=f_bold,fill='#182033'); d.text((240,395),'Based on your skills: HTML, CSS, JavaScript, Communication',font=f_small,fill='#7f899a')
    cards=[('Junior Web Developer','Aarsh Technologies','₹4.5 - 6 LPA','94% match'),('Customer Support Executive','Concentrix','₹3.2 - 4.2 LPA','90% match'),('IT Support Intern','TechNova Systems','₹12,000 / month','88% match')]
    for i,(a,b,c,m) in enumerate(cards):
        x=240+i*300; rr(d,(x,430,x+280,690),14,'#ffffff','#eceef4'); rr(d,(x+18,450,x+56,488),10,['#4037b9','#1d9b85','#fb8b3d'][i]); d.text((x+67,454),b[:18],font=f_small,fill='#4c5669'); d.text((x+18,512),a[:25],font=f_bold,fill='#182033'); d.text((x+18,560),c,font=f_small,fill='#2aa573'); d.text((x+18,595),m,font=f_small,fill='#8d96a6'); rr(d,(x+175,625,x+256,656),8,'#f1efff'); d.text((x+194,635),'View',font=f_small,fill='#6255e9')
    im.save(path)

def make_jobs(path):
    im=Image.new('RGB',(1360,760),'#f6f7fb'); d=ImageDraw.Draw(im)
    rr(d,(0,0,1360,760),0,'#f6f7fb'); d.text((55,45),'Find your next job',font=f_huge,fill='#182033'); d.text((55,95),'Search, filter and compare openings in one place.',font=f_small,fill='#818ba0')
    rr(d,(55,135,690,182),10,'#fff','#e4e7ef'); d.text((75,151),'⌕   JavaScript',font=f_small,fill='#4f596c')
    for x,t in [(720,'All locations'),(890,'All job types'),(1060,'Most relevant')]: rr(d,(x,135,x+150,182),10,'#fff','#e4e7ef'); d.text((x+15,151),t,font=f_small,fill='#596477')
    for i,(title,co,loc,sal) in enumerate([('Frontend Developer','PixelCraft Labs','Remote','₹5 - 7 LPA'),('Junior Web Developer','Aarsh Technologies','Noida','₹4.5 - 6 LPA'),('IT Support Intern','TechNova Systems','Dehradun','₹12,000 / month')]):
        y=220+i*145; rr(d,(55,y,1305,y+120),14,'#fff','#eceef4'); rr(d,(78,y+22,124,y+68),10,['#2d83d4','#4037b9','#fb8b3d'][i]); d.text((140,y+23),co,font=f_small,fill='#5a6477'); d.text((140,y+51),title,font=f_bold,fill='#182033'); d.text((140,y+82),f'{loc}  •  {sal}',font=f_small,fill='#2aa573'); rr(d,(1110,y+72,1280,y+105),9,'#f1efff'); d.text((1145,y+82),'View Details',font=f_small,fill='#6255e9')
    im.save(path)

def make_workflow(path):
    im=Image.new('RGB',(1360,600),'#f7f8fc'); d=ImageDraw.Draw(im)
    d.text((50,35),'SmartHire workflow',font=f_huge,fill='#182033')
    steps=[('1','Profile','Skills + preferences'),('2','Search','Keyword + filters'),('3','Match','Relevant jobs'),('4','Apply','Resume + details'),('5','Track','Application status')]
    for i,(n,a,b) in enumerate(steps):
        x=60+i*255; rr(d,(x,150,x+210,360),18,'#fff','#e4e8f0'); rr(d,(x+70,175,x+140,245),35,'#6f62ff'); d.text((x+99,196),n,font=f_bold,fill='white'); d.text((x+55,270),a,font=f_bold,fill='#182033'); d.text((x+35,307),b,font=f_small,fill='#7e889a')
        if i<4: d.line((x+212,255,x+247,255),fill='#9ba5b8',width=4); d.polygon([(x+247,255),(x+238,248),(x+238,262)],fill='#9ba5b8')
    im.save(path)

dash=ROOT/'presentation'/'dashboard.png'; jobs=ROOT/'presentation'/'jobs.png'; flow=ROOT/'presentation'/'workflow.png'
make_dashboard(dash); make_jobs(jobs); make_workflow(flow)

c=canvas.Canvas(str(PDF),pagesize=(W,H))

def bg():
    c.setFillColor(colors.HexColor('#f6f7fb')); c.rect(0,0,W,H,fill=1,stroke=0)
def title(t,sub=None):
    c.setFillColor(colors.HexColor('#182033')); c.setFont('DVB',26); c.drawString(48,H-62,t)
    if sub: c.setFillColor(colors.HexColor('#7b8698')); c.setFont('DV',10); c.drawString(49,H-84,sub)
def footer(n):
    c.setFillColor(colors.HexColor('#a1a9b7')); c.setFont('DV',8); c.drawString(48,20,'SmartHire - Mini Project'); c.drawRightString(W-48,20,f'{n}/9')

# 1 cover
c.setFillColor(colors.HexColor('#10182b')); c.rect(0,0,W,H,fill=1,stroke=0)
c.setFillColor(colors.HexColor('#7c5cff')); c.circle(W-150,H-115,150,fill=1,stroke=0); c.setFillColor(colors.HexColor('#31c9ff')); c.circle(W-80,135,115,fill=1,stroke=0)
c.setFillColor(colors.white); c.setFont('DVB',42); c.drawString(60,H-125,'SmartHire')
c.setFont('DV',17); c.setFillColor(colors.HexColor('#cbd3e5')); c.drawString(60,H-160,'An Intelligent Job Discovery & Application Tracker')
c.setFont('DVB',16); c.setFillColor(colors.white); c.drawString(60,145,'Mini Project Presentation')
c.setFont('DV',11); c.setFillColor(colors.HexColor('#9eabc2')); c.drawString(60,120,'Presented by Vikash Kumar Mishra | B.Sc. IT | 2026')
c.setFont('DV',10); c.drawString(60,92,'Search  •  Match  •  Save  •  Apply  •  Track')
c.showPage()

#2 problem
bg(); title('1. Problem Statement','Why job seekers need a simpler workflow');
items=[('Scattered job discovery','Users search across multiple platforms and spend time comparing openings.'),('Limited personalization','Generic listings do not always reflect a candidate\'s skills and preferences.'),('Application follow-up','After applying, it can be difficult to remember status, deadlines and next steps.')]
for i,(a,b) in enumerate(items):
    y=H-155-i*120; rrc(c,55,y-55, W/2+40,y+25,15,colors.white,colors.HexColor('#e8ebf1')); c.setFillColor(colors.HexColor('#6f62ff')); c.circle(88,y-15,18,fill=1,stroke=0); c.setFillColor(colors.white); c.setFont('DVB',12); c.drawCentredString(88,y-19,str(i+1)); c.setFillColor(colors.HexColor('#182033')); c.setFont('DVB',14); c.drawString(120,y-5,a); c.setFont('DV',10); c.setFillColor(colors.HexColor('#687387')); c.drawString(120,y-28,b)
rrc(c,570, H-460, W-55,H-130,20,colors.HexColor('#10182b')); c.setFillColor(colors.HexColor('#c7d0e5')); c.setFont('DVB',14); c.drawString(595,H-170,'Project idea'); c.setFont('DV',10); c.drawString(595,H-198,'Bring job search and application'); c.drawString(595,H-218,'tracking into one simple interface.'); c.setFillColor(colors.HexColor('#6f62ff')); c.rect(595,H-275,100,4,fill=1,stroke=0); c.setFillColor(colors.HexColor('#c7d0e5')); c.drawString(595,H-305,'Use profile data to rank relevant'); c.drawString(595,H-325,'opportunities and reduce search effort.'); footer(2); c.showPage()

#3 objective
bg(); title('2. Project Objectives','What SmartHire demonstrates');
objs=['Provide a clean dashboard for job seekers','Enable fast search using keywords, skills and company names','Filter by location and employment type','Recommend jobs using profile/skill matching','Allow users to save and review job details','Provide a simple application tracker','Show candidate profile and career preferences']
for i,o in enumerate(objs):
    x=58+(i%2)*440; y=H-145-(i//2)*70; c.setFillColor(colors.HexColor('#6f62ff')); c.circle(x,y,6,fill=1,stroke=0); c.setFillColor(colors.HexColor('#3f4a5e')); c.setFont('DV',11); c.drawString(x+18,y-4,o)
rrc(c,930,H-340, W-230,H-125,14,colors.white,colors.HexColor('#e7eaf0')); c.setFillColor(colors.HexColor('#182033')); c.setFont('DVB',11); c.drawString(950,H-155,'Core idea'); c.setFont('DV',10); c.setFillColor(colors.HexColor('#6f62ff')); c.drawString(950,H-180,'Profile + Jobs'); c.setFillColor(colors.HexColor('#7c8798')); c.drawString(950,H-198,'-> Recommendations'); c.setFillColor(colors.HexColor('#6f62ff')); c.drawString(950,H-220,'Search + Apply'); footer(3); c.showPage()

#4 architecture
bg(); title('3. System Design','Simple front-end architecture suitable for a mini project');
boxes=[('User Interface','HTML + CSS\nResponsive layout'),('Application Logic','JavaScript\nSearch / filters / state'),('Job Data','Local JSON-like\nstatic dataset'),('Output','Recommendations\nSaved jobs / status')]
for i,(a,b) in enumerate(boxes):
    x=45+i*225; y=H/2-40; rrc(c,x,y,x+190,y+125,17,colors.white,colors.HexColor('#e4e8ef')); c.setFillColor(colors.HexColor('#6f62ff')); c.setFont('DVB',14); c.drawCentredString(x+95,y+88,a); c.setFillColor(colors.HexColor('#718095')); c.setFont('DV',10); c.drawCentredString(x+95,y+58,b.split('\n')[0]); c.drawCentredString(x+95,y+40,b.split('\n')[1]);
    if i<3: c.setStrokeColor(colors.HexColor('#a3adbd')); c.setLineWidth(2); c.line(x+190,y+62,x+218,y+62); c.setFillColor(colors.HexColor('#a3adbd')); c.circle(x+218,y+62,4,fill=1,stroke=0)
footer(4); c.showPage()

#5 workflow image
bg(); title('4. User Workflow','End-to-end journey inside the prototype'); c.drawImage(str(flow),45,95,width=W-90,height=H-165,preserveAspectRatio=True,mask='auto'); footer(5); c.showPage()

#6 UI dashboard
bg(); title('5. User Interface - Dashboard','Personalized starting point with profile match and recommendations'); c.drawImage(str(dash),42,45,width=W-84,height=H-125,preserveAspectRatio=True,mask='auto'); footer(6); c.showPage()

#7 UI jobs
bg(); title('6. User Interface - Job Search','Search, filters, salary visibility and quick actions'); c.drawImage(str(jobs),42,45,width=W-84,height=H-125,preserveAspectRatio=True,mask='auto'); footer(7); c.showPage()

#8 modules + future
bg(); title('7. Modules & Future Scope');
mods=[('Job Search','Keyword search, location/type filters, sorting'),('Job Details','Responsibilities, qualifications, benefits'),('Saved Jobs','Shortlist high-interest opportunities'),('Applications','Track applied, review, interview and selection stages'),('Profile','Skills, education and preferences'),('Recommendation Engine','Match score based on candidate profile')]
for i,(a,b) in enumerate(mods):
    x=55+(i%2)*300; y=H-145-(i//2)*100; rrc(c,x,y-48,x+270,y+18,13,colors.white,colors.HexColor('#e7eaf0')); c.setFillColor(colors.HexColor('#6f62ff')); c.setFont('DVB',11); c.drawString(x+15,y-10,a); c.setFont('DV',8); c.setFillColor(colors.HexColor('#718095')); c.drawString(x+15,y-30,b[:40])
rrc(c,675,105, W-35,330,18,colors.HexColor('#10182b')); c.setFillColor(colors.white); c.setFont('DVB',13); c.drawString(700,305,'Future Scope'); c.setFont('DV',10); c.setFillColor(colors.HexColor('#cbd3e5')); fs=['Real-time job APIs','Login + database storage','Resume parsing','Smarter ML recommendations','Email / notification alerts'];
for i,s in enumerate(fs): c.setFillColor(colors.HexColor('#7c5cff')); c.circle(707,278-i*30,4,fill=1,stroke=0); c.setFillColor(colors.HexColor('#cbd3e5')); c.drawString(722,274-i*30,s)
footer(8); c.showPage()

#9 conclusion
c.setFillColor(colors.HexColor('#10182b')); c.rect(0,0,W,H,fill=1,stroke=0)
c.setFillColor(colors.white); c.setFont('DVB',32); c.drawString(58,H-105,'Conclusion')
c.setFont('DV',14); c.setFillColor(colors.HexColor('#cbd3e5')); c.drawString(58,H-145,'SmartHire combines the most important steps of the job-search journey')
c.drawString(58,H-170,'into one focused experience: discover, compare, save, apply and track.')
for i,(n,t) in enumerate([('01','Simple'),('02','Personalized'),('03','Trackable')]):
    x=70+i*250; rrc(c,x,170,x+210,315,17,colors.HexColor('#18233b')); c.setFillColor(colors.HexColor('#7c5cff')); c.setFont('DVB',24); c.drawString(x+20,275,n); c.setFillColor(colors.white); c.setFont('DVB',16); c.drawString(x+20,238,t)
c.setFillColor(colors.HexColor('#8f9bb0')); c.setFont('DV',10); c.drawString(58,80,'Thank You'); c.drawRightString(W-58,80,'SmartHire Mini Project | 2026')
c.showPage(); c.save()
print(PDF)
