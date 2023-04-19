import { PetService } from './../../../service/pet.service';
import { Pet } from './../../../model/pet';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
@Component({
  selector: 'app-pet-listar',
  templateUrl: './pet-listar.component.html',
  styleUrls: ['./pet-listar.component.css'],
})
export class PetListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pet> = new MatTableDataSource();
  lista: Pet[] = [];
  displayedColumns: string[] = ['numero', 'nombre', 'genero', 'fecha' ,'acionED'];

  constructor(private pS: PetService) {}
  ngOnInit(): void {

    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  //! para traer la listab rapido
    this.pS.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

    //! funcion para filtrar

    filtrar (e:any){
      this.dataSource.filter= e.target.value.trim();
    }

}

