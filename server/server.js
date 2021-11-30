const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


let saves = [];
let index

app.post('/solution', (req,res) =>{
    let equation = req.body.data;
    if(!equation){
        res.send(`${0}`);
    }
    saves.push(equation);
    index = saves.length;
    let solution = eval(equation);
    res.status(200).send(`${solution}`);
});

app.get('/previous', (req,res) => {
    if(index-1 >= 0){
        res.status(200).send(`${saves[index-1]}`);
        index--;

    }else{
        res.send(``);
    }
})

app.get('/next', (req,res) => {
    if(index+1 < saves.length){
        res.status(200).send(`${saves[index+1]}`)
        index++;

    }else{
        res.send(``);
    }
})

app.get('/history', (req,res) => {
    if(saves){
        res.status(200).send(`${saves}`)

    }
    
})













app.listen(4004, () => console.log(`Server chillin on 4004`)
);