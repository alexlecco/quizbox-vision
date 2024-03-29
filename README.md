# Quizbox Vision
a quiz app created as a challenge for [Blackbox Vision](https://blackboxvision.com/)
https://github.com/goncy/blackbox-vision-challenge

## Definición funcional
El juego consiste en 10 preguntas las cuales pueden ser verdadero/falso o multiple choice.

Por cada pregunta, es necesario mostrar los siguientes campos:
* Pregunta
* Categoría
* Dificultad
* Posibles respuestas

Al seleccionar la respuesta, muestra si la misma fue correcta o no. No es necesario mostrar cuál era la respuesta correcta.

Al finalizar el juego, se muestra el puntaje obtenido. El mismo se calcula de la
siguiente manera:
* Respuesta correcta (verdadero/falso): *5 puntos*
* Respuesta correcta (multiple choice): *10 puntos*
* Respuesta incorrecta: *0 puntos*

## Definiciones técnicas
* Todos los datos necesarios para el juego, están en [la siguiente API](https://opentdb.com/api.php?amount=10)
* El juego puede realizarse en React web o React Native.
* Cada pregunta debe presentarse en una pantalla distinta de la aplicación.
