import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {UploadedFile} from "../../models/UploadedFile";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  files: UploadedFile[] = [];
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe(s => {
      this.files = s as unknown as UploadedFile[];
    })
  }

}
