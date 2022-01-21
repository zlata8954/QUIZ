'use strict';

const main = document.querySelector('.main')

const selection = document.querySelector('.selection')

const getData = () => {
    const dataBase = [
        {
        id: '01',
        theme: 'Тема01 тестовая',
        result: [
            [40, 'Есть задатки, нужно развиваться'],
            [80, 'Очень хорошо, но есть пробелы'],
            [100, 'Отличный результат']
        ],
        list: [
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
                correct: 2,
            },
            {
                type: 'radio',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
                correct: 2,
            },
            {
                type: 'radio',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
                correct: 2,
            },
            {
                type: 'radio',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
                correct: 1,
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'правильный2', 'правильный3', 'неправильный'],
                correct: 3,
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
                correct: 2,
            }
        ]
    },
    {
        id: '02',
        theme: 'Тема02 тоже тестовая',
        result: [
            [30, 'Есть задатки, нужно развиваться'],
            [60, 'Очень хорошо, но есть пробелы'],
            [100, 'Отличный результат']
        ],
        list: [
            {
                type: 'radio',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
            },
            {
                type: 'radio',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
                correct: 2,
            },
            {
                type: 'radio',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
            },
            {
                type: 'radio',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'неправильный', 'неправильный', 'неправильный'],
                correct: 1,
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'правильный2', 'правильный3', 'неправильный'],
                correct: 3,
            },
            {
                type: 'checkbox',
                question: 'Вопрос',
                answer: ['правильный1', 'правильный2', 'неправильный', 'неправильный'],
                correct: 2,
            }
        ]
    }
];
return dataBase;
};

const hideElem = elem => {
let opacity = getComputedStyle(elem).getPropertyValue('opacity');

const animation = () => {
   opacity -= 0.001;
   elem.style.opacity = opacity;
   if (opacity > 0) {
       requestAnimationFrame(animation);
   } else {
       elem.style.display = 'none';
   }
};

requestAnimationFrame(animation);

};

const renderTheme = (themes) => {
const list = document.querySelector('.selection__list');

list.textContent = '';

const buttons = [];
for (let i=0; i < themes.length; i += 1){
const li = document.createElement('li');
li.className = 'selection__item';

const button = document.createElement('button');
button.className = 'selection__theme';
button.dataset.id = themes[i].id;
button.textContent = themes[i].theme;

li.append(button);
list.append(li);

buttons.push(button);

}

return buttons;
    };

    const renderQuiz = quiz => {
hideElem(selection);
    };

    const addClick = (buttons, data) => {
buttons.forEach(btn => {
btn.addEventListener('click', () => {
    data.find(item => item.id === btn.dataset.id);
    renderQuiz(quiz);
});
})
};

const initQuiz = () => {
const data = getData();
const buttons = renderTheme(data);

addClick(buttons, data);
};

initQuiz()