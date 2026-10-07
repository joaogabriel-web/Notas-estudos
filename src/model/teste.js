//array de objetos com informações de pessoas, cada objeto contém Nome, Idade e Cidade.
const iformat = new Array(
    { Nome: "joao gabriel", Idade: 20, Cidade: "São Paulo" },
    { Nome: "maria", Idade: 25, Cidade: "Rio de Janeiro" },
    { Nome: "pedro", Idade: 30, Cidade: "Brasília" }
)
// Array de uma nica informação, apenas o nome da pessoa
// const nomes = new Array("Ana", "Batata", "João")

class pessoa {
    
    Buscar() {
        return iformat
    }

    BuscarUm(id) {
        return iformat[id]
    }

    Criar(nome, idade, cidade) {
        iformat.push({ Nome: nome, Idade: idade, Cidade: cidade })
    }

    alterar(id, nome, idade, cidade) {
        iformat[id].Nome = nome
        iformat[id].Idade = idade
        iformat[id].Cidade = cidade
    }

    Deletar(id) {
        iformat.splice(id, 1)
    }
}

export default new pessoa()