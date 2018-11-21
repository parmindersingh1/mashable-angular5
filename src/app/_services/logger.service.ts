import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private toastr: ToastrService) { }

  error(message, title?) {
    this.toastr.error(message, title);
    console.error('Error: ' + message, title);
  }

  info(message, title?) {
    this.toastr.info(message, title);
    console.info('Info: ' + message, title);
  }

  success(message, title?) {
    this.toastr.success(message, title);
    console.info('Success: ' + message, title);
  }

  warning(message, title?) {
    this.toastr.warning(message, title);
    console.warn('Warning: ' + message, title);
  }
}
