const open=document.getElementById("openLetter");
const content=document.getElementById("content");
open.addEventListener("click",()=>{
  open.classList.add("open");
  setTimeout(()=>{
    content.classList.remove("hidden");
    content.scrollIntoView({behavior:"smooth"});
    hearts(20);
  },650);
});
document.getElementById("surprise").addEventListener("click",()=>{
  document.getElementById("finalMessage").classList.remove("hidden");
  hearts(30);
});
function hearts(n){
  for(let i=0;i<n;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.textContent=Math.random()>.25?"♡":"♥";
    h.style.left=(10+Math.random()*80)+"vw";
    h.style.top=(60+Math.random()*30)+"vh";
    h.style.fontSize=(13+Math.random()*22)+"px";
    h.style.animationDelay=(Math.random()*1.3)+"s";
    document.getElementById("hearts").appendChild(h);
    setTimeout(()=>h.remove(),5000);
  }
}
