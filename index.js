import{S as u,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",o="47047492-675b2ed8a2567f743231acd4f";function m(s){const i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${o}&${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function d(s){return s.map(({largeImageURL:i,webformatURL:r,tags:a,likes:e,views:t,comments:l,downloads:n})=>`
       <li class="gallery-list-item">
     <a class="gallery-list-item-link" href="${i}" >
      <img class="gallery-image" src="${r}" alt="${a}"/>
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
                  <p>"${l}"</p>
              </li>
              <li class="gallery-card-list-item">
                  <h3>Downloads</h3>
                  <p>"${n}"</p>
              </li>
              </ul>
                  
  </li>
    `).join("")}const p=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery-list");document.querySelector(".search-input").addEventListener("click",s=>{s.target.value=""});let y=new u(".js-gallery-list a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",g);function g(s){s.preventDefault();const i=s.target.elements.searchQuery.value;i!==""&&m(i).then(r=>{r.hits.length!==0?c.innerHTML=d(r.hits):(h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="")}).catch(r=>{console.log("catch",r)})}y.refresh();
//# sourceMappingURL=index.js.map
