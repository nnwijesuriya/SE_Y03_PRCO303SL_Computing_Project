import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { SalariesService, user } from '../salaries/salaries.service';
import { Subject } from 'rxjs';
 
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
  picture: any,
  review: any,
  rCounter: any,
  holidaysPerYear: any
  employeeReview: any,
  employeeReviewCounter: any
}
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Ausers: Observable<users[]>;
  private usersCollection: AngularFirestoreCollection<users>;

  private Dusers: Observable<users[]>;
  private DusersCollection: AngularFirestoreCollection<users>;

  constructor(private afs: AngularFirestore, private httpclient: HttpClient, private salaryservice: SalariesService) {

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

    this.DusersCollection = this.afs.collection<users>('employees/removed employees/details');
    this.Dusers = this.DusersCollection.snapshotChanges().pipe(
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
      picture: use.picture,
      review: use.review,
      rCounter: use.rCounter,
      holidaysPerYear: use.holidaysPerYear,
      employeeReview: use.employeeReview,
      employeeReviewCounter: use.employeeReviewCounter
    };
      this.httpclient.post<{message: string}>('http://localhost:3000/add-person/form', profile).subscribe((responsestatus) => {
      profile.userid = responsestatus.message; 
      let id = this.set('123456$#@$^@1ERF', profile.password);
      console.log(id);
      profile.password = id;
      this.usersCollection.doc(profile.userid).set(profile); 

      // to add salary for employee
      const salary : user ={
         userId: profile.userid,
         Fname: profile.Fname,
         Mname: profile.Mname,
         Lname: profile.Lname,
         Eemail: profile.Eemail,
         rating: profile.review,
         employeeRating: profile.employeeReview,
         sdate: profile.sdate, 
         department: profile.department,
         role: profile.Rdepartment,
         bank: '',
         accountNo : '',
         hoursw: '',
         salary: '',
         bonus: '',
         paymentDate: profile.sdate,
         status: "Not Approved",
         approvedDate: '',
         picture: profile.picture
      }
      this.salaryservice.addNotApprovedUser(salary);
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
    picture: use.picture,
    review: use.review,
    rCounter: use.rCounter,
    holidaysPerYear: use.holidaysPerYear,
    employeeReview: use.employeeReview,
    employeeReviewCounter: use.employeeReviewCounter
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

addDeletedUser(user:users)
{
  console.log(user.userid);
  let value: string = user.userid;
  return this.DusersCollection.doc(value).set(user); 
}

removeDeleteduser(id: string)
{
  return this.DusersCollection.doc(id).delete();
}

updateuser(value: users)
{
  return this.usersCollection.doc(value.userid).update(value);
}

private listeners = new Subject<any>();
listen():Observable<any>{
  return this.listeners.asObservable();
}

filter(filterBy)
{
 this.listeners.next(filterBy);
}

updatereview(value: users)
{
  return this.usersCollection.doc(value.userid).update({
    "review" : value.review,
    "rCounter" : value.rCounter
  });
}

updateEmployeeReview(value: users)
{
  return this.usersCollection.doc(value.userid).update({
    "employeeReview" : value.employeeReview,
    "employeeReviewCounter" : value.employeeReviewCounter
  });
}

updateEmployeeHoliday(value: users)
{
  return this.usersCollection.doc(value.userid).update({
    "holidaysPerYear" : value.holidaysPerYear
  });
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

getusers()
  {
      return this.Ausers;
  }

getDeletedUsers()
{
  return this.Dusers;
}

  getDepartmentCollection(value) {
    return this.afs.collection<users>('users', ref => 
        ref.where(
            'department', '==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }

  //doesnt work have to figure out
  getDateCollection(value) {
    return this.afs.collection<users>('users', ref => 
        ref.where(
            'sdate','==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }
}