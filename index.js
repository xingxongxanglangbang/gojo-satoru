//Números que serão usados para a soma e subtração
let num1 = 8008;
let num2 = 5808;
// Soma do bagulho
let soma = num1 + num2;
//Subtração e tals
let sub = num1 - num2;
// Sá coisa aqui mostra a soma e subtração pro usuario.
let mensagem = 'Doido tua soma deu {soma}, e tua subtração deu {sub}.'
  .replace('{soma}', soma)
  .replace('{sub}', sub);
console.log(mensagem);
// Condição da soma para saber se é maior q 5000 ou menor.
let vSoma = soma >= 5000 ? 'Tua soma é maior que 5000 mano.' : 'Tua soma é menor que 5000 e tals.';
console.log(vSoma);
// Condição da subtração.
let vSub = sub <= 0 ? 'A subtração é menor que 0' : 'A subtração é maior que 0';
console.log(vSub);