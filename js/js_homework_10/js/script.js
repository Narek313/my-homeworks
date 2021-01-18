// ունենալ կոճակ որը լի-րին կավելացնի կլաս, փոխելով նրա չապերը և գույները

let li = document.querySelectorAll("ol li");
let change = e =>{
    li.className = "colors";
    console.log("asmsa")
}
let click = document.getElementById("button");
click.addEventListener("click", change, false);