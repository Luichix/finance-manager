const { Builder, By, until } = require("selenium-webdriver");
const assert = require('assert');

describe('Transactions', () => {
    it("Validar que los valores de transactiones sean numericos", async () => {
        let driver;
        try {
            driver = new Builder().forBrowser('chrome').build();
            await driver.get('https://c16-64-ft-node.vercel.app/transactions');
            const valueElements = await driver.findElements(By.xpath('//p[contains(@class, "text-[#477beb]") or contains(@class, "text-[#f35252]")]'));

            for (const element of valueElements) {
                const text = await element.getText();
                // Remover los caracteres no numericos
                const numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));
                assert(!isNaN(numericValue), `Número inválido: ${text}`);
            }
        } catch (error) {
            // Si el test falla
            console.error('Test failed:', error.message);
            throw error; // Throw error para indicar test fail en Mocha
        } finally {
            // Cerrar el navegador, incluso en caso de test fallidos
            if (driver) {
                await driver.quit();
            }
        }
    });
});
