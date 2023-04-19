import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; //! importar
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'app-pet-insertar',
  templateUrl: './pet-insertar.component.html',
  styleUrls: ['./pet-insertar.component.css']
})

export class PetInsertarComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({}); //! importar
  pet: Pet = new Pet();
  mensaje: string = ' a';
  maxFecha: Date = moment().add(-1, 'days').toDate(); //? usar npm install moment

  constructor(private pS: PetService, private router: Router,
    private route: ActivatedRoute) { } //! agregamos el priavate route: activatedRoute

  ngOnInit(): void {

    //! agrega esta funcion
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init(); //! agrega esta funcion
    })

    //! se agrego la funcion de arriba

    this.form = new FormGroup({
      id: new FormControl(),
      namePet: new FormControl(),
      genderPet: new FormControl(),
      birthDatePet: new FormControl(),
    });
  }

  aceptar(): void {
    this.pet.id = this.form.value['id'];
    this.pet.namePet = this.form.value['namePet'];
    this.pet.genderPet = this.form.value['genderPet'];
    this.pet.birthDatePet = this.form.value['birthDatePet'];
    //!agregamos condicionales para diferenciar de insertar y actualizar
    if (this.form.value['namePet'].length > 0) {
      //para filtrar y guardar lo actualizado
      if(this.edicion){
        //guardar lo actualizado
        this.pS.update(this.pet).subscribe(()=>{
          this.pS.list().subscribe((data)=>{
            this.pS.setList(data);
          })
        })
      } else{
        // insertas no actualizas
        this.pS.insert(this.pet).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          })
        })
      }

      this.router.navigate(['pets']);
    }

    else {
      this.mensaje = 'Ingrese el nombre de la mascota completo!';
    }
  }
  //! sea grega el init()
  init() {
    if(this.edicion){
      this.pS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          id: new FormControl(data.id),
          namePet: new FormControl(data.namePet),
          genderPet: new FormControl(data.genderPet),
          birthDatePet: new FormControl(data.birthDatePet),
        })
      })   }
  }
}
