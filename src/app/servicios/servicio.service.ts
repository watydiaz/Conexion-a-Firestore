import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Persona } from '../interfaces/persona.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    private http: HttpClient,
    private firestore: Firestore) {}

  crear(persona: Persona){
    // return this.http.post();
    const referencia = collection(this.firestore,'persona');
    return addDoc(referencia,persona);
  }

   //Get

  //  obtienePersona(): Observable<Persona> {
  //   const referencia = collection(this.firestore, 'personas');
  //   return collectionData(referencia, { idField: 'id'}) as Observable<Persona[]>;
  // }

}
