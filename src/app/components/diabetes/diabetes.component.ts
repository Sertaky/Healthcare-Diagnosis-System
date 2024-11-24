import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { OurServiceService } from 'src/app/services/our-service.service';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css'],
})
export class DiabetesComponent {
  constructor(private _OurServiceService: OurServiceService) {}
  isLoad: boolean = false;
  result!: string;
  showResult: boolean = false;
  diabetesData: FormGroup = new FormGroup({
    pregnancies: new FormControl('', [Validators.required]),
    glucose: new FormControl('', [Validators.required]),
    bloodpressure: new FormControl('', Validators.required),
    skinthickness: new FormControl('', [Validators.required]),
    insulin: new FormControl('', [Validators.required]),
    bmi: new FormControl('', [Validators.required]),
    dpf: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?:[01](?:\\.\\d+)?|2(?:\\.0+)?)$'),
    ]),
    age: new FormControl('', [Validators.required]),
  });
  clearInput(): void {
    this.diabetesData = new FormGroup({
      pregnancies: new FormControl('', [Validators.required]),
      glucose: new FormControl('', [Validators.required]),
      bloodpressure: new FormControl('', Validators.required),
      skinthickness: new FormControl('', [Validators.required]),
      insulin: new FormControl('', [Validators.required]),
      bmi: new FormControl('', [Validators.required]),
      dpf: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
    });
  }
  sendData(): void {
    if (this.diabetesData.valid === true) {
      this.isLoad = true;
      console.log(this.diabetesData.value);
      this._OurServiceService.getDiabetes(this.diabetesData.value).subscribe({
        next: (response) => {
          console.log(response.data.prediction);
          this.result = response.data.prediction;
          this.isLoad = false;
          this.showResult = true;
          this.clearInput();
        },
        error: (error) => {
          console.log(error.error.errors.dpf[0]);
          this.result = error.error.errors.dpf[0];
          this.isLoad = false;
          this.showResult = true;
          this.clearInput();
        },
      });
    }
  }
}
