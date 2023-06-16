import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BreedsModel, CatsModel } from '../models'
import { ENVIRONMENT } from '../../environment'

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) {
  }

  getCats(query: any) {
    return this.http.get<CatsModel>(ENVIRONMENT.apiKey + 'images/search', {params: query})
  }
  getBreeds() {
    return this.http.get<BreedsModel>(ENVIRONMENT.apiKey + 'breeds')
  }
}
