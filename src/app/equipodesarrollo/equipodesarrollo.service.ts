import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {EquipoDesarrollo} from './equipo-desarrollo';
import {Observable } from 'rxjs';
const API_URL = "../../assets/";
const equiposdesarrollo= 'equiposdesarrollo.json';
@Injectable()
export class EquipodesarrolloService {

  constructor(private http:HttpClient) { }

  getEquipodesarrollo() :Observable<EquipoDesarrollo[]> {
    return this.http.get<EquipoDesarrollo[]>(API_URL + equiposdesarrollo);
  }

}