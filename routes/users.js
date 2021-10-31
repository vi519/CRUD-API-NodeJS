import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const userRouters = express.Router();

let users =[]

userRouters.get('/',(req,res)=>{
    console.log(users)
    res.send(users);
})

userRouters.post('/',(req,res)=>{
    console.log(req.body);
    const user = req.body;
    users.push({...user,id:uuidv4()});


    res.send(`user added name: ${user.firstname}`)

    console.log(`user added name: ${user.firstname}`)
})

userRouters.get('/:id',(req,res)=>{
    const {id}=req.params;

    const foundUser=users.find(user=>user.id===id);
    res.send(foundUser);
})

userRouters.delete('/:id',(req,res)=>{
   const {id}= req.params;


  console.log(`user with id ${req.params.id} has been deleted`);

  users = users.filter((user) => user.id !== id);

    res.send(`User with ${id} is deleted`)
})

userRouters.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const {firstname}=req.body;
    const user=  users.find((user)=> user.id===id)

    if(firstname) {
        user.firstname=firstname;
    }

    res.send(`${id} is got updated`)
})

export default userRouters;