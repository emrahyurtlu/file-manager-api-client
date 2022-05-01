import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private fileService: FileService) {
  }

  ngOnInit(): void {
  }

  public uploadFile = (file: File) => {
    if (file === undefined)
      return alert("Please select a file...");

    console.log("file", file);

    const formDate = new FormData();
    formDate.append('file', file, file.name)

    this.fileService.upload(formDate);
  }
}
