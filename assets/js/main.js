document.addEventListener("DOMContentLoaded",()=>{
  // Scroll reveal
  const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("is-v");obs.unobserve(x.target);}});},{threshold:.08,rootMargin:"0px 0px -20px 0px"});
  document.querySelectorAll(".rv,.stagger").forEach(el=>obs.observe(el));

  // Header scroll
  const hdr=document.querySelector(".header");
  if(hdr)window.addEventListener("scroll",()=>hdr.classList.toggle("scrolled",scrollY>30),{passive:true});

  // Mobile nav
  const btn=document.querySelector(".nav-btn"),mob=document.querySelector(".nav-m");
  if(btn&&mob){btn.addEventListener("click",()=>{btn.classList.toggle("open");mob.classList.toggle("open");document.body.style.overflow=mob.classList.contains("open")?"hidden":"";});
  mob.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{btn.classList.remove("open");mob.classList.remove("open");document.body.style.overflow="";}));}

  // Scroll top
  const st=document.querySelector(".scroll-top");
  if(st){window.addEventListener("scroll",()=>st.classList.toggle("is-v",scrollY>500),{passive:true});
  st.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));}

  // Particles
  const pc=document.querySelector(".hero__particles");
  if(pc){for(let i=0;i<30;i++){const p=document.createElement("div");p.className="hero__particle";p.style.left=Math.random()*100+"%";const s=Math.random()*3+2;p.style.width=p.style.height=s+"px";p.style.animationDuration=Math.random()*12+8+"s";p.style.animationDelay=Math.random()*12+"s";pc.appendChild(p);}}

  // Counter animation
  document.querySelectorAll("[data-count]").forEach(el=>{
    const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const t=parseInt(el.dataset.count);let c=0;const d=1200,step=t/(d/16);const timer=setInterval(()=>{c+=step;if(c>=t){c=t;clearInterval(timer);}el.textContent=Math.floor(c).toLocaleString()+(el.dataset.suffix||"");},16);cObs.unobserve(el);}});},{threshold:.5});
    cObs.observe(el);
  });

  // Typing effect for hero
  const typed=document.querySelector("[data-typed]");
  if(typed){
    const words=JSON.parse(typed.dataset.typed);
    let wi=0,ci=0,deleting=false;
    function typeLoop(){
      const word=words[wi];
      typed.textContent=word.substring(0,ci);
      if(!deleting){ci++;if(ci>word.length){deleting=true;setTimeout(typeLoop,2000);return;}}
      else{ci--;if(ci===0){deleting=false;wi=(wi+1)%words.length;}}
      setTimeout(typeLoop,deleting?40:80);
    }
    setTimeout(typeLoop,1200);
  }
});
