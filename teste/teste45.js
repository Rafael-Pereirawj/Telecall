
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
  let logado = document.querySelector('#logado');
  
  if (userLogado && userLogado.login) {
    logado.innerHTML = `<i class="fa-solid fa-user" style="color:#d80b0b;"></i> ${userLogado.login}`;
    document.querySelector('.Sair').style.display = 'inline-block';
    document.querySelector('#login3').style.display = 'none'; 
  } else {
    logado.innerHTML = '';
    document.querySelector('.Sair').style.display = 'none'; 
    document.querySelector('.common_btn').style.display = 'inline-block';
    
  }

  function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    logado.innerHTML = '';
    document.querySelector('.Sair').style.display = 'none';
    location.reload()
  }