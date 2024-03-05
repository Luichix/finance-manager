const { Builder, By, until } = require("selenium-webdriver");
const assert = require('assert');

describe('Reports', () => {
    it("Validar 3 canvas existentes en reports", async () => {
        let driver;
        try {
            driver = new Builder().forBrowser('chrome').build();
            await driver.get('https://c16-64-ft-node.vercel.app/reports');
            // Wait for canvas elements to be present
            await driver.wait(until.elementsLocated(By.css('canvas')), 5000);
            // Find all canvas elements
            const canvasElements = await driver.findElements(By.css('canvas'));
            // Assert that there are exactly 3 canvas elements
            assert.strictEqual(canvasElements.length, 3, 'Expected 3 canvas elements, but found ' + canvasElements.length);   
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
