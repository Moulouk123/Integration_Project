import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase,{ auth }  from 'firebase/app'; 


import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role
  userset
  user: Observable<firebase.User>;
  AngularFireDatabase
  userData
 userr
  constructor(public fa : AngularFireAuth, public afs : AngularFirestore,public router: Router,
    public ngZone: NgZone) {
      this.user=this.fa.user
    
    this.fa.authState.subscribe((user) => {
      if (user) {
        console.log(this.user)
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        this.userr=localStorage.getItem('user')

      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  


  signUp(email ,password) {
    return this.fa.createUserWithEmailAndPassword(email,password).then((result) => {
      /* Call the SendVerificaitonMail() function when new user sign 
      up and returns promise */
      if(this.SendVerificationMail())
      {
        this.SetUserData(result.user);

      }
      else{
        this.router.navigate(['home']);
        console.log('welcome verif mail')

      }
    })
    .catch((error) => {
      window.alert("ERROR  :"+error.message);
    });

}
SendVerificationMail() {
  return this.fa.currentUser
    .then((u) => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verifemail']);
    });
}
setuser(user){
 

  return this.userset=user;
}


  /*signUp(email,password){
 return this.fa.createUserWithEmailAndPassword(email,password)  
  }
  signIn(email,password){
    return this.fa.signInWithEmailAndPassword(email,password)
  }
  */
ForgotPassword(passwordResetEmail: string) {
  return this.fa
    .sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    })
   
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log(user);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  /*OAuthProvider(provider) {
    return this.fa.auth.signInWithPopup(provider)
    .then((res) => {
    this.ngZone.run(() => {
    this.router.navigate(['dashboard']);
  })
  }).catch((error) => {
    window.alert(error)
  })
}*/
  // Sign in with Google
  GoogleAuth() {
    return  this.AuthLogin(new firebase.auth.GoogleAuthProvider())
    .then(res => {
    console.log('Successfully logged in!')
    }).catch(error => {
    console.log(error)
   });
  }
  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }
  AuthLogin(provider: any) {
    return this.fa
      .signInWithPopup(provider)
      .then((result) => {
        
        console.log('You have been successfully logged in!');
        this.router.navigate(['home']);
        this.SetUserData(result.user);
      })
      
  }
  SetUserData(user: any) {
    /*const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );*/
    const userData: User = {
      uid: user.uid,
      email: user.email,
      lastname:user.lastname,
      firstname:user.firstname,
     
      username:user.username,
      emailVerified: user.emailVerified,
      photoUrl:'https://th.bing.com/th/id/R.bc02443cfdbb46bad773c1fd5a0bae92?rik=34B4JhzOOW13tA&pid=ImgRaw&r=0',
    };
    /*return userRef.set(userData, {
      merge: true,
    });*/
  }
  
  signIn(email:any ,password:any) {
    return this.fa.signInWithEmailAndPassword(email,password).then((result) => {
      this.SetUserData(result.user);
      this.fa.authState.subscribe((user) => {
        if (user) {
          this.router.navigate(['home']);
        }
      });
    })
   
  }
  SignOut() {
    return this.fa.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['register']);
    });
  }
  getUser()
  {console.log(this.userset)
    return this.userset}
  getEtudiants(){
    return this.afs.collection("etudiants").snapshotChanges();
  
  }
  getFormateurs(){
    return this.afs.collection("formateurs").snapshotChanges();
  
  }
  getRole()
  {return this.role}
  setRole(role)
  {return this.role=role;}
  
}
