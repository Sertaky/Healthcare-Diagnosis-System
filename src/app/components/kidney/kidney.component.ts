import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OurServiceService } from 'src/app/services/our-service.service';

@Component({
  selector: 'app-kidney',
  templateUrl: './kidney.component.html',
  styleUrls: ['./kidney.component.css'],
})
export class KidneyComponent {
  constructor(private _OurServiceService: OurServiceService) {}
  isLoad: boolean = false;
  result!: string;
  showResult: boolean = false;
  kidneyData: FormGroup = new FormGroup({
    age: new FormControl('', [Validators.required]),
    blood_pressure: new FormControl('', [
      Validators.required,
      Validators.pattern('^-?\\d{2,3}/-?\\d{2,3}$'),
    ]),
    specific_gravity: new FormControl('', [Validators.required]),
    total_protein: new FormControl('', [Validators.required]),
    albumin: new FormControl('', [Validators.required]),
    red_blood_cells: new FormControl('', [Validators.required]),
    pus_cell: new FormControl('', [Validators.required]),
    pus_cell_clumps: new FormControl('', [Validators.required]),
    bacteria: new FormControl('', [Validators.required]),
    blood_glucose_random: new FormControl('', [Validators.required]),
    blood_urea: new FormControl('', [Validators.required]),
    serum_creatinine: new FormControl('', [Validators.required]),
    sodium: new FormControl('', [Validators.required]),
    potassium: new FormControl('', [Validators.required]),
    haemoglobin: new FormControl('', [Validators.required]),
    packed_cell_volume: new FormControl('', [Validators.required]),
    white_blood_cell_count: new FormControl('', [Validators.required]),
    red_blood_cell_count: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    hypertension: new FormControl('', [Validators.required]),
    diabetes_mellitus: new FormControl('', [Validators.required]),
    coronary_artery_disease: new FormControl('', [Validators.required]),
    appetite: new FormControl('', [Validators.required]),
    pedal_edema: new FormControl('', [Validators.required]),
    anemia: new FormControl('', [Validators.required]),
  });
  clearInput(): void {
    this.kidneyData = new FormGroup({
      age: new FormControl('', [Validators.required]),
      blood_pressure: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?\\d{2,3}/-?\\d{2,3}$'),
      ]),
      specific_gravity: new FormControl('', [Validators.required]),
      total_protein: new FormControl('', [Validators.required]),
      albumin: new FormControl('', [Validators.required]),
      red_blood_cells: new FormControl('', [Validators.required]),
      pus_cell: new FormControl('', [Validators.required]),
      pus_cell_clumps: new FormControl('', [Validators.required]),
      bacteria: new FormControl('', [Validators.required]),
      blood_glucose_random: new FormControl('', [Validators.required]),
      blood_urea: new FormControl('', [Validators.required]),
      serum_creatinine: new FormControl('', [Validators.required]),
      sodium: new FormControl('', [Validators.required]),
      potassium: new FormControl('', [Validators.required]),
      haemoglobin: new FormControl('', [Validators.required]),
      packed_cell_volume: new FormControl('', [Validators.required]),
      white_blood_cell_count: new FormControl('', [Validators.required]),
      red_blood_cell_count: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      hypertension: new FormControl('', [Validators.required]),
      diabetes_mellitus: new FormControl('', [Validators.required]),
      coronary_artery_disease: new FormControl('', [Validators.required]),
      appetite: new FormControl('', [Validators.required]),
      pedal_edema: new FormControl('', [Validators.required]),
      anemia: new FormControl('', [Validators.required]),
    });
  }
  sendData(): void {
    this.isLoad = true;
    if (this.kidneyData.valid === true) {
      console.log(this.kidneyData.value);
      this._OurServiceService.getKidneyData(this.kidneyData.value).subscribe({
        next: (response) => {
          console.log(response.message);
          this.result = response.message;
          this.isLoad = false;
          this.showResult = true;
          this.clearInput();
        },
        error: (err) => {
          console.log(err.message);
          this.result = err.message;
          this.showResult = true;

          this.isLoad = false;
        },
      });
    }
  }
}
