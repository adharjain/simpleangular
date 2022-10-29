import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AddUserComponent } from "./comps/add-user/add-user.component";

//component
import { UserProfileComponent } from "./comps/user-profile/user-profile.component";

//route
const routes: Routes = [
    {path:'', component:UserProfileComponent},
    {path:'add', component:AddUserComponent},
    {path:'getall', component:UserProfileComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule{}