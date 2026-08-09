// ===== ДАНІ ПОРАД ПО СЕЗОНАХ =====
const seasonData = {
    spring: {
        title: "🌸 Весняний догляд",
        icon: "🌱",
        tasks: [
            "Прибери сухе листя та сміття граблями",
            "Проведи аерацію ґрунту (проколювання)",
            "Внеси азотні добрива для росту",
            "Підсій насіння на оголених ділянках",
            "Починай полив, якщо довго немає дощу",
            "Перше скошування — на висоті 5-6 см"
        ]
    },
    summer: {
        title: "☀️ Літній догляд",
        icon: "🌿",
        tasks: [
            "Поливай рясно 2-3 рази на тиждень (рано вранці)",
            "Коси раз на 5-7 днів, залишай висоту 4-5 см",
            "Не коси в спеку — це стресує траву",
            "Борись з бур'янами (виривай з коренем)",
            "Перевіряй на шкідників та хвороби",
            "Внось калійні добрива для стійкості до спеки"
        ]
    },
    autumn: {
        title: "🍂 Осінній догляд",
        icon: "🍁",
        tasks: [
            "Прибирай опале листя (не залишай на зиму)",
            "Проведи аерацію та піскування",
            "Внеси фосфорно-калійні добрива",
            "Підсій газон, якщо є прогалини",
            "Останнє скошування — на висоті 5 см",
            "Проведи обробку від грибкових хвороб"
        ]
    },
    winter: {
        title: "❄️ Зимовий догляд",
        icon: "⛄",
        tasks: [
            "Не ходи по газону — трава крихка",
            "Не розчищай сніг — він захищає від морозу",
            "Не поливай газон взимку",
            "Перевір, чи немає крижаної кірки (розбивай)",
            "Плануй весняні роботи заздалегідь",
            "Зберігай інвентар у сухому місці"
        ]
    }
};

// ===== ОТРИМУЄМО ЕЛЕМЕНТИ =====
const seasonButtons = document.querySelectorAll('.season-btn');
const seasonContent = document.getElementById('seasonContent');

// ===== ФУНКЦІЯ ВІДОБРАЖЕННЯ ПОРАД =====
function renderSeason(season) {
    const data = seasonData[season];
    if (!data) return;

    // Формуємо HTML-код
    let html = `
        <div class="season-card">
            <h2>${data.icon} ${data.title}</h2>
            <ul class="season-tasks">
    `;

    data.tasks.forEach(task => {
        html += `<li>${task}</li>`;
    });

    html += `
            </ul>
        </div>
    `;

    // Вставляємо в контейнер
    seasonContent.innerHTML = html;

    // Оновлюємо активний стан кнопок
    seasonButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.season === season) {
            btn.classList.add('active');
        }
    });
}

// ===== ОБРОБНИКИ КЛІКІВ НА КНОПКИ =====
seasonButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const season = btn.dataset.season;
        renderSeason(season);
    });
});

// ===== ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ =====
document.addEventListener('DOMContentLoaded', () => {
    // Показуємо весну за замовчуванням
    renderSeason('spring');
});