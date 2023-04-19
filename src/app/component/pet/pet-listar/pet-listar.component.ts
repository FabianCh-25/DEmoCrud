import { PetService } from './../../../service/pet.service';
import { Pet } from './../../../model/pet';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-pet-listar',
  templateUrl: './pet-listar.component.html',
  styleUrls: ['./pet-listar.component.css'],
})
export class PetListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pet> = new MatTableDataSource();
  lista: Pet[] = [];
  displayedColumns: string[] = ['numero', 'nombre', 'genero', 'fecha'];

  constructor(private pS: PetService) {}
  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}

