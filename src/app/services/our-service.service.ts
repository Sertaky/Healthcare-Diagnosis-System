import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OurServiceService {
  constructor(private _HttpClient: HttpClient) {}

  getLiver(liverData: object): Observable<any> {
    return this._HttpClient.post(
      'https://emaarproprerties.com/api/patient/liver-analysis',
      liverData
    );
  }
  getDiabetes(data: object): Observable<any> {
    return this._HttpClient.post(
      'https://emaarproprerties.com/api/patient/diabetes-analysis',
      data
    );
  }
  getHeartData(data: object): Observable<any> {
    return this._HttpClient.post(
      'https://emaarproprerties.com/api/patient/heart-analysis',
      data
    );
  }
  getKidneyData(data: object): Observable<any> {
    return this._HttpClient.post(
      'https://emaarproprerties.com/api/patient/kidney-analysis',
      data
    );
  }
  getPneumonia(data: FormData): Observable<any> {
    return this._HttpClient.post(
      'https://emaarproprerties.com/api/patient/pneumonia-analysis',
      data
    );
  }
  getMalaria(data: FormData): Observable<any> {
    return this._HttpClient.post(
      'https://emaarproprerties.com/api/patient/malaria-analysis',
      data
    );
  }
}
