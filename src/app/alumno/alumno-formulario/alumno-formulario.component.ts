import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../alumno/alumno';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno-formulario',
  templateUrl: './alumno-formulario.component.html',
  styleUrls: ['./alumno-formulario.component.css']
})
export class AlumnoFormularioComponent {


  public alumno:Alumno = new Alumno(0,'','','',new Date());

  public errores:string[] = [];
  constructor(private alumnoService:AlumnoService,
              private router:Router){}

  guardarAlumno():void{
    this.alumnoService.guardarAlumno(this.alumno).subscribe({
      next: (alumno:any) => {
        console.log(alumno)
        this.router.navigate(['/alumnos']);
        Swal.fire('Alumno nuevo',`El alumno: ${alumno.nombre} se guardó con éxito`,'success');
      },
      error:(error:any) =>{
        console.log(error)
        this.errores =  error.error.Errores as string[];
      }
    })

  }

}
