function calcularMedia() {
  let ano = document.getElementById("ano").value;
  let turma = document.getElementById("turma").value;
  let turno = document.getElementById("turno").value;
  let nome = document.getElementById("nome").value;
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);

  let soma = nota1 + nota2 + nota3 + nota4;
  let media = soma / 4;

  let resultadoTexto = `
      Ano: ${ano}<br>
      Turma: ${turma}<br>
      Turno: ${turno}<br>
      Aluno: ${nome}<br>
      Média: ${media.toFixed(2)}<br>
  `;

  if (media >= 7) {
      resultadoTexto += "Aprovado!";
  } else {
      resultadoTexto += "Reprovado.";
  }

  document.getElementById("display").innerHTML = resultadoTexto;
}
