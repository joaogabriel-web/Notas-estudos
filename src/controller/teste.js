import Service from '../service/teste.js';

class Controller {

    Buscar(req, res) {
        try {
            const informat =  Service.Buscar();

            res.send({ informat });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id;
            const nome = Service.BuscarUm(id);

            res.send({ nome });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Criar(req, res) {
        try {
            const nome = req.body.Nome;
            const idade = req.body.Idade;
            const cidade = req.body.Cidade;
            Service.Criar(nome, idade, cidade);

            res.send({ message: "Criado com sucesso!" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Alterar(req, res) {
        try {
            const id =  req.params.id;
            const nome = req.body.Nome;
            const idade = req.body.Idade;
            const cidade = req.body.Cidade;
            Service.alterar(id, nome, idade, cidade);

            res.send({ message: "Alterado com sucesso!" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Deletar(req, res) {
        try {
            const id =  req.params.id;
            Service.Deletar(id);

            res.send({ message: "Deletado com sucesso!" });
        } catch (error) {
            res.send({ error: error.message });
        }
    }
}

export default new Controller()