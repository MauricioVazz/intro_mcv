class AlunoModel {
    constructor ({nome, _id, notas} = { notas: {} }) {
        this.nome = nome
        this._id = _id !== undefined ? _id : this.generateId()
        this.notas = {...notas}
        this.media = {}
    }

    generateId() {
        AlunoModel.maxId += 1
        return AlunoModel.maxId
    }
}

AlunoModel.maxId = 0 