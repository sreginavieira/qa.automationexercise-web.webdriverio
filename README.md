# 🧪 Projeto de Testes Automatizados com WebdriverIO + TypeScript

Este repositório contém uma suíte de testes automatizados E2E utilizando **WebdriverIO** com **TypeScript**, seguindo o padrão **Page Object Model (POM)**.

> [!WARNING]
> **Atenção:** Este projeto **NÃO utiliza BDD, Cucumber ou arquivos .feature**.  
> Os testes são escritos em TypeScript puro, usando Mocha como test runner.

---

## 📦 Stack Utilizada

- [WebdriverIO](https://webdriver.io/) (v8+)
- [TypeScript](https://www.typescriptlang.org/)
- [Mocha](https://mochajs.org/) (test runner)
- [Chai](https://www.chaijs.com/) (assertions)
- Page Object Model (POM) para organização dos testes

---

## 📁 Estrutura de Pastas

```
.
├── test/
│   ├── pageobjects/
│   │   ├── base.page.ts
│   │   ├── home.page.ts
│   │   ├── signup.page.ts
│   │   └── account.page.ts
│   └── specs/
│       └── 01.registerUser.e2e.ts
├── wdio.conf.ts
├── tsconfig.json
└── package.json

pageobjects/: Page Objects reutilizáveis para cada página do fluxo.
specs/: Arquivos de teste (suites e specs) escritos em TypeScript.
wdio.conf.ts: Configuração do WebdriverIO.
tsconfig.json: Configuração do TypeScript.
```

## 🚀 Como rodar o projeto
1. Instale as dependências
`npm install`

2. Execute os testes
`npx wdio run wdio.conf.ts`

Por padrão, os testes rodam em modo headless (sem interface gráfica).

Para rodar em modo visual, ajuste o wdio.conf.ts conforme necessário.

## 📝 Escrevendo e organizando testes

Os testes ficam em test/specs/ e usam a sintaxe Mocha (describe/it).

Os Page Objects ficam em test/pageobjects/ e encapsulam a lógica de interação com as páginas.

Exemplo de importação e uso de Page Object em um teste:

```
import HomePage from '../pageobjects/home.page';
import SignupPage from '../pageobjects/signup.page';

describe('Cadastro de usuário', () => {
  it('deve cadastrar um novo usuário com sucesso', async () => {
    await HomePage.open();
    await HomePage.goToSignup();
    // ... continue o fluxo usando os métodos dos Page Objects
  });
});
```


## 💡 Dicas

Para gerar relatórios (ex: Allure), instale o plugin correspondente e ajuste o wdio.conf.ts.
Para integração contínua (CI), adicione um workflow no .github/workflows/ (exemplo disponível sob demanda).

## 🤝 Contribuindo

1. Fork este repositório
2. Crie uma branch:

`git checkout -b minha-feature`

Commit suas alterações:

`git commit -m 'feat: minha nova feature'`

Push para a branch:

`git push origin minha-feature`

Abra um Pull Request.
