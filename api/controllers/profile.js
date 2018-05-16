var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function (req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id, {
        'email': 0,
        'request': 0,
        'hash': 0,
        'salt': 0,
        'sentRequest': 0,
        'totalRequest': 0,
        'sentRequest': 0,
        'friendList': 0
      })
      .exec(function (err, user) {
        res.status(200).json(user);
      });
  }
};

module.exports.getMemberOverview = function (req, res) {
  User
    .findById(req.params.id, {
      'email': 0,
      'request': 0,
      'hash': 0,
      'salt': 0,
      'sentRequest': 0,
      'totalRequest': 0,
      'sentRequest': 0,
      'friendList': 0
    })
    .exec(function (err, user) {
      res.status(200).json(user);
    });
}

module.exports.addInterest = function (req, res) {
  console.log(req.body);

  let interests = req.body.interests;
  let favClub = interests.favClub;
  let favPlayer = interests.favPlayer;
  let favNationalTeam = interests.favNationalTeam;
  let query;
  if (favClub) {
    query = User.update({
      '_id': req.body._id,
      'favClubs.clubName': {
        $ne: favClub
      }
    }, {
      $push: {
        favClubs: {
          clubName: favClub
        }
      }
    })
  } else if (favPlayer) {
    query = User.update({
      '_id': req.body._id,
      'favPlayers.playerName': {
        $ne: favPlayer
      }
    }, {
      $push: {
        favPlayers: {
          playerName: favPlayer
        }
      }
    });
  } else {
    query = User.update({
      '_id': req.body._id,
      'favNationalTeams.teamName': {
        $ne: favNationalTeam
      }
    }, {
      $push: {
        favNationalTeams: {
          teamName: favNationalTeam
        }
      }
    });
  }

  query.exec((err, result) => {
    if (err) res.status(500).json();
    else res.status(200).json();
  })
}


module.exports.saveProfile = function (req, res) {
  let query;
  if (req.body.imageName)
    query = User.update({
      '_id': req.body._id
    }, {
      name: req.body.name,
      fullName: req.body.fullName,
      country: req.body.country,
      mantra: req.body.mantra,
      gender: req.body.gender,
      userImage: req.body.imageName
    }, {
      upsert: true
    });
  else {
    query = User.update({
      '_id': req.body._id
    }, {
      name: req.body.name,
      fullName: req.body.fullName,
      country: req.body.country,
      mantra: req.body.mantra,
      gender: req.body.gender
    }, {
      upsert: true
    });
  }

  query.exec((err, result) => {
    if (err) res.status(500).json();
    else res.status(200).json();
  })
}


module.exports.getAllMembers = function (req, res) {
  User.find({}, {
    '_id': 1,
    'name': 1,
    'email': 1,
    'userImage': 1
  }, (err, result) => {
    console.log('err', err);

    if (err) res.status(500).json();
    else res.status(200).json(result);
  });
}