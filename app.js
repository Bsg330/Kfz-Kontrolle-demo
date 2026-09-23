const AREAS=[
'Ablagefächer an den vorderen Türen, Sonnenblenden, Handschuhfach',
'Ablagefächer an den hinteren Türen, Sitztaschen, Raum unter den Sitzen und Fußräume',
'Kofferraum, Gepäck- und Laderäume',
'Radkästen',
'Motorraum',
'Sonstige Bereiche'
];
let history=[],pos=-1;
const cards=document.querySelector('#cards'), back=document.querySelector('#back'), forward=document.querySelector('#forward');
function randomSelection(){const a=[...AREAS];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a.slice(0,3)}
function render(sel){cards.innerHTML=sel.map(d=>`<article class="card"><div class="desc">${d}</div></article>`).join('');back.disabled=pos<=0;forward.disabled=pos>=history.length-1}
function fresh(){if(pos<history.length-1)history=history.slice(0,pos+1);history.push(randomSelection());pos++;render(history[pos])}
document.querySelector('#next').onclick=fresh;back.onclick=()=>{if(pos>0){pos--;render(history[pos])}};forward.onclick=()=>{if(pos<history.length-1){pos++;render(history[pos])}};
fresh(); if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
