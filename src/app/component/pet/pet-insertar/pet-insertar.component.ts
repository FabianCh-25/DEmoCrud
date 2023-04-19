import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; //! importar
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'app-pet-insertar',
  templateUrl: './pet-insertar.component.html',
  styleUrls: ['./pet-insertar.component.css']
})
export class PetInsertarComponent  implements OnInit{
  form: FormGroup = new FormGroup({}); //! importar
  pet: Pet = new Pet();
  mensaje: string= 'Gaaa';
  maxFecha: Date = moment().add(-1,'days').toDate(); //? usar npm install moment

  constructor(private pS: PetService, private router: Router){}

  ngOnInit(): void {
      this.form= new FormGroup({
        id: new FormControl(),
        namePet: new FormControl(),
        genderPet: new FormControl(),
        birthDatePet: new FormControl(),
      });
  }
  aceptar(): void{
    this.pet.id = this.form.value['id'];
    this.pet.namePet = this.form.value['namePet'];
    this.pet.genderPet = this.form.value['genderPet'];
    this.pet.birthDatePet = this.form.value['birthDatePet'];
    if(this.form.value['namePet'].length > 0){
      this.pS.insert(this.pet).subscribe((data)=>{
        this.pS.list().subscribe((data)=>{
          this.pS.setList(data);
        })
      })
      this.router.navigate(['pets']);
    }
    else {
      this.mensaje = 'Ingrese el nombre de la mascota completo!';
    }
  }
}
