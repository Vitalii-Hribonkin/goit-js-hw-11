import{a as m,S as f,i as n}from"./assets/vendor-BsCdK5bc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const p="47432797-7b7ae49ed8d9ca3634e43854b",h="https://pixabay.com/api/",y=async o=>{const e=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await m.get(`${h}?${e}`)).data.hits}catch{throw new Error("Failed to fetch images")}};let i;const g=o=>o.map(e=>`
    <li>
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div>
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </li>
  `).join(""),L=(o,e)=>{const s=g(e);o.innerHTML=s,i?i.refresh():i=new f(".gallery a")},d=document.getElementById("search-form"),l=document.getElementById("gallery"),u=document.getElementById("loader"),w=()=>u.classList.remove("hidden"),b=()=>u.classList.add("hidden"),E=async o=>{o.preventDefault();const e=d.elements["search-input"].value.trim();if(!e){n.error({title:"Error",message:"Please enter a search query!"});return}l.innerHTML="",w();try{const s=await y(e);s.length===0?n.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):L(l,s)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later!"})}finally{b()}};d.addEventListener("submit",E);
//# sourceMappingURL=index.js.map
