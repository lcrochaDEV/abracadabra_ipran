class CriarTagsHtml {
    static criarTagDom(parent, child, atrib_A, atrib_AdName = '', atrib_B,  atrib_BNome = '',  atrib_C, atrib_CNome = ''){
		var parent = document.querySelector(parent);
		var child = document.createElement(child);
            if(atrib_A){
    			child.setAttribute(atrib_A, atrib_AdName);
            } if(atrib_B){
    			child.setAttribute(atrib_B, atrib_BNome);
            } if(atrib_C){
			    child.setAttribute(atrib_C, atrib_CNome);
            }
		return	parent.appendChild(child);
	}
}
