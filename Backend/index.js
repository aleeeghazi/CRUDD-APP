import express from 'express'
import mongoose  from 'mongoose';
import route from './routes/routes.js'
import cors from 'cors'
import bodyParser from 'body-parser';


const app= express();
const PORT = 8000;


app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

app.use('/', route)


const URL = 'mongodb+srv://ali:crudapp@cluster0.l8vbk.mongodb.net/PROJECT0?retryWrites=true&w=majority'
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    app.listen(PORT, ()=>{
        console.log('server is running on '+ PORT)
    })
}).catch(error => {
    console.log(error.message)})


