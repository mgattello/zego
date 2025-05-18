/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright'; // or Cypress

let browser: any;
let page: any;

Given('I visit the home page', async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
});

When("I click on the 'car-insurance' radio input", async () => {
    await page.click('input[name="car-insurance"]');
});

When('I click on the Get quote button', async () => {
    await page.click('button[name="button-submit-for-quote"]');
});

Then('I should see results logged', async () => {
    const logs: string[] = [];

    page.on('console', (msg: any) => {
        console.log({ msg })
        if (msg.type() === 'log') {
            logs.push(msg.text());
        }
    });

    await page.waitForTimeout(2000);
    const found = logs.some((log) => log.includes('carInsurance') 
        || log.includes('carDeliverInsurance') 
        || log.includes('privateHireInsurance')); 

    if (!found) {
        throw new Error('Expected log not found in console output');
    }

    await browser.close();
});
