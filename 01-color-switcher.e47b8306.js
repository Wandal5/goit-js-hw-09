function t(){c.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function e(){n.toggleAttribute("disabled"),r.toggleAttribute("disabled")}let o;const n=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),c=document.querySelector("body");n.addEventListener("click",(function(n){o=setInterval(t,1e3),e()})),r.addEventListener("click",(function(){clearInterval(o),e()}));
//# sourceMappingURL=01-color-switcher.e47b8306.js.map
