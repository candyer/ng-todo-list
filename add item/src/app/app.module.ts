import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InoutComponent } from './inout/inout.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';

@NgModule({
	declarations: [
	AppComponent,
	InoutComponent,
	InputComponent,
	ItemComponent
	],
	imports: [
	BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
