let isLoggedIn = false;
let currentBalance = 45.50;

function toggleMenu() {
  const navigation = document.getElementById('mainNavigation');
  const menuToggle = document.querySelector('.menu-toggle');
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', opening);
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
}
function handleLogin(event) {
  event.preventDefault();
  const cpf = document.getElementById('cpf').value;
  if (cpf) { isLoggedIn = true; document.getElementById('loginView').style.display = 'none'; document.getElementById('dashboardView').style.display = 'grid'; }
}
function handleLogout() {
  isLoggedIn = false;
  document.getElementById('dashboardView').style.display = 'none';
  document.getElementById('loginView').style.display = 'block';
  document.querySelector('#loginView form').reset();
  document.getElementById('rechargeValue').value = '';
  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('selected'));
  document.getElementById('successAlert').style.display = 'none';
}
function handleRegistration(event) {
  event.preventDefault();
  const password = document.getElementById('registrationPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const alert = document.getElementById('registrationAlert');
  if (password !== confirmPassword) { alert.className = 'alert alert-error'; alert.innerText = 'As senhas não coincidem.'; alert.style.display = 'block'; return; }
  alert.className = 'alert alert-success'; alert.innerText = 'Cadastro criado com sucesso! Você já pode entrar na Área do Usuário.'; alert.style.display = 'block'; event.target.reset();
}
function selectPreset(value, button) { document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('selected')); button.classList.add('selected'); document.getElementById('rechargeValue').value = value; }
function handleRecharge(event) {
  event.preventDefault(); const input = document.getElementById('rechargeValue'); const amount = parseFloat(input.value);
  if (amount && amount > 0) { currentBalance += amount; document.getElementById('cardBalance').innerText = `R$ ${currentBalance.toFixed(2).replace('.', ',')}`; const alert = document.getElementById('successAlert'); alert.style.display = 'block'; input.value = ''; document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('selected')); setTimeout(() => { alert.style.display = 'none'; }, 4000); }
}
