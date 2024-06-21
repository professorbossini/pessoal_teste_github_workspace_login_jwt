# pessoal_teste_github_workspace_login_jwt

Teste com workspace para a criação de um login com jwt

## Instruções

Para iniciar o servidor, execute o seguinte comando:

```
node index.js
```

Antes de executar o servidor, certifique-se de instalar as dependências necessárias com o comando:

```
npm install express jsonwebtoken
```

A rota de login pode ser acessada enviando uma requisição POST para `/login` com um payload contendo `username` e `password`.

Para utilizar a rota de login, é necessário enviar uma requisição POST para o endpoint `/login` com um payload que contenha `username` e `password`. Se as credenciais forem válidas, um token JWT será retornado na resposta.
