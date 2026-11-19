/*
  Comentários iniciais, separados dos posts.
  A lista é "plana": cada resposta aponta para o comentário original pelo idPai.
  Guardar plano é mais simples de salvar; a árvore (comentário > respostas)
  é montada na hora de exibir, em services/comentarios.js.
  Autores e textos são fictícios.
*/
export const comentariosIniciais = [
  {
    id: 'c1',
    postId: 'painel-de-upload',
    idPai: null,
    autor: { nome: 'Márcia Souza', usuario: 'marcia' },
    texto: 'Achei muito bom seu código, parabéns!',
  },
  {
    id: 'c2',
    postId: 'painel-de-upload',
    idPai: null,
    autor: { nome: 'Gabriel Luz', usuario: 'gabriel_luz' },
    texto: 'Quanto tempo você levou para finalizar esse projeto?',
  },
  {
    id: 'c3',
    postId: 'painel-de-upload',
    idPai: 'c2',
    autor: { nome: 'Marcela Lins', usuario: 'marcelalins' },
    texto: 'Até que foi rápido, uns 3 dias!',
  },
  {
    id: 'c4',
    postId: 'kit-de-componentes',
    idPai: null,
    autor: { nome: 'Marcela Lins', usuario: 'marcelalins' },
    texto: 'Os estados de erro ficaram bem claros. Vou usar como referência.',
  },
]
