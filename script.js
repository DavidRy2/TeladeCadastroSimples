// Adicionando um comportamento simples de validação de senha
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  
  if (password !== confirmPassword) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return;
  }
  
  // Aqui, você pode adicionar a lógica para enviar os dados de cadastro para o servidor
  alert("Cadastro realizado com sucesso!");
  // Limpar o formulário após o envio bem-sucedido
  event.target.reset();
});
