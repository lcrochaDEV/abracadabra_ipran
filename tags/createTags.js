//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEIO SE ESTIVER FORA DO LINK DESEJADO
const origem = window.location.origin;
const urlAtual = window.location.href;

let IPRAN = "/grb/topologia_rede/www/consulta_detalhamento_conexao_grb.php";

window.addEventListener("load", () => {
	let URL_ICON = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
	
	//CRIA TAG LINK NO HEAD
	var parent = document.querySelector('head');
    var child = document.createElement('link');
    child.setAttribute('href', URL_ICON);
    child.setAttribute('rel', "stylesheet");
    parent.appendChild(child);

    if(window.location.pathname === IPRAN) {
        document.querySelectorAll('tr')[0].innerHTML = `<a href="" class="linkFlut"><span class="material-symbols-outlined">edit_square</span></a>
                                                        <div class="text">
                                                            <label for="msg"></label>
                                                            <textarea class="txtarea" value="" rows="14" cols="70"></textarea>
                                                            <input type="submit" value="RAL" class="btnpopup">
                                                            <p class="alertas"></p>
                                                        </div>`;
        console.log('Log de Load RGB TAG')      
    }
    if(urlAtual.search(/Arcos\/SitRegistro.aspx\?Numero/gm) != -1) {
        document.querySelectorAll('.TdEsquerda')[23].innerHTML = `<a href="#" class="linkSit"><span class="material-symbols-outlined">linked_services</span></a>`;
        console.log('Log de Load SIT TAG')
    }
})
