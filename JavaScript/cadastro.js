
var btnSignin = document.querySelector("#signin");

var btnSignin2 = document.querySelector("#signin2");

var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body")

btnSignin.addEventListener("click",function () {
     body.className = "sign-in-js"
} );


btnSignin2.addEventListener("click",function () {
     body.className = "sign-in-js"
} );


btnSignup.addEventListener("click",function () {
     body.className = "sign-up-js"
} );




let form = document.getElementById('form')
let nome = document.querySelector('#nome')
let validnome = false

let login = document.querySelector('#login')
let validlogin = false

let nomeMaterno = document.querySelector('#nomeMaterno')
let validnomeMaterno = false

let cpf = document.querySelector('#cpf')
let validcpf = false

let telefone = document.querySelector('#telefone')
let validtelefone = false

let telefoneFixo = document.querySelector('#telefoneFixo')
let validtelefoneFixo = false

let cep = document.querySelector('#cep')
let validcep = false

let email = document.querySelector('#email')
let validemail = false

let data = document.querySelector('#data')
let validdata = false

let senha1 = document.querySelector('#senha1')
let validsenha1 = false

let senha2 = document.querySelector('#senha2')
let validsenha2 = false





nome.addEventListener('keyup', ()=>{
     if(nome.value.length <= 14 ){
          errorValidation(nome)
          validnome = false
          
     }else {

          successValidation(nome)
          validnome = true
     }

})

login.addEventListener('keyup', ()=>{
     if(login.value.length <= 5 ){
          errorValidation(login)
          validlogin = false
     }else {

          successValidation(login)
          validlogin = true
     }

})

nomeMaterno.addEventListener('keyup', ()=>{
     if(nomeMaterno.value.length <= 14 ){
          errorValidation(nomeMaterno)
          validnomeMaterno = false
     }else {

          successValidation(nomeMaterno)
          validnomeMaterno = true
     }

})

cpf.addEventListener('keyup', ()=>{
     if(cpf.value.length < 14  ){
          errorValidation(cpf)
          validcpf = false
     
     }else{
          successValidation(cpf)
          validcpf = true
     }


})

telefone.addEventListener('keyup', ()=>{
     if(telefone.value.length < 15 ){
          errorValidation(telefone)
          validtelefone = false
     
     }else{
          successValidation(telefone)
          validtelefone = true
     }


})

telefoneFixo.addEventListener('keyup', ()=>{
     if(telefoneFixo.value.length < 14  ){
          errorValidation(telefoneFixo)
          validtelefoneFixo = false
     
     }else{
          successValidation(telefoneFixo)
          validtelefoneFixo = true
     }


})

cep.addEventListener('keyup', ()=>{
     if(cep.value.length < 9 ){
          errorValidation(cep)
          validcep = false
     
     }else{
          successValidation(cep)
          validcep = true
     }


})


email.addEventListener('keyup', ()=>{
     if(email.value.length < 10 ){
          errorValidation(email)

          validemail = false
     
     }else{
          successValidation(email)
          validemail = true
     }


})


data.addEventListener('keyup', ()=>{
     if(data.value.length < 10 ){
          errorValidation(data)
          validdata = false
     
     }else{
          successValidation(data)
          validdata = true
     }


})

senha1.addEventListener('keyup', ()=>{
     if(senha1.value.length < 8 ){
          errorValidation(senha1)
          validsenha1 = false
     
     }else{
          successValidation(senha1)
          validsenha1 = true
     }


})


senha2.addEventListener('keyup', ()=>{
     if(senha1.value != senha2.value){
          errorValidation(senha2)
          validsenha2 = false
     
     }else{
          successValidation(senha2)
          validsenha2 = true
     }


})


function errorValidation(input, ) {
     let formControl = input.parentElement;
     
     formControl.className = 'label-input error'

}


function successValidation(input, ) {
     let formControl = input.parentElement;
     
     formControl.className = 'label-input sucesso'

}


//******************Cadastrar*************************//

function cadastrar() {
     if (validnome && validcpf && validtelefone && validtelefoneFixo && validcep && validemail && validdata && validsenha1 && validsenha2) {

       let listaNome = JSON.parse(localStorage.getItem('listaNome') || '[]');
       listaNome.push({
         loginCad: login.value,
         senhaCad: senha1.value
       });
       localStorage.setItem('listaNome', JSON.stringify(listaNome));
       handlepopup(true); // Abrir o modal
     } else {
       
     }
   }
   
   const popup = document.getElementById('popup');
   
   function handlepopup(open) {
     if (open) {
       popup.classList.add('opened');
     } else {
       popup.classList.remove('opened');
       
     }
   }
   

//******************Cadastrar*************************//



form.addEventListener('submit', (e) => {
     e.preventDefault()

     checkInputs()
})



//******************Formatações dos inputs*************************//



function ajustaCpf(v) {
     v.value = v.value.replace(/\D/g, "");
     //Adiciona ponto após os três primeiros números
     v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
     //Adiciona ponto após os seis primeiros números
     v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
     //Adiciona o hífen antes dos últimos 2 caracteres
     v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
   }
   
   function ajustaNumeros(v) {
     // Remove os caracteres não numéricos
     v.value = v.value.replace(/\D/g, "");
   }
   
   function ajustaTelefone(v) {
     v.value = v.value.replace(/\D/g, "");
     //Adiciona parênteses no DDD
     v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
     //Adiciona hífen no número do telefone
     v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
   }
   
  
function validarLetras(input) {
     var valor = input.value;
     var novoValor = valor.replace(/[^A-Za-z]/g, '');
     input.value = novoValor;
   }

function validarNumeros(event) {
     var tecla = event.which || event.keyCode;
     if (tecla >= 48 && tecla <= 57) {
       return true;
     } else {
       return false;
     }
   }
   
   function formatarCep(input) {
     var valor = input.value;
     var novoValor = valor.replace(/\D/g, '');
     
     if (novoValor.length > 5) {
       novoValor = novoValor.substring(0, 5) + '-' + novoValor.substring(5);
     }
     
     input.value = novoValor;
   }

function validarNome(input) {
     var valor = input.value;
     var regex = /[^a-zA-Z\s]/g;
     var novoValor = valor.replace(regex, '');
     novoValor = novoValor.toLowerCase().replace(/^(.)|\s(.)/g, function($1) {
       return $1.toUpperCase();
     });
     input.value = novoValor;
   }


   function validarNomeMaterno(input) {
     var valor = input.value;
     var regex = /[^a-zA-Z\s]/g;
     var novoValor = valor.replace(regex, '');
     novoValor = novoValor.toLowerCase().replace(/^(.)|\s(.)/g, function($1) {
       return $1.toUpperCase();
     });
     input.value = novoValor;
   }

   function ajustaData(v) {
     v.value = v.value.replace(/\D/g, "");
     // Adiciona a barra entre o dia e o mês
     v.value = v.value.replace(/^(\d{2})(\d)/, "$1/$2");
     // Adiciona a barra entre o mês e o ano
     v.value = v.value.replace(/(\d{2})(\d)/, "$1/$2");
   }

 /* 
var dataInput = document.getElementById("data");
var maxDate = new Date("2023-12-31");

dataInput.addEventListener("input", function() {
  var selectedDate = new Date(dataInput.value);
  if (selectedDate > maxDate) {
    dataInput.value = "";
  }
});
*/




//******************Formatações dos inputs*************************//




 
  
/*

   function logar(){

     var login = document.getElementById('login').value
     var senha = document.getElementById('senha2').value
     var loginFim = document.getElementById('loginFim').value
     var senhaFim = document.getElementById('senhaFim').value

     if(login == loginFim  &&  senha ==  senhaFim ){
          
          
          alert('Bem vindo')
          location.href = "index.html";

     }else{
          
          alert('Usuario ou senha incorretos ' ,loginFim)

     }

}



*/








//******************ver senha*************************//
function toggleSenhaVisibility(inputId) {
     var senhaInput = document.getElementById(inputId);
     var toggleSenhaButton = senhaInput.nextElementSibling;
 
     if (senhaInput.type === "password") {
       senhaInput.type = "text";
       toggleSenhaButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
     } else {
       senhaInput.type = "password";
       toggleSenhaButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
     }
   }

//******************ver senha*************************//






 function entra() {
     let loginFim = document.querySelector('#loginFim');
     let senhaFim = document.querySelector('#senhaFim');
     let listaUser = [];
     let userValid = {
       login: '',
       senha: ''
     };
   
     listaUser = JSON.parse(localStorage.getItem('listaNome'));
   
     // Verifica se os campos de login e senha estão vazios
     if (loginFim.value === '' || senhaFim.value === '') {
       
       return;
     }
   
     listaUser.forEach((item) => {
       if (loginFim.value === item.loginCad && senhaFim.value === item.senhaCad) {
         userValid = {
           login: item.loginCad,
           senha: item.senhaCad
         };
       }
     });
   
     if (loginFim.value === userValid.login && senhaFim.value === userValid.senha) {
       window.location.href = "index.html";
   
       let token = Math.random().toString(16).substr(2);
       localStorage.setItem('token', token);
   
       localStorage.setItem('userLogado', JSON.stringify(userValid));
     } else {
       loginFim.focus();
     }
   }

   









   

