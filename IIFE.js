// Funões imediatas ; auto-invocadas.
// IIFE - Immediately invoked Function Expression.

( function(){

    const curso = "Systems Development and Analysis";
    function criaFormacao(curso){
        const nome = "André"
        return `${nome} make ${curso}`
    }

    function falaCurso(){
        return criaFormacao(curso)
    }

    console.log(falaCurso())


} )();


( function(){

    
    function dizFrutas(){
        const frutas = "Abacaxi e Melão"
        console.log(frutas)
    }

    console.log(dizFrutas())

} )();
