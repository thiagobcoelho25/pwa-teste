const webpush = require('web-push');

// VAPID keys should be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();

// private:  XdT-Rnlkg1XEh6wvzEvseK-nMgZw0mK4fHgZVYmyZGk
// public:  BC_GxyY3TR26mH4WJK95T76sFBmRSx7eorkeFrEVbmIlCDGaRguPZ7quiITs8r1YFTMNBGER9xDTRkb67UQTAi4


webpush.setGCMAPIKey('AAAApeRbx2U:APA91bEPtMuuDlB9DrHPrSnD2IDG4qz5_gKnOgChymxTIuRcDNkQo_h256qjaBLzcbyLXwZsSKzh5XSiTj2voSybh7MqPrGj3FaA3ENXsP-9UQFWAYNC0VyODNZxwD7rg25ENP6seT5V');
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  "BC_GxyY3TR26mH4WJK95T76sFBmRSx7eorkeFrEVbmIlCDGaRguPZ7quiITs8r1YFTMNBGER9xDTRkb67UQTAi4",
  "XdT-Rnlkg1XEh6wvzEvseK-nMgZw0mK4fHgZVYmyZGk"
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABldgzTobq-nzCrcS6GJsGdMtXrJtYVkz4QVr2yOU_RxVCbLxEREGtzzrn4KUPDZ3XmYdBb-Vi22MVFUxLHtWzkksFYa8eg5ItIFwn-wdXL2FUg0zKaPd7TLn48IdCta2cy7KWETQ8i7AWNtwxue9PmToKG_4PLD3urKpNKQefKeYQMmkI',
  keys: {
    auth: "vXGbwvvImAP1lLCwHGSGXw",
    p256dh: 'BHVJAp4kfL3KlYT-K6gtscKmoRSRYhzMDGfPqHnfvgO-JeK8Fte5oLpVmOH7ks4owHVLtxHV6sqHlnVA6a3h_YY'
  }
};

// webpush.sendNotification(pushSubscription, '{"NOME": "THIAGO"}');
webpush.sendNotification(pushSubscription, `{"notification":
{ 
 "body":"This is a message.",
 "title":"PUSH MESSAGE",
 "icon":"ICON_URL",
 "tag":"push demo",
 "requireInteraction":true,
 "renotify":true,
 "data":
   { "url":"https://google.com"}
}
}`);
