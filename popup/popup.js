let elementoA = document.querySelectorAll('.fundoazulclaro')[3].innerText;
let intA = document.querySelectorAll('.fundoazulclaro')[4].innerText;
let elementoB = document.querySelectorAll('.fundobranco')[2].innerText;
let intB = document.querySelectorAll('.fundobranco')[3].innerText;

window.addEventListener('load', async () => {
    let iparan = new VerificaGpon(elementoA, intA, elementoB, intB);
    document.querySelector('.linkFlut').addEventListener('click', async (event) => {
        let textarea = document.querySelector('.txtarea');
        event.preventDefault();
        let texto = await iparan.texto();
        textarea.textContent = `${texto}`;
    })
})

window.addEventListener('load', async () => {
    document.querySelector('.btnpopup').addEventListener('click', async (event) => {
        event.preventDefault();
        const ral = await criarRal();
        let textarea = document.querySelector('.txtarea');
        let aletaral = document.querySelector('.alertas');
        let regexp = /RAL\s\d+\/\d+/gm;
        let matchRal = ral.match(regexp)
        if (matchRal !== null) {
            textarea.value += matchRal[0];
            aletaral.textContent = ral;
        }else{
            aletaral.style.color = 'red';
            aletaral.textContent = ral;       
        }

    })
})

async function criarRal (){
    let textarea = document.querySelector('.txtarea').value;
    let desigtx = regexpAberturaderal(/\w{1,}\s\w{1,}\s\w{1,}\s\w{1,}\s\w{2}\*\w\s\d{4}|\w{1,}\s\w{1,}\s\w{1,}\s\w{1,}\s\d+\w\s\d+/gm);
    let ipran = regexpAberturaderal(/IP\sRAN\/\w{2}\s\w+\/\w{2}\s\w+/gm);
    let ipnodeb = regexpAberturaderal(/IP\sNODEB\/\w{2}\s\w+\/\w{2}\s\w+/gm);

    let data = new Date();
    let datahora = `${data.toLocaleDateString()} - ${data.getHours()}:${data.getMinutes()}`;
    function regexpAberturaderal(patten){
        let capturatxt =  [... textarea.matchAll(patten)];
        if(capturatxt.length !== 0){
            return capturatxt[0][0];
        }
    }

    let bodyObj = {
        site: 'SIR',
        url: 'http://sir.nt.embratel.com.br/',
        xpathTags: '//title',
        tx: desigtx !== undefined ? desigtx : "",
        ipran: ipran !== undefined ? ipran : "",
        nodeb: ipnodeb !== undefined ? ipnodeb : "",
        textarea: textarea,
        datahora: datahora,
        elementoA: elementoA,
        intA: intA,
        elementoB: elementoB,
        intB: intB
    }

    return await CadastrarRal.connectJsonUrlJson('http://clr0an001372366.nt.embratel.com.br:8003/host', bodyObj);
}

