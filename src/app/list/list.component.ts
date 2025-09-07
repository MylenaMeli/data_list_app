import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
   imports: [CommonModule ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm$ = new BehaviorSubject<string>('ee');

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.items = data;
      this.filterItems();
//this.sortItems(); // Filtre immédiatement les éléments
    });

    // Souscrivez aux changements du terme de recherche
    this.searchTerm$.pipe(
      map(term => term.toLowerCase()), 
      map(term => this.items.filter(item => item.source.toLowerCase().includes(term)))
    ).subscribe(filtered => {
      this.filteredItems = filtered;
    });
  }

 updateSearchTerm(event: Event) {
  const target = event.target as HTMLInputElement; // Assertion de type
  this.searchTerm$.next(target.value);
}
  // Méthode pour filtrer les éléments
  filterItems() {
    this.filteredItems = this.items; // Initialement, tous les éléments sont affichés
  }

  // Méthode pour trier les éléments par source
sortItems() {
  this.filteredItems.sort((a, b) => b.source.localeCompare(a.source));
}
}