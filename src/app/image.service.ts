import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private endpoint = 'https://content-cache.watchcorridor.com/v6/interview';

  constructor(private http: HttpClient) { }

    getImages(): Observable<any> {
    return this.http.get(this.endpoint);
  }
}
