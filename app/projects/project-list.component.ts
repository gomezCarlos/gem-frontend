import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdlComponent } from '../mdl.component';

@Component({
	selector: "project-list",
	templateUrl: "app/projects/project-list.component.html",
	directives: [MdlComponent],
	providers: [ProjectService,HTTP_PROVIDERS]
})

export class ProjectListComponent implements OnInit {

	notification: any;

	projects: Project[];
	project: Project;
	error: any;

	constructor(private ProjectService : ProjectService,
		private router : Router
	 ) {}

	getProjects(){
		this.ProjectService
		.getProjects()
		.subscribe(
			projects => {this.projects = projects;},
			error => {this.error = error;}
			);
	}

	getProject(id: number){
		this.ProjectService
		.getById(id)
		.subscribe(
			project =>{this.project = project;},
			error => {this.error = error;}
			)
	}

	ngOnInit(){
		this.getProjects();
	}

	view(project_id: number){
		this.router.navigate(["/projects", project_id]);
	}

	newProject(){
		this.router.navigate(["/project"]);
	}
	delete(project: Project){
		this.ProjectService.delete(project).subscribe(
			res =>{ alert(res.status); this.notification = true; this.getProjects(); },
			error => { this.error = error; alert("Error: " + error)}
			);
		
	}
}