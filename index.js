import"./assets/vendor-BTTBuz3m.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=[{title:"Wallet webservice",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-5@1x.webp",img2x:"/img/my-projects/projects-5@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"Green harvest webservice",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-4@1x.webp",img2x:"/img/my-projects/projects-4@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"English Exellence webservice",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-9@1x.webp",img2x:"/img/my-projects/projects-9@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"starlight studio landing page",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-10@1x.webp",img2x:"/img/my-projects/projects-10@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"mimino website",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-2@1x.webp",img2x:"/img/my-projects/projects-2@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"power pulse webservice ",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-1@1x.webp",img2x:"/img/my-projects/projects-1@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"vyshyvanka vibes Landing Page",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-3@1x.webp",img2x:"/img/my-projects/projects-3@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"chego jewelry website",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-6@1x.webp",img2x:"/img/my-projects/projects-6@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"fruitbox online store",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-8@1x.webp",img2x:"/img/my-projects/projects-8@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"},{title:"energy flow webservice",technologies:["React","JavaScript","Node JS","Git"],img1x:"/img/my-projects/projects-7@1x.webp",img2x:"/img/my-projects/projects-7@2x.webp",link:"https://github.com/Anastasiia-Oli/fur-seal-team-js"}],g=document.getElementById("my-projects-list"),p=document.getElementById("my-projects-load-more-btn");let c=0;const n=3;function d(a){const i=a.map(({title:s,technologies:o,img1x:e,img2x:t,link:r})=>`
      <li class="my-projects-card">
        <img class="my-projects-card-img"
          src="${e}" 
          srcset="${e} 1x, ${t} 2x"
          alt="${s}" 
          width="1008" 
          height="580" 
          loading="lazy" 
        />
        <div class="my-projects-info">
          <p class="my-projects-tech">${o.join(", ")}</p>
         <div class="my-projects-title-wrapper">
          <h3 class="my-projects-card-title">${s}</h3>
          <a class="my-projects-link" href="${r}" target="_blank" rel="noopener noreferrer">
            Visit
          <svg class="my-projects-link-icon" width="20" height="20" aria-hidden="true">
          <use href="/src/img/sprite.svg#arrow-diagonal"></use>
          </svg>
          </a>
          </div>
        </div>
      </li>`).join("");g.insertAdjacentHTML("beforeend",i)}function m(){const a=l.slice(c,c+n);d(a),c+=n,c>=l.length&&(p.style.display="none");const i=document.querySelectorAll(".my-projects-card");if(i.length>n){const s=i[c-n];if(s){const o=s.getBoundingClientRect().height;window.scrollBy({top:o,behavior:"smooth"})}}}p.addEventListener("click",m);m();
//# sourceMappingURL=index.js.map
