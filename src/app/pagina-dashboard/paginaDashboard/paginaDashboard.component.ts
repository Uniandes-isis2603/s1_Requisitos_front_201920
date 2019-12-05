import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProyectoService } from '../../proyecto/proyecto.service';
import { Proyecto } from '../../proyecto/proyecto';
import { DesarrolladorService } from '../../desarrollador/desarrollador.service';
import { Desarrollador } from '../../desarrollador/desarrollador';
import { Casodeuso } from '../../casodeuso/Casodeuso';
import { CasodeusoService } from '../../casodeuso/casodeuso.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {environment} from "../../../environments/environment";

const API_URL = environment.apiURL;

@Component({
    selector: 'app-paginaDashboard-list',
    templateUrl: './paginaDashboard.component.html',
    styleUrls: ['./paginaDashboard.component.css']
})
export class PaginaDashboardComponent implements OnInit {
 
  constructor(){}
  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {    
  };
  width = 550;
  height = 400;
  ngOnInit(){}
  
}