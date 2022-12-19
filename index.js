// Node.js dersi 1. ödevi, -- Dairenin Alanı

// dairenin alanı: pixr2
let pi = 3.14;
let yaricap = parseInt(process.argv.slice(2)); // process.argv.slice(2) ile terminalden değer aldık. node index.js 12 gibi.
let hesapla= pi*Math.pow(yaricap,2); // Math.pow ile karesini aldık. 
console.log(hesapla); // sonucu döndürdük.
