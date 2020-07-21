console.log("Promises");

let users = [
    {
        name:'mani',
        email:'maansingh@gmail.com',
    },
    {
        name:'rahul',
        email:'rahul@gmail.com',
    },
    {
        name:'ashish',
        email:'ashishrajput@gmail.com',
    },
]

function getUsers(){
    setTimeout(()=>{
        let store = '';
        users.forEach(user=>{
            store += `The user is ${user.name} \n`;
        });
        console.log(store);
    },1000);
}
getUsers();

function createUser(user, callback){
         setTimeout(()=>{
             users.push(user);
             callback();
         },3000);
     }
    
    getUsers();

createUser({name:'ravendra',email:'rajesh@gmail.com'}, getUsers);