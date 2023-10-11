import { Injectable, inject } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { Setting } from "../models/setiing.model";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, retry } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService{
    private localStorageService = inject(LocalStorageService);
    private http = inject(HttpClient);

    public settings!: Array<Setting>;

    constructor(){
        const localStorageSettings = this.localStorageService.getItem("settings")
        if(localStorageSettings){
            this.settings = JSON.parse(localStorageSettings);
        }
        else{
            this.getFromSettingsFromFile().subscribe(settings=>{
                this.settings = settings;
                this.localStorageService.setItem("settings", JSON.stringify(this.settings));
            })
        }

    }

    private getFromSettingsFromFile(): Observable<Array<Setting>>{
        return  this.http
        .get<Array<Setting>>("assets/app-settings.json")
        .pipe(retry(3))
    }

    storeSettings(){
        this.localStorageService.setItem("settings", JSON.stringify(this.settings))
    }

    
}