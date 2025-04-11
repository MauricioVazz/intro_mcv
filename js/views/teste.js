
if (aluno.media[materia._id] !== undefined && !Number.isNaN(aluno.media[materia._id])) {
	td.innerHTML = aluno.media[materia._id]
} else {
	td.innerHTML = `<a href="edit.html?id=${aluno._id}">Incluir Nota</a>`
}