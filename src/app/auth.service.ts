import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  // mocked server functionality here
  login( form ){
  	if( form.email === "rachitaggarwal112@gmail.com" &&  form.password ==="123456" ){
  		return true;
  	}
  	else
  		return false;
  }

}
