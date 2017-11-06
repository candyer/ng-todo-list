import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todo-input',
	template: `                           
	<input [value]="title"              
			(keyup.enter)="changeTitle(inputElement)"
			#inputElement>
		<button (click)="changeTitle(inputElement)">
			Save
		</button>
	<p>The title is: {{ title }}</p>
	`,  
	styleUrls: ['./input.component.css']  
})    

export class InputComponent implements OnInit {
	title: string = '';           

	constructor() { }                     

	ngOnInit() {
	}

	changeTitle(inputElementReference): void {
		console.log(inputElementReference);
		this.title = inputElementReference.value;              
	}
}