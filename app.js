const zico=[
 [65,'مۆهیتۆ و لیمۆ','Mojito Lime','میوەیی'],
 [69,'مانگۆ','Mango Fresh','میوەیی'],
 [66,'ئۆرجیناڵ','Classic Original','کلاسیک'],
 [60,'شیرینیا میوەیان','Fruit Candy','بێ شەکر'],
 [63,'تۆیێن ئاسای','Açaí Berry','میوەیی'],
 [55,'ئۆرجیناڵ بێ شەکر','Original Sugar Free','بێ شەکر']
];
const marketCollections={snickers:'ئەمریکا',twix:'بریتانیا',wafe:'تورکیا'};
const products=[...marketProducts.map(p=>({...p,country:marketCollections[p.id]||''})),...zico.map(([id,name,en])=>({id:String(id),name,en:'ZICO '+id+' · '+en,category:'ZICO',country:'سوید',size:'ZICO '+id,price:1500,img:'img/zico-'+id+'.webp',soldOut:id===55})),...worldProducts];
const phone='9647506405440', key='uk-market-basket-1';
const $=id=>document.getElementById(id);
const num=n=>new Intl.NumberFormat('ar-IQ').format(n);
let quantities={},category='هەمی',timer;
try{
 const saved=JSON.parse(localStorage.getItem(key))||{};
 for(const {id,soldOut} of products)if(!soldOut && Number.isInteger(saved[id]) && saved[id]>0)quantities[id]=Math.min(99,saved[id]);
}catch{}
let favorites = new Set();
try {
 const ids = JSON.parse(localStorage.getItem('uk-market-favorites'));
 if (Array.isArray(ids)) favorites = new Set(ids.filter(id=>products.some(p=>p.id===id)));
} catch {}
const slides=[[0,'Uk Market From Chra','چاڤەڕێ هەوەیە'],[2,'ZICO 65','مۆهیتۆ و لیمۆ'],[3,'ZICO 60','شیرینیا میوەیان'],[1,'ZICO 66','تاما کلاسیک']];
function showSlide(index){
 const [img,code,name]=slides[index];
 const photo=document.querySelector('.photo');
 photo.classList.toggle('storefront',img===0);
 photo.style.backgroundImage=img?'url(img/slide-'+img+'.webp)':'url(img/uk-market.webp)';
 $('heroBrand').innerHTML=(img?'ZICO ENERGY':'Uk Market From Chra')+' <em></em>';
 $('heroTitle').innerHTML=img?'تاما خۆ<br><span>هەلبژێرە.</span>':'یۆکەی مارکێت<br><span>چڕە</span>';
 $('flavor').textContent=img?code+' · '+name:name;
 [...$('dots').children].forEach((b,i)=>{b.classList.toggle('on',index===i);b.setAttribute('aria-pressed',index===i)});
}
slides.forEach((s,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',s[1]);b.onclick=()=>showSlide(i);$('dots').append(b)});showSlide(0);
function normalize(text){
 return text.toLowerCase().normalize('NFKC').replace(/[يى]/g,'ی').replace(/ك/g,'ک').replace(/[٠-٩]/g,c=>String(c.charCodeAt(0)-1632)).replace(/[-·]/g,' ').replace(/\s+/g,' ').trim();
}

const countryCodes={'بریتانیا':'GB','ئەمریکا':'US','یابان':'JP','ئەلمانیا':'DE','کۆریا':'KR','ڕووسیا':'RU','سوید':'SE','کوردستان':'KRD','عیراق':'IQ','تورکیا':'TR','سعودیە':'SA'};
for(const country of Object.keys(countryCodes)){
 const option=document.createElement('option');
 option.value=country;option.textContent=country;$('country').append(option);
}
let pageSize=24;
function restartCatalog(){pageSize=24;renderCatalog()}
$('more').onclick=()=>{pageSize+=24;renderCatalog()};
$('country').onchange=()=>{
 category='هەمی';
 for(const b of $('filters').children)b.classList.toggle('active',b.textContent===category);
 restartCatalog();
};
$('special').onsubmit=e=>{
 e.preventDefault();
 const name=$('specialName').value.trim();
 if(name)window.open('https://wa.me/'+phone+'?text='+encodeURIComponent('سلاڤ یۆکەی مارکێت چڕە، نرخ و بەردەستبوونا ڤی بەرهەمی دڤێت: '+name),'_blank','noopener');
};
function basketAmount(){
 const known=chosen().some(p=>p.price!=null);
 const unknown=chosen().some(p=>p.price==null);
 if(!known&&unknown)return 'نرخ ب واتساپێ';
 return num(total())+' د.ع'+(unknown?' + نرخێن چاوەڕوان':'');
}

function renderCatalog(){
 const search=normalize($('query').value);
 const list=products.filter(p=>(category==='هەمی'||p.category===category||(category==='دلخواز'&&favorites.has(p.id)))&&(!$('country').value||p.country===$('country').value)&&search.split(' ').every(word=>normalize([p.name,p.en,p.size,p.id,p.country].join(' ')).includes(word)));
 if($('sort').value) list.sort((a,b)=>Number(a.price==null)-Number(b.price==null)||($('sort').value==='low'?a.price-b.price:b.price-a.price));
 $('matches').textContent=num(list.length)+' بەرهەم';
 $('more').hidden=list.length<=pageSize;
 $('cards').innerHTML=list.slice(0,pageSize).map(({id,name,en,size,price,img,url,city,country,soldOut})=>`<article class="card"><div class="pic ${id.startsWith('world-')||id.startsWith('imp-')||url?'packshot':''}"><button class="photoButton" data-view="${id}" aria-label="وێنە و زانیاری · ${name}"><img loading="lazy" src="${img}" alt="${en}"></button><button class="fav" data-fav="${id}" aria-label="دلخواز · ${name}" aria-pressed="${favorites.has(id)}">${favorites.has(id)?'♥':'♡'}</button>${size?`<span class="sku" dir="ltr">${size}</span>`:''}</div><div class="details"><h3>${name}</h3><span class="eng" dir="ltr">${en}</span><div class="price"><span>${soldOut?'نە بەردەستە':price==null?'نرخ ب واتساپێ':num(price)+' د.ع'}</span><button class="add" data-id="${id}" aria-label="زێدەکرنا ${name}" ${soldOut?'disabled':''}>+</button></div>${url?`<a class="source" href="${url}" target="_blank" rel="noopener">نرخێ بازارێ ${city} · Lezzoo</a>`:price==null?`<small class="source">${country} · لسەر داخواز</small>`:'<small class="source">کاتەلۆگا ZICO</small>'}</div></article>`).join('')||'<p>چ بەرهەم نەهاتنە دیتن.</p>';
}
['هەمی','ڤەخوارن','شیرینی','ZICO','جیهانی','دلخواز' ].forEach(label=>{const b=document.createElement('button');b.textContent=label;b.classList.toggle('active',label===category);b.onclick=()=>{category=label;[...$('filters').children].forEach(x=>x.classList.toggle('active',x===b));restartCatalog()};$('filters').append(b)});
function chosen(){return products.filter(({id})=>quantities[id]>0)}
function updateMessage(){
 const lines=chosen().map(({id,name,en,size,price})=>`${en} · ${name} ${size?' ('+size+')':''} × ${num(quantities[id])} = ${price==null?'نرخ و بەردەستبوون؟':num(quantities[id]*price)+' د.ع'}`);
 const message=['سلاڤ یۆکەی مارکێت چڕە، ئەز دڤێم ئەڤێ داواکارییێ بکەم.',...lines,'کۆما مەزندەکری: '+basketAmount(),$('buyer').value.trim()&&'ناڤ '+$('buyer').value.trim(),$('note').value.trim()&&'ناڤونیشان / تێبینی '+$('note').value.trim()].filter(Boolean).join('\n');
 $('send').href='https://wa.me/'+phone+'?text='+encodeURIComponent(message);
}
function total(){return chosen().reduce((sum,{id,price})=>sum+quantities[id]*(price??0),0)}
function renderBasket(){
 const selection=chosen();
 $('count').textContent=num(selection.reduce((n,p)=>n+quantities[p.id],0));
 $('lines').innerHTML=selection.map(({id,name,img,price})=>`<div class="line">${img?`<img class="thumb" src="${img}" alt="">`:''}<strong>${name}<small>${price==null?'نرخ ب واتساپێ':num(price*quantities[id])+' د.ع'}</small></strong><div><button data-id="${id}" data-delta="1" aria-label="زێدەکرن">+</button>${num(quantities[id])}<button data-id="${id}" data-delta="-1" aria-label="کێمکرن">−</button></div></div>`).join('')||'<p>سەبەتا تە ڤالایە. بەرهەمەکێ هەلبژێرە.</p>';
 $('quickCart').hidden=!selection.length; $('quickTotal').textContent=basketAmount(); $('checkout').hidden=!selection.length;$('total').textContent='کۆما مەزندەکری   '+basketAmount();updateMessage();
}
function change(id,delta){quantities[id]=Math.max(0,Math.min(99,(quantities[id]||0)+delta));try{localStorage.setItem(key,JSON.stringify(quantities))}catch{}renderBasket()}
function openProduct(id){
 const p=products.find(product=>product.id===id);
 if(!p)return;
 $('productPhoto').src=p.img;
 $('productPhoto').alt=p.en;
 $('productName').textContent=p.name;
 $('productOrigin').textContent=[p.country,p.size].filter(Boolean).join(' · ');
 $('productEnglish').textContent=p.en;
 $('productPrice').textContent=p.soldOut?'نە بەردەستە':p.price==null?'نرخ و بەردەستبوون ب واتساپێ':num(p.price)+' د.ع';
 $('productAdd').disabled=Boolean(p.soldOut)||quantities[p.id]>=99;
 $('productAdd').onclick=()=>{change(p.id,1);$('productView').close();$('basket').showModal()};
 $('productView').showModal();
}
$('cards').onclick=e=>{
 const view=e.target.closest('[data-view]');
 if(view){openProduct(view.dataset.view);return}
 const fav=e.target.closest('[data-fav]');
 if(fav){
  const id=fav.dataset.fav;
  if(favorites.has(id)) favorites.delete(id); else favorites.add(id);
  try{localStorage.setItem('uk-market-favorites',JSON.stringify([...favorites]))}catch{}
  renderCatalog();
  document.querySelector('[data-fav="'+id+'"]')?.focus({preventScroll:true});
  return;
 }
 const b=e.target.closest('.add');if(!b||b.disabled)return;const full=quantities[b.dataset.id]>=99;change(b.dataset.id,1);$('toast').textContent=full?'سنوور ٩٩ دانەیە':'هاتە زێدەکرن بۆ سەبەتێ';clearTimeout(timer);timer=setTimeout(()=>$('toast').textContent='',1700)};
$('lines').onclick=e=>{const b=e.target.closest('button');if(b)change(b.dataset.id,Number(b.dataset.delta))};
$('query').oninput=restartCatalog;$('open').onclick=()=>$('basket').showModal();$('contact').onclick=()=>$('info').showModal();$('buyer').oninput=$('note').oninput=updateMessage;
$('sort').onchange=restartCatalog; $('quickCart').onclick=()=>$('basket').showModal();
renderCatalog();renderBasket();
