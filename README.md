<div align="center">
  <img src=".github/logo.svg" alt="estique.se"/>
</div>


### :information_source: Info

Projeto desenvolvido durante a 4ª semana Next Level Week da [Rocketseat][https://rocketseat.com.br/]. A trilha em escolhida foi a de ReactJS com foco na utilização do NextJS, ministrada pelo [@diego3g][https://github.com/diego3g].

O projeto pode ser acessado através do link [https://estiquese.vercel.app][https://estiquese.vercel.app].

### ✨ Tecnologias

A proposta inicial do projeto sugeriu a utilização de:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

Além do proposto, foi utilizado:

- [Styled Components][https://styled-components.com/]
- [Framer Motion][https://www.framer.com/api/motion/]
- [Firebase][https://firebase.google.com/]
- [Eslint][https://eslint.org/]

### ⚙ Pré-requisitos

Antes de começar você vai precisar ter na sua máquina as seguintes ferramentas:

* [Node + NPM](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Visual Studio Code (Editor de código)](https://code.visualstudio.com/)

**Siga este guia para uma melhor explicação:**

[Configurações do ambiente - React](https://www.notion.so/Configura-es-do-ambiente-React-76f2963a042f45b9b9b567a2795945b8)

## 🎲 Rodando a aplicação

Você pode fazer um clone deste repositório direto no seu terminal:

```sh
git clone https://github.com/felipeferrarini/home-office-health
```

ou fazer o download do zip do repositório.



Após isto, digite os seguintes comandos no terminal:

```sh
# Instalando as dependências
$ yarn
#ou
$ npm install

# Iniciando o projeto
$ yarn start
#ou
$ npm start
```

### :fire: Firebase

Foi adicionado ao projeto um sistema de login e armazenamento de dados utilizando o Firebase (Authentication + Firestore) e para que o projeto funcione por completo é necessário criar um projeto no Firebase. Você pode acessar esse [link][https://firebase.google.com/docs/web/setup?hl=pt-br] para auxila-lo na criação.

Após o projeto iniciado, crie um arquivo na base do projeto denominado `.env.local` com a seguinte estrutura:

```env

  NEXT_PUBLIC_FIREBASE_API_KEY= ***apiKey***
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= ***authDomain***
  NEXT_PUBLIC_FIREBASE_DATABASE_URL= ***databaseURL***
  NEXT_PUBLIC_FIREBASE_PROJECT_ID= ***projectId***
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= ***storageBucket***
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= ***messagingSenderId***
  NEXT_PUBLIC_FIREBASE_APP_ID= ***appId***
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID= ***measurementId***
  NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY= ***admPrivateKey***
  NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL= ***admClientEmail***
  NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID= ***projectId***

```

### 📝 Licença

Este projeto está sob a MIT License. Veja [LICENSE](./LICENSE) para mais informações.

---

<p align="center">
  Feito com 💜 por <a href="https://www.linkedin.com/in/arimario-jesus">Ari Jesus</a>
</p>