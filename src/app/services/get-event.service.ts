import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetEventService {

  private url = 'http://13.250.248.175/api/events/show/';
  private showEventsUrl = 'http://13.250.248.175/api/events/showAll';
  private cancelUrl = 'http://13.250.248.175/api/events/delete/';

  constructor(public http: HttpClient) { }

  getEvent(event_id: string){
    return this.http.get(this.url + event_id);
  }

  showEvents() {
    return this.http.get(this.showEventsUrl);
  }

  cancelEvent(event_id: string) {
    return this.http.get(this.cancelUrl + event_id);
  }

}