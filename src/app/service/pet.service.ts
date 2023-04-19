import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pet } from '../model/pet';
import { Subject } from 'rxjs'; //!tambien se agrega
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class PetService {
  private url=`${base_url}/pets`
  private listaCambio = new Subject<Pet[]>(); //!tambien se agrega

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Pet[]>(this.url);
  }

  //! lo de abajo va para el insertar
  insert(pet:Pet){
    return this.http.post(this.url,pet);
  }
  getList(){
    return this.listaCambio.asObservable();  //!tambien se agrega
  }
  setList(listaNueva: Pet[]){
    this.listaCambio.next(listaNueva);        //!tambien se agrega
  }
}
