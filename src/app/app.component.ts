import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KBDSI-app';
  simpleNotification(){
    Swal.fire('simple Notification');
  }

  succesNotification(){
    Swal.fire('Hi', 'We have been informed!', 'success');
  }

  errorNotification(){
    Swal.fire('Hi', 'We have been informed!', 'error');
  }
}
