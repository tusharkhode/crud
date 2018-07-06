import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

}