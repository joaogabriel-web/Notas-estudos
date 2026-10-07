import Pessoa from '../model/teste.js';

class Service {

    Buscar() {
        return Pessoa.Buscar();
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        return Pessoa.BuscarUm(id);
    }

    Criar(nome, idade, cidade) {
        if (!nome || !idade || !cidade) {
            throw new Error("Todos os campos são obrigatórios");
        }
        Pessoa.Criar(nome, idade, cidade);
    }

    Alterar(id, nome, idade, cidade) {
        if (!id || isNaN(id) || !nome || !idade || !cidade) {
            throw new Error("Todos os campos são obrigatórios");
        }
        Pessoa.Alterar(id, nome, idade, cidade);
    }

    Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("ID inválido");
        }
        Pessoa.Deletar(id);
    }
}

export default new Service()