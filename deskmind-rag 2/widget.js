/* Embed: <script src="widget.js" data-biz="hospital"></script> */
(function(){var s=document.currentScript,biz=s.getAttribute('data-biz')||'hospital',base=s.src.replace(/widget\.js.*$/,''),tip=s.getAttribute('data-tip')||'Chat with us';
var c1=s.getAttribute('data-color1')||'#4285f4',c2=s.getAttribute('data-color2')||'#8b5cf6',nm=s.getAttribute('data-name')||'AI Assistant',ic=s.getAttribute('data-icon')||'';
var st=document.createElement('style');st.textContent='#dm-b{position:fixed;right:20px;bottom:20px;width:56px;height:56px;border-radius:50%;border:0;cursor:pointer;background:linear-gradient(135deg,'+c1+','+c2+');box-shadow:0 10px 26px rgba(0,0,0,.28);z-index:99999;display:grid;place-items:center;transition:.2s}#dm-b:hover{transform:scale(1.06)}#dm-b svg{width:25px;height:25px}#dm-b img{width:28px;height:28px;border-radius:50%;object-fit:cover}'+
'#dm-t{position:fixed;right:84px;bottom:30px;background:#fff;color:#0f1222;font:500 13.5px Poppins,system-ui,sans-serif;padding:11px 18px 11px 16px;border-radius:14px;box-shadow:0 8px 24px rgba(15,18,34,.14);z-index:99998;display:flex;align-items:center;gap:8px;border:1px solid rgba(15,18,34,.06)}'+'#dm-t i{width:7px;height:7px;border-radius:50%;background:'+c1+';flex-shrink:0}'+'#dm-t:after{content:"";position:absolute;right:-5px;top:50%;transform:translateY(-50%) rotate(45deg);width:10px;height:10px;background:#fff;border-right:1px solid rgba(15,18,34,.06);border-bottom:1px solid rgba(15,18,34,.06)}'+
'#dm-p{position:fixed;right:20px;bottom:86px;width:346px;height:min(520px,calc(100vh - 116px));border-radius:20px;overflow:hidden;box-shadow:0 18px 50px rgba(20,20,60,.28);z-index:99999;background:#fff;border:1px solid rgba(0,0,0,.06);opacity:0;transform:translateY(14px) scale(.97);pointer-events:none;transition:opacity .2s ease,transform .2s ease}#dm-p.on{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}#dm-p iframe{width:100%;height:100%;border:0}'+
'@media(max-width:520px){#dm-p{inset:0;right:0;bottom:0;width:auto;height:auto;border-radius:0;transform:none}#dm-p.on{transform:none}#dm-t{display:none}}';document.head.appendChild(st);
var chat='<svg viewBox="0 0 24 24" fill="#fff"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>',x='<svg viewBox="0 0 24 24" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
var b=document.createElement('button');b.id='dm-b';b.setAttribute('aria-label','Chat');b.innerHTML=ic?'<img src="'+ic+'">':chat;
var t=document.createElement('div');t.id='dm-t';t.innerHTML='<i></i><span>'+tip+'</span>';
var p=document.createElement('div');p.id='dm-p';var f;
function tog(){var on=p.classList.toggle('on');b.innerHTML=on?x:(ic?'<img src="'+ic+'">':chat);t.style.display='none';
 if(on&&!f){f=document.createElement('iframe');f.src=base+'chat.html?biz='+biz+'&embed=1&c1='+encodeURIComponent(c1)+'&c2='+encodeURIComponent(c2)+(nm?'&name='+encodeURIComponent(nm):'')+(ic?'&icon='+encodeURIComponent(ic):'');p.appendChild(f);f.onload=function(){try{f.contentWindow.document.getElementById('q').focus()}catch(e){}}}
 else if(on&&f){try{f.contentWindow.document.getElementById('q').focus()}catch(e){}}}
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&p.classList.contains('on'))tog()});
window.addEventListener('message',function(e){if(e.data==='dm-close'&&p.classList.contains('on'))tog()});
document.addEventListener('click',function(e){if(p.classList.contains('on')&&!p.contains(e.target)&&e.target!==b&&!b.contains(e.target))tog()});
b.onclick=function(e){e.stopPropagation();tog()};document.body.appendChild(p);document.body.appendChild(t);document.body.appendChild(b);
if(s.getAttribute('data-open')==='true')tog();})();
