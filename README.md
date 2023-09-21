# Laundry Operation Viewer

This repository is for web application which shows Laundry operation. It was developed for [Hydrangea Hakone](https://hydrangea-hakone.com).


[Hydrangea Hakone](https://hydrangea-hakone.com) is rental apartment which is located at Miyagino area in Hakone, Japan.

It has a social coin laundry room which all residents can use, and there are 2 washing machines and 2 drying machines.

![laundry room in Hydrangea hakone](https://github.com/shizuka-na-kazushi/laundry-watcher/blob/037744bdbaa6203e2c0d0221a4991aa05b9482ba/src/assets/laundry-header-image.png?raw=true)

# How it works?

Small single board computer that connects to 4 individual vibration sensors. ESP32 based computer is detects vibration of machines. As ESP32 support WiFi connection as well as Firebase client library, the status is transferred to [Firebase realtime database](https://firebase.google.com/docs/database?hl=ja).

This web app is just showing the status in firebase realtime database, which is stored by ESP32 board. 

Thanks to functionality of Firebase, web app can update screen almost ``real time``. 

ESP32 board source code is also published in Github, [vib-sensor-data-sender](https://github.com/shizuka-na-kazushi/vib-sensor-data-sender) repository.

# Where is it hosting?

This web app is hosted at [laundry-watcher.web.app](https://laundry-watcher.web.app/?github).
