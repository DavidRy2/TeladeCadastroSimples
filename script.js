// Adicionando um comportamento simples de validação de senha
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  
  if (password !== confirmPassword) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return;
  }
  
  alert("Cadastro realizado com sucesso!");
  event.target.reset();
});
