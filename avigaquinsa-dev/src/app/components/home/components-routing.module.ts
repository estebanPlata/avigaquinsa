import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UsComponent } from "../us/us.component";
import { NewsComponent } from "../news/news.component";
import { InfrastructureComponent } from "../infrastructure/infrastructure.component";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'us', component: UsComponent},
    { path: 'news', component: NewsComponent},
    { path: 'infrastruture', component: InfrastructureComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule {}