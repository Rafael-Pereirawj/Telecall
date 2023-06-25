

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
