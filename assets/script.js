const main = document.querySelector("main")
const projeto = document.querySelector("#projeto")
const pdf = document.querySelector("#pdf")
const divpdf = document.querySelector("#divpdf")

function esconder(){
    divpdf.style.display = "block"
    main.style.display = "none"
    projeto.style.display = "none"
}

const pages = {
    vision(){
        pdf.setAttribute("src", "docs/Documento de Visão - Learn&Code.pdf")
        esconder()
    },
    method(){
        pdf.setAttribute("src", "docs/Plano_Metodológico_Final.pdf")
        esconder()
    },
    requirements(){
        pdf.setAttribute("src", "docs/Documento de requisitos de software.pdf")
        esconder()
    },
    matrix(){
        pdf.setAttribute("src", "docs/Learn&Code - matriz de rastreabilidade.pdf")
        esconder()
    },
    useCases(){
        pdf.setAttribute("src", "docs/Documento_Especificacao_Casos_de_Uso.pdf")
        esconder()
    }
}

function atualizaPagina(event) {
    var elementoClicado = event.target;
    var idElemento = elementoClicado.id;
    
    var ativador = pages[idElemento];
    ativador();
}