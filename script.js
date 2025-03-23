let categories = {
    animals: [
        { word: "cat", transcription: "кэт", meaning: "🐱 Кошка" },
        { word: "dog", transcription: "дог", meaning: "🐶 Собака" },
        { word: "elephant", transcription: "элефант", meaning: "🐘 Слон" },
        { word: "lion", transcription: "лайн", meaning: "🦁 Лев" },
        { word: "tiger", transcription: "тайгер", meaning: "🐯 Тигр" },
        { word: "rabbit", transcription: "рэббит", meaning: "🐰 Кролик" },
        { word: "fox", transcription: "фокс", meaning: "🦊 Лиса" }
    ],
    transport: [
        { word: "car", transcription: "кар", meaning: "🚗 Машина" },
        { word: "bus", transcription: "бас", meaning: "🚌 Автобус" },
        { word: "train", transcription: "трэйн", meaning: "🚆 Поезд" },
        { word: "bike", transcription: "байк", meaning: "🚲 Велосипед" },
        { word: "plane", transcription: "плэйн", meaning: "✈️ Самолет" },
        { word: "ship", transcription: "шип", meaning: "🚢 Корабль" }
    ],
    food: [
        { word: "apple", transcription: "эпл", meaning: "🍎 Яблоко" },
        { word: "banana", transcription: "банана", meaning: "🍌 Банан" },
        { word: "carrot", transcription: "кэррот", meaning: "🥕 Морковь" },
        { word: "pizza", transcription: "пицца", meaning: "🍕 Пицца" },
        { word: "cheese", transcription: "чиз", meaning: "🧀 Сыр" }
    ]
};

let currentCategory = [];
let currentIndex = 0;

function startApp() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("categories").style.display = "block";
}

function loadCategory(category) {
    if (!categories[category] || categories[category].length === 0) {
        alert("Нет слов в этой категории");
        return;
    }
    currentCategory = categories[category];
    currentIndex = 0;
    document.getElementById("categories").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("category-title").innerText = category;
    showWord();
}

function showWord() {
    if (currentCategory.length === 0) return;
    let wordData = currentCategory[currentIndex];
    document.getElementById("word-text").innerText = `🔤 ${wordData.word}`;
    document.getElementById("word-transcription").innerText = `📖 ${wordData.transcription}`;
    document.getElementById("word-meaning").innerText = `✨ ${wordData.meaning}`;
}

function nextWord() {
    currentIndex = (currentIndex + 1) % currentCategory.length;
    showWord();
}

function prevWord() {
    currentIndex = (currentIndex - 1 + currentCategory.length) % currentCategory.length;
    showWord();
}

function goBack() {
    document.getElementById("game-area").style.display = "none";
    document.getElementById("categories").style.display = "block";
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}
