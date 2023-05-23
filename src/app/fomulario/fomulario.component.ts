import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from '../interfaces/persona.interface';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  datosPersonales: FormGroup;
  personas: Persona[]=[];

  constructor(
    private service: ServicioService,
  ) {
    this.datosPersonales = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl()
    });
  }

  // async botonEnviar() {
  //   const data = this.formulario.value;
  //   console.log(data);
  //   const respuesta = await this.service.crear(data);
  //   console.log(respuesta);
  // }

  async crearPersona(evt:Event){
    evt.preventDefault();
    if (this.datosPersonales.invalid){
      return;
    }
    const data = this.datosPersonales.value;
    console.log(data);

    const respuesta = await this.service.crear(data);
    console.log(respuesta);
  }


  ngOnInit(): void {
    this.service.obtienePersona().subscribe(personas => this.personas = personas);
    this.personas.forEach(element => {
      console.log(element);
    });

  }
}
