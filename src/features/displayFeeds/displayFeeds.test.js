import puppeteer from "puppeteer";

describe("Stories", () => {
  let browser, context, page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  });

  beforeEach(async () => {
    context = await browser.createIncognitoBrowserContext();
    page = await context.newPage();
    await page.goto("http://localhost:3000/");
  });

  afterEach(() => {
    context.close();
  });

  it("should find a loaded page", async () => {
    const header = await page.$("#root");
    expect(header).toBeTruthy();
  }, 50000);

  it("should show list of news feed", async () => {
    const story = await page.waitForSelector(`.data-test-id`);
    expect(story).toBeTruthy();
  }, 500000);

  // it("should support offline capability", async () => {
  //   await page.waitForSelector(`.story-test-class`);
  //   await page.setOfflineMode(true);
  //   const story = page.$eval(`.story-test-class`, el => el.innerText);
  //   expect(story).toBeTruthy();
  // }, 500000);
});
