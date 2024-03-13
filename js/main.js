import {postData} from './api.js'

let sum = 0;
const mainContainer = document.querySelector('.container');
const firstButton = document.querySelector('.page__first-button');

function showFirstQuestion() {
    mainContainer.innerHTML = ``;
    mainContainer.innerHTML = `
    <div class="page">
                <div class="page__subtitle">¿Qué nivel de calidad estás buscando?</div>
                <br>
                <div class="page__options-1 page__options-1--small">
                    <div class="page__option">
                        <a id="option__1-1">
                            <img class="page__img" src="storage/images/answer-1-1.png" alt="">
                            <p class="page__desc">Calidad óptima</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__1-2">
                            <img class="page__img" src="storage/images/answer-1-2.png" alt="">
                            <p class="page__desc">Buena relacion calidad/precio</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__1-3">
                            <img class="page__img" src="storage/images/answer-1-3.png" alt="">
                            <p class="page__desc">No me importa tanto la calidad</p>
                        </a>
                    </div>
                </div>
            </div>
    `
    document.querySelector('#option__1-1').addEventListener('click', function () {
        sum = sum + 300000;
        showSecondQuestion();
        return sum;
    });
    document.querySelector('#option__1-2').addEventListener('click', function () {
        sum = sum + 380000;
        showSecondQuestion();
        return sum;
    });
    document.querySelector('#option__1-3').addEventListener('click', function () {
        sum = sum + 200000;
        showSecondQuestion();
        return sum;
    });
};

function showSecondQuestion() {
    mainContainer.innerHTML = ``;
    mainContainer.innerHTML = `
    <div class="page">
                <div class="page__subtitle">¿Qué tipo de App necesitas?</div>
                <br>
                <div class="page__options-2 page__options-2--small">
                    <div class="page__option">
                        <a id="option__2-1">
                            <img class="page__img" src="storage/images/answer-2-1.png" alt="">
                            <p class="page__desc">Aplicación Android</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__2-2">
                            <img class="page__img" src="storage/images/answer-2-2.png" alt="">
                            <p class="page__desc">Aplicación iOS</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__2-3">
                            <img class="page__img" src="storage/images/answer-2-3.png" alt="">
                            <p class="page__desc">Aplicación Windows Phone</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__2-4">
                            <img class="page__img" src="storage/images/answer-2-4.png" alt="">
                            <p class="page__desc">Aplicación Android + iOS</p>
                        </a>
                    </div>
                </div>
            </div>
    `
    
    document.querySelector('#option__2-1').addEventListener('click', function () {
        sum = sum + 2000000;
        showThirdQuestion();
        return sum;
    });
    document.querySelector('#option__2-2').addEventListener('click', function () {
        sum = sum + 3000000;
        showThirdQuestion();
        return sum;
    });
    document.querySelector('#option__2-3').addEventListener('click', function () {
        sum = sum + 800000;
        showThirdQuestion();
        return sum;
    });
    document.querySelector('#option__2-4').addEventListener('click', function () {
        sum = sum + 3500000;
        showThirdQuestion();
        return sum;
    });
};

function showThirdQuestion() {
    mainContainer.innerHTML = ``;
    mainContainer.innerHTML = `
    <div class="page">
                <div class="page__subtitle">¿Qué diseño quieres que tenga tu App?</div>
                <br>
                <div class="page__options-2 page__options-2--small">
                    <div class="page__option">
                        <a id="option__3-1">
                            <img class="page__img" src="storage/images/answer-3-1.png" alt="">
                            <p class="page__desc">Interfaz sencilla</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__3-2" >
                            <img class="page__img" src="storage/images/answer-3-2.png" alt="">
                            <p class="page__desc">Interfaz personalizada</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__3-3">
                            <img class="page__img" src="storage/images/answer-3-3.png" alt="">
                            <p class="page__desc">Interfaz replicada en la web</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__3-4">
                            <img class="page__img" src="storage/images/answer-3-4.png" alt="">
                            <p class="page__desc">No necesito diseño</p>
                        </a>
                    </div>
                </div>
            </div>
    `
    document.querySelector('#option__3-1').addEventListener('click', function () {
        sum = sum + 500000;
        showFourthQuestion();
        return sum;
    });
    document.querySelector('#option__3-2').addEventListener('click', function () {
        sum = sum + 1000000;
        showFourthQuestion();
        return sum;
    });
    document.querySelector('#option__3-3').addEventListener('click', function () {
        sum = sum + 800000;
        showFourthQuestion();
        return sum;
    });
    document.querySelector('#option__3-4').addEventListener('click', function () {
        sum = sum + 30000;
        showFourthQuestion();
        return sum;
    });
};

function showFourthQuestion() {
    mainContainer.innerHTML = ``;
    mainContainer.innerHTML = `
    <div class="page">
                <div class="page__subtitle">¿Cómo monetizar con tu App?</div>
                <br>
                <div class="page__options-2 page__options-2--small">
                    <div class="page__option">
                        <a id="option__4-1">
                            <img class="page__img" src="storage/images/answer-4-1.png" alt="">
                            <p class="page__desc">Aplicación gratuita con publicidad</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__4-2">
                            <img class="page__img" src="storage/images/answer-4-2.png" alt="">
                            <p class="page__desc">Aplicación de pago</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__4-3">
                            <img class="page__img" src="storage/images/answer-4-3.png" alt="">
                            <p class="page__desc">Compras dentro de la app</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__4-4">
                            <img class="page__img" src="storage/images/answer-4-4.png" alt="">
                            <p class="page__desc">Otros / No lo sé todavía</p>
                        </a>
                    </div>
                </div>
            </div>
    `
    document.querySelector('#option__4-1').addEventListener('click', function () {
        sum = sum + 600000;
        showFifthQuestion();
        return sum;
    });
    document.querySelector('#option__4-2').addEventListener('click', function () {
        sum = sum + 1000000;
        showFifthQuestion();
        return sum;
    });
    document.querySelector('#option__4-3').addEventListener('click', function () {
        sum = sum + 2000000;
        showFifthQuestion();
        return sum;
    });
    document.querySelector('#option__4-4').addEventListener('click', function () {
        sum = sum + 3500000;
        showFifthQuestion();
        return sum;
    });
};

function showFifthQuestion() {
    mainContainer.innerHTML = ``;
    mainContainer.innerHTML = `
    <div class="page">
                <div class="page__subtitle">¿Tu App necesita sistema de autenticación?</div>
                <br>
                <div class="page__options-2 page__options-2--small">
                    <div class="page__option">
                        <a id="option__5-1">
                            <img class="page__img" src="storage/images/answer-5-1.png" alt="">
                            <p class="page__desc">Sí, con redes sociales y email</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__5-2">
                            <img class="page__img" src="storage/images/answer-5-2.png" alt="">
                            <p class="page__desc">Sí, con email</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__5-3">
                            <img class="page__img" src="storage/images/answer-5-3.png" alt="">
                            <p class="page__desc">No</p>
                        </a>
                    </div>
                    <div class="page__option">
                        <a id="option__5-4">
                            <img class="page__img" src="storage/images/answer-5-4.png" alt="">
                            <p class="page__desc">No lo sé todavía</p>
                        </a>
                    </div>
                </div>
            </div>
    `
    document.querySelector('#option__5-1').addEventListener('click', function () {
        sum = sum + 2000000;
        showForm();
        return sum;
    });
    document.querySelector('#option__5-2').addEventListener('click', function () {
        sum = sum + 1500000;
        showForm();
        return sum;
    });
    document.querySelector('#option__5-3').addEventListener('click', function () {
        sum = sum + 0;
        showForm();
        return sum;
    });
    document.querySelector('#option__5-4').addEventListener('click', function () {
        sum = sum + 3500000;
        showForm();
        return sum;
    });
};

function showForm() {
    mainContainer.innerHTML = ``;
    mainContainer.innerHTML = `
    <div class="form">
        <p class="page__text">Rellene los datos</p>
        <br>
            <form>
                <label class="page__text bold" for="name">Nombre</label>
                <input id="name" type="text">
                <br>
                <label class="page__text bold" for="number">Número de contacto</label>
                <input id="number" type="number">
                <br>
                <label class="page__text bold" for="email">Email de contacto</label>
                <input id="email" type="email">
                <br><br>
                <button class="page__first-button" id="save-data">Guardar</button>
            </form>
        </div>
    `;

    const saveData = document.querySelector('#save-data');
    saveData.addEventListener('click', function () {
        showResults();
    })
}

function showResults() {
    let nombre = document.querySelector('#name').value;
    let numero = document.querySelector('#number').value;
    let correo = document.querySelector('#email').value;
    mainContainer.innerHTML = ``;
    mainContainer.innerHTML = `
    <div class="page">
            <p class="page__text">¡Bien! ¡Hemos terminado!</p>
            <br>
            <div class="page__social-buttons">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <p class="page__text bold">¡Compártenos si te ha gustado!</p>
            <div class="page__title">
                <p>El costo estimado de tu app es</p>
            </div>
            <br>
            <div class="page__price">
                <p>${sum} COP</p>
            </div>
            <div>
                <p class="page__text sub">Editar respuestas</p>
            </div>
            <br>
            <div class="page__text">
                <p>En GBP contamos con los mejores <b>desarrolladores de apps y webs</b> para tu proyecto. Publica tu proyecto en GBP.</p>
            </div>
            <br>
            <button id class="page__final-button">Terminar</button>
        </div>
    `
    const sendButton = document.querySelector('.page__final-button');
    sendButton.addEventListener('click', function (e) {
        e.preventDefault();
        const datos = {nombre, numero, correo, sum};
        postData(datos);
        alert('Información enviada con éxito')
    });
}

firstButton.addEventListener('click', showFirstQuestion);