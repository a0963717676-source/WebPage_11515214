(() => {
 const button=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.nav');
 if(!button||!nav)return;
 const close=()=>{button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','開啟選單');nav.classList.remove('is-open');};
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'關閉選單':'開啟選單');nav.classList.toggle('is-open',open);});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 window.addEventListener('resize',()=>{if(innerWidth>580)close();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
})();
