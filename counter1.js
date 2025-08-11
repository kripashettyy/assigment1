const fetchdata = async () => {
  try {
    //successful case we have to write the code inside try
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const response1= await feth{
        "https://jsonplaceholder.typicode.com/users"
    };
      const response2 = await fetch{
       "https://jsonplaceholder.typicode.com/users"
      };
      if (response1.ok){
      console.log(data);
    } else {
      throw new Error("something is wrong");
    }
  } catch (err) {
    console.log("error", err);
  }
};
fetchdata();
console.log("Hello");
