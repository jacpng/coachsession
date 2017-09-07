import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {
 ngOnInit() {
  }

  title = 'My Dashboard';
  coaches 
  newcoach = {
  	name: '',
  	description:'',
  	image_url:''
  }
  constructor(public httpService : HttpService, public router: Router) { 
 
this.httpService.getCoaches()
  .subscribe(data => {
    console.log(data)
    this.coaches = data
  })

 }
 saveCoach(newcoach){
this.httpService.addCoach(newcoach)
  .subscribe(data => {
    console.log(data)

    this.coaches.push(newcoach)
    this.newcoach = {
    name: '',
    description:'',
    image_url:''
  } 
  })
}


goToCoachDetails(id) {
  this.router.navigate(['/coach-detail', id]);
}


}
