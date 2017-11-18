import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class BlogService {
    constructor(private httpClient: HttpClient) { }
    getBlogs(): Observable<Blog[]> {
        const temp = [
            {
                title1: 'First featurette heading.',
                title2: "It'll blow your mind.",
                body: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
                imgSrc: '',
                continueReadingLink: 'home'
            },
            {
                title1: 'First featurette heading.',
                title2: "It'll blow your mind.",
                body: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
                imgSrc: '',
                continueReadingLink: 'home'
            },
            {
                title1: 'First featurette heading.',
                title2: "It'll blow your mind.",
                body: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
                imgSrc: '',
                continueReadingLink: 'home'
            }
        ];
        return Observable.of(temp);
    }
}