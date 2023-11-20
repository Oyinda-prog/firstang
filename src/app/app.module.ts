import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { HomeComponent } from './home/home.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceComponent } from './service/service.component';

import {MatNativeDateModule} from '@angular/material/core';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PracticeComponent } from './practice/practice.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ErrorComponent } from './error/error.component';
import { DisplayApiComponent } from './display-api/display-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BigparentComponent } from './bigparent/bigparent.component';
import { SmallchildComponent } from './smallchild/smallchild.component';
import { Statemanagement1Component } from './statemanagement1/statemanagement1.component';
import { Statemangement2Component } from './statemangement2/statemangement2.component';
import { PipeComponent } from './pipe/pipe.component';
import { StatemanagementComponent } from './statemanagement/statemanagement.component';
import { State1Component } from './state1/state1.component';
import { State2Component } from './state2/state2.component';
import { BudgetappComponent } from './budgetapp/budgetapp.component';
import { Budget1Component } from './budget1/budget1.component';
import { Budget2Component } from './budget2/budget2.component';
import { ParentbudgetComponent } from './parentbudget/parentbudget.component';
import { BudgetparentComponent } from './budgetparent/budgetparent.component';
import { NewstateComponent } from './newstate/newstate.component';
import { Newstate2Component } from './newstate2/newstate2.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SigninreactiveComponent } from './signinreactive/signinreactive.component';
import { ParComponent } from './par/par.component';
import { ChiComponent } from './chi/chi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateComponent } from './template/template.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { EventchildComponent } from './eventchild/eventchild.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsignupComponent } from './newsignup/newsignup.component';
import {MatButtonModule} from '@angular/material/button';
import { PhonevalidatorDirective } from './directives/phonevalidator.directive';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {

  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlogComponent } from './blog/blog.component';
import { BlogloginComponent } from './bloglogin/bloglogin.component';
import { BloguserdashboardComponent } from './bloguserdashboard/bloguserdashboard.component';
import { BlogallusersdashboardComponent } from './blogallusersdashboard/blogallusersdashboard.component';
import { SnackComponent } from './snack/snack.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatecontactComponent,
    HomeComponent,
    AddtocartComponent,
    DisplayContactComponent,
    EditContactComponent,
    AdminComponent,
    ServiceComponent,
    UserprofileComponent,
    PracticeComponent,
    ErrorComponent,
    DisplayApiComponent,
    ParentComponent,
    ChildComponent,
    BigparentComponent,
    SmallchildComponent,
    Statemanagement1Component,
    Statemangement2Component,
    PipeComponent,
    StatemanagementComponent,
    State1Component,
    State2Component,
    BudgetappComponent,
    Budget1Component,
    Budget2Component,
    ParentbudgetComponent,
    BudgetparentComponent,
    NewstateComponent,
    Newstate2Component,
    ReactiveformComponent,
    SigninreactiveComponent,
    ParComponent,
    ChiComponent,
    DashboardComponent,
    FormsComponent,
    TemplateComponent,
    EventparentComponent,
    EventchildComponent,
    UploadfileComponent,
    SignupComponent,
    SigninComponent,
    NewsignupComponent,
    PhonevalidatorDirective,
    SnackbarComponent,
    SidenavComponent,
    BlogComponent,
    BlogloginComponent,
    BloguserdashboardComponent,
    BlogallusersdashboardComponent,
    SnackComponent
  ],
  imports: [MatListModule,
    
    MatSnackBarModule,
    MatBottomSheetModule,
    BrowserModule,
    MatIconModule,
    MatAutocompleteModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
     BrowserAnimationsModule,
     MatButtonModule,
     MatSlideToggleModule,
     MatInputModule, 
     MatFormFieldModule,
     AsyncPipe,
     MatBadgeModule,
     MatButtonToggleModule,
     MatCardModule,
     MatChipsModule,
 MatDatepickerModule,
 MatNativeDateModule,
MatStepperModule,
MatToolbarModule,
MatSidenavModule,
MatTabsModule,
MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
