let summa = document.getElementById('sum');
let personer = document.getElementById('numberOfFriends');
let procent = document.getElementById('tip');
let result = document.getElementById('result');
function calculate(){
   result.innerHTML =  Number(summa.value) / Number(personer.value ) + (Number(procent.value)/100) + ' KR';  ;
}