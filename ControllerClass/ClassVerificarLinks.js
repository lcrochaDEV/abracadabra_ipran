class VerificaGpon {
    constructor(elementoA, intA, elementoB, intB){
        this.elementoA = elementoA;
        this.intA = intA;
        this.elementoB = elementoB
        this.intB = intB;
    }
    
    //VERIFICA SE EXISTE DESIGNAÇÃO TX
    async __regexpDesig(a, b){
        let nodebIpran = document.querySelectorAll('.micro')[16].textContent;
        let desig = document.querySelectorAll('.bordatabelatdfull > span')[8].textContent;

        if(desig.search(/\w{1,}\s\w{1,}\s\w{1,}\s\w{1,}\s\w{2}\*\w\s\d{4}|\w{1,}\s\w{1,}\s\w{1,}\s\w{1,}\s\d+\w\s\d+/gm) < 0){
            if(nodebIpran.search(/FIBRA\sAPAGADA|LINK\sTX\sRADIO/gm) > 17){
                let RegExp = /IP\sNODEB|IP\sRAN/gm; 
                let capturatxt = [... nodebIpran.matchAll(RegExp)];
                let text1 = capturatxt.find(itens => itens)[0];
                return `${text1}/${this.__regexp(a)}/${this.__regexp(b)}`;
            }else{
                return `IP RAN/${this.__regexp(a)}/${this.__regexp(b)}`;
            }
        }else {
            return desig;
        }
    }

    __regexp(exp){
        return `${exp.substring(0, 2)} ${exp.substring(2, 7)}`
    }

    async texto(){
            return `${await this.redeGpon()}\
                    \rTRECHO: ${this.elementoA} ${this.intA} X ${this.elementoB} ${this.intB}\
                    \rFALHA: LINK DOWN.\
                    \rDESIGNAÇÃO: ${await this.alfanumerico()}\
                    \rBILHETE: `;
    }
    
    async redeGpon() { 
        // VERIFICA REDE GPON
        const response = await fetch(`http://www-grbs.embratel.net.br/grb/topologia_rede/www/consulta_busca_avancada_jsrs.php?metodo=get_eq_nome&rede=40&eqpto=${this.elementoA}&tcos=1723401935852`);
        const gpon = await response.text();
        if(gpon.search('NET_GPON IPRAN') !== -1){
            return `###### ABORDAGEM GPON RESIDENCIAL ######\
                    \rCHAMADO:`
        }else{
            return `CHAMADO:`;
        }

    }
    
    alfanumerico(){
        if(elementoA < elementoB){
            return this.__regexpDesig(this.elementoA, this.elementoB);
        }else{
            return this.__regexpDesig(this.elementoB, this.elementoA);
        }
    }
}
