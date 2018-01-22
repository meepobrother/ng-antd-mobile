import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReactComponent } from 'ng-react-component';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ReactComponent<any, any> {

  constructor() {
    super();
  }

}
