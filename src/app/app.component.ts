import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  readonly VAPID_PUBLIC_KEY = "BC_GxyY3TR26mH4WJK95T76sFBmRSx7eorkeFrEVbmIlCDGaRguPZ7quiITs8r1YFTMNBGER9xDTRkb67UQTAi4";

  title = 'projeto-web-pwa';

  constructor(private swPush: SwPush) {
    this.logPushNotification()
    this.subscribeToNotifications()
  }

  logPushNotification(){
    // this.swPush.notificationClicks.subscribe(
    //   ({action, notification}) => {
    //       // TODO: Do something in response to notification click.
    //       console.log("PUSHED")
    //   });
    this.swPush.messages.subscribe(msg =>{
      console.log(msg);
  })
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => console.log(JSON.parse(JSON.stringify(sub))))
      .catch(err => console.error("Could not subscribe to notifications", err));
  }



  // async subscribeToNotifications() {
  //   try {
  //     const sub = await this.swPush.requestSubscription({
  //       serverPublicKey: this.VAPID_PUBLIC_KEY,
  //     });
  //     // TODO: Send to server.
  //   } catch (err) {
  //     console.error('Could not subscribe due to:', err);
  //   }
  // }
}
