// test/pageobjects/base.page.ts

export default class BasePage {
    /**
     * Abre uma página relativa ao baseUrl definido no wdio.conf.ts
     * @param path Caminho relativo (ex: '/', '/products')
     */
    public open(path: string = '/') {
        return browser.url(path);
    }

    /**
     * Espera até que um elemento esteja visível na tela
     * @param element WebdriverIO.Element
     * @param timeout Tempo máximo de espera em ms (padrão: 5000)
     */
    public async waitForVisible(element: WebdriverIO.Element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
    }

    /**
     * Faz scroll até um elemento estar visível
     * @param element WebdriverIO.Element
     */
    public async scrollToElement(element: WebdriverIO.Element) {
        await element.scrollIntoView();
    }
}