# Email4Me

![Email4Me Image](https://johnwkirch.com/img/email4me.png)

This is a project from an older tutorial series that was broken and needed some refactoring and updating. This is part of the [Email4Me App](https://secret-tundra-67506.herokuapp.com/) project for my portfolio.

## Project Features

The project utilizes Google OAuth via passport to create a user which is saved on the back end with MongoDB and using express server for CRUD operations. The ability to purchase survey mail outs can be bought via the stripe api (default card # - 4242 4242 4242 4242). The App then uses SendGrid to send the emails and the responses are captured and stored in the MongoDB database. Sub documents are used to create a relationship between the user and various surveys they might have sent. I updated and refactored the code to clean up some of the CSS with Materialzie CSS, update to React 18+ structure, and refactored all of the old redux syntax to utilize @reduxjs/toolkit and to using the createAsyncThunk instead of the previous middleware.

`Some of the additional features I will be updating will be to create various form options, authenticate with Twitter, and updating the Stripe module from the legacy module that was used.`
