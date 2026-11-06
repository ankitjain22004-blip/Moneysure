// Site settings. Set creditScoreUrl to a verified credit-score service page (leave '' until confirmed).
const CONFIG={creditScoreUrl:'credit-score.html'};

const WA='919313028529',$=id=>document.getElementById(id),inr=n=>'₹'+Math.round(n).toLocaleString('en-IN');
const wa=t=>'https://wa.me/'+WA+'?text='+encodeURIComponent(t);
const loans=[['Home Loan','Purchase or construct a home.'],['Loan Against Property','Raise funds against residential or commercial property.'],['Personal Loan','Unsecured funds for personal needs.'],['Business Loan','Funds to grow your business.'],['Working Capital Loan','Manage day-to-day business cash flow.'],['Project Loan','Finance project requirements.'],['Machine Loan','Purchase machinery and equipment.'],['Vehicle Loan','Finance a new or used vehicle.'],['Professional Loan','Credit for doctors, CAs and other professionals.'],['Hospital Loan','Finance for hospital and clinic needs.'],['Overdraft Limit','Flexible credit limit for business needs.'],['Mudra Loan','Government-backed scheme for small businesses.']];
$('lg').innerHTML=loans.map(l=>`<div class="card"><div class="lc"><img class="ci" src="assets/images/loans/${l[0].toLowerCase().replace(/ /g,'-')}.svg" alt="" width="48" height="48" loading="lazy"><h3>${l[0]}</h3></div><p>${l[1]} Eligibility and documents depend on the lender.</p></div>`).join('');
const banks=[
['Bank of Baroda','bankofbaroda.in'],['Axis Bank','axisbank.com'],['ICICI Bank','icicibank.com'],['HDFC Bank','hdfcbank.com'],['HDFC Ltd','hdfc.com'],['State Bank of India','sbi.co.in'],['Kotak Mahindra Bank','kotak.com'],['Yes Bank','yesbank.in'],['IDBI Bank','idbibank.in'],['Canara Bank','canarabank.com'],['Union Bank of India','unionbankofindia.co.in'],['Bank of India','bankofindia.co.in'],['Central Bank of India','centralbankofindia.co.in'],['IndusInd Bank','indusind.com'],['RBL Bank','rblbank.com'],['IDFC FIRST Bank','idfcfirstbank.com'],['Federal Bank','federalbank.co.in'],['DCB Bank','dcbbank.com'],['Standard Chartered','sc.com'],['Citibank','citibank.co.in'],['Deutsche Bank','db.com'],['UCO Bank','ucobank.com'],['SIDBI','sidbi.in'],['LIC Housing Finance','lichousing.com'],['PNB Housing Finance','pnbhousing.com']];
/* Show each partner's own website favicon as its official brand mark.
   The bank name remains visible if a website does not provide a usable icon. */
$('bg').innerHTML=banks.map(([name,domain])=>`<div class="bank-item"><div class="bank-logo"><img src="https://www.google.com/s2/favicons?domain_url=https%3A%2F%2F${domain}&amp;sz=128" alt="${name} official website logo" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.closest('.bank-logo').classList.add('logo-unavailable');this.remove()"></div><span class="bank-name">${name}</span></div>`).join('');
$('i').innerHTML=['Loans','Mutual Funds / SIP','SWP','PMS','Insurance','Other'].concat(loans.map(l=>l[0])).map(o=>`<option>${o}</option>`).join('');
document.querySelectorAll('[data-wa]').forEach(a=>{a.target='_blank';a.rel='noopener';a.href=wa('Hello MoneySure, I am interested in: '+a.dataset.wa+'.')});
$('fab').href=wa('Hello MoneySure, I would like some financial guidance.');
$('callFab').href='tel:+'+WA;
const mb=$('mb'),mn=$('menu');
function closeMenu(){mn.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Open menu');mb.textContent='☰'}
mb.onclick=()=>{const open=!mn.classList.contains('open');if(open){mn.classList.add('open');mb.setAttribute('aria-expanded','true');mb.setAttribute('aria-label','Close menu');mb.textContent='×'}else{closeMenu()}};
mn.onclick=e=>{if(e.target.closest('a'))closeMenu()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.addEventListener('click',e=>{if(!e.target.closest('header')&&mn.classList.contains('open'))closeMenu()});
window.addEventListener('resize',()=>{if(window.innerWidth>860)closeMenu()});
function link(a,b,c){const r=$(a+'r'),n=$(a);r.oninput=()=>{n.value=r.value;c()};n.oninput=()=>{r.value=n.value;c()}}
function clamp(id,lo,hi){let v=parseFloat($(id).value);return isNaN(v)?lo:Math.min(hi,Math.max(lo,v))}
function fit(cv){const d=Math.min(window.devicePixelRatio||1,3),x=cv.getContext('2d');cv.width=420*d;cv.height=300*d;x.setTransform(d,0,0,d,0,0);return x}
function donut(cv,a,b){const x=fit(cv),W=420,H=300;x.clearRect(0,0,W,H);const t=a+b,cx=W/2,cy=H/2,R=110;let s=-Math.PI/2;[[a,'#14766b'],[b,'#d4a017']].forEach(([v,c])=>{const e=s+2*Math.PI*v/t;x.beginPath();x.arc(cx,cy,R,s,e);x.lineWidth=38;x.strokeStyle=c;x.stroke();s=e});x.fillStyle=getComputedStyle(document.body).color;x.font='bold 15px Inter,system-ui,sans-serif';x.textAlign='center';x.fillText(Math.round(b/t*100)+'% returns',cx,cy+5)}
function sip(){const P=clamp('s1',500,1e6),r=clamp('s2',1,30),y=clamp('s3',1,40),i=r/1200,n=y*12,fv=P*((Math.pow(1+i,n)-1)/i)*(1+i),inv=P*n;$('so1').textContent=inr(inv);$('so2').textContent=inr(fv-inv);$('so3').textContent=inr(fv);donut($('sc'),inv,fv-inv)}
function swp(){const A=clamp('w1',1e4,1e9),W=clamp('w2',500,1e7),r=clamp('w3',1,30),y=clamp('w4',1,40),i=r/1200,n=y*12;let b=A,tot=0,pts=[A],ex=0;for(let m=1;m<=n;m++){b=b*(1+i);const w=Math.min(W,b);b-=w;tot+=w;pts.push(b);if(b<=0.5&&!ex){ex=m;for(let k=m+1;k<=n;k++)pts.push(0);break}}
$('wo1').textContent=inr(tot);$('wo2').textContent=inr(Math.max(b,0));$('wo3').textContent=ex?'Exhausted in '+Math.floor(ex/12)+'y '+ex%12+'m':'Lasts full period';
const cv=$('wc'),x=fit(cv),w=420,h=300,mx=Math.max(...pts,1);x.clearRect(0,0,w,h);x.strokeStyle='#999';x.beginPath();x.moveTo(30,10);x.lineTo(30,h-30);x.lineTo(w-10,h-30);x.stroke();x.beginPath();pts.forEach((v,k)=>{const px=30+(w-40)*k/(pts.length-1||1),py=h-30-(h-45)*v/mx;k?x.lineTo(px,py):x.moveTo(px,py)});x.lineWidth=3;x.strokeStyle='#14766b';x.stroke();x.fillStyle=getComputedStyle(document.body).color;x.font='12px Inter,system-ui,sans-serif';x.fillText(inr(mx),34,18);x.fillText('0 → '+y+' yrs',w-90,h-12)}
['s1','s2','s3'].forEach(a=>link(a,0,sip));['w1','w2','w3','w4'].forEach(a=>link(a,0,swp));sip();swp();
$('f').onsubmit=e=>{e.preventDefault();const n=$('n').value.trim(),p=$('p').value.replace(/[\s+-]/g,'').replace(/^91(?=\d{10}$)/,'');let ok=1;$('en').textContent=n.length<2?(ok=0,'Please enter your name.'):'';$('ep').textContent=!/^[6-9]\d{9}$/.test(p)?(ok=0,'Enter a valid 10-digit Indian mobile number.'):'';if(!ok)return;
const t=`Hello MoneySure, my name is ${n}. Mobile: ${p}. Interested in: ${$('i').value}.${$('m').value.trim()?' Message: '+$('m').value.trim():''}`;window.open(wa(t),'_blank','noopener');$('ok').style.display='block';$('ok').textContent='Thank you, '+n+'. WhatsApp has opened with your enquiry — please press send. If it did not open, call 9313028529.'}

$('lt').innerHTML='<option>Not sure yet</option>'+loans.map(l=>`<option>${l[0]}</option>`).join('');
function loanLink(){const v=$('lt').value;$('la').href=wa('Hello MoneySure, I need loan assistance. Loan type: '+v+'.')}
$('lt').onchange=loanLink;loanLink();
$('cs').href=CONFIG.creditScoreUrl;

/* Header shadow, active nav link, scroll reveal */
(()=>{const hd=document.querySelector('header'),on=()=>hd.classList.toggle('scrolled',scrollY>8);on();addEventListener('scroll',on,{passive:true});
if(!('IntersectionObserver' in window)){document.querySelectorAll('.rv').forEach(e=>e.classList.add('in'));return}
const links=[...document.querySelectorAll('nav a[href^="#"]:not(.btn)')],map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.remove('active'));const a=map.get(e.target.id);a&&a.classList.add('active')}}),{rootMargin:'-45% 0px -50% 0px'});
map.forEach((a,id)=>{const t=document.getElementById(id);t&&so.observe(t)});
const ro=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.grid>.card,.sec-head,.office,.banks,.team .card,.calc,.loan-cta,details').forEach(e=>{e.classList.add('rv');ro.observe(e)});
setTimeout(()=>document.querySelectorAll('.rv:not(.in)').forEach(e=>{const r=e.getBoundingClientRect();if(r.top<innerHeight)e.classList.add('in')}),1200)})();
