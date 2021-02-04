import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
 
export interface users {
  id?: string,
  userid: string,
  Fname: string,
  Mname: string,
  Lname: string,
  Pemail: string,
  Eemail: string,
  password: any,
  phone : string,
  Hphone : string,
  DOB : any,
  addressH: string,
  department : string,
  Rdepartment: string,
  role : string,
  sdate: string,
  Econtact: string,
  Otherinformation: string,
  picture: any
}
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Ausers: Observable<users[]>;
  private usersCollection: AngularFirestoreCollection<users>;

  constructor(private afs: AngularFirestore, private httpclient: HttpClient) {

    this.usersCollection = this.afs.collection<users>('users');
    this.Ausers = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCollection(value) {
    return this.afs.collection<users>('users', ref => 
        ref.where(
            'role', '==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }
  
  //this adds a document with a particular user id i want
  addnotice(use: users){
    const profile : users = {
      userid: null,
      Fname: use.Fname,
      Mname: use.Mname,
      Lname: use.Lname,
      Pemail: use.Pemail,
      Eemail: use.Eemail,
      password: use.password,
      phone : use.phone,
      Hphone : use.Hphone,
      DOB : use.DOB,
      addressH: use.addressH,
      department : use.department,
      Rdepartment: use.Rdepartment,
      role : use.role,
      sdate: use.sdate,
      Econtact: use.Econtact,
      Otherinformation: use.Otherinformation,
      picture: use.picture
    };
    this.httpclient.post<{message: string}>('http://localhost:3000/add-person/form', profile).subscribe((responsestatus) => {
      profile.userid = responsestatus.message; 
      let id = this.set('123456$#@$^@1ERF', profile.password);
      console.log(id);
      profile.password = id;
      this.usersCollection.doc(profile.userid).set(profile); 
    });   
}

deletuser(use:users)
{
  const profile : users = {
    userid: use.userid,
    Fname: use.Fname,
    Mname: use.Mname,
    Lname: use.Lname,
    Pemail: use.Pemail,
    Eemail: use.Eemail,
    password: use.password,
    phone : use.phone,
    Hphone : use.Hphone,
    DOB : use.DOB,
    addressH: use.addressH,
    department : use.department,
    Rdepartment: use.Rdepartment,
    role : use.role,
    sdate: use.sdate,
    Econtact: use.Econtact,
    Otherinformation: use.Otherinformation,
    picture: use.picture
  };
  this.httpclient.post<{message: string}>('http://localhost:3000/add-person', profile).subscribe((responsestatus) => {
      console.log(responsestatus);
      console.log(profile.userid);  
    });   
    this.usersCollection.doc(profile.userid).delete();
}

//to get the value with id
getform(id: string): Observable<users> {
  return this.usersCollection.doc<users>(id).valueChanges().pipe(
    take(1),
    map(lform => {
      lform.userid = id;
      return lform;
    })
  );
}

updateuser(value: users)
{
  return this.usersCollection.doc(value.userid).update(value);
}

set(keys, value){
  var key = CryptoJS.enc.Utf8.parse(keys);
  var iv = CryptoJS.enc.Utf8.parse(keys);
  var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
  {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });

  return encrypted.toString();
}

//The get method is use for decrypt the value.
get(keys, value){
  var key = CryptoJS.enc.Utf8.parse(keys);
  var iv = CryptoJS.enc.Utf8.parse(keys);
  var decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
}