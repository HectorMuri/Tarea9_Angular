import { Component } from '@angular/core';
import { Hector} from 'src/app/services/hector.service';

@Component({
  selector: 'app-tarea9',
  templateUrl: './tarea9.component.html',
  styleUrls: ['./tarea9.component.css']
})
export class InfoviewComponent {
 
  constructor (private tarea9: Hector){}

  ngOnInit(){
    this.getApi()
  }


  getApi(){
    this.tarea9.getApi()
    .subscribe(data=>{
      console.log(data);
 
})
}
}