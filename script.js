const btn = document.getElementById("btn");
const col = document.getElementById("col");

btn.addEventListener("click",()=>{
    let color = randombg();
    document.body.style.backgroundColor = color;
    col.write() = toString(color);
});

function randombg(){
    return `rgb(${Math.floor(Math.random()*360)},${Math.floor(Math.random()*360)},${Math.floor(Math.random()*360)})`;
}