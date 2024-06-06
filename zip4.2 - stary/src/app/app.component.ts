import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentModel } from './student-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  students: StudentModel[] = [
    {
      id: 's-1',
      name: 'John',
      surname: 'Doe',
      grades: [5, 4, 1],
      selected: false,
    },
    {
      id: 's-2',
      name: 'Frank',
      surname: 'Sinatra',
      grades: [5, 5, 5],
      selected: false,
    },
    {
      id: 's-3',
      name: 'Rod',
      surname: 'Stewart',
      grades: [3, 2, 5],
      selected: false,
    },
  ];
  
 SelectClick(student: StudentModel) {
    student.selected= !student.selected;
  }
}
