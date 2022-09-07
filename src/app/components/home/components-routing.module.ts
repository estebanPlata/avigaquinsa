import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import {  UsComponent } from "../us/us.component";
import { PruebaComponent } from "../../shared/prueba/prueba/prueba.component"
import { NewsComponent } from "../news/news.component";
import { InfrastructureComponent } from "../infrastructure/infrastructure.component";


const routes: Routes = [
    { path: '', component: HomeComponent, resolve:[PruebaComponent]},
    { path: 'us', component: UsComponent, resolve:[PruebaComponent]},
    { path: 'news', component: NewsComponent, resolve:[PruebaComponent]},
    { path: 'infrastruture', component: InfrastructureComponent, resolve:[PruebaComponent]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}