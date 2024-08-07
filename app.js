const { chromium } = require('playwright');

let qtdExecucoes = 0;
const URL = 'https://padlet.com/tiagocorrea2/dia-dos-pais-2024-getnet-qhsnfcxelr3n29cy/wish/YBl3Z2J6O1l7Zv16';

const qtdRepeticoes = 3000;
const tempoEspera = 3;

const delay = async (timeInMinutes) => {
    const milliseconds = timeInMinutes * 60000;
    await new Promise(resolve => setTimeout(resolve, milliseconds));
};

(async () => {
    while (qtdExecucoes < qtdRepeticoes) {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(URL);
        await page.getByTestId('surfacePanelPostExpanded').getByTestId('surfacePostReactionLike').click();

        // ---------------------
        await context.close();
        await browser.close();
        qtdExecucoes++;
        await delay(tempoEspera);
    }
})();
