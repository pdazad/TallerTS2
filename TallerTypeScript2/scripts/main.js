import { data } from './data.js';

var seriesTbody = document.getElementById('series');
var seasonsAvrT =  document.getElementById('seasons');
var image = document.getElementById("card-image");
var info = document.getElementById("card-info");
var link = document.getElementById("card-link");
var name = document.getElementById("card-name");

renderSeriesInTable(data);
seasonsAvrT.innerHTML = "".concat(getSeasonsAvr(data));
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bolder;\">".concat(s.id, "</td>\n <td style=\"color: #4895D9;\">").concat(s.name, "</td>\n<td>").concat(s.channel, "</td>\n  <td>").concat(s.season, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function() {return showCard(s); });
    });
}

function showCard(serie){
    image.setAttribute('src',serie.image );
    link.setAttribute('href', serie.link );
    link.setAttribute('height', "300px" );
    link.setAttribute('width', "470px" );
    link.innerText = serie.link;
    name.innerText = serie.name;
    info.innerText = serie.info; 
    }

function getSeasonsAvr(series) {
    var totalSeasons = 0;
    var nSeries = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.season;
        nSeries++;
    });
    return totalSeasons / nSeries;
}
