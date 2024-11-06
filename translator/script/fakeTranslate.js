// Объект dictionary для хранения переводов
const dictionary = {
    "hello": "здравствуйте",
    "world": "мир",
    "friend": "друг",
    "good": "хорошо",
    "day": "день",
    "night": "ночь",
    "love": "любовь",
    "peace": "мир",
    "cat": "кот",
    "dog": "собака",
    "water": "вода",
    "fire": "огонь",
    "earth": "земля",
    "wind": "ветер",
    "sun": "солнце",
    "moon": "луна",
    "tree": "дерево",
    "flower": "цветок",
    "book": "книга",
    "computer": "компьютер"
};

export function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        // Имитация асинхронной операции с задержкой

        setTimeout(() => {
            if (dictionary[word.toLowerCase()]) {
                resolve(dictionary[word.toLowerCase()]);
            } else {
                reject("Перевод не найден.");
            }
        }, 1000); // Задержка 1 секунда
    });
}
