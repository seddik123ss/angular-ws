import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion'

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      like:0,
      favoir:false
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      like:0,
      favoir:false
    },
    {
    id: 3,
    title: 'Créer un système de récompenses',
    description: 'Mise en place d\'un programme de récompenses pour motiver les employéset reconnaître leurs efforts.',
    category: 'Ressources Humaines',
    date: new Date('2025-01-25'),
    status: 'en_attente',
    like:0,
    favoir:true
    },
    
  ];
  likeShow(s: Suggestion): void {
     s.like++;}

  addFavoir(s:Suggestion):void{
     s.favoir = !s.favoir;}

  


}
  
  
  


