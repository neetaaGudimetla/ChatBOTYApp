import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AiserviceService {

  //--------------------------------------------------
  //liveOrLocalUrl = 'http://localhost:3000';
  liveOrLocalUrl = 'https://chatbotaiapi.onrender.com';
  //--------------------------------------------------

  //USING SUBJECT
  activatedEmitter = new Subject<boolean>();//next() --- subscribe()

  constructor(private http: HttpClient) { }

  aiServiceToGetSearchResults(searchTxt: any) {
    console.log('aiServiceToGetSearchResults');
    console.log(searchTxt);
    //----------------------------------------------
    let queryParams = new HttpParams();
    queryParams = queryParams.append("searchTxt", searchTxt);
    return this.http
      .get(
        this.liveOrLocalUrl + '/qaurlblobMultiplepdf', { params: queryParams }
      );
  }
  //----------------------------------
  aiServiceToGetSearchMultipleResults(searchTxt: any, filename: any) {
    console.log('aiServiceToGetSearchResults searchTxt : ' + searchTxt);
    console.log('aiServiceToGetSearchResults filename : ' + filename);
    let queryParams = new HttpParams();
    queryParams = queryParams.append("searchTxt", searchTxt);
    queryParams = queryParams.append("filename", filename);
    return this.http
      .get(
        this.liveOrLocalUrl + '/qaurlblobMultiplepdf', { params: queryParams }
      );
  }
  //------------------------------------
  aiServiceToDeleteFile(filename: any) {
    console.log('aiServiceToDeleteFile filename : ' + filename);

    let queryParams = new HttpParams();
    queryParams = queryParams.append("filename", filename);
    return this.http
      .get(
        this.liveOrLocalUrl + '/deletefile', { params: queryParams }
      );
  }
  /* ======================== THEME COLORS ================================== */
  backgroundColorChanged1: EventEmitter<string> = new EventEmitter<string>();
  backgroundColorChanged2: EventEmitter<string> = new EventEmitter<string>();
  setBackgroundColor1(color: string) {
    this.backgroundColorChanged1.emit(color);
  }
  setBackgroundColor2(color: string) {
    this.backgroundColorChanged2.emit(color);
  }
  /* ======================== THEME COLORS ================================== */
}

