export class Alumno {
    idAlumno:number;
    nombre:string;
    numeroControl:string;
    email:string;
    fechaRegistro:Date;
    constructor(idAlumno:number,nombre:string, numeroControl:string,
                email:string, fechaRegistro:Date){
       this.idAlumno = idAlumno;
       this.nombre = nombre;
       this.numeroControl = numeroControl;
       this.email = email;             
       this.fechaRegistro = fechaRegistro;
    }
}
