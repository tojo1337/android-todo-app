import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-greet',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.scss'
})
export class GreetComponent {

  sampleForm = new FormGroup({
    data: new FormControl("")
  });

  onSubmit(): void {
    alert(this.sampleForm.value.data);
  }

}
