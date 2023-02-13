# APIs Document:

1. Audio

> GET: GET AUDIO STREAM URL

- Api: http://localhost:8888/audio/stream?mediaId={{mediaId}}

- Query params:

    + `mediaId`: Mã của video trên youtube, ví dụ: youtube.com/watch?v=Llw9Q6akRo4

- Example: `axios.get("http://localhost:8888/audio/stream?mediaId=Llw9Q6akRo4")`

- Response: `https://rr6---sn-42u-i5oey.googlevideo.com/videoplayback?expire=1676124362&ei=akznY-XvN-ScvcAPt-uQ4As&ip=2405%3A4802%3A153%3Abc00%3A34e7%3Ab43f%3A8f2d%3A9329&id=o-ALCtNI-e6xoPXUsW7jhbwE4NYfiTyiCwDuiK1Xm4lr2V&itag=251&source=youtube&requiressl=yes&mh=qr&mm=31%2C26&mn=sn-42u-i5oey%2Csn-un57enel&ms=au%2Conr&mv=m&mvi=6&pl=50&initcwndbps=2322500&vprv=1&mime=audio%2Fwebm&ns=rfvabKvWxb1WdBYP48Imu1kL&gir=yes&clen=4394284&dur=272.221&lmt=1628556513592425&mt=1676102480&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=5511222&n=heqbKRslFXGvIQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgeezsXF7kfJuUKjr8h3ItMYAkEmtm8Pf6j6UQvRb_LvkCIFKhbzKNqFhyrOMcxA_AWSiUk48kvfVpMsp3wvxzDOjN&sig=AOq0QJ8wRgIhAKL0uGacUE5mQCkslDmLt1YFAPgXt1-N7DMgV2DaFzF4AiEA5RwxBhqJyBwnywklkguS4gwM8YIAp-ioxTXMMwpQ3zE%3D`


> GET: AUDIO INFORMATION

- Api: http://localhost:8888/audio/info?mediaId={{mediaId}}

- Query params:

    + `mediaId`: Mã của video trên youtube, ví dụ: youtube.com/watch?v=Llw9Q6akRo4

- Example: `axios.get("http://localhost:8888/audio/info?mediaId=Llw9Q6akRo4")`

- Response: `{ related, details }`

    + `related`: Các nội dung liên quan

    + `details`: Thông tin


> GET: TOPRATE CONTENT

- Api: http://localhost:8888/audio/toprate

- Example: `axios.get("http://localhost:8888/audio/toprate")`

> GET: POPULAR CONTENT

- Api: http://localhost:8888/audio/popular

- Example: `axios.get("http://localhost:8888/audio/popular")`