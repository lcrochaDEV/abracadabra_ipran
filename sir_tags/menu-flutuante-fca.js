class AbasFca {
    static criatr_tags(){
        CriarTagsHtml.criarTagDom('html', 'div', 'class', 'menu-botton', 'data-menu-botton');
    }
    static abshtml(text, color){
        document.querySelector('[data-menu-botton]').innerHTML += `
        <span class="menuflut" style="background-color: ${color}">
           <a href="#" data-${text} class="data-${text}">${text}</a>
        </span> `
    }
    static animation(){
    let menuMovemento = document.querySelector('[data-menu-botton]');
        menuMovemento.addEventListener("mouseout", function(event) {
            menuMovemento.style.position = "relative";
			menuMovemento.style.top = "20px";
		});
        menuMovemento.addEventListener("mouseover", function(event) {
            menuMovemento.style.position = "relative";
			menuMovemento.style.top = "0";
		});
    }
}

let menuflutuante = async () => {
    AbasFca.criatr_tags();
    AbasFca.animation();
    await UF.forEach(sigla => {
        AbasFca.abshtml(sigla.sigla, '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0'));
    })
    montaMenuFlutuante();
}

class BtnsPres{
    constructor (valora = null, valorb = null, valorc = null, valord = null, valore = null, valorf = null){
		this.valora = valora;
		this.valorb = valorb;
		this.valorc = valorc;
		this.valord = valord;
		this.valore = valore;
		this.valorf = valorf;
	};

    preecheData(){
        window[2].document.querySelector('[name="respNovoItem"]').options[1].selected = true;
        window[2].document.querySelector('[name="novoCFAreaFunc"]').value = this.valora;
        window[2].document.querySelector('[name="novoCFLoc"]').value = this.valorb;
        window[2].document.querySelector('[name="novoCFPredio"]').value = this.valorc;
        window[2].document.querySelector('[name="novoCFCompl"]').value = this.valord;
        window[2].document.querySelector('[name="novoCFAreaTec"]').value = this.valore;
        window[2].document.querySelector('[name="novaAcao"]').value = this.valorf;
    }
}

function montaMenuFlutuante(){
    document.querySelector('[data-ac]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "RBO", "CO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-al]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "MCO", "NE", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-ap]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "MPA", "NO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-am]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "MNS", "NO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-ba]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "SDR", "BA", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-ce]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "FLA", "CE", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-df]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "BSA", "CO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-es]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "VTA", "JM", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-go]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "GNA", "CO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-ma]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "SLS", "CE", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-mt]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "CBA", "CO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-ms]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "CPE", "CO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-mg]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "BHE", "ES", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-pa]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "BLM", "NO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-pb]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "JPA", "NE", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-pr]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "CTA", "TF", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-pe]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "RCE", "NE", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-pi]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "TSA", "CE", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-rj]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "RJO", "AM", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-rn]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "NTL", "NE", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-rs]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "PAE", "BV", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-ro]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "PVO", "CO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-rr]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "BVA", "NO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-sc]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "FNS", "PO", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-sp]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "SPO", "PH", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-sp-sts]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "STS", "WL", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-sp-cas]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "CAS", "BC", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-sp-rpo]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "RPO", "TB", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-sp-sjc]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "SJC", "EB", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-sp-soc]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "SOC", "PH", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-se]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "AJU", "BA", "NET", "FO", "800");
        dataForm.preecheData();
    })
    document.querySelector('[data-to]').addEventListener('click', (event) => {
        event.preventDefault();
        let dataForm = new BtnsPres("DP", "PMJ", "CO", "NET", "FO", "800");
        dataForm.preecheData();
    })
}