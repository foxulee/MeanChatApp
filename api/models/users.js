const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  fullName: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  roles: ['user'],
  hash: String,
  salt: String,
  userImage: {
    type: String,
    default: 'default.png'
  },
  facebook: {
    type: String,
    default: ''
  },
  fbTokens: Array,
  google: {
    type: String,
    default: ''
  },
  sentRequest: [{
    name: {
      type: String,
      default: ''
    }
  }],
  // hold the users who sent friend request to this user
  request: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      default: ''
    }
  }],
  friendList: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      default: ''
    }
  }],
  totalRequest: {
    type: Number,
    default: 0
  },
  gender: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  mantra: {
    type: String,
    default: ''
  },
  favNationalTeams: [{
    teamName: {
      type: String,
      default: ''
    },
  }],
  favPlayers: [{
    playerName: {
      type: String,
      default: ''
    }
  }],
  favClubs: [{
    clubName: {
      type: String
    }
  }]

}, {
  timestamps: true
});

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    img: this.userImage,
    mantra: this.mantra,
    roles: this.roles,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('User', userSchema);