import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AngularFire } from 'angularfire2'
import "rxjs/add/operator/take"
import "rxjs/add/operator/switchMap"
const Crypto = require('crypto-js');

interface IDecryptPageRouteParams {
  id: string
}

@Component({
  selector: 'app-decrypt-page',
  templateUrl: './decrypt-page.component.html',
  styleUrls: ['./decrypt-page.component.sass']
})
export class DecryptPageComponent implements OnInit{
  public messageId: string;
  public message: string;
  public encryptedMessage: string;

  constructor(private route: ActivatedRoute, private af: AngularFire) {}

  ngOnInit() {
     this.route.params
       .map((params: IDecryptPageRouteParams) => params.id)
       .switchMap(messageId => this.af.database.object(`/messages/${messageId}/text`)
          .map(snapshot => snapshot.$value)
          .map(encryptedText => [encryptedText, messageId])
       )
       .take(1)
       .subscribe(([encryptedText, messageId]) => {
          this.message = encryptedText;
          this.messageId = messageId;
       })
  }

  public decryptMessage(value: string) {
    const bytes = Crypto.AES.decrypt(this.message, value);
    this.encryptedMessage = bytes.toString(Crypto.enc.Utf8);
  }
}
