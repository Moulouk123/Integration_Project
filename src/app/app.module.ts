import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {environment} from 'src/environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { TrainersComponent } from './trainers/trainers.component';
import {  VerifEmailComponent } from './verif-email/verif-email.component';
import { UpdateformationComponent } from './updateformation/updateformation.component';
import { UpdateformateurComponent } from './updateformateur/updateformateur.component';
import { TestsComponent } from './tests/tests.component';
import { HtmlComponent } from './html/html.component';
import { JavatComponent } from './javat/javat.component';
import { MathtComponent } from './matht/matht.component';
import { PythontComponent } from './pythont/pythont.component';
import { SpringtComponent } from './springt/springt.component';
import { ScoreComponent } from './score/score.component';
import { EmploiComponent } from './emploi/emploi.component';
import { UpdateemploiComponent } from './updateemploi/updateemploi.component';
import { DeatilsemploiComponent } from './deatilsemploi/deatilsemploi.component';
import { ListuserComponent } from './listuser/listuser.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListcontactComponent } from './listcontact/listcontact.component';

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    MyproductsComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent,
    EventsComponent,
    ForgetpasswordComponent,
    TrainersComponent,
    VerifEmailComponent,
    UpdateformationComponent,
    UpdateformateurComponent,
    TestsComponent,
    HtmlComponent,
    JavatComponent,
    MathtComponent,
    PythontComponent,
    SpringtComponent,
    ScoreComponent,
    EmploiComponent,
    UpdateemploiComponent,
    DeatilsemploiComponent,
    ListuserComponent,
    CheckoutComponent,
    ListcontactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
