// @ts-check
const { test, expect } = require('@playwright/test');

test('Search', async ({ page }) => {
  await page.goto('https://flights-app.pages.dev/');

  const combobox1 = await page.$('#From'); // İlk combobox öğesi seçicisi
  const combobox2 = await page.$('#To'); // İkinci combobox öğesi seçicisi

  const value1 = await combobox1?.fill('Istanbul');
  const value2 = await combobox2?.fill('Istanbul');

  if (value1 === value2) {
    console.error('Hata: Aynı sehri secemezsiniz!');
  }  
  else {
    console.log('İki combobox değeri farkli.'); 
  }    
});

test('Listing', async ({ page }) => {
  await page.goto('https://flights-app.pages.dev/');

  // Uçuş listeleme testi
  await page.fill('[placeholder="From"]', 'Istanbul');
  await page.fill('[placeholder="To"]', 'Los Angeles');
  //await page.press('Enter'); // Formu göndermek için Enter tuşuna bas
  await page.waitForSelector('.flight-item'); // Uçuşlar listelendi mi kontrol et

  // "Found X items" yazısını kontrol et
  const flightCount = await page.locator('.flight-item').count();
  const foundItemsText = await page.locator('.found-items').innerText();
  //const foundCount = parseInt(foundItemsText.match(/\d+/)[0], 10);
  //expect(flightCount).toBe(foundCount);
});
