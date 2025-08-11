const fetchdata=async()=>{
    const response =await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok){
        const data= await response.json( response);
        console.log(data);
    
    };
}
fetchdata();
console.log("hello");

const fetchdata1= async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.ok);
    const data=await response.json(response);
    console.log(data);
};

fetchdata1();
console.log("hello");

const fetchdata2= async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok);
    const data=await response.json(response);
    console.log(data);
};
fetchdata2();
console.log("hello");
