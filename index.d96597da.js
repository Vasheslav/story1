!function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".image-swiper_large-image"),t=document.querySelectorAll(".thumbnail"),n=document.getElementById("leftArrow"),r=document.getElementById("rightArrow"),c=0;function o(n){var r=t[n],c=r.getAttribute("data-large");c&&(e.src=c,e.alt=r.alt)}t.forEach((function(e,t){e.addEventListener("click",(function(){return function(e){o(c=e)}(t)}))})),n.addEventListener("click",(function(){o(c=(c-1+t.length)%t.length)})),r.addEventListener("click",(function(){o(c=(c+1)%t.length)}))}));var e=document.querySelector(".fundraising_like-button"),t=document.querySelector(".fundraising_like-count");e&&t&&e.addEventListener("click",(function(){var e=parseInt(t.textContent,10);t.textContent=(e+1).toString()}));var n=document.getElementById("amountRaised"),r=document.getElementById("rangeValuePercentages");document.getElementById("rangeValue");n&&r&&n.addEventListener("input",(function(){var e=n.value+"%";r.textContent=e}))}();
//# sourceMappingURL=index.d96597da.js.map