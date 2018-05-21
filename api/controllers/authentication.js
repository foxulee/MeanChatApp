const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

let sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function (req, res) {

  if (!req.body.name || !req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  let user = new User();

  user.name = req.body.name;
  user.fullName = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function (err) {
    let token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  });

};


module.exports.isEmailRegistered = function (req, res) {
  console.log(req.body);
  // User.findOne()
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (user) sendJSONresponse(res, 200, {
      "message": "User with email exists!"
    })
  })
}

module.exports.login = function (req, res) {

  if (!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('local', function (err, user, info) {
    let token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if (user) {
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token": token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};

module.exports.facebookLogin = function (req, res) {
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile']
  })(req, res);
};

module.exports.facebookLoginCallback = function (req, res, next) {
  passport.authenticate('facebook', {
      // successRedirect: '/',
      // failureRedirect: '/register',
      failureRedirect: '/#/register',
      failureFlash: true
    },

    function (err, user, info) {
      let token;

      // If a user is found
      if (user) {
        token = user.generateJwt();
        // res.redirect('/' + '?token=' + token);
        res.redirect('/#/' + '?token=' + token);
      } else {
        // If user is not found
        console.log('user not found');
        
        // res.redirect('/login');
        res.redirect('/#/login');
      }
    }

  )(req, res, next);
}

module.exports.googleLogin = function (req, res, next) {
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read']
  })(req, res, next);
};

module.exports.googleLoginCallback = function (req, res, next) {
  passport.authenticate('google', {
    // successRedirect: '/',
    // failureRedirect: '/register',
    failureRedirect: '/#/register',
    failureFlash: true
  }, function (err, user, info) {
    let token;

    // If a user is found
    if (user) {
      token = user.generateJwt();
      // res.redirect('/' + '?token=' + token);
      res.redirect('/#/' + '?token=' + token);
    } else {
      // If user is not found
      console.log('user not found');
      // res.redirect('/login');
      res.redirect('/#/login');
    }
  })(req, res, next);
}