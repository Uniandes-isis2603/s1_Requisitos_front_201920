import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProyectoService } from '../proyecto.service';
import { Proyecto } from '../proyecto';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProyectoDetail } from '../proyecto-detail';

@Component({
  selector: 'app-proyecto-create',
  templateUrl: './proyecto-create.component.html',
  styleUrls: ['./proyecto-create.component.css']
})
export class ProyectoCreateComponent  {

 proyectoForm: FormGroup;
 proyecto: ProyectoDetail[];

 constructor
 (
    private proyectoService: ProyectoService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) 
  {
    this.proyectoForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      fechaInicial: ["", [Validators.required]],
      fechaFinal:["", [Validators.required]], 
    });
  }

  showSuccess(){
    for(let i = 0; i < this.proyecto.length; i++){
      console.log(this.proyecto[i].id+' '+this.proyecto[i].nombre)
    }
    this.toastr.success("Proyecto","Creado exitosamente",{"progressBar": true,timeOut:4000})
  }

  createProyecto(newCaso: Proyecto) 
  {
    // Process checkout data here
    console.warn("El equipo fue creado", newCaso);
    newCaso.fechaInicial = new Date(newCaso.fechaInicial)
    newCaso.fechaFinal = new Date(newCaso.fechaFinal)
    this.proyectoService.createProyecto(newCaso).subscribe(pProyecto =>{
      this.proyecto.push(pProyecto);
      this.showSuccess();
    })
    this.proyectoForm.reset();
  }

  
  


}