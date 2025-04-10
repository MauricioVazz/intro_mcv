class EditAlunoController {
	constructor(aluno, view, service) {
		this.aluno = aluno
		this.view = view
		this.service = service
		this.view.render(model)
	}

	update(id, nome, notas) {
		let aluno = {}
		aluno.nome = nome
		aluno._id = id
		aluno.notas = notas
		this.service.update(new AlunoModel(aluno))
	}
}