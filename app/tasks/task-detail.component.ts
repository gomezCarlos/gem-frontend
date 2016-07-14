import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
	selector: "gem-detail",
	templateUrl: "app/gems/gem-detail.component.html",
	directives: [],
	providers: [TaskService,HTTP_PROVIDERS]
})

export class TaskDetailComponent {
	
	task: Task;
  error: any;
  param: any;
  constructor(private service: TaskService,
  	private router: Router,
  	private route: ActivatedRoute
  	){
  }

  ngOnInit(){
    this.param = this.route.params.subscribe(parameter=>{
      let id = parameter['id'];
      if(id){
        this.service
        .getById(id)
        .subscribe(response => this.task = response,
          error => this.error = error);
      }
      else{
        this.task = new Task();
      }
    }
    )
  }

  ngOnDestroy(){
    this.param.unsubscribe();
  }

}