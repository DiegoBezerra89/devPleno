import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// console.log(variavel1) //undefined
// var variavel1 = 10
// console.log(variavel1) //10
// var faz hoisting, ou seja, ele é ancorado lá pra cima no código, nasce com o começo do código, e é undefined.
// assim que o var é atribuido ele tem valor, mas ele já existe como undefined

// console.log(variavel2) // ERRO, essa variável não existe e apresenta um erro na aplicação
// let variavel2  = 20
// console.log(variavel2) //20
// let não faz hoisting, nasce assim que é atribuída. Pode ser modificada

// console.log(variavel3) //ERRO, essa variável não existe e apresenta um erro na aplicação
// const variavel3 = 30//À partir daqui essa const existe, facilitando o trabalho e o entendimento 
// console.log(variavel3) //30
// const também não faz hoisting, nasce assim que é atribuída, não pode ser modificada IMUTÁVEL


// console.log(soma(1,3)) //4
// function soma( a, b ) { //function faz Hoisting, e não importa onde vc a invoque ela será executada
// 	return a + b //uma function declarada desta maneira pode gerar problemas, pois é uma boa prática vc fazer o código contar uma história, de cima pra baixo
// }

// const funcSoma = soma //uma variável pode receber uma função, sem parenteses, pois eu estou passando a função, e não sua execução

// console.log(funcSoma(2,3))

// const soma1 = function soma(a, b) { 
// 	// context: qual é o contexto em q essa funcao está sendo chamada?
// 	// this aqui faz referencia a soma1, contexto interno
// 	return a + b
// }

// console.log(soma1(3,7))


// //ARROW FUNCTION
// const soma2 = (a, b) =>  a + b //arrow function, o this aqui é externo, redução de chances de distorcer o comportamento da function
// //como é apenas uma expressão, não precisa de return

// console.log(soma2(3,5))

// //tipos
// const int = 10
// const float = 10.0
// const str = 'nome'
// const str1 = "nome1"
// const str2 = `nome2` //template string
// const a = 'Diego'
// const str3 = `Olá ${a}` //Olá Diego

// console.log(str3) //Olá Diego

// //############################
// //objetos
// const obj = {
// 	name: 'Diego',
// 	lastName: 'Bezerra',
// 	address: {
// 		city: 'Osasco',
// 		street: 'Oliveira Lima',
// 		number: 47
// 	}
// }

// console.log(obj.name) //Diego
// console.log(obj['name'], obj.lastName) //Diego Bezerra

// const n = 'name'
// const l = 'lastName'
// console.log(obj[n], obj[l]) //Diego Bezerra

// const arr = [1, 2, 3, 'Diego', {a: 'a'}]
// console.log(arr[1]) //2

// const keys = Object.keys(obj) //retorna um vetor com todas as chaves deste objeto 
// console.log(keys) 
// //(3) ["name", "lastName", "address"]
// // 0: "name"
// // 1: "lastName"
// // 2: "address"
// // length: 3

// console.log(keys[2])//address

// keys.forEach(item => {
// 	console.log(item)
// 	//name
// 	//lastName
// 	//address
// })

// keys.forEach(item => {
// 	console.log(obj[item])
// 	//Diego
// 	//Bezerra
// 	//{city: "Osasco", street: "Oliveira Lima", number: 47}
// })


// //#################
// //HIGH ORDER FUNCTIONS
// //funções que recebem outras funções

// const values = keys.map(item => { //retorna um vetor passando por cada uma das posições do objeto
// 	return item //['name', 'lastName', 'address']
// })

// console.log(values)

// const values2 = keys.map(item => {
// 	return obj[item]
// })

// console.log(values2)
// //['Diego', 'Bezerra', {}]

// //##################
// //destructuring assignment

const obj = {
	name: 'Diego',
	lastName: 'Bezerra',
	address: {
		city: 'Osasco',
		street: 'Oliveira Lima',
		number: 47
	}
}

// const name = obj.name
// console.log(name) //'Diego'

const keys = Object.keys(obj)

const [i1, i2] = keys
console.log(i1, i2)

const { name } = obj // pela variável ter o mesmo nome da propriedade do objeto, é possível utilizar esta técnica 
console.log(name) //Diego