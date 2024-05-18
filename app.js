const express = require('express')

const app = express()

app.set('view engine', 'ejs')


app.listen(3000)

app.get('/' , (req,res) =>{

    const blogs =[
        {title:'Mario Beats Yoshi', snippet:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui suscipit possimus adipisci?"},
        {title:'Yoshi revenge Against Mario', snippet:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui suscipit possimus adipisci?'}
    ]
    res.render('index', {title:'Home', blogs} )
})

app.get('/about' , (req,res) =>{
    res.render('about',{title:'About'})
})

app.get('/blogs/create', (req,res)=>{
    res.render('create',{title:'Criar um novo Blog'})
})

app.use( (req,res) =>{
    res.status(404).render('404',{title:'404'})
})