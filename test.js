const puppeteer = require('puppeteer');

const pageURL = 'http://localhost:3004/?id=8';

let browser;
let page;

const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
    args: [`--window-size=${width},${height}`,'--no-sandbox', '--disable-setuid-sandbox'],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(async() => {
    await new Promise (resolve => setTimeout( () => resolve(), 500));
 // browser.close();
});

describe('search function', () => {
  beforeEach(async () => {
    await page.goto(pageURL, { waitUntil: 'networkidle2' });
  });

  test('button to exist', async() => {
    const div = '#building';
    const title = await page.$eval(div, e => e.textContent);
    await page.click(div);
    const button = await page.$eval('.info-select button', e => e.textContent);
    expect(button).toEqual("Download PDF");
  });

  test('Should change image shown as selected', async() => {
    const div = '#building';
    const title = await page.$eval(div, e => e.textContent);
    await page.click(div);
    const img = '#testimg';
    const selectimg = await page.$eval(img, e => e.getAttribute('src'));
    await page.click(img);
    const selected = '.img-select'
    const selectedimg = await page.$eval(selected, e => e.getAttribute('src'))

    expect(selectedimg).toEqual('https://smegoaccordion.s3.us-east-2.amazonaws.com/d.jpg');
  });
});
