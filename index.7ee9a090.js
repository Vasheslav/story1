document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".image-swiper_large-image"),t=document.querySelectorAll(".thumbnail"),n=document.getElementById("leftArrow"),c=document.getElementById("rightArrow");let o=0;function d(n){const c=t[n],o=c.getAttribute("data-large");o&&(e.src=o,e.alt=c.alt)}t.forEach(((e,t)=>{e.addEventListener("click",(()=>function(e){o=e,d(o)}(t)))})),n.addEventListener("click",(()=>{o=(o-1+t.length)%t.length,d(o)})),c.addEventListener("click",(()=>{o=(o+1)%t.length,d(o)}))}));const e=document.querySelector(".fundraising_like-button"),t=document.querySelector(".fundraising_like-count");e&&t&&e.addEventListener("click",(()=>{const e=parseInt(t.textContent,10);t.textContent=(e+1).toString()}));const n=document.getElementById("amountRaised"),c=document.getElementById("rangeValuePercentages");document.getElementById("rangeValue");n&&c&&n.addEventListener("input",(()=>{const e=n.value+"%";c.textContent=e}));
//# sourceMappingURL=index.7ee9a090.js.map