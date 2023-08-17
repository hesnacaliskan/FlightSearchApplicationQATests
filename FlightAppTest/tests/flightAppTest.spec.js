// @ts-check
const { test, expect } = require('@playwright/test');

test('Search', async ({ page }) => {
  await page.goto('https://flights-app.pages.dev/');

  const combobox1 = await page.$('#From'); // İlk combobox öğesi seçicisi
  const combobox2 = await page.$('#To'); // İkinci combobox öğesi seçicisi

  const value1 = await combobox1?.fill('Istanbul');
  const value2 = await combobox2?.fill('Istanbul'); 
  

  if (value1 === value2) {
    console.error('Hata: Ayni sehri secemezsiniz!');
  }  
  else {
    console.log('İki combobox değeri farkli.'); 
  }   
});

test('Listing', async ({ page }) => { 
  await page.goto('https://flights-app.pages.dev/');

  const combobox1 = await page.$('#From'); // İlk combobox öğesi seçicisi
  const combobox2 = await page.$('#To'); // İkinci combobox öğesi seçicisi

  await combobox1?.fill('Istanbul');
  await combobox2?.fill('Los Angeles'); 
  
  await page.waitForSelector('.grid-cols-1'); // Adjust the selector based on your HTML structure

  const foundText = await page.$eval('p.mb-10', (element) => element.textContent);

  if (foundText !== null) {
    const foundNumberMatch = foundText.match(/\d+/);
    if (foundNumberMatch) {
      const foundNumber = parseInt(foundNumberMatch[0]);
      const ulItemsCount = await page.$$eval('li.overflow-hidden', (items) => items.length);  
      if (foundNumber === ulItemsCount) {
        console.log(`Test passed: Found ${ulItemsCount} items`);
      } else {
        console.error(`Test failed: Expected ${foundNumber} items, but found ${ulItemsCount} items`);
      }
    }
    else {
      console.error("Test failed: 'found 2 items' text does not contain a number");
    }
  
  } else {
    console.error("Test failed: 'found 2 items' text not found");
  }
      
 
});
