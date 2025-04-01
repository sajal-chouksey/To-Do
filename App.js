let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    let element = document.createElement("li");
    let delbtn = document.createElement("button");
   if(inp.value.length > 0){
    delbtn.classList.add = "delete"
    delbtn.innerText = "delete";
    element.innerText = inp.value;
    ul.appendChild(element);
    element.appendChild(delbtn);
    inp.value = "";
   }
   else{
    alert('Please Enter The Task');
   }
});

ul.addEventListener("click" ,function(event) {
    if(event.target.tagName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
    console.log(event.target.nodeName);
});
