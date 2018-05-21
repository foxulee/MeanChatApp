const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
const passport = require('passport');
const aws = require('../helpers/AWSUpload');

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');
const ctrlAdmin = require('../controllers/admin');
const ctrlHome = require('../controllers/home');
const ctrlGroup = require('../controllers/group');
const ctrlPrivateChat = require('../controllers/private-chat');

// profile and member
router.get('/profile', auth, ctrlProfile.profileRead);
router.post('/saveProfile', ctrlProfile.saveProfile);
router.post('/addInterest', ctrlProfile.addInterest);
router.get('/members', ctrlProfile.getAllMembers);
router.get('/member-overview/:id', ctrlProfile.getMemberOverview);
router.post('/uploadUserImage', aws.UploadUserImage.any(), (req, res) => res.status(200).end());

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// facebook authentication
router.get('/facebook', ctrlAuth.facebookLogin);
router.get('/facebook/callback', ctrlAuth.facebookLoginCallback)

// google authentication
router.get('/google', ctrlAuth.googleLogin);
router.get('/google/callback', ctrlAuth.googleLoginCallback)

// admin
router.post('/uploadClubImage', aws.UploadClubImage.any(), (req, res) => res.status(200).end());
// error handling for aws uploading
// router.post('/uploadClubImage', function(req, res){(aws.UploadClubImage.any())(req, res, function (err) {
//   if (err) console.log('aws err', err)
// })}, (req, res) => {
//   res.status(200).end()
// });
router.post('/addClub', ctrlAdmin.addClub);

// home
router.get('/home/getClubs', ctrlHome.getClubs);
router.post('/home/club', ctrlHome.addFavoriteClub);

// group
router.get('/group/getAllGroupMessages/:group', ctrlGroup.getAllGroupMessages);
router.post('/group/saveGroupMessage/', ctrlGroup.saveGroupMessage);
router.post('/group/friendRequest/:name', ctrlGroup.friendRequest);
router.post('/group/request/accept', ctrlGroup.acceptRequest);
router.post('/group/request/cancel', ctrlGroup.cancelRequest);
router.get('/group/getUser/:id', ctrlGroup.getUser);
router.get('/group/getFriendList/:id', ctrlGroup.getFriendList);

// private chat
router.post('/private-chat', ctrlPrivateChat.saveChatMessage);
router.get('/private-chat/getUnreadMessages/:userId', ctrlPrivateChat.getUnreadMessages);
router.get('/private-chat/getAllMessages/', ctrlPrivateChat.getAllMessages);
router.post('/private-chat/readLastMessage/', ctrlPrivateChat.readLastMessage)

// check if email is registered
router.post('/isEmailRegistered', ctrlAuth.isEmailRegistered);





module.exports = router;