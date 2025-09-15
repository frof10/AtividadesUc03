import PromptSync from "prompt-sync";
const prompt = PromptSync()

var area = parseFloat(prompt('Digite a area em metros quadrados: '));

let areaComFolga = area * 1.10;
let litrosDeTinta = areaComFolga / 6;
let latasde18 = Math.ceil(litrosDeTinta / 18);
let precolatas18 = latasde18 * 99;

let latasde3_6 = Math.ceil(litrosDeTinta/3.6);
let precolatas3_6 = latasde3_6 * 25;

let latasMistura = Math.floor(litrosDeTinta / 18);
let restante = litrosDeTinta - (latasMistura * 18);
let latasde3_6Mistura = Math.ceil(restante / 3.6);
let precoMistura = (latasMistura * 99 ) + (latasde3_6Mistura * 25);

let resultado = "--- Situação 1: Apenas latas de 18L ---\n";
resultado += "Latas: " + latasde18 + "\n";
resultado += "Preço total: R$ " + precolatas18.toFixed(2) + "\n\n";

resultado += "--- Situação 2: Apenas galões de 3,6L ---\n";
resultado += "Galões: " + latasde3_6 + "\n";
resultado += "Preço total: R$ " + precolatas3_6.toFixed(2) + "\n\n";

resultado += "--- Situação 3: Mistura de latas e galões ---\n";
resultado += "Latas: " + latasMistura + "\n";
resultado += "Galões: " + latasde3_6Mistura + "\n";
resultado += "Preço total: R$ " + precoMistura.toFixed(2);

console.log(`\n${resultado}`);
