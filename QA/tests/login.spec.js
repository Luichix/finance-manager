const { Builder, By, until } = require("selenium-webdriver");
const assert = require('assert');

describe('Login', () => {
    it("Validar login con credenciales validas", async () => {
        let driver;
        try {
            driver = new Builder().forBrowser('chrome').build();
            await driver.get('https://c16-64-ft-node.vercel.app/login');
            // Enter credentials
            await driver.findElement(By.id('input-user-login')).sendKeys('Lucho');
            await driver.findElement(By.id('input-password-login')).sendKeys('Lucho123!');
            // Click the login button
            await driver.findElement(By.xpath('//button[contains(@class, "bg-secondary-500 text-white text-base md:text-lg font-bold p-4 rounded-md w-full mb-4")]')).click();
            await driver.sleep(2000)
            // Verify URL
            const currentUrl = await driver.getCurrentUrl();
            assert.strictEqual(currentUrl, 'https://c16-64-ft-node.vercel.app/transactions', 'URL not as expected');
        } catch (error) {
            // Handle errors
            console.error('Test failed:', error.message);
            throw error;
        } finally {
            // Close the browser
            if (driver) {
                await driver.quit();
            }
        }
    });
});