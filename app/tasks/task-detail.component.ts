import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { ProjectService } from '../projects/project.service';
import { Project } from '../projects/project';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
	selector: "task-detail",
	templateUrl: "app/tasks/task-detail.component.html",
	directives: [],
	providers: [TaskService, ProjectService,HTTP_PROVIDERS]
})

export class TaskDetailComponent {
	
	task: Task;
  error: any;
  param: any;
  projects: Project[];
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

  save(){
    this.service.save(this.task)
      .subscribe(response => { this.task = response; this.router.navigate(["/gems"])},
        error => this.error = error
        );
  }

  list(){
    this.router.navigate(["/tasks"]);
  }

}