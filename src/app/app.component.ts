import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import Swal from 'sweetalert2';
declare function greet(): void;
// import { Modal } from 'flowbite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KBDSI-app';
  simpleAlert(){
    Swal.fire(
      'simple Notification');
<<<<<<< HEAD
      
  }
   ngOnInit(): void {
    initFlowbite();
  }

}



=======
  }
}


>>>>>>> 6dd32c688efd0693a56f26ebcd1ce895fa14a3d7
