import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";


@Injectable()
export class CrudService {
    constructor(private httpClient: HttpClient) { }
    private baseUrl: string = appConstants.crudApi + appConstants.appName + '/';

    public create(collectionName: string, item: any): Observable<any> {
        return this.httpClient.post(this.baseUrl + collectionName, item).map((resp: Response) => {
            return resp;
        }).catch(this.handleError);
    }
    public read(collectionName: string, id: number): Observable<any> {
        return this.httpClient.get(this.baseUrl + collectionName + '/' + id).map((resp: Response) => {
            return resp;
        }).catch(this.handleError);
    }
    public update(collectionName: string, id: number, item: any): Observable<any> {
        return this.httpClient.put(this.baseUrl + collectionName + '/' + id, item).map((resp: Response) => {
            return resp;
        }).catch(this.handleError);
    }
    public delete(collectionName: string, id: number): Observable<any> {
        return this.httpClient.delete(this.baseUrl + collectionName + '/' + id).map((resp: Response) => {
            return resp;
        }).catch(this.handleError);
    }
    public readAll(collectionName: string): Observable<any> {
        return this.httpClient.get(this.baseUrl + collectionName).map((resp: Response) => {
            return resp;
        }).catch(this.handleError);
    }
    private handleError(error: Error) {
        return Observable.throw(error.message || 'Server error: ' + error);
    }
}