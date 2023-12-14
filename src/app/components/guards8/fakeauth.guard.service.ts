import { Injectable } from "@angular/core";

@Injectable({
    providedIn : "root"
})
export class FakeAuthGuardService{

    statusAuth : boolean = false

    constructor(){

    }

    login(){
        this.statusAuth = true
    }

    logout(){
        this.statusAuth = false
    }
}