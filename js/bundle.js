/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../App Pratice \u0000#2/js/modules/calc.js":
/*!*********************************************!*\
  !*** ../App Pratice  #2/js/modules/calc.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    // Calc

const counter = document.querySelector('.calculating__result span');


let sex, weight, height, age, ratio;

if(localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
} else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
}

if(localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
} else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
}

function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.classList.remove(activeClass);
        if(elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
        }

        if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
        }
    });
}

initLocalSettings('#gender div', 'calculating__choose-item_active'); 
initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active'); 

function calcTotal() {
    if(!sex || !weight || !height || !age || !ratio) {
        counter.textContent = 'Ошибка';
        return;
    }

    if(sex === 'female') {
       counter.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        counter.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }

}

calcTotal();

function getStaticInformation (selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if(e.target.getAttribute('data-ratio')) {   //Если есть такой блок то мы понимаем что работает с блоком активности если нет то другой блок
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));

            }
    
            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });
    
            e.target.classList.add(activeClass);
    
            calcTotal();
        });
    });

}

getStaticInformation ('#gender div', 'calculating__choose-item_active'); 
getStaticInformation ('.calculating__choose_big div', 'calculating__choose-item_active'); 

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if(input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;

                case 'weight':
                    weight = +input.value;
                    break;
                    
                case 'age':
                    age = +input.value;
                    break;   
            }
            calcTotal();
        });

       
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "../App Pratice \u0000#2/js/modules/cards.js":
/*!**********************************************!*\
  !*** ../App Pratice  #2/js/modules/cards.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "../App Pratice \u0000#2/js/services/services.js");


function cards() {
// Классы ES6
    // тут добавили элементы асинхронна после рефакторинга 

    
        
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const element = document.createElement('div');

            if(this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else{
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                        <img src=${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
            `;
            this.parent.append(element);
        }
    
    }

   

    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResources)('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
    
    // const div = new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     '"Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     299,
    //     '.menu .container',
    //     'menu__item'
    
    // );
    
    // const premium = new MenuCard(
    //     "img/tabs/elite.jpg",
    //     '"Премиум"',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     550,
    //     '.menu .container',
    //     'menu__item'
    
    // );
    
    // const post = new MenuCard(
    //     "img/tabs/post.jpg",
    //     '"Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     430,
    //     '.menu .container',
    //     'menu__item'
    
    // );
    
    // div.render();
    // premium.render();
    // post.render();       //После рефакторинга
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "../App Pratice \u0000#2/js/modules/forms.js":
/*!**********************************************!*\
  !*** ../App Pratice  #2/js/modules/forms.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "../App Pratice \u0000#2/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "../App Pratice \u0000#2/js/services/services.js");



function forms(formSelector, modalTimerId) {
       // Forms
    
       const forms = document.querySelectorAll(formSelector);    //Получаем все формы
    
       const message = {
           loading: 'img/form/spinner.svg',
           success: 'Все прошло успешно',
           failure: 'Произошла ошибка!'
       };
       
       forms.forEach(item => {     //Присваиваем обработчик для каждой формы
           bindPostData(item);
       });
   
       
       
       function bindPostData(form) {       //Функция постинга
           form.addEventListener('submit', (e) => {
               e.preventDefault();     //Отменяем стандартное поведение браузера когда он перезажружается после отправки формы
       
               const statusMessage = document.createElement('img');   //Создаем окно отображения состояния запроса
               statusMessage.src = message.loading;
               statusMessage.style.cssText = `
                   display: block;
                   margin: 0 auto;
               `;   //Сразу после отправки запроса высвечивается загрузка
               // form.append(statusMessage);     //Помещаем созданный блок с состоянием в самый конец формы
               form.insertAdjacentElement('afterend', statusMessage);     //Усовершенствованный вариант чтобы спиннер показывался после блока и в каждой форме одинаково
           
               
       
               // request.setRequestHeader('Content-type', 'multipart/form-data');     //В комбинации XML и FormData заголовок не используется и ставиться автоматически
               // request.setRequestHeader('Content-type', 'application/json');       //Для отправки в json формате
               // formData - это один из форматов обмена данными с сервером как и json и такой формат сам формирует данные из форм
               const formData = new FormData(form);
       
               // request.send(formData);
       
               // ****** Преобразование formdata к json формату
       
               // const object = {}
               // formData.forEach((value, key) => {
               //     object[key] = value;
               // });  Убрали после рефакторинга и заменили json
   
               const json = JSON.stringify(Object.fromEntries(formData.entries()));  //Замена object  //Сначала создаем массив массивов, потом приводим обратно к объекту и передаем в json
       
               // ******
       
               // fetch('server.php', {
               //     method: "POST",
               //     headers: {
               //         'Content-type': 'application/json'
               //     },
               //     body: JSON.stringify(object)
               // })   //Произошел рефакторинг
               
               (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)(' http://localhost:3000/requests', json)
               // .then(data => data.text())      //Реф и убрали так как происходит на этапе postData
               .then(data => {
                   console.log(data);
                   showThanksModal(message.success);
                   statusMessage.remove();
               }).catch(() => {
                   showThanksModal(message.failure); 
               }).finally(() => {
                   form.reset(); 
               });
           });
       }
       
       // *******
       
       function showThanksModal(message) {
           const prevModalDialog = document.querySelector('.modal__dialog');
           prevModalDialog.classList.add('hide');      //Скрываем модальное окно
           (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModal)('.modal', modalTimerId);    //Делаем так что бы при исполнении функции модальное окно было открыто
       
           const thanksModal = document.createElement('div');     
           thanksModal.classList.add('modal__dialog');     //Берем стили от удаленного модального окна
           thanksModal.innerHTML = `
               <div class="modal__content"> 
                   <div data-close class="modal__close">&times;</div>
                   <div class="modal__title">${message}</div>
               </div>
           `;
           document.querySelector('.modal').append(thanksModal);
       
           setTimeout(() => {
               thanksModal.remove();
               prevModalDialog.classList.add('show');
               prevModalDialog.classList.remove('hide');
               (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
           }, 4000);
       }
       
       showThanksModal(message.success);
          
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "../App Pratice \u0000#2/js/modules/modal.js":
/*!**********************************************!*\
  !*** ../App Pratice  #2/js/modules/modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showModal": () => (/* binding */ showModal)
/* harmony export */ });
// Модальное окно

function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector); 
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //Так запрещаем скролл при открытом модальном окне
    if(modalTimerId) {
        clearInterval(modalTimerId);
    }
    }
    
    function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector); 
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';  
           //Если пользователь уже открыл окно, то убираем вызов через время
    }
    
    
function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
    //   modalClose = document.querySelector('[data-close]');  //Рефактор
      modal = document.querySelector(modalSelector);      
    
    for(let i = 0; i < modalTrigger.length; i++) {
    modalTrigger[i].addEventListener('click',() => showModal(modalSelector, modalTimerId));   
    }
    

    // modalClose.addEventListener('click', () => {
    //     closeModal();       //Так говорим чтобы браузер сам определился какое значение ему нужно
    // });  Рефактор
    
    
    // Делаем закрытие по темной области вне окна
    
    modal.addEventListener('click', (event) => {
    if(event.target == modal || event.target.getAttribute('data-close') == '') {       //После рефактора
        closeModal(modalSelector); 
    }
    });
    
    
    // Делаем чтобы окно закрывалось при нажатии кнопки esc
    
    document.addEventListener('keydown', (e) => {
    if(e.code == 'Escape' && modal.classList.contains('show')) {
    closeModal(modalSelector);
    }
    });
    
    
    function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {       // Если пролистанная часть страницы + видимая часть страницы >= всей страницы то...
        showModal(modalSelector, modalTimerId);
        window.removeEventListener('scroll',showModalByScroll);     //Делаем так чтобы при долистывании до конца страницы, окно появлялось только один раз
    }
    }
    
    window.addEventListener('scroll',showModalByScroll);
        
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "../App Pratice \u0000#2/js/modules/sliders.js":
/*!************************************************!*\
  !*** ../App Pratice  #2/js/modules/sliders.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, previousArrow, currentCounter, wrapper, inner}) {
    //Slider
// Самостотельно написанный

// const slides = document.querySelectorAll('.offer__slide');
// const prev = document.querySelector('.offer__slider-prev');
// const next = document.querySelector('.offer__slider-next');
// const current = document.getElementById('current');

// let i = 0;

// function hideCard() {
//     slides.forEach(item => {
//         item.classList.add('hide');
//     });
//     current.innerHTML = `0${i+1}`;
// }

// function showCard(){
//     slides[i].classList.remove('hide');
//     slides[i].classList.add('show');
// }

// hideCard();
// showCard();

// prev.addEventListener('click', (e) => {
//     if(i <= 0) {
//         i = 3;
//         hideCard();
//         showCard();
//     } else {
//         hideCard();
//         i--;
//         showCard();
//         current.innerHTML = `0${i+1}`;
//     }
// });

// next.addEventListener('click', (e) => {
//     if(i >= slides.length - 1) {
//         i = 0;
//         hideCard();
//         showCard();
//     } else {
//         hideCard();
//         i++;
//         showCard();
//         current.innerHTML = `0${i+1}`;
//         }
// });



// Более сложный вариант слайдера


const slides = document.querySelectorAll(slide);
const slider = document.querySelector(container);
const prev = document.querySelector(previousArrow);
const next = document.querySelector(nextArrow);
const current = document.getElementById(currentCounter);
const slidesWrapper = document.querySelector(wrapper);
const slidesInner = document.querySelector(inner);
const width = window.getComputedStyle(slidesWrapper).width;     //Получаем примененные свойства из css

let slideIndex = 1;
let offset = 0;

current.innerHTML = `0${slideIndex}`;

slidesInner.style.width = 100 * slides.length + '%';    //Резервируем место под все наши элементы карусели
slidesInner.style.display = 'flex';
slidesInner.style.transition = '0.5s all';
slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
    slide.style.width = width;      //Каждый слайд будет равен окну демонстрации
});

slider.style.position = 'relative';

const indicators = document.createElement('ol');
const dots = [];
indicators.classList.add('carousel-indicators');

indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
`;

slider.append(indicators);

for(let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);

    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;

    if(i == 0) {
        dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
}

next.addEventListener('click', () => {
if(offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
    offset = 0;
} else {
    offset += +width.replace(/\D/g, '')
}

    slidesInner.style.transform = `translateX(-${offset}px)`;

    if(slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    current.innerHTML = `0${slideIndex}`;

    dots.forEach(item => item.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
});

prev.addEventListener('click', () => {
    if(offset == 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
    } else {
        offset -= +width.replace(/\D/g, '');
    }
    
        slidesInner.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    
        current.innerHTML = `0${slideIndex}`;

        dots.forEach(item => item.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = slideTo;
        offset =+width.replace(/\D/g, '') * (slideTo - 1);
        slidesInner.style.transform = `translateX(-${offset}px)`;

        current.innerHTML = `0${slideIndex}`;


        dots.forEach(item => item.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "../App Pratice \u0000#2/js/modules/tabs.js":
/*!*********************************************!*\
  !*** ../App Pratice  #2/js/modules/tabs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //Табы
    
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);     
    
    
    
    function hideTabContent() {         //Функция которая занимается тем, что скрывает все элементы которые в данный момент не активны
        tabsContent.forEach(item => {
            item.style.display = 'none';        //Здесь точно также можо использовать и classList   //Скрываем табы с описанием 
        }); 
    
        tabs.forEach(item => {
            item.classList.remove(activeClass);        //Удаляем выделение активности кнопки   //Не ставим точку потому что и так работаем с классами
        });
    }
    
    function showContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);        //Здесб доп классом можно добавить например еще и анимацию
    }
    
    hideTabContent();
    showContent();
    
    // ВСЕ ЭТО ДОЛГО НЕ РАБОТАЛО ТАК КАК ПРИ ПОЛУЧЕНИИ ЭЛЕМЕНТОВ ИСПОЛЬЗОВАЛ ALL И ПОЛУЧИЛ КОЛЛЕКЦИЮ
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
    
            if(target && target.classList.contains(tabsSelector.slice(1))) {        //Такой опрератор И чтобы мы при клики попали именно на элемент нужный а не в пустое место
                tabs.forEach((item,i) => {
                    if(target == item) {        //Если выбранный элемент идентичен какому-то элементу из подходящих,то ...
                        hideTabContent();
                        showContent(i); 
                    }
                });
            }
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "../App Pratice \u0000#2/js/modules/timer.js":
/*!**********************************************!*\
  !*** ../App Pratice  #2/js/modules/timer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ТАЙМЕР
    
    function timer(id, deadline) {
    
        function getTimeRemaining (endtime) {
            let days, hours, minutes, seconds;
            const t = Date.parse(endtime) - Date.parse(new Date());       //Получаем сколько осталось времени до конца отсчета  //Использовали parse потому что дата была в строчном формате, а нам ее нужно получить для математического расчета в миллисекундах
            
        
            //УСЛОВИЕ ЕСЛИ ВДРУГ АКЦИЯ ЗАКОНЧИТЬСЯ, МЫ ДЕЛАЕМ ЧТОБЫ ЗНАЧЕНИЯ В ТАКОМ СЛУЧАЕ БЫЛИ ПРОСТО НОЛЬ
        if(t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));      // Math.floor круглет итоговые значения   //Получаем из миллисекунд количество оставшися дней
            hours = Math.floor((t / (1000 * 60 * 60 ) % 24));   //Возвращаем остаток после деления на дни
            minutes = Math.floor((t / (1000 * 60) % 60));
            seconds = Math.floor((t / 1000) % 60);
        }
        
            return {        //Вохвразаем объект
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        
        }
        
        console.log(getTimeRemaining (deadline));
        
        function setClock (selector, endtime) {     //Сначала получаем все элементы
            const timer = document.querySelector(selector),
                    days = timer.querySelector('#days'),
                    hours = timer.querySelector('#hours'),
                    minutes = timer.querySelector('#minutes'),
                    seconds = timer.querySelector('#seconds'),
                    timeInterval = setInterval(updateClock, 1000);      //Задаем интервал для выполнения функции
        
        updateClock ();     //Вызываем сразу чтобы не ждать секунду до обновления на странице
        
        function getZero(num) {         //Если меньше 10, то подставляем вперед ноль, чтобы выглядело симпатично
            if(num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }
            
        function updateClock () {           
            const t = getTimeRemaining(endtime);        // Получаем объект из функции
        
            days.innerHTML = getZero(t.days);       
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
        
            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
        }
        
        setClock (id, deadline);
        
        
    }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "../App Pratice \u0000#2/js/services/services.js":
/*!**************************************************!*\
  !*** ../App Pratice  #2/js/services/services.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResources": () => (/* binding */ getResources),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {     //Говорим функции что тут будет асинхронный код
    const res = await fetch(url, {      //Ставим await там где нам нужно дождаться выполнения операции
        method: "POST",
        headers: {
            'Content-type': 'application/json'
            },
        body: data
    });     //Так как это асинхронный код то респонс присовится к res только после получения данных и ниже мы получим ошибку
    return await res.json();  //Возвращаем в формате json чтобы в дальнейшем уже работать с json форматом и на это требуется время поэтому ставим await

};

const getResources = async (url) => {     //Говорим функции что тут будет асинхронный код
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);  //Оператор ошибки выкидвается //Throw это генератр исключений он прерывает выполнение функции или передает управление на ближайший блок catch
    }
    return await res.json();

};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ../App Pratice  #2/js/script.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "../App Pratice \u0000#2/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "../App Pratice \u0000#2/js/modules/timer.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calc */ "../App Pratice \u0000#2/js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "../App Pratice \u0000#2/js/modules/forms.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "../App Pratice \u0000#2/js/modules/cards.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal */ "../App Pratice \u0000#2/js/modules/modal.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliders */ "../App Pratice \u0000#2/js/modules/sliders.js");


// Собираем документ по модулям для разделения функционала и чтобы лучше ориентироваться в коде
// Можно модули брать полностью и переиспользовать в других проектах
//Нет привязки к конкрентым переменным, привязка только к аргументов при вызове
// Деструктуризация позволяет не следить за порядком аргументов и становитья более очевидно редназначение каждого из них

    
    
    
    
    
    
    
    

document.addEventListener('DOMContentLoaded', () => {
    
    // Добавляем вызов окна через какое-то время
    
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_5__.showModal)('.modal', modalTimerId), 5000);
    
    //Передаем эти аргументы к модулям, а в инициации функций в модулях прописываем переменные
        (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
        (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2023-10-10');
        (0,_modules_calc__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('form', modalTimerId);
        (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__["default"])();
        (0,_modules_modal__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-modal]','.modal', modalTimerId);
        (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_6__["default"])({
            container: '.offer__slider',
            nextArrow: '.offer__slider-next',
            slide: '.offer__slide',
            previousArrow: '.offer__slider-prev',
            currentCounter: 'current',
            wrapper: '.offer__slider-wrapper',
            inner: '.offer__slider-inner',
        });

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map