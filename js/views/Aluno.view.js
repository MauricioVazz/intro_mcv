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
        this.tableBody.innerHTML = ''
        alunos.forEach(aluno => {
            let htmlrow = document.createElement('tr')
            htmlrow.innerHTML = `<td>${aluno.nome}</td>`
            let encontrado = false
            this.materias.forEach(materia => {
                if (materia in aluno.media) {
                    encontrado = true
                }
            })

            if (encontrado) {
                this.materias.forEach(materia => {
                    htmlrow.innerHTML += `<td>
                    ${aluno.media[materia] !== undefined ? aluno.media[materia] :
                        `<a href="edit.html?id=${aluno._id}">Incluir Nota</a>`}
                        </td>`
                })
            } else {
                htmlrow.innerHTML += `<td colspan="${this.materias.length}">
                    <a href="edit.html?id=${aluno._id}">
                        Incluir Notas
                    </a>
                </td>`
            }

            this.tableBody.appendChild(htmlrow)
        })
    }
}