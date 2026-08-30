// ===== ОТРИМУЄМО ЕЛЕМЕНТИ =====
const form = document.getElementById('calcForm');
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const typeSelect = document.getElementById('type');
const resultContainer = document.getElementById('calcResult');

// ===== ДАНІ ПРО НОРМИ ВИСІВУ =====
const norms = {
    seed: { label: 'г насіння', rate: 40, unit: 'г', desc: 'звичайне насіння (30-50 г/м²)' },
    seed_premium: { label: 'г насіння', rate: 55, unit: 'г', desc: 'преміум насіння (40-60 г/м²)' },
    roll: { label: 'рулонів', rate: 1.25, unit: 'шт', desc: '1 рулон = 0.8 м², потрібно з запасом' }
};

// ===== ФУНКЦІЯ РОЗРАХУНКУ =====
function calculate(length, width, type) {
    // Перевірка на валідність
    if (length <= 0 || width <= 0 || isNaN(length) || isNaN(width)) {
        return { error: true, message: 'Введіть коректні розміри (числа > 0)' };
    }

    const area = length * width;
    const norm = norms[type];
    if (!norm) {
        return { error: true, message: 'Оберіть тип газону' };
    }

    // Для рулонного газону — розрахунок кількості рулонів
    let amount;
    let unit = norm.unit;
    let detail = norm.desc;

    if (type === 'roll') {
        // 1 рулон = 0.8 м², додаємо 10% запасу
        const rolls = Math.ceil(area / 0.8 * 1.1);
        amount = rolls;
        detail = `Площа: ${area.toFixed(1)} м². 1 рулон покриває 0.8 м². Додано 10% запасу.`;
    } else {
        // Для насіння — г/м²
        const grams = Math.round(area * norm.rate);
        amount = grams;
        detail = `Площа: ${area.toFixed(1)} м². Норма: ${norm.rate} г/м².`;
    }

    return {
        error: false,
        amount: amount,
        unit: unit,
        area: area,
        detail: detail,
        typeLabel: type === 'roll' ? 'Рулонний газон' : (type === 'seed_premium' ? 'Насіння (преміум)' : 'Насіння (звичайне)')
    };
}

// ===== ФУНКЦІЯ ВІДОБРАЖЕННЯ РЕЗУЛЬТАТУ =====
function renderResult(result) {
    if (result.error) {
        resultContainer.innerHTML = `
            <div class="result-error">
                <span>⚠️</span>
                <h3>Помилка</h3>
                <p>${result.message}</p>
            </div>
        `;
        return;
    }

    // Форматуємо число (для великих чисел — з пробілами)
    const formatted = result.amount.toLocaleString('uk-UA');

    resultContainer.innerHTML = `
        <div class="result-active">
            <span class="result-icon">✅</span>
            <h3>${result.typeLabel}</h3>
            <div class="result-amount">${formatted}</div>
            <div class="result-unit">${result.unit}</div>
            <div class="result-detail">${result.detail}</div>
        </div>
    `;
}

// ===== ОБРОБНИК ВІДПРАВКИ ФОРМИ =====
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const type = typeSelect.value;

    const result = calculate(length, width, type);
    renderResult(result);
});