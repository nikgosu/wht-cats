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

  getCats(params: any) {
    const finalParams = params.breed_ids !== 'all' ? { params } : { params: { limit: params.limit } }
    return this.http.get<CatsModel>(ENVIRONMENT.api + 'images/search?' + ENVIRONMENT.apiKey, finalParams)
  }
  getBreeds() {
    return this.http.get<BreedsModel>(ENVIRONMENT.api + 'breeds?' + ENVIRONMENT.apiKey)
  }
}
