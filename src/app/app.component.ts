import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(private dataService:DataService){

    }
  items:any[] | undefined;

ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.items = data;
    });
  }}
