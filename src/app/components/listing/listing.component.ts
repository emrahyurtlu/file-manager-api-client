import {Component, OnInit} from '@angular/core';
import {FileService} from "../../services/file.service";
import {UploadedFile} from "../../models/UploadedFile";
import {TriggerService} from "../../services/trigger.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  files: UploadedFile[] = [];

  constructor(private fileService: FileService, private trigger: TriggerService) {
    this.getFiles();
  }

  ngOnInit(): void {
    this.trigger.newFile.subscribe(s => {
      if (s) {
        this.getFiles()
      }
    })
  }

  getFiles() {
    this.fileService.getFiles().subscribe(s => {
      this.files = s as unknown as UploadedFile[];
      this.trigger.setMessage(false);
    })
  }

}
