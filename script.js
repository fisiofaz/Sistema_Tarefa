// Array para armazenar as tarefas
let tarefas = [];

// Função para renderizar a lista de tarefas
function renderizarTarefas() {
  const listaElement = document.getElementById('lista-tarefas');
  listaElement.innerHTML = ''; // Limpa a lista antes de renderizar

  // Renderiza cada tarefa na lista
  tarefas.forEach((tarefa, index) => {
    const tarefaElement = document.createElement('div');
    tarefaElement.classList.add('tarefa');
    tarefaElement.innerHTML = `
      <strong>${tarefa.nome}</strong>
      <span>R$ ${tarefa.custo.toFixed(2)}</span>
      <span>${tarefa.dataLimite}</span>
      <button onclick="editarTarefa(${index})">Editar</button>
      <button onclick="excluirTarefa(${index})">Excluir</button>
    `;
    
    // Destacar tarefas com custo maior ou igual a R$ 1.000
    if (tarefa.custo >= 1000) {
      tarefaElement.style.backgroundColor = 'yellow';
    }

    listaElement.appendChild(tarefaElement);
  });
}

// Função para incluir nova tarefa
function incluirTarefa() {
  const nome = prompt("Nome da Tarefa:");
  const custo = parseFloat(prompt("Custo (R$):"));
  const dataLimite = prompt(`Data Limite (DD-MM-YYYY):`);

  if (nome && !isNaN(custo) && dataLimite) {
    tarefas.push({ nome, custo, dataLimite });
    renderizarTarefas();
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

// Adiciona evento ao botão "Incluir Tarefa"
document.getElementById('incluir-tarefa').addEventListener('click', incluirTarefa);
