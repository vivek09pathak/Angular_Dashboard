import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';



@Injectable()
export class DashStatusService {

  camerasonline: string = "8951";
  $camerasonline = of(this.camerasonline);
  undersurveillance: string = "33k";
  $undersurveillance = of(this.undersurveillance);
  reportedincidents: string = "74";
  $reportedincidents = of(this.reportedincidents);
  officersactive: string = "1.5k";
  $officersactive = of(this.officersactive);

  constructor() { }

  getFor(subscription: string): Observable<string> {
    switch (subscription.toLowerCase()) {
      case "cameras online": return this.$camerasonline;
      case "under surveillance": return this.$undersurveillance;
      case "reported incidents": return this.$reportedincidents;
      case "officers active": return this.$officersactive;
      default: return null;
    }
  }

}