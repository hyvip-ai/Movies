import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
mydata:any = null
  constructor(private services:SearchService) { }

  ngOnInit(): void {

    this.services.search().subscribe(res=>{
      console.log(res)
      this.mydata = res
    })
  }

}
