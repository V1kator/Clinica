window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-topo").style.display = "block";
  } else {
    document.getElementById("btn-topo").style.display = "none";
  }
}

document.getElementById("btn-topo").onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

/*Js do pop-up de e-mail*/
document.querySelector('.newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio real do formulário
  showPopupMessage();
});

function showPopupMessage() {
  var popup = document.getElementById('popup-message');
  popup.classList.add('show'); // Exibe o pop-up

  // Oculta o pop-up após 3 segundos
  setTimeout(function() {
      popup.classList.remove('show');
  }, 3000);
}

