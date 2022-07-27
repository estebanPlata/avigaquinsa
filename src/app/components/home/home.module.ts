import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { UsComponent } from "../us/us.component";
import { NewsComponent } from "../news/news.component";
import { InfrastructureComponent } from "../infrastructure/infrastructure.component";

@NgModule({
    declarations:[
        HomeComponent,
        UsComponent,
        NewsComponent,
        InfrastructureComponent
    ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [

    ]
})
export class HomeModule {}