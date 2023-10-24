import { series } from './data.js';
var table = document.getElementById("table");
var data = document.getElementById("data");
function mostrarListado(data, body) {
    var htmlVar = "";
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        htmlVar += "\n        <tr class=\"Serie\">\n            <td>".concat(data[i].id, "</td>\n            <td id = \"nombre-serie\">").concat(data[i].name, "</td>\n            <td>").concat(data[i].channel, "</td>\n            <td>").concat(data[i].seasons, "</td>\n        </tr>");
        sum += data[i].seasons;
    }
    htmlVar += "\n    <tr id = \"average\"><h4>Seasons average: ".concat(sum / data.length, "</h2></tr>");
    body.innerHTML = htmlVar;
}
mostrarListado(series, table);
