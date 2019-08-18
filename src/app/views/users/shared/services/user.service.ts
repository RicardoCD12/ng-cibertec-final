import { Injectable } from "@angular/core";
import User from "../../user.model";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class UserService {

    private api: string = environment.api;
    private endpont: string = 'users';
    
    constructor(
        private http: HttpClient
    ){ }

    getUsers(){
        const URL:string = `${this.api}/${this.endpont}/`;
        return this.http.get(URL);
    }

    getUser(id: number){
        const URL:string = `${this.api}/${this.endpont}/${id}/`;
        return this.http.get(URL);
    }

    deleteUser(id: number){
        const URL:string = `${this.api}/${this.endpont}/${id}/`;
        return this.http.delete(URL)
    }

    createUser(user: User){
        const URL:string = `${this.api}/${this.endpont}/`;
        return this.http.post(URL, user,{
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    updateUser(user: User){
        const URL:string = `${this.api}/${this.endpont}/${user.id}/`;
        return this.http.put(URL, user,{
            headers: {
                'Content-type': 'application/json'
            }
        })
    }
    
    cancelUser(){
        const URL:string = `${this.api}/${this.endpont}`;
        return this.http.put(URL, {
            headers: {
                'Content-type': 'application/json'
            }
        })
    }
}