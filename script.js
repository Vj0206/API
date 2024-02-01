console.log("Welcome to API")



fetch("https://jsonplaceholder.typicode.com/users")

// .then(function(res){
//     return res.json()
// })


// .then (function (data){
//     return console.log(data)
// })


.then((res)=>res.json())
.then((data)=>console.log(data))

const data= {
    title:"world war of 2022",
    body:"this is post body",
    userId:2
}

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"post",
    body:JSON.stringify(data),
    header:{
        "content-type":"application/json"
    }
})
.then(res =>res.json())
.then(res=>console.log(data))