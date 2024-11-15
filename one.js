const questions = [
    {
        question: "1. Как вы предпочитаете проводить свое свободное время?",
        answers: [
            { text: "А) На свежем воздухе, занимаясь спортом", breed: "Доберман" }, 
            { text: "Б) На уютном диване с книгой или фильмом", breed: "Чихуахуа" },
            { text: "В) Прогулки в парке или на прогулке с друзьями", breed: "Хаски" },
            { text: "Г) Играя с детьми или домашними животными", breed: "Корги" },
            { text: "Д) Исследуя новые места или занимаясь хобби", breed: "Такса" }
        ], 
        image: "img/1.jpeg"
    },
    {
        question: "2. Как вы реагируете на стрессовые ситуации?",
        answers: [
            { text: "А) Анализирую ситуацию и принимаю решение", breed: "Доберман" },
            { text: "Б) Прячусь, чтобы переждать бурю", breed: "Чихуахуа" },
            { text: "В) Отвлекаюсь на активность или спорт", breed: "Хаски" },
            { text: "Г) Стараюсь найти радость в мелочах и поддерживать позитив", breed: "Корги" },
            { text: "Д) Эти ситуации заставляют меня действовать и фиксироваться на решении", breed: "Такса" }
        ],
        image: "img/2.jpeg"
    },
    {
        question: "3. Как вы относитесь к новой компании?",
        answers: [
            { text: "А) Люблю знакомиться с новыми людьми", breed: "Хаски" },
            { text: "Б) Нуждаюсь в некотором времени, чтобы адаптироваться", breed: "Такса" },
            { text: "В) Быстро нахожу общий язык и общаюсь легко", breed: "Корги" },
            { text: "Г) Я больше интроверт и предпочитаю небольшую компанию", breed: "Чихуахуа" },
            { text: "Д)Чувствую себя комфортно, ведя себя уверенно", breed: "Доберман" }
        ],
        image: "img/3.jpeg"
    },
    {
        question: "4. Какой стиль жилья вам ближе?",
        answers: [
            { text: "А) Большой дом с двором", breed: "Хаски" },
            { text: "Б) Уютная квартира в центре", breed: "Чихуахуа" },
            { text: "В) Небольшой, но просторный дом", breed: "Корги" },
            { text: "Г) Уютная дача, где можно уединиться", breed: "Такса" },
            { text: "Д) Современное жилье с возможностью заниматься спортом рядом", breed: "Доберман" }
        ],
        image: "img/4.jpeg"
    },
    {
        question: "5. Как вы относитесь к активности?",
        answers: [
            { text: "А) Я предпочитаю быть в движении и заниматься спортом", breed: "Доберман" },
            { text: "Б) Неправда, я предпочитаю оставаться дома", breed: "Чихуахуа" },
            { text: "В) Я люблю активные выходные, но не критично", breed: "Хаски" },
            { text: "Г) Я ценю баланс между активностью и отдыхом", breed: "Корги" },
            { text: "Д) Я люблю гулять и открывать новое", breed: "Такса" }
        ],
        image: "img/5.jpeg"
    },
    {
        question: "6. Какой ваш идеальный выходной?",
        answers: [
            { text: "А) Поездка на природу с активным отдыхом", breed: "Хаски" },
            { text: "Б) Уютный вечер в домашней обстановке", breed: "Чихуахуа" },
            { text: "В) Время, проведенное с друзьями и семьей", breed: "Корги"},
            { text: "Г) Пробежка или тренировка в зале", breed: "Доберман" },
            { text: "Д) Люблю исследовать новые места и открывать новые кафе", breed: "Такса" }
        ],
        image: "img/6.jpeg"
    },
    {
        question: "7. Как вы относитесь к дисциплине и порядку?",
        answers: [
            { text: "А) Для меня это важно; я организован", breed: "Доберман"},
            { text: "Б) Я предпочитаю свободу, лишнюю дисциплину не люблю", breed: "Чихуахуа"},
            { text: "В) Важно, но не всегда придерживаюсь правил", breed: "Хаски"},
            { text: "Г) Я стараюсь поддерживать порядок в своем окружении", breed: "Корги"},
            { text: "Д) Устанавливаю свои правила, но иногда могу их нарушить", breed: "Такса"}
        ],
        image: "img/7.jpeg"
    },
    {
        question: "8. Какое место вы наиболее предпочитаете для отдыха?",
        answers: [
            { text: "А) На пляже, в теплой погоде", breed: "Хаски" },
            { text: "Б) В комфортной гостинице или на даче", breed: "Чихуахуа" },
            { text: "В) В парке или на пикнике с друзьями", breed: "Корги" },
            { text: "Г) На тренировках или спортивных мероприятиях", breed: "Доберман" },
            { text: "Д) Исследуя новые города и культуры", breed: "Такса" }
        ],
        image: "img/8.jpeg"
    },
    {
        question: "9. Как вы относитесь к воспитанию домашнего питомца?",
        answers: [
            { text: "А) Сразу стараюсь установить правила и границы", breed: "Доберман" },
            { text: "Б) Легко позволяю питомцу делать, что он хочет", breed: "Чихуахуа" },
            { text: "В) Применяю положительные методы для обучения", breed: "Корги" },
            { text: "Г) Долгая и активная работа — моя стратегия", breed: "Хаски" },
            { text: "Д) Стараюсь понять потребности питомца и реагировать на них", breed: "Такса" }
        ],
        image: "img/9.jpeg"
    },
    {
        question: "10. К каким людям вы тянетесь больше всего?",
        answers: [
            { text: "А) К уверенным и решительным", breed: "Доберман" },
            { text: "Б) К спокойным и уравновешенным", breed: "Чихуахуа" },
            { text: "В) К активным и энергичным", breed: "Хаски" },
            { text: "Г) К добродушным и позитивным", breed: "Корги" },
            { text: "Д) К любознательным и предприимчивым", breed: "Такса" }
        ],
        image: "img/10.jpeg"
    }
];

let scores = {              /* Подсчет баллов каждой породы */
    Доберман: 0,
    Чихуахуа: 0,
    Хаски: 0,
    Корги: 0,
    Такса: 0,
};

let currentQuestionIndex = 0;   /* индекс текущего вопроса */

document.getElementById("start-button").addEventListener("click", startTest);   /* кнопка начало теста */

function startTest() {                                                  /* скрываем кнопку начала теста и */
    document.getElementById("start-button").style.display = "none";   /* вызываем функцию showQuestion, чтобы отобразить первый вопрос на экране */
    showQuestion(currentQuestionIndex, "question-container");

}

function showQuestion(currentQuestionIndex, containerId) {                /* отображение текущего вопроса и вариантов ответов */
    const questionContainer = document.getElementById(containerId);
    const questionElement = document.getElementById("question");
    const questionImage = document.getElementById("image");

    const answerButtons = document.querySelectorAll(".answer-button");

    questionContainer.style.display = "block";
    questionElement.textContent = questions[currentQuestionIndex].question;  /* Устанавливаем текст текущего вопроса в элемент вопроса */

    questionImage.src = questions[currentQuestionIndex].image; // Установка источника изображения

    /* Для каждой кнопки ответов обновляем текст на кнопках и назначаем обработчик события, 
    чтобы при нажатии вызывалась функция selectAnswer, передавая в нее собаку, ассоциированную с нажимаемым ответом */
    answerButtons.forEach((button, index) => {
    button.textContent = questions[currentQuestionIndex].answers[index].text;
    button.onclick = () => selectAnswer(questions[currentQuestionIndex].answers[index].breed);
    button.style.display = "block"; // Убедитесь, что кнопки отображаются

    });
}

function selectAnswer(breed) {
    scores[breed]++;    /* увеличивает счетчик (балл) для выбранной породы */
    currentQuestionIndex++;  /* переходим к следующему вопросу */

    if (currentQuestionIndex < questions.length) {     /* проверяем, остались ли еще вопросы; если индекс текущего вопроса меньше длины массива вопросов, то */
        showQuestion(currentQuestionIndex, "question-container");   /* вызывается функция showQuestion(), чтобы отобразить следующий вопрос */
    } else {
        showResult("question-container", "result"); /* иначе вызываем функцию showResult(), чтобы показать результаты теста */

    }
}

function showResult(questionContainerId, resultElementId) {
    const questionContainer = document.getElementById(questionContainerId);
    const resultElement = document.getElementById(resultElementId);
    const retryButton = document.getElementById("retry-button");
    const resultImageDiv = document.getElementById("result-image");

    questionContainer.style.display = "none";

    /* метод reduce для поиска породы с наивысшим количеством набранных баллов 
    Она создает массив ключей (пород) из объекта scores и сравнивает их значения, чтобы определить, какая порода получила больше всего очков */
    let winningBreed = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    resultElement.textContent = `Поздравляю, ты отличный владелец собаки породы ${winningBreed} !`;
    
    resultElement.style.display = "block";  /* делаем элемент resultElement видимым, чтобы пользователь мог увидеть результаты теста */
    resultImageDiv.style.display = "block"; // Показываем блок с изображением

    // Делаем кнопку "Пройти тест еще раз" видимой и добавляем обработчик события
    retryButton.style.display = "block"; 
    retryButton.onclick = function() {
        location.reload(); // Перезагружает страницу
    }
}

