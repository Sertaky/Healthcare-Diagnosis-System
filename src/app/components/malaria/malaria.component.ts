import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OurServiceService } from 'src/app/services/our-service.service';

@Component({
  selector: 'app-malaria',
  templateUrl: './malaria.component.html',
  styleUrls: ['./malaria.component.css'],
})
export class MalariaComponent implements OnInit {
  file!: File;
  result!: string;
  isLoad: boolean = false;
  showResult: boolean = false;
  formImage!: FormGroup;
  imgUrl!: string | ArrayBuffer | null | undefined;
  constructor(
    private _OurServiceService: OurServiceService,
    private _FormBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formImage = this._FormBuilder.group({
      image: [''],
    });
  }

  selectImg(event: any): void {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      this.file = event.target.files[0];
      reader.onload = (e) => {
        this.imgUrl = e.target?.result;
      };
      reader.readAsDataURL(this.file);
      this.showResult = false;
    } else {
      console.log('error in files');
    }
  }
  uploadImg(): void {
    if (this.file) {
      this.isLoad = true;
      const imgData: FormData = new FormData();
      imgData.append('image', this.file);
      this._OurServiceService.getMalaria(imgData).subscribe({
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
    }
  }
}
