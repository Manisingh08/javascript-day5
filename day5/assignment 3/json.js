console.log("JSON");

//https://jsonplaceholder.typicode.com/todos


fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:254,
    title:"JSON",
    body:'SOLMON BOI',
}

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))