import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private services:SearchService,private router:Router) { }
  searchterm:any = null
  searcharray:any = []
  ngOnInit(): void {
  }

  search(){
    this.services.simple = this.searchterm
    console.log(this.services.apikey)
    this.router.navigate(['/SearchResults'])
  
  }

  adda(){
    // console.log('triggered')
    this.searcharray.push('a');
    // console.log(this.searcharray)
    // console.log(this.searcharray.join())
    this.searchterm = this.searcharray.join("")
  }

  addb(){
    // console.log('triggered')
    this.searcharray.push('b');
    // console.log(this.searcharray)
    // console.log(this.searcharray.join())
    this.searchterm = this.searcharray.join("")
  }

  addc(){
   
    this.searcharray.push('c');
  
    this.searchterm = this.searcharray.join("")
  }

  addd(){
   
    this.searcharray.push('d');
  
    this.searchterm = this.searcharray.join("")
  }
  adde(){
   
    this.searcharray.push('e');
  
    this.searchterm = this.searcharray.join("")
  }
  addf(){
   
    this.searcharray.push('f');
  
    this.searchterm = this.searcharray.join("")
  }

  addg(){
   
    this.searcharray.push('g');
  
    this.searchterm = this.searcharray.join("")
  }
  addh(){
   
    this.searcharray.push('h');
  
    this.searchterm = this.searcharray.join("")
  }
  addi(){
   
    this.searcharray.push('i');
  
    this.searchterm = this.searcharray.join("")
  }
  addj(){
   
    this.searcharray.push('j');
  
    this.searchterm = this.searcharray.join("")
  }
  addk(){
   
    this.searcharray.push('k');
  
    this.searchterm = this.searcharray.join("")
  }
  addl(){
   
    this.searcharray.push('l');
  
    this.searchterm = this.searcharray.join("")
  }
  addm(){
   
    this.searcharray.push('m');
  
    this.searchterm = this.searcharray.join("")
  }
  addn(){
   
    this.searcharray.push('n');
  
    this.searchterm = this.searcharray.join("")
  }
  addo(){
   
    this.searcharray.push('o');
  
    this.searchterm = this.searcharray.join("")
  }
  addp(){
   
    this.searcharray.push('p');
  
    this.searchterm = this.searcharray.join("")
  }
  addq(){
   
    this.searcharray.push('q');
  
    this.searchterm = this.searcharray.join("")
  }
  addr(){
   
    this.searcharray.push('r');
  
    this.searchterm = this.searcharray.join("")
  }
  adds(){
   
    this.searcharray.push('s');
  
    this.searchterm = this.searcharray.join("")
  }
  addt(){
   
    this.searcharray.push('t');
  
    this.searchterm = this.searcharray.join("")
  }
  addu(){
   
    this.searcharray.push('u');
  
    this.searchterm = this.searcharray.join("")
  }
  addv(){
   
    this.searcharray.push('v');
  
    this.searchterm = this.searcharray.join("")
  }
  addw(){
   
    this.searcharray.push('w');
  
    this.searchterm = this.searcharray.join("")
  }
  addx(){
   
    this.searcharray.push('x');
  
    this.searchterm = this.searcharray.join("")
  }

  addy(){
   
    this.searcharray.push('y');
  
    this.searchterm = this.searcharray.join("")
  }
  addz(){
   
    this.searcharray.push('z');
  
    this.searchterm = this.searcharray.join("")
  }
  addspace(){
    this.searcharray.push(' ')
    this.searchterm = this.searcharray.join("")

  }
  rem(){
    this.searcharray.pop()
    this.searchterm = this.searcharray.join("")
  }
  adddark(){
    this.searchterm = 'Dark'
  }
  addBrak(){
    this.searchterm = 'Breaking Bad'
  }
  addum(){
    this.searchterm = 'Umbrella Academy'
  }
  addmoney(){ 
    this.searchterm = 'Money Heist'
  }
  clear(){
    this.searchterm = ''
    this.searcharray.splice(0,this.searcharray.length)

  }

}
