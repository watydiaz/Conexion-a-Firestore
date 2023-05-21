import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  datosPersonales: FormGroup = new FormGroup({
    nombre    : new FormControl( '' ),
    apellido  : new FormControl( '' ),
  });

  constructor(private service: ServicioService) { }

  ngOnInit(): void {
  }
  crearPersona(evt:Event):any{
    evt.preventDefault();
    if (this.datosPersonales.invalid){
      return;
    }
    this.service.crear();
  }
}
