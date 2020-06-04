import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  proofUrl = 'https://backend.ticketmaya.me/api/attendee/upload';
  eventUrl = 'https://backend.ticketmaya.me/api/events/create';

  constructor(public http: HttpClient, public auth: AuthService) { }


  uploadFile(formData: FormData) {
    return this.http.post(this.proofUrl, formData);
  }

  uploadEvent(formData: FormData) {
      return this.http.post(this.eventUrl, formData);
  }

}
