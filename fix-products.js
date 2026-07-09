const fs = require('fs');

let content = fs.readFileSync('lib/products.ts', 'utf8');

// Find the start of the array
const arrayStart = content.indexOf('export const PRODUCTS_DATA: Product[] = [');

let arrayStr = content.substring(arrayStart + 'export const PRODUCTS_DATA: Product[] = '.length);
// Evaluate the array
let arr;
try {
  arr = eval(arrayStr);
} catch (e) {
  console.log("Error evaluating:", e);
}

// Remove first 3
arr = arr.slice(3);

// Copy some to make exactly 9
if (arr.length < 9) {
  let needed = 9 - arr.length;
  for (let i = 0; i < needed; i++) {
    let copy = JSON.parse(JSON.stringify(arr[i % arr.length]));
    copy.slug = copy.slug + "-" + (i + 2);
    copy.name = copy.name + " (Variant " + (i + 2) + ")";
    arr.push(copy);
  }
}

const newArrayStr = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, arrayStart) + 'export const PRODUCTS_DATA: Product[] = ' + newArrayStr + ';';

fs.writeFileSync('lib/products.ts', newContent);
console.log("Fixed products.ts. Now has " + arr.length + " products.");
