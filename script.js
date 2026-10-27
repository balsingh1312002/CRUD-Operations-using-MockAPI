const container=document.getElementById("userList");
const api_url="https://6adeb8ee4e88f1bba4a54a62.mockapi.io/api/users";

//GET /Users → Fetch all users

async function fetchUser(){
    try{
        const user= await fetch(api_url);
        const data= await user.json();
        console.log(data);
    }catch(error){
        console.log('ERROR');   
    }
}
fetchUser();

//GET /Users/:id → Fetch user by ID

async function fetchGet(id){
    try{
        const user=await fetch(`${api_url}/${id}`);
        const data=await user.json();
        console.log(data);
    }catch(error){
        console.log("ERROR");
    }
}
fetchGet(1);

//POST /Users → Create a new user

async function fetchPost(user){
    try{
        const response=await fetch(`${api_url}`,
            {
           method : "POST",
           headers : {
            "Content-type" : "Application/json"
           },
           body : JSON.stringify(user)
    });
    const data=await response.json();
    console.log(data);
    }catch(error){
        console.log("ERROR")
    }}
const newUser={
    name : "Bala",
    email : "bala@1123.com"
};
fetchPost(newUser);

//PUT /Users/:id → Update user data

async function fetchPut(user,id){
    try{
        const response=await fetch(`${api_url}/${id}`,
            {
           method : "PUT",
           headers : {
            "Content-type" : "Application/json"
           },
           body : JSON.stringify(user)
    });
    const data=await response.json();
    console.log(data);
    }catch(error){
        console.log("ERROR")
    }}
const updatedUser={
    name : "Bala",
    email : "bala@1123.com",
    phoneNumber : "7896967699"
};
fetchPut(updatedUser,2);

//DELETE /Users/:id → Delete a user

async function fetchDelete(id){
        const response=await fetch(`${api_url}/${id}`,
            {
           method : "DELETE",
           
    });
    const data= await response.json();
    console.log(data);

    }
fetchDelete(8);