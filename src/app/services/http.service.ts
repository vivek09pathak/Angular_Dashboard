import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
}) 
export class HttpService {

  constructor(private httpClient: HttpClient) {
    // this.httpClient.get(this.url).subscribe((res: Data[]) => {
    //   this.data = res.filter(r => {
    //     return r.name === 'Python';
    //   });
    //   this.data.forEach(y => {
    //     this.year.push(y.year);
    //     this.count.push(y.count);
    //   });
    // });
  }


}