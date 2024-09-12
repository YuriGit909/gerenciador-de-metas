// IMPORTAÇÃO DE UM MÓDULO (OU DEPENDÊNCIA) EXTERNO
const { select } = require("@inquirer/prompts");

const start = () => {
    while(true) {
        let opcao = 'Sair'
        switch(start){
        case 'Cadastrar':
            console.log("Vamos cadastrar!")
            break;
        case "listar":
            console.log("Vamos listar")
            break;
        case 'Sair':
            return
        }
    }
}

start();