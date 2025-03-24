const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        backend_1: [7, 8.5, 9, 6.5],
        frontend_2: [2, 7, 2, 2],
        bancodados: [2, 2, 6, 8],
        ferramentas: [3, 8, 10, 3],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [7, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
    {
      _id: 2,
      nome: "Vini Junior",
      notas: {
        backend_1: [10, 10, 8, 10],
        frontend_2: [7, 8, 8 , 7],
        bancodados: [8, 7, 7, 9],
        ferramentas: [8, 9, 7, 7],
      },
    },
];

const AlunoService = new AlunoService()

alunos.forEach(aluno => {
    AlunoService.add(new AlunoModel(aluno))
})

// Inserir no thead da tabela a lista de matérias

const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = '<td>Nome</td>'

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    return `<td>${materia}</td>`
}).join('')

htmlHeader.innerHTML += htmlHeaderMaterias

document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader)

// Inserir no tbody da tabela a lista de alunos e suas médias
function render() {
    document.querySelector('[data-table-alunos] tbody').innerHTML = ''
    alunos.forEach(aluno => {
        let htmlrow = document.createElement('tr')
        htmlrow.innerHTML = `<td>${aluno.nome}</td>`
        let htmlrowMaterias = Object.keys(aluno.media).map(materia => {
            return `<td>${aluno.media[materia]}</td>`
        }).join('')
        htmlrow.innerHTML += htmlrowMaterias
        document.querySelector('[data-table-alunos] tbody').appendChild(htmlrow)
    })
}
render()

// Inserir aluno
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
    const nome = document.getElementById('first_name').value
    console.log(nome)
    const newAluno = {
        _id: 0,
        nome,
        notas: {
            backemd_1: [9,9,9,9],
            frontend_2: [7,8,6,8],
            bancodados: [6,8,9,10],
            ferraentas: [9,8,6,7],
        }
    }
    newAluno.media = {}
    for (let materia in newAluno.notas) {
        newAluno.media[materia] = average(...newAluno.notas[materia])
    }
    alunos.push(newAluno)
    render()
})
