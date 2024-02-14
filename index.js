const express = require('express');
const app = express();
const cors = require('cors');
const port =  4000;



app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin  : ["http://localhost:4000"],
    methods : ["GET", "POST"],
    credentials : true
}));

app.use('/', (req,res, next)=>{console.log('route path / is used');
        next();
});

app.get('/', (req,res)=>{
    res.json({hey : 'you aree connected'});
})


app.get('/first' , (req, res, next)=>{
        console.log("2nd time");
    res.send('first url');
});

app.get('/:ipara' , (req, res)=>{
    res.send(req.params);
});


app.use('/first', (req,res, next)=>{console.log('route path /first');
        next();
});
 





app.listen(port, ()=> {console.log(`Server started at ${port}`)});
