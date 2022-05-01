import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TriggerService {
  private newFileSource = new BehaviorSubject<boolean>(false);
  newFile = this.newFileSource.asObservable();

  constructor() {
  }

  public setMessage = (value: boolean) => this.newFileSource.next(value);
  public getMessage = () => {
    return this.newFile
  }
}
