# Introdução

- Repositório do projeto do Squad 22 (UNIT - Universidade Tiradentes), referente a solução do desafio proposto pela Cfit Healthtech Analytics em parceria com Porto Digital como parte da Residência Tecnológica RISE UP 2024.2

# Problemática

- Como tornar a aplicação "Se Mexe Comigo" escalável a nível nacional se melhorando a experiência do usuário, garantimos sua eficácia em reunir pessoas na prática de atividades físicas promovendo assim a manutenção do bem-estar e da saúde pública?

# Solução

- A solução desenvolvida consiste na elaboração de uma aplicação escalável nacionalmente, que a partir do compartilhamento de atividades físicas e da criação e divulgação de eventos esportivos, a população invista na manutenção do bem-estar social.

# Stack de Desenvolvimento

- Git e Github
- HTML
- CSS
- JavaScript
- React.js

# Passo a Passo para a Implementação do Projeto

## Pré Requisitos

- Antes de clonar o repositório do GitHub que contenha uma aplicação React.js, aqui estão algumas etapas que são necessárias serem consideradas antes de clonar tal repositório.

1. Instale o Git: Certifique-se de ter o Git instalado em sua máquina.

  **Você pode baixá-lo e instalá-lo a partir do site oficial do Git: "git-scm.com".**

2. Instale o Node.js e o npm: O React.js depende do Node.js e do npm (Node Package Manager).

  **Você pode baixar e instalar o Node.js no site oficial: nodejs.org.**

  **OBS: O npm geralmente é instalado junto com o Node.js.**

3. Instale o React: Embora o repositório possa conter as dependências necessárias no arquivo package.json, é uma boa prática ter o React instalado globalmente em sua máquina para facilitar o desenvolvimento.

  **Você pode instalá-lo globalmente usando o npm: npm install -g create-react-app.**

# Clonagem do Repositório Se-Mexe-Comigo-API

a) Clonagem do Repositório: Use o Git para clonar o repositório do GitHub para o seu ambiente local. Você pode fazer isso executando o seguinte comando no terminal:

```bash
git clone <URL do repositório>
npm install
```

b) Instale as Dependências do projeto: Após clonar o repositório, navegue até o diretório do projeto e execute o seguinte comando para instalar todas as dependências listadas no arquivo package.json a partir do seguinte comando no terminal:

```bash
npm install
```

c) Verifique a Estrutura Base do Projeto: Certifique-se de que todas as pastas e arquivos necessários para a execução do projeto tenham sidos clonados:

```

SE-MEXE-COMIGO-API/
├── node_modules
├── public
    ├── vite.svg
├── src
    ├── assets
    ├── common
        ├── components
            ├── Breadcrumb
            ├── Button
            ├── Fieldset
            ├── SearchBar
            ├── svg
            ├── UserChat
        ├── mocks
        ├── components
            ├── Cards
            ├── CriarEventos
            ├── Esportes
            ├── Eventos
            ├── Input
            ├── MeusEventos
            ├── ProximosEventos
            ├── SideBar
            ├── TelaInicial
        ├── contexts
        ├── pages
            ├── Calendar
            ├── Chat
            ├── CriarEventosPage
            ├── EsportesPage
            ├── EventoPage
            ├── Friends
            ├── FriendsProfile
            ├── HomePage
            ├── LoginPage
            ├── Profile
                        ├── EditData
                        ├── Notifications
                        ├── Suport
                        ├── Support
            ├── SportScore
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── .eslintrc.cjs
        ├── .gitignore
        ├── .prettierrc
        ├── index.html
        ├── jsconfig.json
        ├── logo_fav_a853b0e2.svg
        ├── package-lock.json
        ├── package.json
        ├── README.md
        ├── vite.config.js

```

d) Execute a Aplicação: Uma vez que todas as dependências tenham sido instaladas com sucesso, você pode iniciar a aplicação React.js executando o seguinte comando:

```bash
npm run dev
```

Após isso, abra seu navegador e navegue até http://localhost:3000/ para acessar o site e testar a aplicação.
