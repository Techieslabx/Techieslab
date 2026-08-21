const products = {
  revit:{name:"Revit",category:"BIM",price:"From ₦3,999",className:"revit",description:"Building information modelling software for architectural, structural and MEP workflows.",features:["Suitable for BIM-based project workflows","Installation guidance available","Technical assistance available for supported setups"]},
  civil3d:{name:"Civil 3D",category:"Engineering",price:"From ₦3,999",className:"civil",description:"Civil engineering and infrastructure design software for supported project workflows.",features:["Civil design and documentation workflows","Installation guidance available","Technical support available"]},
  autocad:{name:"AutoCAD",category:"CAD",price:"From ₦3,000",className:"autocad",description:"Computer-aided design software for 2D and 3D drafting workflows.",features:["Suitable for design and drafting workflows","Installation guidance available","Technical support available"]},
  electrical:{name:"AutoCAD Electrical",category:"Engineering",price:"From ₦3,999",className:"electrical",description:"Electrical design-focused software for supported documentation and engineering workflows.",features:["Electrical design workflows","Installation guidance available","Technical assistance available"]},
  mep:{name:"AutoCAD MEP",category:"CAD",price:"From ₦3,999",className:"mep",description:"Design software for supported mechanical, electrical and plumbing documentation workflows.",features:["MEP drafting workflows","Installation guidance available","Technical support available"]},
  inventor:{name:"Autodesk Inventor",category:"Engineering",price:"From ₦3,999",className:"inventor",description:"Mechanical design software for 3D modelling and engineering workflows.",features:["3D mechanical design workflows","Installation guidance available","Technical support available"]},
  navisworks:{name:"Navisworks Manage",category:"BIM",price:"From ₦3,999",className:"navisworks",description:"Project review and coordination software for supported BIM workflows.",features:["Model coordination workflows","Installation guidance available","Technical support available"]},
  "3dsmax":{name:"3ds Max",category:"Engineering",price:"From ₦3,999",className:"max",description:"3D modelling and visualization software for supported design workflows.",features:["3D modelling workflows","Installation guidance available","Technical support available"]}
};

const modal=document.getElementById("productModal");
const modalIcon=document.getElementById("modalIcon");
const modalTitle=document.getElementById("modalTitle");
const modalCategory=document.getElementById("modalCategory");
const modalDescription=document.getElementById("modalDescription");
const modalFeatures=document.getElementById("modalFeatures");
const modalPrice=document.getElementById("modalPrice");
const modalOrder=document.getElementById("modalOrder");

document.querySelectorAll(".info-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const p=products[btn.dataset.product];
    modalIcon.className=`product-icon modal-product-icon ${p.className}`;
    modalIcon.innerHTML=p.name.includes("3ds")?'3<small>MAX</small>':`${p.name.charAt(0)}<small>${p.category}</small>`;
    modalTitle.textContent=p.name;
    modalCategory.textContent=p.category;
    modalDescription.textContent=p.description;
    modalFeatures.innerHTML=p.features.map(f=>`<li>${f}</li>`).join("");
    modalPrice.textContent=p.price;
    modalOrder.href=`https://wa.me/2349071766222?text=${encodeURIComponent("Hello Techies Lab, I am interested in "+p.name+".")}`;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  });
});

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
document.querySelectorAll("[data-close-modal]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{
  nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",nav.classList.contains("open"));
});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const search=document.getElementById("productSearch");
const filters=document.querySelectorAll(".filter-btn");
let currentFilter="all";

function filterProducts(){
  const query=search.value.toLowerCase().trim();
  document.querySelectorAll(".product-card").forEach(card=>{
    const matchesCategory=currentFilter==="all"||card.dataset.category===currentFilter;
    const matchesSearch=card.innerText.toLowerCase().includes(query);
    card.style.display=matchesCategory&&matchesSearch?"block":"none";
  });
}
search.addEventListener("input",filterProducts);
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter=btn.dataset.filter;
  filterProducts();
}));

document.getElementById("year").textContent=new Date().getFullYear();