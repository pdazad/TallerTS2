import { Serie } from "./serie";
import { data } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"
const seasonsAvrT: HTMLElement = document.getElementById("seasons")!;
const image: HTMLElement = document.getElementById("card-image")!;
const info: HTMLElement = document.getElementById("card-info")!;
const link: HTMLElement = document.getElementById("card-link")!;
const name: HTMLElement = document.getElementById("card-name")!;

renderSeriesInTable(data);
seasonsAvrT.innerHTML = `${getSeasonsAvr(data)}`

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    trElement.addEventListener("click", () => showCard(s))
  });
}

function showCard(serie: Serie){
  image.setAttribute('src',serie.image );
  link.setAttribute('href', serie.link );
  link.setAttribute('height', "300px" );
  link.setAttribute('width', "470px" );
  link.innerText = serie.link;
  name.innerText = serie.name;
  info.innerText = serie.info; 
  }

function getSeasonsAvr(series: Serie[]): number {
  let totalSeasons: number = 0;
  let nSeries: number = 0;
  series.forEach((serie) => {
      totalSeasons = totalSeasons + serie.seasons;
      nSeries++;
  });
  return totalSeasons/nSeries;
}
