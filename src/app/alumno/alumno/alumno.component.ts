import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { AlumnoService } from '../../services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  
  alumnos:Alumno[] = [];

  nombreColumnas:string[] = ['ID','Numero de Control','Nombre','Correo Electronico','Fecha de Registro']
  
  constructor(private alumnoService:AlumnoService,
        private router:Router){

  }

  ngOnInit(): void {
    this.obtenerTodosAlumnos();
  }

  obtenerTodosAlumnos(){
    return this.alumnoService.obtenerTodosAlumnos().subscribe(data=>{ 
      this.alumnos = data;
      console.log(this.alumnos)
    })
  }

  redirigir(){
    this.router.navigateByUrl('/alumno-formulario')
  }

}
