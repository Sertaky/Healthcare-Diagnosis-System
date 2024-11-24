import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OurServiceService } from 'src/app/services/our-service.service';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css'],
})
export class HeartComponent {
  constructor(private _OurServiceService: OurServiceService) {}
  isLoad: boolean = false;
  title!: string;
  result!: any;
  showResult: boolean = false;
  heartData: FormGroup = new FormGroup({
    Age: new FormControl('', [Validators.required]),
    sex: new FormControl('', [
      Validators.required,
      Validators.pattern('^[01]$'),
    ]),
    trestbps: new FormControl('', [
      Validators.required,
      Validators.pattern('^-?\\d+(?:\\.0)?$'),
    ]),
    chol: new FormControl('', [
      Validators.required,
      Validators.pattern('^-?\\d+(?:\\.0)?$'),
    ]),
    thalach: new FormControl('', [
      Validators.required,
      Validators.pattern('^-?\\d+(?:\\.0)?$'),
    ]),
  });
  clearInput(): void {
    this.heartData = new FormGroup({
      Age: new FormControl('', [Validators.required]),
      sex: new FormControl('', [
        Validators.required,
        Validators.pattern('^[01]$'),
      ]),
      trestbps: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?\\d+(?:\\.0)?$'),
      ]),
      chol: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?\\d+(?:\\.0)?$'),
      ]),
      thalach: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?\\d+(?:\\.0)?$'),
      ]),
    });
  }
  sendData(): void {
    if (this.heartData.valid) {
      this.isLoad = true;
      console.log(this.heartData);
      this._OurServiceService.getHeartData(this.heartData.value).subscribe({
        next: (response) => {
          this.showResult = true;
          console.log(response.data);
          this.title = response.data.result;
          this.result = Number(response.data.risk_factor);
          const factor: number = this.result.toFixed(2);
          this.result = factor;
          console.log(factor);
          this.isLoad = false;
          this.clearInput();
        },
        error: (error) => {
          console.log(error);
          this.showResult = true;
          this.isLoad = false;
          this.clearInput();
        },
      });
    }
  }
}
