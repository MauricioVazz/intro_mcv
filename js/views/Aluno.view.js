class AlunoView {
    constructor(table) {
        this.tableList = table
        this.tableHeader = table.querySelector('thead')
        this.tableBody = table.querySelector('tbody')
        this.materias = ["backend_1", "frontend_2", "bancodados", "ferramentas"]

        this.renderHeader()
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'

        const htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join('')

        htmlHeader.innerHTML += htmlHeaderMaterias

        this.tableHeader.appendChild(htmlHeader)
    }

    render(alunos) {
        alunos.forEach(aluno => {
            let htmlrow = document.createElement('tr')
            htmlrow.innerHTML = `<td>${aluno.nome}</td>`
            this.materias.forEach(materia => {
                htmlrow.innerHTML += `<td>${aluno.media[materia]}</td>`
            })
            this.tableBody.appendChild(htmlrow)
        })
    }
}