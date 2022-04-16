const express = require("express");
const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env[keys.GOOGLE_CLIENT_ID],
      clientSecret: process.env[keys.GOOGLE_CLIENT_SECRET],
      callbackURL: "/google/auth/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(`accessToken ${accessToken}`);
      console.log(`refreshToken ${refreshToken}`);
      console.log(`profile ${profile}`);
    }
  )
);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
