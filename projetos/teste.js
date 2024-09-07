function teste1() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
        
    }

    console.log(SOMA);

    document.getElementById('teste').textContent = 'O resultado do teste 1 é: ' + SOMA;


}

function teste2A() {
    
    function getNextInArithmeticSequence(SEQUENCIA) {
        const RESULT = SEQUENCIA[SEQUENCIA.length - 1] + 2;
        return RESULT;

        
    }
    
    
    const SEQUENCIA = [1, 3, 5, 7];
    const NEXT = getNextInArithmeticSequence(SEQUENCIA);

    console.log(NEXT);

    document.getElementById('somaAtxt').textContent = 'A sequência é: ' + SEQUENCIA;
    document.getElementById('somaA').textContent = 'E o próximo número na sequência A é: ' + NEXT;
    
 
}
function teste2B() {
    
    function getNextInArithmeticSequence(SEQUENCIA) {
        const RESULT = SEQUENCIA[SEQUENCIA.length - 1] * 2;
        return RESULT;
    }
    
    
    const SEQUENCIA = [2, 4, 8, 16, 32, 64];
    const NEXT = getNextInArithmeticSequence(SEQUENCIA);

    console.log(NEXT);

    document.getElementById('somaBtxt').textContent = 'A sequência é: ' + SEQUENCIA;
    document.getElementById('somaB').textContent = 'E o próximo número na sequência B é: ' + NEXT;


}
function teste2C() {
    
    function getNextInArithmeticSequence(SEQUENCIA) {
        const RESULT = Math.sqrt(SEQUENCIA[SEQUENCIA.length - 1]) ;
        const RESULT2 = RESULT + 1 ;
        return RESULT2 * RESULT2;
    }
    
    
    const SEQUENCIA = [0, 1, 4, 9, 16, 25, 36];
    const NEXT = getNextInArithmeticSequence(SEQUENCIA);

    console.log(NEXT);

    document.getElementById('somaCtxt').textContent = 'A sequência é: ' + SEQUENCIA;
    document.getElementById('somaC').textContent = 'E o próximo número na sequência C é: ' + NEXT;

   

}
function teste2D() {
    
    function getNextInArithmeticSequence(SEQUENCIA) {
        const RESULT = Math.sqrt(SEQUENCIA[SEQUENCIA.length - 1]) ;
        const RESULT2 = RESULT + 2 ;
        return RESULT2 * RESULT2;
    }
    
    
    const SEQUENCIA = [4, 16, 36, 64];
    const NEXT = getNextInArithmeticSequence(SEQUENCIA);

    console.log(NEXT);

    document.getElementById('somaDtxt').textContent = 'A sequência é: ' + SEQUENCIA;
    document.getElementById('somaD').textContent = 'E o próximo número na sequência D é: ' + NEXT;

   

}

function teste2E() {
    
    function getNextInArithmeticSequence(SEQUENCIA) {
        const PRIMEIRONUMERO = SEQUENCIA[SEQUENCIA.length - 2];
        const SEGUNDONUMERO =  SEQUENCIA[SEQUENCIA.length - 1];

        const RESULT = PRIMEIRONUMERO + SEGUNDONUMERO ;
        return RESULT;
    }
    
    
    const SEQUENCIA = [1, 1, 2, 3, 5, 8];
    const NEXT = getNextInArithmeticSequence(SEQUENCIA);

    console.log(NEXT);

    document.getElementById('somaEtxt').textContent = 'A sequência é: ' + SEQUENCIA;
    document.getElementById('somaE').textContent = 'E o próximo número na sequência E é: ' + NEXT;

   

}
function teste2F() {
    
    function getNextInArithmeticSequence(SEQUENCIA) {
        const PRIMEIRONUMERO =  SEQUENCIA[SEQUENCIA.length - 1];

        const RESULT = PRIMEIRONUMERO + 1 ;
        return RESULT;
    }
    
    
    const SEQUENCIA = [2, 10, 12, 16, 17, 18, 19];
    const NEXT = getNextInArithmeticSequence(SEQUENCIA);

    console.log(NEXT);

    document.getElementById('somaFtxt').textContent = 'A sequência é: ' + SEQUENCIA;
    document.getElementById('somaF').textContent = 'E o próximo número na sequência F é: ' + NEXT;

   

}
function teste3() {

    
    function menor(FATURAMENTO) {
        const VALORES = FATURAMENTO.filter(f => f > 0);
        const MENOR = Math.min(...VALORES);
        return MENOR ;
    }
    
    function maior(FATURAMENTO) {
        const VALORES = FATURAMENTO.filter(f => f > 0);
        const MAIOR = Math.max(...VALORES)
        return MAIOR;
    }
    function media(FATURAMENTO) {
        const VALORES = FATURAMENTO.filter(f => f > 0);
        const total = VALORES.reduce((acc, val) => acc + val, 0);
        return total / VALORES.length;
    }
    
    function dias(FATURAMENTO) {
        const MEDIA = media(FATURAMENTO);
        return FATURAMENTO.filter(f => f > MEDIA).length;
    }
    
    const FATURAMENTO = [100, 0, 38, 0, 90, 0, 43 ,0, 10, 0, 99 ,0, 20, 0, 40, 0, 50, 0, 110, 0, 500, 0,430, 0, 15, 350];

    const MENOR = menor(FATURAMENTO);
    const MAIOR = maior(FATURAMENTO);
    const DIAS = dias(FATURAMENTO);
    
    console.log(MENOR);
    console.log(MAIOR);
    console.log(media(FATURAMENTO));
    console.log(DIAS);

    document.getElementById('teste0').textContent = 'o valor de faturamento diário é: ' + FATURAMENTO;
    document.getElementById('teste1').textContent = 'O menor valor de faturamento ocorrido é: ' + MENOR;
    document.getElementById('teste2').textContent = 'O maior valor de faturamento ocorrido é: ' + MAIOR;
    document.getElementById('teste3').textContent = 'Número de dias no ano em que o valor de faturamento diário foi superior à média anual é: ' + DIAS;

   

}
