import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// import { ToastController } from '@ionic/angular';
import { ProviderService } from '../provider.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private router: Router, 
    private  servidor: ProviderService,
    // private toastController: ToastController,
    // private storage: Storage
    ) { }

  ngOnInit() {
  }

  formRegister(){
    this.router.navigate(['/register']);
  }

  // async login() {
    // if(this.username != "" || this.password != "") {
      // let body = {
      //   action: 'login',
      //   username : this.username,
      //   password : this.password
      // };
//       this. servidor.postData(body, 'dados.php').subscribe(async data => {
//         // let alertmsg = data.msg;
//         // if(data.success) {
//         //   this.storage.set('session_storage', data.result); // create storage
//         //   this.router.navigate(['/customers']);
//         // }else {
//         //   const toast = await this.toastController.create({
//         //     message: alertmsg,
//         //     duration: 2000
//           // });
//           // toast.present();
//         }
        
//       });
//     } else {
//     const toast = await this.toastController.create({
//       message: 'Preencha todos os campos correctamente.',
//       duration: 2000
//     });
//     toast.present();

//   } // if everything is correct end here...
// }
    // }
  // }
}
