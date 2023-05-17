let decrement = document.getElementById('minus');
let increment = document.getElementById('add');
let input = document.getElementById('input');

let x = 0 ;
function minus(){
    
    x = x -1 ;
    input.value = x
    if(input.value<0){
        input.style.color='red'
    }
}
function add(){
    x = x + 1 ;
    input.value = x;
    input.style.color = 'green';
    
}
function reset(){
    x = 0 ; 
    input.value = x
    input.style.color='black'
}