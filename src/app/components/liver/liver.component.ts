import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OurServiceService } from 'src/app/services/our-service.service';

@Component({
  selector: 'app-liver',
  templateUrl: './liver.component.html',
  styleUrls: ['./liver.component.css'],
})
export class LiverComponent {
  constructor(private _OurServiceService: OurServiceService) {}
  isLoad: boolean = false;
  showResult: boolean = false;
  result!: string;
  liverData: FormGroup = new FormGroup({
    age: new FormControl('', [Validators.required]),
    total_bilirubin: new FormControl('', [Validators.required]),
    direct_bilirubin: new FormControl('', [Validators.required]),
    alkphos_alkaline_phosphotase: new FormControl('', [Validators.required]),
    alamine_aminotransferase: new FormControl('', [Validators.required]),
    aspartate_aminotransferase: new FormControl('', [Validators.required]),
    // sgpt_alamine_aminotransferase: new FormControl('', [Validators.required]),
    // sgot_aspartate_aminotransferase: new FormControl('', [Validators.required]),
    total_protein: new FormControl('', [Validators.required]),
    albumin: new FormControl('', [Validators.required]),
    albumin_and_globulin_ratio: new FormControl('', [Validators.required]),
    gender: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$'),
    ]),
  });
  clearInputs(): void {
    this.liverData = new FormGroup({
      age: new FormControl('', [Validators.required]),
      total_bilirubin: new FormControl('', [Validators.required]),
      direct_bilirubin: new FormControl('', [Validators.required]),
      alkphos_alkaline_phosphotase: new FormControl('', [Validators.required]),
      alamine_aminotransferase: new FormControl('', [Validators.required]),
      aspartate_aminotransferase: new FormControl('', [Validators.required]),
      // sgpt_alamine_aminotransferase: new FormControl('', [Validators.required]),
      // sgot_aspartate_aminotransferase: new FormControl('', [Validators.required]),
      total_protein: new FormControl('', [Validators.required]),
      albumin: new FormControl('', [Validators.required]),
      albumin_and_globulin_ratio: new FormControl('', [Validators.required]),
      gender: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$'),
      ]),
    });
  }
  creatLiverData(): void {
    if (this.liverData.valid === true) {
      console.log(this.liverData.value);
      this.isLoad = true;
      this._OurServiceService.getLiver(this.liverData.value).subscribe({
        next: (response) => {
          console.log('response', response.message);
          this.result = response.message;
          this.isLoad = false;
          this.showResult = true;
          this.clearInputs();
        },
        error: (error) => {
          console.log('error', error.message);
          this.result = error.message;
          this.isLoad = false;
          this.showResult = true;
          this.clearInputs();
        },
      });
    }
  }
}
