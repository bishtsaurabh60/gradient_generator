const input1= document.querySelector("#input1");
const input2=document.querySelector("#input2");

let css = document.querySelector('h3');

let bod=document.querySelector("body");

let onChange = ()=>{
    bod.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
    
   css.textContent=bod.style.background;
};


input1.addEventListener('input', onChange);
input2.addEventListener('input', onChange);


