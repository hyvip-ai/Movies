import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apikey:any = "7f87fa7e"
 
  
    simple:any = null
  // https://api.themoviedb.org/3/movie/550?api_key=f5115b9b6dc274bad74e17e5ef0370b2

  constructor(private http:HttpClient) { }

  search(){
    var name = this.simple
    var res = name.split(" ")
   var final =  res.join('+')
    console.log(final)
   

    return this.http.get(`http://www.omdbapi.com/?t=${final}&apikey=${this.apikey}`)
  }
}
