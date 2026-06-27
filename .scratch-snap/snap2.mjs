import { chromium } from "playwright";

const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("http://localhost:5002/", { waitUntil: "networkidle" });

const info = await page.evaluate(() => {
  const el = document.querySelector("#projects");
  const rect = el.getBoundingClientRect();
  return { top: rect.top + window.scrollY, height: rect.height, innerHeight: window.innerHeight };
});
console.log(JSON.stringify(info));

const sectionTop = info.top;
const scrollable = info.height - info.innerHeight; // approx full progress range start->end of inner tall div, but section also has header above carousel
const stepsPx = [0, 150, 305, 460, 610, 765, 915, 1070, 1220];
const base = "/private/tmp/claude-501/-Users-amanmalik-Downloads-PortfolioForge-2/fe133f56-7768-43e0-b96f-e442b7204485/scratchpad";

for (const [i, px] of stepsPx.entries()) {
  await page.evaluate((y) => window.scrollTo(0, y), Math.round(sectionTop + px));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${base}/flip_${String(i).padStart(2,'0')}_y${px}.png` });
}

await browser.close();
console.log("done");
