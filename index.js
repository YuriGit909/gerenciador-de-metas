// IMPORTAÇÃO DE UM MÓDULO (OU DEPENDÊNCIA) EXTERNO
const { select, input, checkbox } = require("@inquirer/prompts");

let meta = {
    value: "Beber 3L de água todos os dias",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta: " })

    if(meta.length == 0) {
        console.log("A meta não pode ser vazia.")
        return;
    }

    metas.push({ 
        value: meta, 
        checked: false 
    })
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mover-se entre as metas, a tecla Space para marcar ou desmarcar, e a tecla Enter para finalizar essa etapa",
        // SPREAD OPERATOR: USADO PARA COPIAR TODOS OS DADOS DE UMA DADA VARIÁVEL EM OUTRA PARA MINUPULAÇÃO
        choices: [...metas]
    })

    if(respostas.length == 0) {
        console.log("Nehuma meta selecionada!")
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })
}

const metasRealizadas = async () => {
    const realizadas = metas.filter(() => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        console.log("Não existem metas realizadas! :(")
        return
    }

    await select({
        message: "Metas Realizadas",
        choices: [...realizadas],
    })
}

const start = async () => {
    while(true) {

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar metas",
                    value: "cadastrar",
                },
                {
                    name: "Listar metas",
                    value: "listar",
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas",
                },
                {
                    name: "Sair",
                    value: "sair",
                },
            ],
        })

        switch(opcao){
        case "cadastrar":
            await cadastrarMeta()
            console.log(metas)
            break;
        case "listar":
            await listarMetas()
            break;
        case "realizadas":
            await metasRealizadas()
            break;
        case "sair":
            return
        }
    }
}

start();