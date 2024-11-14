import"./assets/vendor-DJ7Tif3U.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n="https://pixabay.com/api/",c="47047492-675b2ed8a2567f743231acd4f",u=document.querySelector(".search-form"),f=document.querySelector(".gallery-list");u.addEventListener("submit",m);function m(s){s.preventDefault();const i=s.target.elements.searchQuery.value;d(i).then(r=>{f.innerHTML=h(r)}).catch(r=>{console.log("catch",r)})}function d(s){const i=new URLSearchParams({key:c,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${n}?${c}&${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function h(s){return s.map(({largeImageURL:i,webformatURL:r,tags:l,likes:e,views:t,comments:o,downloads:a})=>`
     <li class="gallery-card">
   <a class="gallery-card-link" href="${i}">
    <img class="gallery-image" src="${r}"alt="${l}"/>
  </a>           
            <ul class="img-list">
            <li class="img-list-item">
                <h3>Likes</h3>
                <p>"${e}"</p>
            </li>
            <li class="img-list-item">
                <h3>Views</h3>
                <p>"${t}"</p>
            </li>
            <li class="img-list-item">
                <h3>Comments</h3>
                <p>"${o}"</p>
            </li>
            <li class="img-list-item">
                <h3>Downloads</h3>
                <p>"${a}"</p>
            </li>
            </ul>
                
</li>
  `).join("")}
//# sourceMappingURL=index.js.map
