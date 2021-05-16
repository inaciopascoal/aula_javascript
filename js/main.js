
function clicou(){
    document.getElementById ("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    /*console.log(document.getElementById ("agradecimento"));*/
    /*alert("Obrigado por clicar");*/
}

function redirecionar(){
    window.open("https://outlook.live.com/mail/0/");
    /* window.location.href = "https://outlook.live.com/mail/0/"; abre na mesma janela*/
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    /*alert("Trocar texto");*/
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert ("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}





/*
function soma(n1, n2){
  return   n1 + n2;
}
alert (soma(5, 10));
*/

/*
function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt ("Qual é sua idade?");
console.log(validaIdade(idade));
*/


/*
function setReplace(frase, nome, novonome){
    return frase.replace(nome,novonome)
}
alert(setReplace("Vai Brasil!", "Japão", "Brasil"));
*/



/*
var d = new Date();
alert(d);
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5);
console.log (count);
count = count + 1; //ou count++
*/

/*
var idade = prompt ("Qual sua idade?");
//var idade = 18; primeiro exemplo, sem o prompt;
if (idade > 18) {
    alert("maior de idade");
  }  else{
      alert("menor de idade");
  }
  */





/*
var nome= "Inácio Pascoal";
var idade= 36;
var idade2= 29;
var frase = "Japão é o melhor time do mundo"
alert("Bem Vindo! "+ nome + " tem " + idade + " anos");
//para somar: alert(idade = idade2);
//caso não seja para somar, se for uma string, colocar entre "";
//exemplo idade = "2" idade2 = "5" o resultado (idade + idade2) será: 25;

//console: f12 do navegador mostra os resultados e coloca o link direcionando onde está localizados;
console.log(nome);
console.log(idade + idade2);

//para trocar algo na string;

console.log(frase.replace ("Japão", "Brasil"));
//ou; 
alert(frase.replace ("Japão, Brasil"));

//colocar toda frase em caixa alta, no console f12;
//console.log(frase.toUpperCase());

console.log(frase.toLocaleLowerCase()); 

//lista. começa com 0;
var lista = ["maçã", "pêra", "jaca"];
console.log(lista);
//se eu quiser apenas um da lsita;
console.log(lista[0]);
//acrescentar um item na lista;
lista.push("uva");
//alert(lista[1]);
//lista.pop(): para retirar o ultimo item;

//tamanho da lista;
console.log(lista.length);
//trazer os items na ordem inversa
//console.log(lista.reverse());
//para mudar array para string
console.log(lista.toString());
//troca a virgula por espaço ou qualquer outro sinal;
console.log(lista.join(" - "));

//dicionário
var fruta = {nome:"maçã", cor: "vermelha"}
console.log(fruta.nome);

//lista de dicionários

//var frutas = [{nome:"maçã", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
//console.log(frutas.nome);
//alert(frutas[1].nome);
*/
