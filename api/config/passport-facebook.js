const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
// const secret = require('../../secret/secretFile');

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new FacebookStrategy({
        // clientID: secret.facebook.clientID,
        // clientSecret: secret.facebook.clientSecret,
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        profileFields: ['email', 'displayName', 'photos'],
        // callbackURL: 'https://localhost:4200/api/facebook/callback',
        callbackURL: 'https://mean-stack-chat-app.herokuapp.com/api/facebook/callback',
        passReqToCallback: true
    },
    function (req, token, refreshToken, profile, done) {
        User.findOne({
            facebook: profile.id
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
                newUser.facebook = profile.id;
                newUser.name = profile.displayName;
                newUser.fullname = profile.displayName;
                newUser.email = profile._json.email;
                newUser.userImage = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                newUser.fbTokens.push({
                    token: token
                });
                // console.log('newUser', newUser);

                newUser.save(err => {
                    // console.log('mongoose err', err);
                    return done(null, user);
                })
            }

        });
    }
));