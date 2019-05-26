import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxIntlTelInputModule } from 'projects/ngx-intl-tel-input-search/src/lib/ngx-intl-tel-input-search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgxIntlTelInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
