(()=>{var e={921:()=>{var e=document.getElementById("body"),t=document.getElementById("menu-toggle"),n=document.getElementById("menu-navigator"),s=document.getElementById("banner"),a=Array.from(document.querySelectorAll(".menu-link")),i=document.getElementById("banner-container-button"),o=document.getElementById("banner-container-img"),r=document.getElementById("banner-balloon"),c=document.getElementById("banner-balloon-text"),d=document.getElementById("hardskills-content__icons"),l=Array.from(document.querySelectorAll(".hardskills-tech__icon")),m=document.getElementById("menu-settings"),u=document.getElementById("menu-settings-options"),g=document.getElementById("switch-idioms"),h=document.getElementById("switch-idioms-container"),f=document.getElementById("switch-lightdark"),v=document.getElementById("switch-lightdark-container"),y=document.getElementById("switch-lightdark-moonsun"),L=matchMedia("(min-width: 768px)");function p(e,t){var n=!1;if(e){var s=e.classList;n=Object.values(s).includes(t)}return n}function w(e,t){window.addEventListener("resize",(function(){visualViewport.width>=1024&&e.classList.remove(t),L.matches?(e.classList.remove(t),a.map((function(e){e.removeAttribute("tabindex")}))):a.map((function(e){e.setAttribute("tabindex","-1")}))}))}var b,k,E,A;t&&n&&(document.addEventListener("DOMContentLoaded",(function(){L.matches&&a.map((function(e){e.removeAttribute("tabindex")}))})),t.addEventListener("click",(function(){p(n,"show")?(n.classList.remove("show"),t.classList.remove("active"),a.map((function(e){e.setAttribute("tabindex","-1")}))):(n.classList.add("show"),t.classList.add("active"),a.map((function(e){e.removeAttribute("tabindex")})))})),w(n,"show"),w(t,"active")),m&&u&&(m.addEventListener("click",(function(){p(u,"show")?(m.classList.remove("active"),u.classList.remove("show"),g.setAttribute("tabindex","-1"),f.setAttribute("tabindex","-1")):(m.classList.add("active"),u.classList.add("show"),g.removeAttribute("tabindex"),f.removeAttribute("tabindex"))})),w(u,"show"),w(m,"active")),o&&i&&i.addEventListener("click",(function(){o.classList.toggle("imageShow"),s.classList.toggle("imageShow"),w(o,"imageShow"),w(s,"imageShow")})),c.addEventListener("animationend",(function(){r.classList.remove("showgreat"),c.classList.remove("showgreat")})),d&&l&&(l.map((function(e){var t=document.createElement("div");t.classList.add("balloon-description"),getChildrenAlt=e.children[0].alt,t.textContent="".concat(getChildrenAlt),e.insertBefore(t,e.children[0])})),d.addEventListener("click",(function(){l.map((function(e){e.classList.toggle("show")}))}))),k=Array.from(document.querySelectorAll(".text-spanish")),E=Array.from(document.querySelectorAll(".text-english")),A=localStorage.getItem("language"),window.addEventListener("load",(function(){"spanish"===A?(g.checked=!1,k.map((function(e){return e.style.display="inherit"})),E.map((function(e){return e.style.display="none"}))):"english"===A&&(g.checked=!0,k.map((function(e){return e.style.display="none"})),E.map((function(e){return e.style.display="inherit"})))})),g.addEventListener("change",(function(){0==g.checked?(k.map((function(e){return e.style.display="inherit"})),E.map((function(e){return e.style.display="none"})),b="spanish"):(k.map((function(e){return e.style.display="none"})),E.map((function(e){return e.style.display="inherit"})),b="english"),localStorage.setItem("language",b)})),g.addEventListener("keypress",(function(e){"Enter"!==e.key&&13!==e.keyCode||(g.checked=!g.checked,!1===g.checked?(k.map((function(e){return e.style.display="inherit"})),E.map((function(e){return e.style.display="none"})),b="spanish"):(k.map((function(e){return e.style.display="none"})),E.map((function(e){return e.style.display="inherit"})),b="english"),localStorage.setItem("language",b))})),function(){window.addEventListener("load",(function(){"rgb(240, 248, 255)"==getComputedStyle(e).color||"#f0f8ff"==getComputedStyle(e).color?f.checked=!1:f.checked=!0})),v.addEventListener("click",(function(){var e=y.classList[1],t=y.classList.length;window.matchMedia("(prefers-color-scheme)").matches;2==t&&"scaling"==e&&y.classList.remove("scaling"),y.classList.add("scaling"),y.addEventListener("animationend",(function(){y.classList.remove("scaling")}))}));var t,n=localStorage.getItem("theme");"dark"===n?e.classList.toggle("dark-theme"):"light"===n&&e.classList.toggle("light-theme"),f.addEventListener("change",(function(){1==f.checked?(e.classList.add("light-theme"),e.classList.remove("dark-theme"),t="light"):(e.classList.add("dark-theme"),e.classList.remove("light-theme"),t="dark"),localStorage.setItem("theme",t)})),f.addEventListener("keypress",(function(n){"Enter"!==n.key&&13!==n.keyCode||(f.checked=!f.checked),!0===f.checked?(e.classList.add("light-theme"),e.classList.remove("dark-theme"),t="light"):(e.classList.add("dark-theme"),e.classList.remove("light-theme"),t="dark"),localStorage.setItem("theme",t)}))}(),e&&t&&n&&a&&m&&u&&o&&d&&l&&e.addEventListener("click",(function(e){p(n,"show")&&e.target!==n&&e.target.offsetParent!==n&&e.target!==t&&e.target.offsetParent!==t&&(n.classList.remove("show"),t.classList.remove("active"),a.map((function(e){e.setAttribute("tabindex","-1")}))),p(u,"show")&&e.target!==u&&e.target.offsetParent!==u&&e.target!==m&&e.target.offsetParent!==h&&e.target.offsetParent!==g&&e.target.offsetParent!==v&&(u.classList.remove("show"),m.classList.remove("active"),g.setAttribute("tabindex","-1"),f.setAttribute("tabindex","-1")),p(o,"imageShow")&&e.target!==o&&e.target!==i&&e.target!==s&&e.target.offsetParent!==s&&(o.classList.remove("imageShow"),s.classList.remove("imageShow")),e.target!==d&&e.target.offsetParent!==d&&l.map((function(e){e.classList.remove("show")}))}))}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(921)})()})();