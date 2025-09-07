import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private	data	=	[
		{
				source:	"Гипрозем",
				dateHeure:	"27.10.2025	18:34",
				tailleKo:	1022,
				typeDonnees:	"Orthophotoplan",
				typeChargement:	"Manuel",
				annotation:	"Lorem	ipsum	dolor	sit	amet…",
				statut:	"✅ OK",
				auteur:	"Agro.worker.@gmail.com",
				action:	"✎"
		},
		{
				source:	"O’zdaqyerloyiha",
				dateHeure:	"27.10.2025	18:34",
				tailleKo:	675,
				typeDonnees:	"NDVI",
				typeChargement:	"Automatique",
				annotation:	"Texte	de	50–100	caractères	et	ellipse…",
				statut:	"❌ ERREUR",
				auteur:	"Agro.worker.@gmail.com",
				action:	"✎"
		},
		{
				source:	"Гипрозем",
				dateHeure:	"27.10.2025	18:34",
				tailleKo:	1112,
				typeDonnees:	"Carte	de	vol",
				typeChargement:	"Manuel",
				annotation:	"Texte	de	50–100	caractères	et	ellipse…",
				statut:	"❌ ERREUR",
				auteur:	"Agro.worker.@gmail.com",
				action:	"✎"
		},
		{
				source:	"O’zdaqyerloyiha",
				dateHeure:	"27.10.2025	18:34",
				tailleKo:	809,
				typeDonnees: "NDWI",
				typeChargement:	"Automatique",
				annotation:	"Texte	de	50–100	caractères	et	ellipse…",
				statut:	"✅ OK",
				auteur:	"Agro.worker.@gmail.com",
				action:	"✎"
		},
		{
				source:	"Гипрозем",
				dateHeure:	"27.10.2025	18:34",
				tailleKo:	1022,
				typeDonnees:	"NDWI",
				typeChargement:	"Automatique",
				annotation:	"Texte	de	50–100	caractères	et	ellipse…",
				statut:	"❌ ERREUR",
				auteur:	"Agro.worker.@gmail.com",
				action:	"✎"
		},
		{
				source:	"O’zdaqyerloyiha",
				dateHeure:	"27.10.2025	18:34",
				tailleKo:	805,
				typeDonnees:	"NDWI",
				typeChargement:	"Manuel",
				annotation:	"Texte	de	50–100	caractères	et	ellipse…",
				statut:	"✅ OK",
				auteur:	"Agro.worker.@gmail.com",
				action:	"✎"
		},
		{
				source:	"O’zdaqyerloyiha",
				dateHeure:	"27.10.2025	18:34",
				tailleKo:	1022,
				typeDonnees:	"NDWI",
				typeChargement:	"Automatique",
				annotation:	"Texte	de	50–100	caractères	et	ellipse…",
				statut:	"✅ OK",
				auteur: "Agro.work"}
    ]   
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