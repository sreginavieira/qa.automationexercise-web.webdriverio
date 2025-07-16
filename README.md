2. Execute os testes
bash



npx wdio run wdio.conf.ts
Por padrão, os testes rodam em modo headless (sem interface gráfica).
Para rodar em modo visual, ajuste o wdio.conf.ts conforme necessário.
📝 Escrevendo e organizando testes
Os testes ficam em test/specs/ e usam a sintaxe Mocha (describe/it).
Os Page Objects ficam em test/pageobjects/ e encapsulam a lógica de interação com as páginas.
Exemplo de importação e uso de Page Object em um teste:

typescript



import HomePage from '../pageobjects/home.page';
import SignupPage from '../pageobjects/signup.page';

describe('Cadastro de usuário', () => {
  it('deve cadastrar um novo usuário com sucesso', async () => {
    await HomePage.open();
    await HomePage.goToSignup();
    // ... continue o fluxo usando os métodos dos Page Objects
  });
});
❌ O que NÃO tem neste projeto
Não usa Cucumber
Não usa arquivos .feature
Não usa Gherkin
Não usa sintaxe BDD
Os testes são 100% em TypeScript, com Mocha e Chai.

💡 Dicas
Para gerar relatórios (ex: Allure), instale o plugin correspondente e ajuste o wdio.conf.ts.
Para integração contínua (CI), adicione um workflow no .github/workflows/ (exemplo disponível sob demanda).
🤝 Contribuindo
Fork este repositório
Crie uma branch:
bash



git checkout -b minha-feature
Commit suas alterações:
bash



git commit -m 'feat: minha nova feature'
Push para o branch:
bash



git push origin minha-feature
Abra um Pull Request