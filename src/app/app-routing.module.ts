import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DeatilsemploiComponent } from './deatilsemploi/deatilsemploi.component';
import { EmploiComponent } from './emploi/emploi.component';
import { EventsComponent } from './events/events.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { JavatComponent } from './javat/javat.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { MathtComponent } from './matht/matht.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProfilComponent } from './profil/profil.component';
import { PythontComponent } from './pythont/pythont.component';
import { RegisterComponent } from './register/register.component';
import { ScoreComponent } from './score/score.component';
import { AuthGuardService } from './services/guard/authGuard.service';
import { NoauthGuardService } from './services/guard/noauth-guard.service';
import { SpringtComponent } from './springt/springt.component';
import { TestsComponent } from './tests/tests.component';
import { TrainersComponent } from './trainers/trainers.component';
import { UpdateemploiComponent } from './updateemploi/updateemploi.component';
import { UpdateformateurComponent } from './updateformateur/updateformateur.component';
import { UpdateformationComponent } from './updateformation/updateformation.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,canActivate:[NoauthGuardService]},
  {path:'register',component:RegisterComponent,canActivate:[NoauthGuardService]},
  {path:'profil',component:ProfilComponent,canActivate:[AuthGuardService]},
  {path:'myproducts',component:MyproductsComponent,canActivate:[AuthGuardService]},
  {path:'formation/:key',component:ProductDetailComponent,canActivate:[AuthGuardService]},
  {path:'contact',component:ContactComponent},
  {path:'events',component:EventsComponent,canActivate:[AuthGuardService]},
  {path:'forgetpassword',component:ForgetpasswordComponent,canActivate:[NoauthGuardService]},
  {path:'trainers',component:TrainersComponent,canActivate:[AuthGuardService]},
  {path:'updateformation/:key',component:UpdateformationComponent,canActivate:[AuthGuardService]},
  {path:'updateformateur/:key',component:UpdateformateurComponent,canActivate:[AuthGuardService]},
  {path:'about',component:AboutComponent},
  {path :'tests',component:TestsComponent,canActivate:[AuthGuardService]},
  {path:'java',component:JavatComponent,canActivate:[AuthGuardService]},
  {path:'html',component:HtmlComponent,canActivate:[AuthGuardService]},
  {path:'spring',component:SpringtComponent,canActivate:[AuthGuardService]},
  {path:'math',component:MathtComponent,canActivate:[AuthGuardService]},
  {path:'python',component:PythontComponent,canActivate:[AuthGuardService]},
  {path:'',component:EmploiComponent,canActivate:[AuthGuardService]},
  {path:'emploi',component:EmploiComponent,canActivate:[AuthGuardService]},

  {path:'emplois-details/:key',component:DeatilsemploiComponent,canActivate:[AuthGuardService]},
  {path:'updateemploi/:key',component:UpdateemploiComponent,canActivate:[AuthGuardService]},
  {path:'score',component:ScoreComponent,canActivate:[AuthGuardService]},
  {path:'listuser',component:ListuserComponent,canActivate:[AuthGuardService]},
  {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuardService]},
  {path:'listcontact',component:ListcontactComponent,canActivate:[AuthGuardService]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
