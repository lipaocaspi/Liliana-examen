#### Funcionamiento de la página

##### CSS

- style.css -> contiene las reglas que determinan cómo se ve la página.

  Reglas como las vistas a continuación definen atributos como la ubicación y tamaño de los elementos.

  ```
  .page {
      display: grid;
      align-self: center;
      justify-content: center;
  }
  
  .page__picture {
      display: flex;
      justify-content: center;
  }
  
  .page__title {
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 3rem;
      font-weight: bold;
      color: white;
  }
  
  .page__text {
      display: flex;
      justify-content: center;
      text-align: center;
      color: white;
  }
  
  .page__first-button, .page__final-button {
      display: flex;
      justify-self: center;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 10.5rem;
      height: 3.5rem;
      color: white;
      font-size: large;
      font-weight: bold;
      border-radius: 5px;
      background-color: rgb(84, 255, 232);
  }
  
  .page__subtitle {
      display: flex;
      justify-content: center;
      text-align: center;
      color: white;
      font-size: 2rem;
      font-weight: bold;
  }
  
  .page__options-1 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
  }
  
  .page__options-2 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
  }
  
  .page__option {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .page__option:hover {
      background-color: gray;
      transform: translateY(-10px);
      transition-duration: 0.5s;
  }
  
  .page__desc {
      text-align: center;
      color: white;
  }
  
  .page__price {
      text-align: center;
      font-weight: bold;
      font-size: 5rem;
      color: rgb(84, 255, 232);
  }
  
  .form {
      display: grid;
      align-items: center;
      align-self: center;
      justify-self: center;
      justify-content: center;
      background-color: gray;
      padding: 40px;
      border-radius: 5px;
  }
  ```

Reglas como las vistas a continuación definen cómo se ve el layout dependiendo del ancho de la pantalla.

```
@media (max-width: 1600px) {
    .page__options-1--small {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .page__options-2--small {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 1024px) {
    .page__title--small {
        font-size: 2.5rem;
    }
    .page__options-1--small {
        display: grid;
        grid-template-columns: 100%;
    }
    .page__options-2--small {
        display: grid;
        grid-template-columns: 100%;
    }
}
```

##### JS

* api.js -> contiene la función que realiza la solicitud de posteo de los datos.
  * postData(element)
* main.js -> contienen las funciones que van mostrando las vistas dependiendo de lo que seleccione el usuario.
  * showFirstQuestion() -> muestra la primera pregunta, y dependiendo de lo que escoja el usuario, se hace la suma acumulativa.
  * showSecondQuestion() -> muestra la segunda pregunta, y dependiendo de lo que escoja el usuario, se hace la suma acumulativa.
  * showThirdQuestion() -> muestra la tercera pregunta, y dependiendo de lo que escoja el usuario, se hace la suma acumulativa.
  * showFourthQuestion() -> muestra la cuarta pregunta, y dependiendo de lo que escoja el usuario, se hace la suma acumulativa.
  * showFifthQuestion() -> muestra la quinta pregunta, y dependiendo de lo que escoja el usuario, se asigna un valor a la sumatoria.