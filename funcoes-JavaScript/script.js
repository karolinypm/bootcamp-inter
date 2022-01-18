const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
	{
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];
function alunosAprovados(alunos,media){
  let aprovados = [];//declara fora do for, se não ele irá criar um novo array para cada loop que ele der
  for (let i = 0; i< alunos.length; i++){
    //utilizando o object distract
    let {nota, nome} = alunos[i];

    if(nota >= media){
      aprovados.push(nome);
    }
  }

  return aprovados;
}
console.log(alunosAprovados(alunos,5));