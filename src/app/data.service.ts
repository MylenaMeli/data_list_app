import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private data = [
    { 
      id: 1, 
      source: 'Document A', 
      dateheure: '28.10.2025', 
      taille: '10ko', 
      data: 'Lorem ipsum dolor sit amet.', 
      annotation: 'Important document', 
      statut: 'OK', 
      acteur: 'User1' 
    },
    { 
      id: 2, 
      source: 'Document B', 
      dateheure: '29.10.2025', 
      taille: '15ko', 
      data: 'Consectetur adipiscing elit.', 
      annotation: 'Review needed', 
      statut: 'Pending', 
      acteur: 'User2' 
    },
    { 
      id: 3, 
      source: 'Document C', 
      dateheure: '30.10.2025', 
      taille: '20ko', 
      data: 'Sed do eiusmod tempor incididunt.', 
      annotation: 'For internal use', 
      statut: 'OK', 
      acteur: 'User3' 
    },
    { 
      id: 4, 
      source: 'Document D', 
      dateheure: '31.10.2025', 
      taille: '5ko', 
      data: 'Ut labore et dolore magna aliqua.', 
      annotation: 'Confidential', 
      statut: 'Archived', 
      acteur: 'User4' 
    },
    { 
      id: 5, 
      source: 'Document E', 
      dateheure: '01.11.2025', 
      taille: '8ko', 
      data: 'Quis autem vel eum iure reprehenderit.', 
      annotation: 'Final version', 
      statut: 'OK', 
      acteur: 'User5' 
    },
    { 
      id: 6, 
      source: 'Document F', 
      dateheure: '02.11.2025', 
      taille: '12ko', 
      data: 'Nemo enim ipsam voluptatem quia.', 
      annotation: 'Draft', 
      statut: 'Pending', 
      acteur: 'User1' 
    },
    { 
      id: 7, 
      source: 'Document G', 
      dateheure: '03.11.2025', 
      taille: '18ko', 
      data: 'At vero eos et accusamus et iusto.', 
      annotation: 'Needs revision', 
      statut: 'OK', 
      acteur: 'User2' 
    },
    { 
      id: 8, 
      source: 'Document H', 
      dateheure: '04.11.2025', 
      taille: '25ko', 
      data: 'Duis aute irure dolor in reprehenderit.', 
      annotation: 'Approved', 
      statut: 'OK', 
      acteur: 'User3' 
    },
    { 
      id: 9, 
      source: 'Document I', 
      dateheure: '05.11.2025', 
      taille: '30ko', 
      data: 'Excepteur sint occaecat cupidatat.', 
      annotation: 'For review', 
      statut: 'Pending', 
      acteur: 'User4' 
    },
    { 
      id: 10, 
      source: 'Document J', 
      dateheure: '06.11.2025', 
      taille: '22ko', 
      data: 'Sunt in culpa qui officia deserunt.', 
      annotation: 'Finalized', 
      statut: 'OK', 
      acteur: 'User5' 
    }
];
  // Utilisation de BehaviorSubject pour exposer les données
  private dataSubject = new BehaviorSubject<any[]>(this.data);
  
  constructor() { }

  getData(): Observable<any[]> {
    return this.dataSubject.asObservable();
  }

  // Optionnel : Méthode pour mettre à jour les données
  updateData(newData: any[]): void {
    this.dataSubject.next(newData);
  }
}