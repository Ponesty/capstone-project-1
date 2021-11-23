const input = document.querySelector('input');

document.querySelector('#add').onclick = () => input.value+='+';
document.querySelector('#subtract').onclick = () => input.value+='-';
document.querySelector('#multiply').onclick = () => input.value+='*';
document.querySelector('#divide').onclick = () => input.value+='/';
document.querySelector('#clr').onclick = () => input.value='';
document.querySelector('#decimal').onclick = () => input.value+='.';

document.querySelector('#one').onclick = () => input.value+='1';
document.querySelector('#two').onclick = () => input.value+='2';
document.querySelector('#three').onclick = () => input.value+='3';
document.querySelector('#four').onclick = () => input.value+='4';
document.querySelector('#five').onclick = () => input.value+='5';
document.querySelector('#six').onclick = () => input.value+='6';
document.querySelector('#seven').onclick = () => input.value+='7';
document.querySelector('#eight').onclick = () => input.value+='8';
document.querySelector('#nine').onclick = () => input.value+='9';
document.querySelector('#zero').onclick = () => input.value+='0';

document.querySelector('#equal').onclick = () => input.value = eval(input.value);