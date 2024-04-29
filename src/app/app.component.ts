import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModel } from './card-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  card: CardModel = {
  title: 'Binding in Angular',
  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  imgScr: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
  buttonFull: 'Full screen',
  buttonRem: '20 rem',
  width: '20rem',
  buttonLD: 'Load data',
  }

onClick() {
  this.card.width = '100%';
  }
onClick2() {
  this.card.width = '20rem';
}
onClick3() {
  this.card.title = 'Master of binding in Angular';
  this.card.description = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
  this.card.width = '20rem';
  this.card.imgScr = 'https://repository-images.githubusercontent.com/24195339/d4194dc2-d880-43f7-960c-ea30e05c6531';
}
}
