![graphql](https://user-images.githubusercontent.com/13801496/77875307-11bacd00-7226-11ea-8ebb-302b6c37c43d.png)

# API GraphQl

A API GraphQl foi construida para auxiliar o Front-end(Client), que é um projeto desenvolvido como desafio para o processo seletivo da Deliver IT.

#### Motivação

> Desenvolver uma API GraphQl a frente da RESTful disponibilizada, visando ganhar agilidade no desenvolvimento(Client), 
além de entregar exatamente os dados que o Client(Front-end) solicitar na requisição.

## Desenvolvimento

### API RESTful disponibilizada

A Deliver IT provê uma API RESTful para consumo.

| Método HTTP | URL                                                      | Recurso                                                            |
| ----------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| GET         | api/v1/collaborator    							         | Lista todos os colaboradores da empresa                            |
| GET         | api/v1/collaborator/:collaboratorId 			         | Exibe todos os dados do colaborador pelo ID                        |
| GET         | api/v1/collaborator/:collaboratorId/feedback             | Exibe todos os feedbacks do colaborador pelo ID                    |
| PUT         | api/v1/collaborator/:collaboratorId/feedback/:feedbackId | Edita um feedback do colaborador pelo ID do mesmo e ID do feedback |
| POST        | api/v1/collaborator/:collaboratorId/feedback             | cadastro um feedback pelo ID do colaborador                        |
| DELETE      | api/v1/collaborator/:collaboratorId/feedback/:feedbackId | Edita um feedback do colaborador pelo ID do mesmo e ID do feedback |

Estrutura básica do Colaborador

    {
       "id": "2",
       "createdAt": "2019-09-24T20:55:20.489Z",
       "name": "Dorothea Hansen",
       "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adobi/128.jpg",
       "company": "Cummerata, Upton and Gulgowski",
       "role": "Analyst"
     }

Estrutura básica do Feedback

    [
	   {
		   "id": "1",
		   "collaboratorId": "1",
		   "createdAt": "2019-09-22T17:06:22.988Z",
		   "message": "excellent professional!",
		   "like": 12
	   },
	   {
		   "id": "2",
		   "collaboratorId": "1",
		   "createdAt": "2019-09-28T19:06:22.988Z",
		   "message": "you are an excellent analyst!",
		   "like": 7
	   }	   
     ]


Exemplo de request para cadastro de um feedback

    {
	"collaboratorId": "1",
	"message": "it's very proactive!",
	"like": 3
    }


### API GraphQl construída

Foi decido usar a implementação do Apollo(https://www.apollographql.com/) para a criação da mesma, 
pois é o framework com maior maturidade e utilização atualmente, além de contar com excelente documentação.

As tecnologias, frameworks e ferramentas usadas para construir a aplicação foram:

> NodeJS, RamdaJS e Apollo.

A aplicação sobe na porta '4000', `http://localhost:4000`. Se precisar iniciar a API em outra porta, altere a `const PORT` no arquivo `./index.js`.


![api](https://user-images.githubusercontent.com/13801496/77875330-2303d980-7226-11ea-989c-5103ca6243b1.gif)


## Instalando a aplicação

Primeiro, Clone o repositório.

Depois, navegue até a pasta raíz do projeto e instale as dependências através do Yarn:

	yarn install
	
Logo após, inicie o servidor através do comando:

    yarn dev

Pronto!
