// const ul = document.querySelector('.items')
// console.log(ul)
// ul.firstElementChild.textContent='Green'
// ul.firstElementChild.style.color='Green'
// ul.children[1].innerText ='Yellow'
// ul.lastElementChild.style.color='Yellow'
document.getElementById("btn").addEventListener("mouseover", mouseOver);
document.getElementById("btn").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("btn").style.color = "red";
}

function mouseOut() {
  document.getElementById("btn").style.color = "black";
}
const btn = document.querySelector('.btn')
 btn.addEventListener('click',(e)=>{
    var x = document.getElementById('anbu').value;
    console.log(x);
    console.log(document.getElementById('Email').value);
    console.log(document.getElementById('tel').value);
    console.log(document.getElementById('date').value);
    console.log(document.getElementById('time').value);
 } )
 

