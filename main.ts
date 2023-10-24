import { series } from './data.js';
import { Serie } from "./Serie.js";

let table: HTMLElement = document.getElementById("table")!;

let data: HTMLElement = document.getElementById("data")!;

function mostrarListado(data: Serie[], body: HTMLElement): void {
    let htmlVar = "";
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        htmlVar += `
        <tr class=\"Serie\">
            <td>${data[i].id}</td>
            <td id = "nombre-serie">${data[i].name}</td>
            <td>${data[i].channel}</td>
            <td>${data[i].seasons}</td>
        </tr>`
        sum += data[i].seasons;
    }
    htmlVar += `
    <tr id = \"average\"><h4>Seasons average: ${sum / data.length}</h2></tr>`;
    body.innerHTML = htmlVar;
}

mostrarListado(series, table);