// Получаем элементы из HTML (кнопки, поля, надписи)
const nicknameInput = document.getElementById('nickname');
const nicknameDisplay = document.getElementById('nickname-display');
const colorPicker = document.getElementById('nickname-color');
const passBtn = document.getElementById('pass-btn');
const rewardsModal = document.getElementById('rewards-modal');
const closeRewardsBtn = document.getElementById('close-rewards');
const createRoomBtn = document.getElementById('create-room-btn');
const joinRoomInput = document.getElementById('room-code-input');
const joinRoomBtn = document.getElementById('join-room-btn');
const profileScreen = document.getElementById('profile-screen');
const gameScreen = document.getElementById('game-screen');

// 1. Плавная смена цвета никнейма
colorPicker.addEventListener('input', (event) => {
  // Когда выбираешь цвет, меняем цвет текста у превью
  nicknameDisplay.style.color = event.target.value;
});

// По умолчанию ставим текст из поля никнейма, если он есть
nicknameInput.addEventListener('input', (e) => {
  nicknameDisplay.textContent = e.target.value || 'Макс';
});

// 2. Окно «Игровой пасс» (просто показать/скрыть)
passBtn.addEventListener('click', () => {
  rewardsModal.style.display = 'block';
});

closeRewardsBtn.addEventListener('click', () => {
  rewardsModal.style.display = 'none';
});

// Функция, которая закрывает модалку, если нажать вне её
window.addEventListener('click', (e) => {
  if (e.target === rewardsModal) {
    rewardsModal.style.display = 'none';
  }
});

// 3. Генерация кода комнаты
function generateRoomCode() {
  // Math.random() даёт случайное число от 0 до 1
  // * 900 даёт число от 0 до почти 900
  // + 100 делает диапазон от 100 до 999
  const randomNumber = Math.floor(Math.random() * 900) + 100;
  return 'ROOM-' + randomNumber;
}

createRoomBtn.addEventListener('click', () => {
  const roomCode = generateRoomCode();
  alert('Код твоей комнаты: ' + roomCode);
  // Тут позже будет код для отправки в Firebase/Supabase
  console.log('Создана комната:', roomCode);
});

// 4. Вход по коду (заглушка)
joinRoomBtn.addEventListener('click', () => {
  const code = joinRoomInput.value.trim();
  if (!code) {
    alert('Введи код комнаты!');
    return;
  }
  // Тут позже будет проверка кода в Firebase/Supabase
  alert('Пытаемся войти в комнату: ' + code);
  console.log('Попытка входа в комнату:', code);

  // Пока просто переключаем экран (чтобы видеть, что кнопка работает)
  profileScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
});
