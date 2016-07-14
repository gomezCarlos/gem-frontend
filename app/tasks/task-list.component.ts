import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdlComponent } from '../mdl.component';
import {Observable} from 'rxjs';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

interface IServerResponse {
    items: any[];
    total: number;
}

@Component({
	selector: "task-list",
	templateUrl: "app/tasks/task-list.component.html",
	directives: [MdlComponent, PaginationControlsCmp],
	pipes: [PaginatePipe],
	providers: [TaskService,HTTP_PROVIDERS, PaginationService],
	
})

export class TaskListComponent implements OnInit{
	
	tasks : Task[];
	error: any;

	constructor(private service : TaskService,
		private router : Router
	 ) {
	}

	ngOnInit(){
		this.getAll();
	}

	getAll(){
		this.service
		.getTasks()
		.subscribe(
			response => {this.tasks = response;},
			error => {this.error = error;}
			);
	}

	view(id: number){
		this.router.navigate(["/tasks",id]);
	}

	create(){
		this.router.navigate(["/task"]);
	}

	delete(object: Task){
		this.service.delete(object).subscribe(
			res =>{ this.getAll();},
			error => { this.error = error; }
			);
	}



}