import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'todo-input',
	template: `
	<input>
		<button>Save</button>
	<p>The title is: {{ title }}</p>
	`,
	styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
	title: string = 'my title';

	constructor() { 
		console.log('in constructor');
		this.changeTitle('I love Angular');
		console.log(this.title);
	}
	
	ngOnInit() {
	}

	changeTitle(newTitle: string): string {
		this.title = newTitle;
		return this.title;
	}
}
