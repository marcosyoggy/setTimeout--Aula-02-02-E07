const time_Visor = document.querySelector('.time_Visor')
const time_Visor_2 = document.querySelector('.time_Visor_2')
const button_Timer = document.querySelector('.button_Timer')
const body_Ref = document.querySelector('body')

let get_Number_ID
let result_Sum

/* ------------------ CLICK EVENT --------------------------------- */
button_Timer.addEventListener('click', () => {
    if(get_Number_ID >= 1){
    console.log('Este deveria ser o ponto final do Timer!!!')
    Stop_Timer()
  } 

  number_ID = setTimeout((number_Calc) => {
  let sum = number_Calc * 2
  result_Sum = sum
  get_Number_ID = number_ID
  time_Visor.textContent = 'Click no button e...'
  time_Visor_2.textContent = '...a mágica acontece!!!!'

  new_Element_to_Message_1() 

  console.log(get_Number_ID)
  console.log(result_Sum)
  
}, 2000 , 50);
})
/* -------------------------------------------------------------- */
 
function new_Element_to_Message_1 () {
  const new_Div_1 = document.createElement('p')
  new_Div_1.textContent = `O ID atual de "setTimeout()" é: ${get_Number_ID}...Após 2 segundos está mensagem será exibida;`
  body_Ref.append(new_Div_1)
  new_Div_1.style.background = 'green'
  new_Div_1.classList.add('text-center','text-white','my-2')
}

function Stop_Timer () {
  clearTimeout(get_Number_ID)
  const new_Div_2 = document.createElement('p')
  new_Div_2.textContent = `O ID atual de "setTimeout()" é: ${get_Number_ID}...Após clicar novamente no botão...depois que a primeira mensagem foi exibida, o Timer deve ser parado;`
  body_Ref.append(new_Div_2)
  new_Div_2.style.background = 'green'
  new_Div_2.classList.add('text-center','text-white','my-2')
}
  

  



  
  
  
   




  
  


  


