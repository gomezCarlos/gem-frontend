import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Project } from './project';

@Component({
  selector: 'project-form',
  templateUrl: "app/projects/project-form.component.html"
})

export class ProjectFormComponent {

  project = new Project();

  onsubmit(){

  }
}