let p = document.getElementsByTagName("p");
let inp = document.getElementsByTagName("input");
let x = e => {
    e.preventDefault();
    if(inp[0].value.length < 3 || inp[0].value.includes(" ")){
        inp[0].className = "red";
    }else{
        p[0].textContent = inp[0].value;
    }
    if(inp[1].value < 3 || inp[1].value.includes(" ")){
        inp[1].className = "red";
    }else{
        p[1].textContent = inp[1].value;
    }
    p[2].textContent = inp[2].value;
    if(inp[3].value.length > 10){
        p[3].textContent = inp[3].value;
    }else{inp[3].className = "red";
}
}
let form = document.getElementById("form");
form.addEventListener('submit',x,false);