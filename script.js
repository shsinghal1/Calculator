// let input = document.getElementById('input');

function screen(val){
    document.getElementById('input').value += val;

}

function result(){
 let inputValue = document.getElementById('input').value;
 let res = eval(inputValue);
 document.getElementById('input').value = res;
}

function clearAll(){
document.getElementById('input').value = "";
}









// let input = document.getElementById('input');

// let buttons = document.querySelectorAll('button');
// let inputValue ="";
// for(item of buttons){
//     item.addEventListener('click', (e) => {
//         btnText = e.target.innerText;
   
//          if(btnText == 'C'){
//             inputValue = "";
//             input.value = inputValue;
//         }

//         else if(btnText == '='){
//             input.value = eval(inputValue);
//         }

//         else{
//             inputValue += btnText;
//             input.value = inputValue; 
//         }
//     });
// }