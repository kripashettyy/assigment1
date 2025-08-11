const { Children } = require("react");

// tag selector
let body= document.getElementsByTagName("h1");
console.log(body[0]);

//class selector 
let classes= document.getElementsByClassName("a");
console.log(classes[1]);


//id selector
let val= document.getElementById("val");
console.log(val);

//query selector
let varr= document.querySelector("a");
console.log(varr);

// queryselector All
let as = document.querySelectorAll("#val");
console.log(as[0]);
console.log(classes[0]);

let text=classes[0].innerHTML;
console.log(text);
node1.textcontent="hello";

let sty=document.querySelectorAll("h1");
console.log(sty);
 style[0].style.color="red";
 
 style[0].style.color="blue";

 //to remove a class
 //sty[1].classlist.remove("hidden");
 //toggle class
 styl[1].classlist.toggle("hidden");
 sty[1].classlist.toggle("body");

 // 1 create tag
 const v =document.createElement("h3");
 // 2.put content
 v.textcontent="added from js";

 //3.where we have to put the tag
 const h3= document.getElementsByClassName("cnt");

 //4.
 h3[0].appendChild(v);

 const div=document.createElement("div");
 const h2= document.createElemenet("h2");

 h2.textcontent="anthing";
 h2.classlist.add="sd";
    div.appendChild(h2);

    document.body.appendChild(div);
    const dive=document.createElement("div");
    const button1=document.createElement("button");
    const button2=document.createElement("button");
    button1.textcontent="increment";
button2.textcdontent="decrement";
button3.textcontent="reset";
    div.appendChild(button1);
    div.appendChild(button2);
    div.appendChild(button3);
    document.body.appendChild(div);
     new image=document.cr(eate("img"));
    new image.setattribute("height","100px");
    new image.setattribute("width","100px");
    new image.setattribute("alt","image not found");
    document.body.appendChild(new image);
    

const button =document.getElementsByTagName("button");
const incbutton=button[0];
const decbutton=button[1];
const resetbutton=button[2];
const p=document.querySelector("#val");
let value =0;
let inc=true;
let pause =() => {}
if(val>=10){
    inc=false;
}

incbutton.addEventListener("click",()=>{
    val=val+1;
    p.textcontent=val;
});

decbutton.addEventListener("click",() =>{
    val=val-1;
    p.textcontent=val;
})
resetbutton.addEventListener("click",()=>{
    val=0;
    p.textContent=val;
})


const fetchdata= async() =>{
    const response =await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data=await response.json();
    console.log(data);
};
fetchdata();

console.log("hello");