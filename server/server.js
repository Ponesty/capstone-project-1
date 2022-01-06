const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


let saves = []; //The array that stores the equations the user provides
let index // This will be used to keep track of indexes in array

app.post('/solution', (req,res) =>{ //Server is receiving equation user sent.
    let equation = req.body.data; //equation user sent being assigned to equation.
    if(!equation){//if user sends a blank input, we return 0 back to client
        res.send(`${0}`);
    }
    saves.push(equation); //adding users equation into saves array
    index = saves.length; //setting index to array length for use later below
    let solution = Function("return " + equation)(); //assigning solution the answer to users equation
    //let solution = eval(equation);
    res.status(200).send(`${solution}`);// sending the answer back to the client
});

app.get('/previous', (req,res) => { //getting the saved equations from server to client individually
    if(index-1 >= 0){ //making sure index is an actual index of the saves array
        res.status(200).send(`${saves[index-1]}`);//sending back the saved equation at the index.
        index--; // decreasing index so index starts at the next value the user may need if previous button is pressed again.

    }else{
        res.send(``);//send nothing back to the client if index is less than  0;
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