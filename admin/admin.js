//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEIO SE ESTIVER FORA DO LINK DESEJADO
const url_Oriegin = window.location.origin;
const url_Atual = window.location.href;

const SIT = 'http://sit.nocclarobrasil.com.br'

const URL_CACHE = `http://CLR0AN001372366.nt.embratel.com.br`
//const URL_CACHE = `192.168.1.252`

//******************Detalhamento de Facilidades da Conexão******************//

window.addEventListener("load", () => {
    if(url_Atual.search(/framesetNivel2TarefaRal/) > -1){
        console.log('Log de Load SIR')
        menuflutuante(); //MENU-FLUTUANTE.JS
    }
})
