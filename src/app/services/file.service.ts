import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UploadedFile} from "../models/UploadedFile";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  public upload(formData: FormData) {

    return this.http.post(environment.API_ENDPOINT, formData, {reportProgress: true, observe: 'events'})
  }

  public getFiles() {
    return this.http.get<UploadedFile>(environment.API_ENDPOINT)
  }
}
