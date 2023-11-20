import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AdminComponent } from './admin/admin.component';
import { adminGuard } from './guards/admin.guard';
import { ServiceComponent } from './service/service.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PracticeComponent } from './practice/practice.component';
import { NotFoundError } from 'rxjs';
import { ErrorComponent } from './error/error.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { ParentComponent } from './parent/parent.component';
import { BigparentComponent } from './bigparent/bigparent.component';
import { PipeComponent } from './pipe/pipe.component';
import { StatemanagementComponent } from './statemanagement/statemanagement.component';
import { BudgetappComponent } from './budgetapp/budgetapp.component';
import { BudgetparentComponent } from './budgetparent/budgetparent.component';
import { Budget1Component } from './budget1/budget1.component';
import { NewstateComponent } from './newstate/newstate.component';
import { Newstate2Component } from './newstate2/newstate2.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SigninreactiveComponent } from './signinreactive/signinreactive.component';
import { ParComponent } from './par/par.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { contactGuard } from './guards/contact.guard';
import { FormsComponent } from './forms/forms.component';
import { TemplateComponent } from './template/template.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { SignupComponent } from './signup/signup.component';
import { NewsignupComponent } from './newsignup/newsignup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BlogComponent } from './blog/blog.component';
import { BlogloginComponent } from './bloglogin/bloglogin.component';
import { BloguserdashboardComponent } from './bloguserdashboard/bloguserdashboard.component';
import { SnackComponent } from './snack/snack.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'event', component:EventparentComponent},
  {path:'new', component:NewsignupComponent},
  {path:'upload',component:UploadfileComponent},
  {path:'service', component:ServiceComponent},
  {path:'template',component:TemplateComponent},
  {path:'form',component:FormsComponent},
{path:'par',component:BigparentComponent},
{path:'dashboard', component:DashboardComponent,canActivate:[contactGuard]},
  {path:'reactive', component:ReactiveformComponent},
  {path:'signin',component:SigninreactiveComponent},
  {path:'news', component:Newstate2Component},
  {path:'b',component:Budget1Component},
  {path:'pipe', component:PipeComponent},
  {path:'budget', component:BudgetappComponent},
  {path:'get',component:BudgetparentComponent},
  {path:'state', component:StatemanagementComponent},
  {path:'prac',component:PracticeComponent},
  {path:'parent', component:ParentComponent},
  {path:'api',component:DisplayApiComponent},
  {path:'users/:login',component:UserprofileComponent },
  {path:'editContact', component:EditContactComponent},
  {path:'side', component:SidenavComponent},
  {path:'cart', component:AddtocartComponent},
  {path:'serve', component:ServiceComponent},
  {path:'admin',component:AdminComponent},
  {path:'blog', component:BlogComponent},
  {path:'bloglogin', component:BlogloginComponent},
  {path:'blogdashboard', component:BloguserdashboardComponent},
  {path:'snack', component:SnackComponent},
  
  // {path:'admin', component:AdminComponent,canActivate:[adminGuard]},
  {path:'home', redirectTo:'/', pathMatch:'full'},
  {path:'contact', children:[
    {path:'',component:CreatecontactComponent},
    {path:':id', component:DisplayContactComponent}, 
  ]},
  {path:'**',component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
