import"./assets/vendor-Bgfrje-I.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n="https://pixabay.com/api/",o="47047492-675b2ed8a2567f743231acd4f";function u(i){const l=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${n}?${o}&${l}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function f(i){return i.map(({largeImageURL:l,webformatURL:r,tags:a,likes:e,views:t,comments:s,downloads:c})=>`
       <li class="gallery-list-item">
     <a class="gallery-list-item-link" href="${l}">
      <img class="gallery-image" src="${r}"alt="${a}"/>
    </a>           
              <ul class="gallery-card-list">
              <li class="gallery-card-list-item">
                  <h3>Likes</h3>
                  <p>"${e}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Views</h3>
                  <p>"${t}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Comments</h3>
                  <p>"${s}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${c}"</p>
              </li>
              </ul>
                  
  </li>
    `).join("")}const d=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery-list");d.addEventListener("submit",h);function h(i){i.preventDefault();const l=i.target.elements.searchQuery.value;u(l).then(r=>{m.innerHTML=f(r.hits)}).catch(r=>{console.log("catch",r)})}
//# sourceMappingURL=index.js.map
