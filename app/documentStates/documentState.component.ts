import { Component, OnInit } from '@angular/core';
import { DocumentState } from './documentState';
import { DocumentStateService } from './documentState.service';
import { Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdlComponent } from '../mdl.component';


@Component({
	selector: 'document-states',
	templateUrl: 'app/documentStates/documentStates.component.html',
	providers: [DocumentStateService, HTTP_PROVIDERS],
	directives: [MdlComponent]
})
export class DocumentStateComponent implements OnInit {

	documentStates : DocumentState[];
	error : any;

	constructor(private documentStateService: DocumentStateService, private router: Router) {
		
	}

	ngOnInit(){

		this.getDocumentStates();

	}

	getDocumentStates(){
		this.documentStateService.get().subscribe(
				documentStates => { this.documentStates = documentStates },
				error => { this.error =  error }
			);
	}

	view(documentState: DocumentState){
		this.router.navigate(["",documentState.ids])
	}

	edit(documentState: DocumentState){
		this.router.navigate(["",documentState.ids])	
	}

	delete(documentState: DocumentState){
		this.documentStateService.delete(documentState);
	}



}
