# APIs Document:


1. `GET` Top rate

    - Url: `/audio/toprate`

    - Example: `axios.get(".../audio/toprate").then(res => console.log(res))`


2. `GET` Popular

    - Url: `/audio/popular`

    - Example: `axios.get(".../audio/popular").then(res => console.log(res))`


3. `GET` Search

    - Url: `/audio/search?keyword={{...}}`

    - Example: `axios.get(".../audio/search?keyword=Lac%troi").then(res => console.log(res))`


4. `GET` Stream

    - Url: `/audio/stream?media={{...}}`

    - Example: `axios.get(".../audio/stream?mediaId=Llw9Q6akRo4").then(res => console.log(res))`


5. `POST` Signin / Signup

    - Url: `/user/signin` Or `/user/signup`

    - Body (Signin): {
        email: required,
        password: required    
    }

    - Body (Signup): {
        name: required
        email: required,
        password: required    
    }

    - Example: 
    ```js
    axios.post(".../user/signup", {
        name: "Tung",
        email: "eee@gmail.com",
        password: "123123"   
    }).then(res => console.log(res))
    ```

6. `POST` Upload media:

    - Url: `/upload/media`

    - Headers: {
        access_token: required
    }

    - Body: {
        media_description, 
        media_cover: required, 
        media_author: required, 
        media_src: required
    }

    - Example: 
    ```js
    axios.post(".../upload/media", {
        media_description: "hello world", 
        media_cover: "http://localhost:4444/files/test.jpg", 
        media_author: "Tung dz", 
        media_src: "http://localhost:4444/files/testaudio.mpeg"
    }).then(res => console.log(res))
    ```