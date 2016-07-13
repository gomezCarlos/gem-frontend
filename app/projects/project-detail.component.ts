import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { ProjectFormComponent } from './project-form.component';

@Component({
	selector: "project-detail",
	templateUrl: "app/projects/project-detail.component.html",
	directives: [ProjectFormComponent],
	providers: [ProjectService,HTTP_PROVIDERS]
})

export class ProjectDetailComponent implements OnInit, OnDestroy {

  project: Project;
  error: any;
  param: any;
  constructor(private ProjectService: ProjectService,
  	private router: Router,
  	private route: ActivatedRoute
  	){
  }

  ngOnInit(){
    this.param = this.route.params.subscribe(parameter=>{
      let id = parameter['id'];
      if(id){
        this.ProjectService
        .getById(id)
        .subscribe(project => this.project = project,
          error => this.error = error);
      }
      else{
        this.project = new Project();
      }
    }
    )
  }

  ngOnDestroy(){
    this.param.unsubscribe();
  }

  save(){
    this.ProjectService.save(this.project)
      .subscribe(project => { this.project = project; this.router.navigate(["/projects"])},
        error => this.error = error
        );
  }

  list(){
    this.router.navigate(["/projects"]);
  }
}