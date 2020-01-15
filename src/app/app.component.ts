import { Component } from '@angular/core';
import { ToastService } from './_services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoeShopProject';

  constructor(
    public toastService: ToastService
  ) {}

  editSuccess() {
    this.toastService.show('Edit product successfully!', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true,
    });
  }
  showSuccess() {
    this.toastService.show('Create product successfully!', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true,
    });
  }
  showError() {
    this.toastService.show('Cannot create product!', {
      classname: 'bg-danger text-light',
      delay: 2000 ,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  showCustomToast(customTpl) {
    this.toastService.show(customTpl, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
}
