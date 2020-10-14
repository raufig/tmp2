import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-cardsts',
  templateUrl: './cardsts.component.html',
  styleUrls: ['./cardsts.component.css']
})
export class CardstsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //const API = "https://rickandmortyapi.com/api/character";
    //EjecutargetData
    this.obtenerInfo('https://rickandmortyapi.com/api/character');
  }

  //URL de la API

test(){alert("hola")}
// Obtener resultado de API
 obtenerInfo (api) {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      this.llenarDatos(json), this.paginacion(json.info);
      alert("loquequiera")
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};

 llenarDatos (data) {
  let html = "";
  data.results.forEach((pj) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 10rem;">';
    html += `<img src="${pj.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class = "card-title" >${pj.name}</h5>`;
    html += `<p class="card-text">${pj.species}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

// Paginacion
 paginacion (info) {
  let prevDisabled = "";
  let nextDisabled = "";

  if (info.prev == null) {
    prevDisabled = "disabled";
  } else {
    prevDisabled = "";
  }

  if (info.next == null) {
    nextDisabled = "disabled";
  } else {
    nextDisabled = "";
  }

  let html = "";
  html += `<li class="page-item ${prevDisabled}"><a class="page-link" (click)="obtenerInfo('${info.prev}')">Previous</a></li>`;
  html += `<li class="page-item ${nextDisabled}"><a class="page-link" (click)="test()">Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;

  //let element = <HTMLInputElement>document.getElementById("last");
//element.value = "Text you want to give";
};



}
