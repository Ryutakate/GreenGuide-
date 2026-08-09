// ===== ОТРИМУЄМО ЕЛЕМЕНТИ =====
const form = document.getElementById('contactsForm');
const nameInput = document.getElementById('userName');
const emailInput = document.getElementById('userEmail');
const subjectInput = document.getElementById('userSubject');
const messageInput = document.getElementById('userMessage');
const successMessage = document.getElementById('successMessage');
const resetBtn = document.getElementById('resetFormBtn');

// Поля для помилок
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// ===== ВАЛІДАЦІЯ =====
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    // Проста перевірка email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// ===== ВІДОБРАЖЕННЯ ПОМИЛОК =====
function showError(input, errorElement) {
    input.classList.add('error');
    errorElement.classList.add('show');
}

function hideError(input, errorElement) {
    input.classList.remove('error');
    errorElement.classList.remove('show');
}

// ===== ПЕРЕВІРКА ПОЛЯ ПРИ ВВОДІ (реальний час) =====
nameInput.addEventListener('input', () => {
    if (validateName(nameInput.value)) {
        hideError(nameInput, nameError);
    } else {
        showError(nameInput, nameError);
    }
});

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        hideError(emailInput, emailError);
    } else {
        showError(emailInput, emailError);
    }
});

messageInput.addEventListener('input', () => {
    if (validateMessage(messageInput.value)) {
        hideError(messageInput, messageError);
    } else {
        showError(messageInput, messageError);
    }
});

// ===== ОБРОБНИК ВІДПРАВКИ =====
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримуємо значення
    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    // Валідація
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);

    // Показуємо помилки
    if (!isNameValid) showError(nameInput, nameError);
    else hideError(nameInput, nameError);

    if (!isEmailValid) showError(emailInput, emailError);
    else hideError(emailInput, emailError);

    if (!isMessageValid) showError(messageInput, messageError);
    else hideError(messageInput, messageError);

    // Якщо всі поля валідні
    if (isNameValid && isEmailValid && isMessageValid) {
        // Ховаємо форму, показуємо повідомлення про успіх
        form.style.display = 'none';
        successMessage.classList.add('show');

        // (Тут можна було б відправити дані на сервер)
        console.log('✅ Дані форми:', { name, email, subject, message });
    }
});

// ===== КНОПКА "НАПИСАТИ ЩЕ" =====
resetBtn.addEventListener('click', () => {
    // Ховаємо повідомлення про успіх
    successMessage.classList.remove('show');
    // Показуємо форму
    form.style.display = 'flex';
    // Очищуємо поля
    form.reset();
    // Прибираємо класи помилок
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message.show').forEach(el => el.classList.remove('show'));
});

// ===== ПРИ ЗАВАНТАЖЕННІ =====
document.addEventListener('DOMContentLoaded', () => {
    // Форма відображається, повідомлення приховано
    form.style.display = 'flex';
    successMessage.classList.remove('show');
});