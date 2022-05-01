import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileService} from "../../services/file.service";
import {HttpEventType} from "@angular/common/http";
import {TriggerService} from "../../services/trigger.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public message: string = '';
  public progress: number = 0;
  // @Output() public onUploadFinished = new EventEmitter();
  @ViewChild('file')
  private file: ElementRef | undefined;

  constructor(private fileService: FileService, private trigger: TriggerService) {
  }

  ngOnInit(): void {
  }

  public uploadFile = (file: File) => {
    if (file === undefined)
      return alert("Please select a file...");

    console.log("file", file);

    const formDate = new FormData();
    formDate.append('file', file, file.name)

    this.fileService.upload(formDate).subscribe(e => {
      if (e.type === HttpEventType.UploadProgress) {
        // @ts-ignore
        this.progress = Math.round(100 * e.loaded / e.total)
      } else if (e.type == HttpEventType.Response) {
        this.message = 'Uploaded successfully';
        //this.onUploadFinished.emit(e.body);
        this.trigger.setMessage(true);
        // @ts-ignore
        this.file.nativeElement.value = '';
      }
    });
  }
}
