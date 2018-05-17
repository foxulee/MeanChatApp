const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
// const secret = require('../../secret/secretFile');

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new GoogleStrategy({
        // clientID: secret.google.clientID,
        // clientSecret: secret.google.clientSecret,
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://localhost:4200/api/google/callback',
        passReqToCallback: true
    },
    function (req, accessToken, refreshToken, profile, done) {
        User.findOne({
            google: profile.id
        }, function (err, user) {
            // console.log('err', err);
            // console.log('user', user);

            if (err) {
                return done(err);
            }

            // Return if user not found in database 
            if (user) {
                return done(null, user);
            } else {
                const newUser = new User();
                newUser.google = profile.id;
                newUser.name = profile.displayName;
                newUser.fullname = profile.displayName;
                newUser.email = profile.emails[0].value;
                newUser.userImage = profile._json.image.url;

                console.log('profile', profile);
                // console.log('newUser', newUser);

                newUser.save(err => {
                    console.log('mongoose err', err);
                    if (err) {
                        return done(err);
                    }
                    return done(null, newUser);
                })
            }
        });
    }
));