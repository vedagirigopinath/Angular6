import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient, private httpOld: Http) { }

fetchNews(url):any{
  //console.log(url);
  return this.http.get<any>(url).pipe( 
    //tap( data => console.log('Data Fetched: ' +JSON.stringify(data))));
    tap( data => JSON.stringify(data)));
}

getNews(): any{
  var url = 'https://newsapi.org/v2/everything?sources=the-hund&apiKey=06313be8c6cd4d8c92d4c096e21096eb';
  return this.http.get<any>(url)
  .pipe(
    //tap( data => console.log('Data Fetched: ' +JSON.stringify(data))));
    tap( data => JSON.stringify(data)));
}

}

