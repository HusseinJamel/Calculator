let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
  btn.addEventListener('click',()=>{
    if (btn.id == 'clear') {
      display.value = '';
    }
    else if(btn.id == 'delete'){
      let string = display.value.toString();
      display.value = string.substr(0, string.length - 1);
    }
    else if(display.value != '' && btn.id == 'equal'){
      let result = eval(display.value);
      console.log(result);
      display.value = result;
    }
    else if(display.value == '' && btn.id == 'equal'){
      display.value = '';
    }
    else{
      display.value += btn.id;
    }
    btn.style.background = '#000';
    setTimeout(function(){
      btn.style.background = '#111';
    },100)
  })
})
