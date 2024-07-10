for(let i=0;i<256;i++){
  const container=document.querySelector("#container");
  const box=document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

let boxes=document.querySelectorAll(".box");
boxes.forEach(box=>{
box.addEventListener('mouseover',function(){
  this.style.backgroundColor='red';
});
});

let btn=document.getElementById("btnSquares");
btn.addEventListener('click', function () {
  let boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.remove();//removes old grid
  });
  createGrid() //makes new grid afte reset
})


function createGrid() {
  const Container = document.getElementById("container");
    Container.innerHTML = '';
  let num=prompt("Enter no.os squares: ");
  if(num<=100){
  for (let i = 0; i < (num*num); i++) {
      const grid = document.createElement('div');
      let a = num;
     const boxSize = 32 / a; // creates the dynamic squeres
      grid.classList.add('grid');
      grid.style.width = boxSize + 'rem';
      grid.style.height = boxSize + 'rem';
     Container.appendChild(grid);
     grid.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "red";
     });
  }
}
else{
  alert("The number should not exceed 100");
}

}
