import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LineItem } from "../model/line-item.class";





const URL: string='http://localhost:8080/api/line-items';

@Injectable({
    providedIn: 'root'
})

export class LineItemService {

    constructor(
        private http: HttpClient
    ){ }

    create(lineitem: LineItem): Observable<LineItem>{
        return this.http.post(URL+'/', lineitem) as Observable<LineItem>;
    }

    edit(lineitem: LineItem): Observable<LineItem>{
        return this.http.put(URL+'/', lineitem) as Observable<LineItem>;
    }

    delete(id: number): Observable<LineItem> {
        return this.http.delete(URL + "/" + id) as Observable<LineItem>;
      }
    
      // get all line items for request
    getLinesForRequest(requestId: number): Observable<LineItem[]> {
      return this.http.get(URL + "/lines-for-pr/"+ requestId) as Observable<LineItem[]>
    }

    get(id: number): Observable<LineItem> {
      return this.http.get(URL+`/`+id) as Observable<LineItem>;
    }

}