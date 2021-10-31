import express from 'express';
import bodyParser from 'body-parser';
import userRouters from './routes/users.js'
const app =express();
const PORT=5000;

app.use(bodyParser.json());
app.use('/users',userRouters);

app.get('/', (req,res)=>{
    console.log('[TEST]');
    res.send('Hello from homepage')

})
app.listen(PORT, ()=>console.log(`Up and Runing at 5000: http://localhost:${PORT}`))
