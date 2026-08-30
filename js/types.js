// ===== ДАНІ ПРО ВИДИ ГАЗОНІВ =====
const typesData = [
    {
        id: 'parterre',
        icon: '🏛️',
        name: 'Партерний газон',
        image: '../img/parterre.webp',
        short: 'Елітний, декоративний, для парадних місць.',
        badge: '⭐ Елітний',
        hint: 'Потрібен ретельний догляд',
        description: 'Партерний газон — найвищий клас газонів. Він створюється для оформлення парадних зон, клумб, адміністративних будівель. Має однорідний, густий, оксамитовий покрив насиченого зеленого кольору. Потребує регулярної стрижки, поливу та підживлення.',
        features: [
            'Густий та рівномірний покрив',
            'Насичений зелений колір',
            'Вимагає частого скошування',
            'Не переносить витоптування'
        ],
        tip: '💡 Підходить для парадних зон, перед входом до будинку, біля фонтанів та статуй.'
    },
    {
        id: 'ordinary',
        icon: '🌱',
        name: 'Звичайний газон',
        image: '../img/ordinary.webp',
        short: 'Універсальний, для дач та садів.',
        badge: '👍 Популярний',
        hint: 'Невибагливий у догляді',
        description: 'Звичайний газон — найпоширеніший тип. Складається з суміші трав, стійких до витоптування та посухи. Ідеальний для дачних ділянок, садів, дитячих майданчиків. Не потребує надскладного догляду, але виглядає акуратно при регулярному скошуванні.',
        features: [
            'Стійкий до витоптування',
            'Невибагливий у догляді',
            'Швидко відновлюється',
            'Доступна ціна насіння'
        ],
        tip: '💡 Ідеальний вибір для дачі, саду, зони відпочинку з дітьми та домашніми улюбленцями.'
    },
    {
        id: 'sport',
        icon: '⚽',
        name: 'Спортивний газон',
        image: '../img/sport.webp',
        short: 'Міцний, для футболу та активного відпочинку.',
        badge: '💪 Міцний',
        hint: 'Висока зносостійкість',
        description: 'Спортивний газон створюється з трав, які витримують інтенсивні навантаження: біг, падіння, удари. Має потужну кореневу систему та густий покрив. Використовується на футбольних полях, тенісних кортах, майданчиках для гольфу.',
        features: [
            'Надміцний покрив',
            'Швидке відновлення після пошкоджень',
            'Густа коренева система',
            'Стійкість до витоптування'
        ],
        tip: '💡 Обирай для спортивних майданчиків, футбольних полів, зон активного відпочинку.'
    },
    {
        id: 'mauritanian',
        icon: '🌸',
        name: 'Мавританський газон',
        image: '../img/mauritanian.webp',
        short: 'Квітучий, з різнобарвними квітами.',
        badge: '🌺 Квітучий',
        hint: 'Приваблює бджіл та метеликів',
        description: 'Мавританський газон — це суміш злакових трав та квітучих рослин (маки, волошки, ромашки, мальви). Він не потребує частого скошування і створює яскравий різнобарвний килим, який змінюється протягом сезону. Приваблює бджіл, метеликів та інших комах.',
        features: [
            'Яскравий квітучий вигляд',
            'Не потребує частого скошування',
            'Приваблює комах-запилювачів',
            'Змінюється протягом сезону'
        ],
        tip: '💡 Чудовий вибір для дачі, якщо хочеш створити куточок дикої природи та радіти квітам все літо.'
    }
];

// ===== ОТРИМУЄМО ЕЛЕМЕНТИ =====
const typesGrid = document.getElementById('typesGrid');
const typesDetail = document.getElementById('typesDetail');

// ===== ФУНКЦІЯ ВІДОБРАЖЕННЯ КАРТОК =====
function renderCards() {
    typesGrid.innerHTML = '';

    typesData.forEach(type => {
        const card = document.createElement('div');
        card.className = 'type-card';
        card.dataset.id = type.id;

        card.innerHTML = `
            <div class="card-image">
                <img src="${type.image}" alt="${type.name}" loading="lazy" />
            </div>
            <span class="card-icon">${type.icon}</span>
            <h3>${type.name}</h3>
            <p class="card-short">${type.short}</p>
            <span class="card-badge">${type.badge}</span>
            <div class="card-hint">👆 ${type.hint}</div>
        `;

        card.addEventListener('click', () => {
            document.querySelectorAll('.type-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            showDetail(type.id);
        });

        typesGrid.appendChild(card);
    });
}

// ===== ФУНКЦІЯ ВІДОБРАЖЕННЯ ДЕТАЛЬНОЇ ІНФОРМАЦІЇ =====
function showDetail(id) {
    const type = typesData.find(t => t.id === id);
    if (!type) return;

    let featuresHtml = '';
    type.features.forEach(f => {
        featuresHtml += `<li>${f}</li>`;
    });

    typesDetail.innerHTML = `
        <div class="detail-active">
            <div class="detail-image">
                <img src="${type.image}" alt="${type.name}" loading="lazy" />
            </div>
            <div class="detail-header">
                <span>${type.icon}</span>
                <h2>${type.name}</h2>
            </div>
            <p class="detail-description">${type.description}</p>
            <ul class="detail-features">${featuresHtml}</ul>
            <div class="detail-tip">${type.tip}</div>
        </div>
    `;
}

// ===== ПРИ ЗАВАНТАЖЕННІ =====
document.addEventListener('DOMContentLoaded', () => {
    renderCards();

    // Показуємо перший вид за замовчуванням (через 0.3с для анімації)
    setTimeout(() => {
        const firstCard = document.querySelector('.type-card');
        if (firstCard) {
            firstCard.click();
        }
    }, 300);
});