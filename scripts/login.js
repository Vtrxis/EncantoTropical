function validarFormulario(event) {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const form = document.querySelector(".login-form");

  const mensagensErro = document.querySelectorAll(".error-message");
  mensagensErro.forEach((msg) => msg.remove());

  let valid = true;

  if (email === "") {
    const erroEmail = document.createElement("p");
    erroEmail.textContent = "O campo de e-mail não pode estar vazio.";
    erroEmail.classList.add("error-message");
    erroEmail.style.color = "red";
    form.appendChild(erroEmail);
    valid = false;
  }

  if (senha === "") {
    const erroSenha = document.createElement("p");
    erroSenha.textContent = "O campo de senha não pode estar vazio.";
    erroSenha.classList.add("error-message");
    erroSenha.style.color = "red";
    form.appendChild(erroSenha);
    valid = false;
  }

  if (valid) {
    return true; 
  }

  event.preventDefault();
  return false; 
}
