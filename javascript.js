for(let i=0;i<256;i++){
    const container=document.querySelector("#container");
    const box=document.createElement("div");
    box.classList.add("box");
    box.textContent="PO";//will be remved in future
    container.appendChild(box);
}

const boxes=document.querySelectorAll(".box");
boxes.forEach(box=>{
  box.addEventListener('mouseover',function(){
    this.style.backgroundColor='red';
  });
});