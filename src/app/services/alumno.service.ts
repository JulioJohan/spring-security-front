import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { map } from 'rxjs';
import { Alumno } from '../alumno/alumno/alumno';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private urlAlumnos:string = "http://localhost:8081/alumno";
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  get urlAlumno():string{
    return this.urlAlumnos;
  }

  set urlAlumno(url:string){
    this.urlAlumnos = url;
  }

  obtenerTodosAlumnos():Observable<Alumno[]>{
    return this.http.get(`${this.urlAlumno}/todos`)
    .pipe(
      //convertir como arreglo de alumnos
      map(alumno=>
        alumno as Alumno[]
      )
    )
  }

  guardarAlumno(alumno:Alumno):Observable<Alumno>{
    return this.http.post(`${this.urlAlumno}/guardarAlumno`,alumno,{headers:this.headers})
    .pipe(
      map(
        (respuesta:any)=> respuesta.alumno as Alumno
      ),
      catchError((error:any) => {
        if(error.status == 400){
          return throwError( () => (error) )
        }
        console.log(error)
        Swal.fire(error.error.mensaje,error.error,'error');
        return throwError( () => (error) )
      })
    )
     
  }

}

