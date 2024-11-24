import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { OurServiceService } from 'src/app/services/our-service.service';

@Component({
  selector: 'app-pneumonia',
  templateUrl: './pneumonia.component.html',
  styleUrls: ['./pneumonia.component.css'],
})
export class PneumoniaComponent implements OnInit {
  constructor(
    private _OurServiceService: OurServiceService,
    private _FormBuilder: FormBuilder
  ) {}
  isLoad: boolean = false;
  showResult: boolean = false;
  result!: string;
  formImg!: FormGroup;
  imgUrl: string | ArrayBuffer | null | undefined;
  file!: File;
  ngOnInit(): void {
    this.formImg = this._FormBuilder.group({
      image: [''],
    });
  }
  selectImg(event: any): void {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      this.file = event.target.files[0];
      console.log(this.file);
      reader.onload = (e) => {
        this.imgUrl = e.target?.result;
      };
      reader.readAsDataURL(this.file);
      this.showResult = false;
    } else {
      console.log('msh tamam');
    }
  }
  uploadImg(): void {
    if (this.file) {
      this.isLoad = true;
      const fileData: FormData = new FormData();
      fileData.append('image', this.file);
      console.log(fileData);
      this._OurServiceService.getPneumonia(fileData).subscribe({
        next: (res) => {
          console.log(res);
          this.result = res.message;
          this.isLoad = false;
          this.showResult = true;
        },
        error: (err) => {
          console.log(err);
          this.result = err.message;
          this.isLoad = false;
          this.showResult = true;
        },
      });
      this.showResult = false;
    }
  }
}
