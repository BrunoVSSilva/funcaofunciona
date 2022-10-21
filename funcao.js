/*
calcularMeuLanche()

calcularCircunferencia()

calcularArea()

converterCelsiusFahrenheit()
*/

/* 1) Quantos anos tem o seu pet? */
/* 2) Não acabou não */

/* 1 e 2 */
/*

function calcularIdadePet() {
    
    var seupete = parseInt(prompt('O seu pet é: 1.) Cachorro 2.) Gato 3.) Calopsita'));
    
    switch (seupete) {
        case 1:
            catioro()
            break;
        case 2:
            gatenho()
            break;
        case 3:
            calopsita()
            break;
        default:
            break;
    }
    
    function catioro(){
        var nomepet = prompt('Qual o nome do seu pet ?');

        var idadecatioro1 = 1;
        var idadecatioro2 = 2;

        var idadepet = parseInt(prompt('Qual é a idade do seu catioro(a) ?'));

        if(idadepet == idadecatioro1){
            idadecatioro1 = 15
            alert('O seu doguinho, ' + nomepet + ', tem ' + idadecatioro1 + ' anos em anos humanos!. Você sabia que um cachorro envelhece cerca de 24 anos nos dois primeiros aninhos de sua vida, depois esse número reduz para 4 ~ 7 aninhos. ');
        }
        else if(idadepet == idadecatioro2){
            idadecatioro2 = 24
            alert('O seu doguinho, ' + nomepet + ', tem ' + idadecatioro2 + ' anos em anos humanos!. Você sabia que um cachorro envelhece cerca de 24 anos nos dois primeiros aninhos de sua vida, depois esse número reduz para 4 ~ 7 aninhos. ');
        }
        else{
            idadepet = 24+(5*(idadepet-2));
            alert('O seu doguinho, ' + nomepet + ', tem ' + idadepet + ' anos em anos humanos!. Você sabia que um cachorro envelhece cerca de 24 anos nos dois primeiros aninhos de sua vida, depois esse número reduz para 4 ~ 7 aninhos. ');
        }

    }
    function gatenho(){
        var nomepet = prompt('Qual o nome do seu pet ?');

        var idadegatenho1 = 1;
        var idadegatenho2 = 2;

        var idadepet = parseInt(prompt('Qual é a idade do seu gatenho(a) ?'));

        if(idadepet == idadegatenho1){
            idadegatenho1 = 15
            alert('O seu gatinho, ' + nomepet + ', tem ' + idadegatenho1 + ' anos em anos humanos!. Você sabia que um gato envelhece cerca de 25 anos nos dois primeiros aninhos de sua vida, depois esse número reduz para 4. ');
        }
        else if(idadepet == idadegatenho2){
            idadegatenho2 = 25
            alert('O seu gatinho, ' + nomepet + ', tem ' + idadegatenho2 + ' anos em anos humanos!. Você sabia que um gato envelhece cerca de 25 anos nos dois primeiros aninhos de sua vida, depois esse número reduz para 4. ');
        }
        else{
            idadepet = 25+(4*(idadepet-2));
            alert('O seu gatinho, ' + nomepet + ', tem ' + idadepet + ' anos em anos humanos!. Você sabia que um gato envelhece cerca de 25 anos nos dois primeiros aninhos de sua vida, depois esse número reduz para 4. ');
        }
    }
    function calopsita(){
        alert('Para calopsita, o programa foi desenvolvido para determinar em qual fase da vida o animalzinho está, não há uma fórmula específica para determinar a idade em anos humanos por enquanto')
        var nomepet = prompt('Qual o nome do seu pet ?');

        var idadepet = parseFloat(prompt('Qual é a idade(em meses) da sua calopsita ?'));
        
        if(idadepet < 2){
            alert('A sua calopsita, ' + nomepet + ', ainda é um bebêzinho.');
        }
        else if(idadepet > 2 && idadepet < 14){
            alert('A sua calopsita, ' + nomepet + ', está ganhando o topetinho, isso significa que ela está chegando na fase adulta');
        }
        else if(idadepet > 14 && idadepet < 155){
            alert('A sua calopsita, ' + nomepet + ', já ganhou o topetinho, rabinho e a bochechinha avermelhada, ela está adulta!');
        }
        else if(idadepet >= 156){
            alert('A sua calopsita, ' + nomepet + ', já está idosinha e sonolenta, dobre seus cuidados com ela <3')
        }

    }
calcularIdadePet()
}

*/


/* 3) Quanta fome a gente tem? */
/*

calcularMeuLanche()
function calcularMeuLanche() {

    const idadecontanste = 80;

    var anodia = 365;

    var idade = parseInt(prompt('Insira a idade desejada'));

    while (idade >= idadecontanste || idade <= 0) {
        alert('Por favor, insira a idade novamente sendo ela maior que 0 e menor que 80.')
        var idade = parseInt(prompt('Insira a idade desejada'));
    }

    var quantidadelanche = parseInt(prompt('Quantos lanches você irá consumir por dia ?'));

    var quantitotal = (quantidadelanche * 365) * idade;

    alert('Você precisará de ' + quantitotal + ' para durar até a idade ' + idade);

}

*/

/* 4) Geometria? Nós dominamos! */

/*

calcularCircunferencia()

function calcularCircunferencia(){

    var raio = parseFloat(prompt('Insira o raio do seu círculo'));
    var formula = (2*raio)*Math.PI;

    alert('A circunferência é ' + formula.toFixed(2))

}

*/

/*

calcularArea()

function calcularArea(){

    var raio = parseFloat(prompt('Insira o raio do seu círculo'));
    var formula = (raio*raio)*Math.PI;

    alert('A área é ' + formula.toFixed(2));

}

*/

/* 5) Tá quente. Muito quente. Quente demaaaais. */

/*

converterCelsiusFahrenheit()

function converterCelsiusFahrenheit(){

    var armaCelcius = parseInt(prompt('Ta calor ai ? Qual é a temperatura em °c ?'));
    var formula = (armaCelcius * 9/5) + 32

    alert(armaCelcius + '°c é igual a ' + formula + '°f')

}

*/

/*

converterFahrenheitCelsius()

function converterFahrenheitCelsius(){

    var armaFahren = parseInt(prompt('Ta calor ai ? Qual é a temperatura em °f ?'));
    var formula = (armaFahren-32)*5/9

    alert(armaFahren + '°f é igual a ' + formula.toFixed(0) + '°c')
}

*/