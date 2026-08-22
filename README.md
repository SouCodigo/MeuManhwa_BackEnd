# MeuManhwa API

API REST do catálogo MeuManhwa, com criação, consulta, atualização e remoção de obras, validação de entrada e persistência no MongoDB.

## Requisitos e configuração

1. Use Node.js 18 ou superior e tenha acesso a um MongoDB.
2. Execute `npm install`.
3. Copie `.env_example` para `.env` e defina `MONGO_URL`.
4. Use `npm run dev` no desenvolvimento ou `npm start` em produção.

## Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/health` | Verifica a disponibilidade da API. |
| GET | `/manhwas` | Lista obras. |
| POST | `/manhwas` | Cadastra uma obra. |
| PATCH | `/manhwas/:id` | Atualiza campos. |
| DELETE | `/manhwas/:id` | Remove uma obra. |

O cadastro recebe `obra`, `imagem`, `sinopse` e `opiniao`. Rode `npm test` para executar os testes de validação.
