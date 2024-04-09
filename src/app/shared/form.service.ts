import { HttpClient ,
  HttpHeaders,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  baseURL = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(public fb: FormBuilder,
              private http: HttpClient) { }

  form: FormGroup = this.fb.group({
_id: [''],
name: [''],
title: [''],
content: [''],
date: [''],
image: [null]
  })

//form reset
formReset(){
  this.form.reset();
  this.form =  this.fb.group({
    _id: [''],
    name: [''],
    title: [''],
    content: [''],
    date: [''],

      })
}

  //add user
  addUser(user: any ,profileImage: File):Observable<any>{
    let formData = new FormData();
    formData.append('name' , user.name);
    formData.append('title' , user.title);
    formData.append('content' , user.content);
    formData.append('date' , user.date);
    formData.append('image' , user.image);

    return this.http.post(`${this.baseURL}/user-add` , formData)
  }

  //getUser
  getUser(){
    return this.http.get(this.baseURL);
  }
  //remove User
  deleteUser(id: string){
    return this.http.delete(this.baseURL + `/${id}`)
  }


  //update user Profile
  updateUser(user: any ,profileImage: File):Observable<any>{
    let formData = new FormData();
    formData.append('name' , user.name);
    formData.append('title' , user.title);
    formData.append('content' , user.content);
    formData.append('date' , user.date);
    formData.append('image' , user.image);

    return this.http.put(this.baseURL + `/update/${user._id}` , formData)
  }

}
