const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5);

beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

test('The stack should be empty in the beginning', async () => {
    let stack = await driver.findElement(By.id('top_of_stack')).getText();
    expect(stack).toEqual("n/a");
});

describe('Clicking "Pusha till stacken"', () => {
    it('should open a prompt box', async () => {
        let push = await driver.findElement(By.id('push'));
        await push.click();
        let alert = await driver.switchTo().alert();
        await alert.sendKeys("Bananer");
        await alert.accept();
    });
});

test('After pushing "Bananer", peek should show "Bananer"', async () => {
    let push = await driver.findElement(By.id('push'));
    await push.click();
    let alert = await driver.switchTo().alert();
    await alert.sendKeys("Bananer");
    await alert.accept();
    
    let peek = await driver.findElement(By.id('peek'));
    await peek.click();
    
    let result = await driver.findElement(By.id('top_of_stack')).getText();
    expect(result).toEqual("Bananer");
    
    let pop = await driver.findElement(By.id('pop'));
    await pop.click();
});