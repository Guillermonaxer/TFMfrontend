import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from'rxjs';
import { global } from "./global";


@Injectable()


export class UserService{
url: any;

constructor(

    public _http:HttpClient,
    

){
   this.url = global.url
}
test(){
    return "Hola mundo desde un servicio!!";
}

register(user: any):Observable<any>{
let json= JSON.stringify(user);
let params = 'json='+json;
console.log(params);
let headers = new HttpHeaders() .append('Content-Type', 'application/json')
.append('Access-Control-Allow-Headers', 'Content-Type')
.append('Access-Control-Allow-Methods', 'POST, GET, UPDATE ,PUT')
.append('Access-Control-Allow-Origin', '*');

return this._http.post(this.url, params, {headers:headers})

}


}