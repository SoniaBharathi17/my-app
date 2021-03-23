import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Register } from "../app/register";  
@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
    
  constructor(private http : HttpClient) {   
  
    
  }  
  
}  