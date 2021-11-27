const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


let saves = [];
let index;

app.post('/solution', (req,res) =>{
    let equation = req.body.data;
    if(!equation){
        res.send(`${0}`);
    }
    saves.push(equation);
    index = saves.length;
   // console.log(`This is req: ${equation}`);
    let solution = eval(equation);
    //console.log(solution);
    res.status(200).send(`${solution}`);
});

app.get('/previous', (req,res) => {
    if(saves[index-1] !== undefined){
        res.status(200).send(`${saves[index-1]}`);
        index--;

    }
})

app.get('/next', (req,res) => {
    if(saves[index+1] !== undefined){
        res.status(200).send(`${saves[index+1]}`)
        index++;

    }
})













app.listen(4004, () => console.log(`Server chillin on 4004`)
);