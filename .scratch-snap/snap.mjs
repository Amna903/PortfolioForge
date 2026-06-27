import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:5002/";
const scrollY = Number(process.argv[3] || 0);
const out = process.argv[4] || "/private/tmp/claude-501/-Users-amanmalik-Downloads-PortfolioForge-2/fe133f56-7768-43e0-b96f-e442b7204485/scratchpad/shot.png";

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate((y) => window.scrollTo(0, y), scrollY);
await page.waitForTimeout(600);
await page.screenshot({ path: out });
console.log("saved", out, "scrollY=", scrollY);
await browser.close();
