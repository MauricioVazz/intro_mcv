class MateriaService {
    constructor() {
        this.materias = []
        this.updateListAlunosFromLocalStorage()
    }

    add(materia) {
        if (!materia instanceof MateriaModel) {
            throw new Error('A materia deves ser uma instancia de MateriaModel')
        }
        this.materias.push(materia)
        this.updateLocalStorage()
    }

    update(materia) {
        return materia
    }

    searchById(id) {
        return this.materias.find(materias => materias._id === id)
    }

    getAll() {
        return this.materias
    }

    updateLocalStorage() {
        let materia = JSON.stringify(this.materias)
        localStorage.setItem('materias', materias)
        // localStorage.setItem('materias', JSON.stringify(this.materias))
    }

    updateListAlunosFromLocalStorage() {
        let local = localStorage.getItem('materias')
        let materias = []
        if (local) {
            materias = JSON.parse(local)
        }
        materias.forEach(materia => {
            this.add(new MateriaModel(materia))
        })
    }
}

