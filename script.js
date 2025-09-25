
(function(){
  const count = 60;
  for(let i=0;i<count;i++){
    const div = document.createElement('div');
    div.className = 'particle';
    const size = Math.random()*6 + 2;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.left = Math.random()*100 + 'vw';
    div.style.top = Math.random()*100 + 'vh';
    div.style.background = 'radial-gradient(circle, rgba(255,255,255,'+ (0.2+Math.random()*0.8) +') 0%, rgba(255,255,255,0) 60%)';
    div.style.opacity = 0.6*Math.random();
    div.style.borderRadius = '50%';
    div.style.position = 'fixed';
    div.style.pointerEvents = 'none';
    div.style.zIndex = -5;
    const dur = 10 + Math.random()*30;
    div.style.animation = 'float ' + dur + 's linear infinite';
    document.body.appendChild(div);
  }
})();
function revealOnScroll(){
  const cards = document.querySelectorAll('.card');
  const windowH = window.innerHeight;
  cards.forEach((c, idx)=>{
    const top = c.getBoundingClientRect().top;
    if(top < windowH - 100){
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
      c.style.transitionDelay = (idx*80) + 'ms';
    } else {
      c.style.opacity = 0;
      c.style.transform = 'translateY(40px)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', ()=>{
  document.getElementById('openBtn').addEventListener('click', ()=>{
    document.getElementById('content').classList.remove('hidden');
    window.scrollTo({top: document.getElementById('content').offsetTop - 20, behavior:'smooth'});
    revealOnScroll();
  });
  document.getElementById('topBtn').addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  document.getElementById('content').classList.add('hidden');
  revealOnScroll();
});
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'});
      el.style.boxShadow = '0 30px 100px rgba(124,58,237,0.18)';
      setTimeout(()=> el.style.boxShadow = '', 1200);
    }
  });
});
