<!DOCTYPE html>
<html>
  <head>
    <meta name="description" content="A cool thing made with Glitch">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <h1>
      URL Shortener
    </h1>
    <div>
      This is a FreeCodeCamp api project
    </div>
    <div>
      <h2>
        User Stories
      </h2>
      <ul>
        <li>I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.</li>
        <li>If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.</li>
        <li>When I visit that shortened URL, it will redirect me to my original link.</li>
      </ul>
      <h2>
        Example Usage:
      </h2>
      
      <code>https://hissing-olive.glitch.me/new/https://www.google.com</code><br><br>
      This prints the following json <br><br>
      <code>{"oldURL":"https://www.google.com","shortURL":"https://hissing-olive.glitch.me/g/e"}</code>
      
    </div>

    <!-- Your web-app is https, so your scripts need to be too -->
    <script src="https://code.jquery.com/jquery-2.2.1.min.js"
            integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00="
            crossorigin="anonymous"></script>
    <script src="/client.js"></script>

  </body>
</html>
