import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public get<T>(key:string):any{
    return JSON.parse(localStorage.getItem(key))as T;
  }
  public set(key:string,value:any):void{
    if(!value && value === undefined ){ return ;}
    const arr = JSON.stringify(value);
    localStorage.setItem(key,arr);
  }
}
