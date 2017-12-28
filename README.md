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
      <h2>
        Working: 
      </h2>
      <ul>
        <li> Pass a URL as a parameter and you will receive a shortened URL in the JSON response.</li>
        <li>If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.</li>
        <li>When you visit that shortened URL, it will redirect you to the original link.</li>
      </ul>
      <h2>
        Example Usage:
      </h2>
      <code>https://hissing-olive.glitch.me/new/https://www.google.com</code><br><br>
      This prints the following json <br><br>
      <code>{"oldURL":"https://www.google.com","shortURL":"https://hissing-olive.glitch.me/g/e"}</code>
    </div>
    </body>
</html>
