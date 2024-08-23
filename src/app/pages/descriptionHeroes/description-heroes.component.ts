import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-description-heroes',
  standalone: true,
  imports:[RouterLink, RouterLinkActive],
  templateUrl: './description-heroes.component.html',
  styleUrls: ['./description-heroes.component.css'],
  
})
export class DescriptionHeroesComponent implements OnInit {
  selectedCard: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedCard = history.state.selectedCard;
  }
}
