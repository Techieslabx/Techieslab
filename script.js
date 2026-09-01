const P=[["AutoCAD 2024", "CAD & DESIGN", "autocad.png", "AVAILABLE NOW", "Ready for delivery"], ["AutoCAD 2025", "CAD & DESIGN", "autocad.png", "AVAILABLE NOW", "Ready for delivery"], ["AutoCAD 2026", "CAD & DESIGN", "autocad.png", "AVAILABLE NOW", "Ready for delivery"], ["AutoCAD 2027", "CAD & DESIGN", "autocad.png", "AVAILABLE NOW", "Ready for delivery"], ["AutoCAD Architecture 2024", "ARCHITECTURE & BIM", "architecture.png", "AVAILABLE NOW", "Ready for delivery"], ["AutoCAD Electrical 2024", "ELECTRICAL", "electrical.png", "AVAILABLE NOW", "Ready for delivery"], ["AutoCAD Electrical 2027", "ELECTRICAL", "electrical.png", "AVAILABLE ON REQUEST", "Delivery: 1\u20132 Working Days"], ["AutoCAD MEP 2024", "ARCHITECTURE & BIM", "mep.png", "AVAILABLE NOW", "Ready for delivery"], ["AutoCAD MEP 2027", "ARCHITECTURE & BIM", "mep.png", "AVAILABLE ON REQUEST", "Delivery: 1\u20132 Working Days"], ["Inventor Nastran", "ENGINEERING & ANALYSIS", "inventor.png", "AVAILABLE NOW", "Ready for delivery"], ["Revit 2025", "ARCHITECTURE & BIM", "revit.png", "AVAILABLE NOW", "Ready for delivery"], ["Revit 2027", "ARCHITECTURE & BIM", "revit.png", "AVAILABLE ON REQUEST", "Delivery: 1\u20132 Working Days"], ["Civil 3D 2027", "CIVIL ENGINEERING", "civil3d.png", "AVAILABLE ON REQUEST", "Delivery: 1\u20132 Working Days"], ["Navisworks Manage 2027", "BIM & COORDINATION", "navisworks.png", "AVAILABLE ON REQUEST", "Delivery: 1\u20132 Working Days"], ["Maya 2027", "3D MODELLING & ANIMATION", "maya.png", "AVAILABLE ON REQUEST", "Delivery: 1\u20132 Working Days"]];const W="2349071766222";const products=document.getElementById("products");
function render(){products.innerHTML=P.map((p,i)=>`<article class="card"><div class="logo"><img src="assets/logos/${p[2]}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="fallback">${p[0].slice(0,2)}</div></div><div class="body"><span class="cat">${p[1]}</span><h3>${p[0]}</h3><span class="badge ${p[3].includes('NOW')?'now':'req'}">${p[3]}</span><div class="status">${p[4]}</div><p>${p[3].includes('REQUEST')?'This package requires additional preparation before delivery.':'Prepared for delivery.'}</p><div class="price">$4.99</div><div class="actions"><button class="btn secondary" onclick="info(${i})">INFORMATION</button><button class="btn primary" onclick="order(${i})">${p[3].includes('NOW')?'ORDER NOW':'REQUEST & ORDER'}</button></div></div></article>`).join('')}render();
function open(id){document.querySelector('.backdrop').classList.add('open');document.getElementById(id).classList.add('open')}function closeAll(){document.querySelector('.backdrop').classList.remove('open');document.querySelectorAll('.modal').forEach(x=>x.classList.remove('open'))}function openRequest(){open('requestModal')}
function info(i){let p=P[i];infoBody.innerHTML=`<p class="eyebrow">${p[1]}</p><h2>${p[0]}</h2><p class="muted">Professional software designed to support relevant engineering, design, architecture or technical workflows.</p><div class="box"><b>${p[3]}</b><br>${p[4]}</div><button class="btn primary" onclick="closeAll();order(${i})">CONTINUE →</button>`;open('infoModal')}
function order(i){let p=P[i];orderBody.innerHTML=`<p class="eyebrow">YOUR ORDER</p><h2>${p[0]}</h2><div class="box"><p>Software Price: <b>$4.99</b></p><p><b>${p[3]}</b><br>${p[4]}</p><label><input type="checkbox" id="remote"> Add Remote Installation (+$10)</label><p class="total">TOTAL: <span id="total">$4.99</span></p></div><button class="btn primary" id="continuePay">CONTINUE TO PAYMENT →</button><div id="payOptions" hidden><div class="box"><b>INTERNATIONAL PAYMENT</b><p>USD pricing is preserved. Connect the approved Paystack international-payment configuration before activating live checkout.</p>

<input type="email" id="payEmail" placeholder="Enter your email address" style="width:100%;margin:10px 0;padding:12px;border-radius:8px;border:1px solid #ffffff33;background:#08111f;color:white;">

<button class="btn primary" id="payNow">PAY WITH PAYSTACK</button>
<button class="btn secondary" id="flutterPay">PAY WITH FLUTTERWAVE</button>

</div><div class="box"><b>ZENITH BANK PLC</b><br>ADISA IYANU PRAISE<br><strong>2433136187</strong></div><div class="box"><b>KUDA BANK</b><br>ADISA IYANU PRAISE<br><strong>2087478417</strong></div><a class="btn primary" href="https://wa.me/${W}?text=${encodeURIComponent('Hello Techies Lab Team,\n\nI have completed payment for '+p[0]+'.\n\nDelivery: '+p[4]+'\n\nThank you.')}" target="_blank">I HAVE MADE PAYMENT →</a></div>`;open('orderModal');

setTimeout(()=>{

remote.onchange=()=>{
total.textContent=remote.checked?'$14.99':'$4.99';
};

continuePay.onclick=()=>{
payOptions.hidden=false;
};

payNow.onclick=()=>{

let email=payEmail.value.trim();

if(!email){
alert('Please enter your email address.');
payEmail.focus();
return;
}

let amount=remote.checked?1499:499;

const popup=new PaystackPop();

popup.newTransaction({

key:'pk_live_79b8a2a9c30b91528bb0d9866601a1e7181fff13',

email:email,

amount:amount,

currency:'USD',

metadata:{
custom_fields:[
{
display_name:'Software',
variable_name:'software',
value:p[0]
},
{
display_name:'Remote Installation',
variable_name:'remote_installation',
value:remote.checked?'Yes':'No'
}
]
},

onSuccess:(transaction)=>{
alert('Payment successful. Reference: '+transaction.reference);
},

onCancel:()=>{
alert('Payment was cancelled.');
}

});

};

},0)}
document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = document.getElementById('requestForm');

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const software = form.elements['software'].value;
    const version = form.elements['version'].value || 'Not specified';
    const category = form.elements['category'].value || 'Not specified';
    const details = form.elements['details'].value || 'None';

    const message =
`TECHIES LAB — SOFTWARE REQUEST

Hello Techies Lab Team,

I would like to request the following software:

━━━━━━━━━━━━━━━━━━━━

FULL NAME:
${name}

EMAIL ADDRESS:
${email}

SOFTWARE REQUESTED:
${software}

VERSION NEEDED:
${version}

CATEGORY:
${category}

ADDITIONAL DETAILS:
${details}

━━━━━━━━━━━━━━━━━━━━

Please check availability and advise me on the delivery process.

Thank you.`;

    const whatsappURL =
        'https://wa.me/2349071766222?text=' +
        encodeURIComponent(message);

    window.location.href = whatsappURL;
});

menu.onclick=()=>{
    document.querySelector('header').classList.toggle('open');
    menu.textContent=document.querySelector('header').classList.contains('open')?'×':'☰';
};
