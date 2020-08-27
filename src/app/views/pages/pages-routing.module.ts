import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
    { path: '', component: MasterDetailComponent },
    { path: 'repository/:name', component: RepositoryComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
