let p = document.querySelector('.result')
let input = document.querySelector('.input-search')

const contacts = [
    { nome: "Thialison", telefone: "(81)1234-5678" },
    { nome: "Maria", telefone: "(81)9876-5432" },
    { nome: "Pedro", telefone: "(81)5555-5555" },
    { nome: "Ana", telefone: "(81)1111-2222" },
    { nome: "Carlos", telefone: "(81)3333-4444" }
]

function search() {

    let found = false

    for (const contact of contacts) {

        if (input.value.toLowerCase() === contact.nome.toLowerCase()) {

            p.innerHTML = `📞 Telefone de <strong>${contact.nome}</strong>: ${contact.telefone}`

            found = true
            break
        }

    }

    if (!found) {
        p.innerHTML = "❌ Contato não encontrado"
    }

}