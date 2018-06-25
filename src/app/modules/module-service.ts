import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor() { }

  project: any;

  setProject(project: any): void {
    this.project = project;
  }

  getProject(): any {
    return this.project;
  }
}
