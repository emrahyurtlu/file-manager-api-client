import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UploadedFile} from "../models/UploadedFile";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private API_ENDPOINT = "http://localhost:5000/api/files"

  constructor(private http: HttpClient) {
  }

  public upload(formData: FormData) {
    return this.http.post(this.API_ENDPOINT, formData)
  }

  public getFiles() {
    return this.http.get<UploadedFile>(this.API_ENDPOINT)
  }
}
