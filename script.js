const PRODUCTS=[
 {id:'autocad-2024',name:'AutoCAD 2024',cat:'cad',label:'CAD',accent:'#e73b4d',logo:'assets/products/autocad.png',desc:'2D and 3D CAD design and drafting service.',info:'AutoCAD 2024 is useful for creating precise 2D drawings and 3D models, including technical plans, layouts and professional documentation. It is commonly used by engineers, architects, CAD designers, technicians, construction professionals and students who need accurate drafting and design tools.'},
 {id:'autocad-2025',name:'AutoCAD 2025',cat:'cad',label:'CAD',accent:'#d42b41',logo:'assets/products/autocad.png',desc:'CAD design and drafting service for professional workflows.',info:'AutoCAD 2025 is useful for developing, editing and documenting accurate 2D drawings and 3D models for engineering, construction and design projects. It is commonly used by engineers, architects, CAD technicians, designers, contractors and students.'},
 {id:'autocad-2027',name:'AutoCAD 2027',cat:'cad',label:'CAD',accent:'#e54a56',logo:'assets/products/autocad.png',desc:'Current-generation CAD workflow option in the Techies Lab collection.',info:'AutoCAD 2027 is useful for professional drafting and design workflows that require accurate technical drawings, layouts and engineering documentation. It is commonly used by engineers, architects, designers, CAD professionals, technicians and students.'},
 {id:'electrical-2024',name:'AutoCAD Electrical 2024',cat:'electrical',label:'ELEC',accent:'#f05a3f',logo:'assets/products/autocad-electrical.png',desc:'Electrical design workflow for schematic and control-system projects.',info:'AutoCAD Electrical 2024 is useful for electrical control-system design, electrical schematics, panel layouts and organised project documentation. It is commonly used by electrical engineers, automation professionals, control-panel designers, technicians and engineering students.'},
 {id:'electrical-2026',name:'AutoCAD Electrical 2026',cat:'electrical',label:'ELEC',accent:'#ff7a34',logo:'assets/products/autocad-electrical.png',desc:'Electrical design workflow for engineering documentation and projects.',info:'AutoCAD Electrical 2026 is useful for creating and documenting electrical control systems, schematics and panel designs for professional projects. It is commonly used by electrical engineers, automation specialists, panel builders, technicians and engineering students.'},
 {id:'architecture-2024',name:'AutoCAD Architecture 2024',cat:'architecture',label:'ARCH',accent:'#8d4ed7',logo:'assets/products/autocad-architecture.png',desc:'Architecture-focused drafting and design workflow.',info:'AutoCAD Architecture 2024 is useful for architectural drafting, building design and preparing plans, elevations, sections and coordinated project documentation. It is commonly used by architects, architectural technologists, building designers, CAD professionals, construction teams and architecture students.'},
 {id:'mep-2024',name:'AutoCAD MEP 2024',cat:'engineering',label:'MEP',accent:'#1a9f7c',logo:'assets/products/autocad-mep.png',desc:'Mechanical, electrical and plumbing design workflow.',info:'AutoCAD MEP 2024 is useful for mechanical, electrical and plumbing design workflows in building projects, helping users prepare coordinated MEP drawings and technical documentation. It is commonly used by MEP engineers, building-services professionals, contractors, designers, technicians and students.'},
 {id:'nastran-2025',name:'AutoCAD Inventor Nastran 2025',cat:'engineering',label:'NAS',accent:'#b45a1c',logo:'assets/products/inventor-nastran.png',desc:'Engineering analysis and simulation workflow selection.',info:'AutoCAD Inventor Nastran 2025 is useful for engineering analysis and simulation workflows that help evaluate the expected performance of engineered components and structures under different conditions. It is commonly used by mechanical engineers, product designers, simulation specialists, analysts and engineering students.'}
];
let activeFilter='all', selected=null;
const grid=document.getElementById('productGrid');
function productLogo(p,large=false){return `<div class="${large?'modal-logo-stage':'product-logo-stage'}" style="--accent:${p.accent}"><div class="logo-light"></div><img src="${p.logo}" alt="${p.name} logo" class="product-logo" loading="lazy"></div>`}
function render(){const q=document.getElementById('searchInput').value.toLowerCase();grid.innerHTML=PRODUCTS.filter(p=>(activeFilter==='all'||p.cat===activeFilter)&&p.name.toLowerCase().includes(q)).map(p=>`<article class="product-card" data-id="${p.id}"><div class="product-visual">${productLogo(p)}</div><div class="product-body"><span class="product-category">${p.cat.toUpperCase()}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><div class="price">$5.00</div><div class="card-actions"><button class="info-btn" data-info="${p.id}">INFORMATION</button><button class="order-btn" data-order="${p.id}">ORDER NOW</button></div></div></div></article>`).join('')||'<div class="empty-order">No matching software found.</div>'}
render();
document.getElementById('searchInput').addEventListener('input',render);
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');b.classList.add('active');activeFilter=b.dataset.filter;render()}));
grid.addEventListener('click',e=>{const id=e.target.dataset.info||e.target.dataset.order;if(!id)return;const p=PRODUCTS.find(x=>x.id===id);if(e.target.dataset.info)openInfo(p);else selectProduct(p)});
const modal=document.getElementById('infoModal');
function openInfo(p){
  selected=p;
  document.getElementById('modalBadge').outerHTML=productLogo(p,true).replace('class="modal-logo-stage"','class="modal-logo-stage" id="modalBadge"');
  document.getElementById('modalCategory').textContent=p.cat.toUpperCase();
  document.getElementById('modalTitle').textContent=p.name;
  document.getElementById('modalDescription').textContent=p.info;
  const featureBox=document.getElementById('modalFeatures');
  featureBox.innerHTML='';
  featureBox.style.display='none';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}</li>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false')}
function closeInfo(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.getElementById('closeModal').onclick=closeInfo;modal.addEventListener('click',e=>{if(e.target===modal)closeInfo()});
document.getElementById('modalOrderBtn').onclick=()=>{if(selected)selectProduct(selected);closeInfo()};
function selectProduct(p){selected=p;document.getElementById('emptyOrder').hidden=true;document.getElementById('orderDetails').hidden=false;document.getElementById('selectedProductName').textContent=p.name;document.getElementById('selectedProductCategory').textContent=p.cat.toUpperCase()+' SOFTWARE SERVICE';updateTotal();document.getElementById('payment').scrollIntoView({behavior:'smooth',block:'start'})}
function updateTotal(){const total=5+(document.getElementById('remoteInstallation').checked?10:0);document.getElementById('totalPrice').textContent='$'+total.toFixed(2)}document.getElementById('remoteInstallation').addEventListener('change',updateTotal);document.getElementById('clearOrder').onclick=()=>{selected=null;document.getElementById('emptyOrder').hidden=false;document.getElementById('orderDetails').hidden=true};
document.querySelectorAll('input[name="paymentMethod"]').forEach(r=>r.addEventListener('change',()=>{const bank=r.value==='bank'&&r.checked;document.getElementById('bankDetails').hidden=!bank;document.getElementById('onlineDetails').hidden=bank}));
function validDetails(){if(!selected){alert('Please select a software product first.');return false}const form=document.getElementById('orderForm');if(!form.reportValidity())return false;return true}
document.getElementById('bankPaymentBtn').onclick=()=>{if(!validDetails())return;const ref=document.getElementById('transactionRef').value.trim();if(!ref){alert('Please enter your payment reference / transaction ID.');return}const remote=document.getElementById('remoteInstallation').checked?'Yes (+$10)':'No';const total=document.getElementById('remoteInstallation').checked?'$15.00':'$5.00';const msg=`Hello Techies Lab.%0A%0AI have made a bank transfer for my order.%0A%0AProduct: ${encodeURIComponent(selected.name)}%0ARemote Installation: ${remote}%0ATotal: ${total}%0AName: ${encodeURIComponent(document.getElementById('customerName').value)}%0AEmail: ${encodeURIComponent(document.getElementById('customerEmail').value)}%0ACountry: ${encodeURIComponent(document.getElementById('customerCountry').value)}%0ATransaction Reference: ${encodeURIComponent(ref)}%0A%0APlease find my payment confirmation attached.`;window.open('https://wa.me/2349071766222?text='+msg,'_blank')};
const PAYSTACK_PUBLIC_KEY='pk_live_79b8a2a9c30b91528bb0d9866601a1e7181fff13';
const USD_TO_NGN_RATE=1500;
document.getElementById('orderForm').addEventListener('submit',e=>{e.preventDefault();if(!validDetails())return;const total=document.getElementById('remoteInstallation').checked?15:5;const totalNGN=Math.round(total*USD_TO_NGN_RATE);const name=document.getElementById('customerName').value.trim();const email=document.getElementById('customerEmail').value.trim();const country=document.getElementById('customerCountry').value.trim();const phone=document.getElementById('customerWhatsapp').value.trim();if(typeof PaystackPop==='undefined'){alert('Secure checkout could not load. Please check your internet connection and try again.');return}const ref='TL-'+Date.now();const handler=PaystackPop.setup({key:PAYSTACK_PUBLIC_KEY,email,amount:totalNGN*100,currency:'NGN',ref,metadata:{custom_fields:[{display_name:'Customer Name',variable_name:'customer_name',value:name},{display_name:'Country',variable_name:'country',value:country},{display_name:'WhatsApp',variable_name:'whatsapp',value:phone},{display_name:'Selected Product',variable_name:'selected_product',value:selected.name},{display_name:'Remote Installation',variable_name:'remote_installation',value:document.getElementById('remoteInstallation').checked?'Yes':'No'}]},callback:function(response){const params=new URLSearchParams({ref:response.reference,product:selected.name,total:'$'+total.toFixed(2),remote:document.getElementById('remoteInstallation').checked?'Yes':'No',name:name,email:email});window.location.href='thank-you.html?'+params.toString()},onClose:function(){}});handler.openIframe()});
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');menu.onclick=()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))};


/* Product information modal */
const productInformation = {
  "AutoCAD 2024": `AutoCAD 2024 is a professional computer-aided design application used for creating precise 2D drawings and 3D models. It is useful for preparing technical drawings, plans, layouts and documentation for engineering, construction and design projects. It is commonly used by engineers, architects, designers, technicians, construction professionals and students.`,
  "AutoCAD 2025": `AutoCAD 2025 helps professionals create, edit and document accurate 2D drawings and 3D models. It is useful for technical drafting, design development, layouts and professional documentation across many engineering and construction workflows. It is commonly used by engineers, architects, CAD technicians, designers, contractors and students.`,
  "AutoCAD 2027": `AutoCAD 2027 is designed for professional drafting and design workflows that require accurate technical drawings and models. It is useful for developing plans, layouts and engineering documentation for projects across different technical fields. It is commonly used by engineers, architects, designers, CAD professionals, technicians and students.`,
  "AutoCAD Electrical 2024": `AutoCAD Electrical 2024 is built for electrical control-system design and electrical documentation. It is useful for creating electrical schematics, panel layouts, control drawings and related documentation more efficiently. It is commonly used by electrical engineers, automation professionals, control-panel designers, technicians and engineering students.`,
  "AutoCAD Electrical 2026": `AutoCAD Electrical 2026 supports the creation and documentation of electrical control systems. It is useful for producing electrical schematics, control-panel designs and organised electrical documentation for professional projects. It is commonly used by electrical engineers, automation specialists, panel builders, technicians and engineering students.`,
  "AutoCAD Architecture 2024": `AutoCAD Architecture 2024 is tailored for architectural drafting and building design workflows. It is useful for developing architectural drawings, plans, elevations, sections and coordinated project documentation. It is commonly used by architects, architectural technologists, building designers, CAD professionals, construction teams and architecture students.`,
  "AutoCAD MEP 2024": `AutoCAD MEP 2024 supports mechanical, electrical and plumbing design workflows for building projects. It is useful for creating coordinated MEP drawings, layouts and technical documentation. It is commonly used by MEP engineers, building-services professionals, contractors, designers, technicians and students working on building projects.`,
  "AutoCAD Inventor Nastran 2025": `AutoCAD Inventor Nastran 2025 supports engineering analysis and simulation workflows. It is useful for evaluating how engineered components and structures may perform under different conditions, helping teams make informed design decisions. It is commonly used by mechanical engineers, product designers, simulation specialists, analysts and engineering students.`
};

function openProductInformation(name) {
  const modal = document.getElementById('infoModal');
  const title = document.getElementById('infoModalTitle');
  const content = document.getElementById('infoModalContent');
  if (!modal) return;
  title.textContent = name || 'Product Information';
  content.textContent = productInformation[name] || 'Detailed product information will be available here.';
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProductInformation() {
  const modal = document.getElementById('infoModal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.info-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card, .product, article, .card');
    const name = card ? (card.querySelector('h2,h3,h4,.product-name')?.textContent || '').trim() : '';
    openProductInformation(name);
  });
});

document.querySelectorAll('[data-close-info]').forEach((el) => {
  el.addEventListener('click', closeProductInformation);
});
