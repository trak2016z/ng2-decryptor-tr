import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router'
const Crypto = require('crypto-js');

@Component({
  selector: 'app-encrypt-page',
  templateUrl: './encrypt-page.component.html',
  styleUrls: ['./encrypt-page.component.sass']
})
export class EncryptPageComponent {
  constructor(private af: AngularFire, private router: Router) {}

  public encryptNewMessage(secret: string, text: string) {
    const message = {
      text: Crypto.AES.encrypt(text, secret).toString(),
      secret,
    };

    this.af.database.list('/messages')
      .push(message)
      .then(response => response.getKey())
      .then(messageId => this.router.navigateByUrl(`/decrypt/${messageId}`))
  }
}
