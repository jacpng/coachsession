import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {
	 id: string;
  private sub: any;
  coach;


  constructor(private route: ActivatedRoute ,public httpService: HttpService) { 
this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

  })

  }

  ngOnInit() {
  	this.httpService.getIndiCoaches(this.id).subscribe(data=> {
  		this.coach = data 
  		console.log('Get API data'+ JSON.stringify(this.coach))
  	})

  	 
  	}
}
