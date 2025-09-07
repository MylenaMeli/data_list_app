import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
   imports: [CommonModule ,NgxSpinnerModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm$ = new BehaviorSubject<string>('');
  isAscending: boolean = true; // État du tri
  loading: boolean = true; // État de chargement
  constructor(private dataService: DataService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show(); // Affiche le spinner

    // Simule un délai de 2 secondes avant de charger les données
    setTimeout(() => {
      this.dataService.getData().subscribe(data => {
        this.items = data;
        this.filterItems(); // Filtre immédiatement les éléments // Trie les éléments après le filtrage
        this.loading = false; // Cache le spinner
        this.spinner.hide(); // Cache le spinner
      });

      // Souscrivez aux changements du terme de recherche
      this.searchTerm$.pipe(
        map(term => term.toLowerCase()),
        map(term => this.items.filter(item => item.source.toLowerCase().includes(term)))
      ).subscribe(filtered => {
        this.filteredItems = filtered;
      });
    }, 2000); // Délai de 2 secondes
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