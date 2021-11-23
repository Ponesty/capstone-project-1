const input = document.querySelector('input');
const addBtn = document.querySelector('#add');
const equalBtn = document.querySelector('#equal');
const clrBtn = document.querySelector('#clr');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');



zeroBtn.onclick = () => input.value+='0';
oneBtn.onclick = () => input.value+='1';
twoBtn.onclick = () => input.value+='2';
threeBtn.onclick = () => input.value+='3';






addBtn.onclick = () => input.value+='+';
clrBtn.onclick = () => input.value='';