# Projeto Agenda para Armazenar Eventos

Descrição
O projeto "Agenda para Armazenar Eventos" é uma aplicação simples desenvolvida para permitir aos usuários adicionar eventos à uma lista e visualizar esses eventos em uma tabela. A aplicação é construída usando JavaScript puro (Vanilla JavaScript) para manipular o DOM e armazenar os eventos em uma lista.

Recursos Principais
Adicionar Evento: Os usuários podem adicionar eventos através de um formulário simples que solicita o nome do evento.
Visualizar Eventos: Após adicionar um evento, ele é exibido em uma tabela abaixo do formulário.
Ocultar e Mostrar Tabela: A tabela de eventos pode ser ocultada ou mostrada clicando em botões específicos.
Componentes e Funcionalidades
Elementos do DOM: O código utiliza seletores do DOM para interagir com diferentes elementos HTML, como botões e formulários.

Manipulação do DOM: Event listeners são adicionados para escutar eventos de clique em botões e envio de formulário.

Armazenamento de Dados: Os eventos são armazenados em uma lista chamada listaEventos.

Como Funciona
Abrir e Fechar Tabela: Ao clicar no botão com id #eventos, a tabela é exibida. O botão #cancel oculta a tabela novamente.

Adicionar Eventos: Os usuários podem adicionar eventos inserindo um nome no formulário e clicando no botão #submit. Se o campo estiver vazio ou inválido, um alerta é exibido.

Visualizar Eventos: Após adicionar um evento, ele é adicionado à lista listaEventos e exibido em uma tabela abaixo do formulário.

Inicialização: Quando a página é carregada, verifica-se se a lista de eventos está vazia. Se estiver, uma mensagem "Nenhum Evento Marcado" é exibida na tabela.

Instruções de Execução
Abra o arquivo HTML em um navegador web compatível.
Preencha o campo de nome do evento e clique no botão #submit para adicionar um evento.
Clique no botão #eventos para mostrar a tabela de eventos.
Clique no botão #cancel para ocultar a tabela novamente.

Observações
Este é um projeto simples desenvolvido para demonstrar a lógica básica de armazenar e exibir eventos em uma agenda.
Para fins de simplicidade, não há persistência de dados; ou seja, os eventos são perdidos quando a página é recarregada.
