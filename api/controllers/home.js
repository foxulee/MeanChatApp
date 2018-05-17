const mongoose = require('mongoose');
const Club = mongoose.model('Club');
const async = require('async');
const _ = require('lodash');

module.exports.getClubs = function (req, res) {
    async.parallel([
        function (callback) {
            // result0: get all clubs
            Club.find({}, (err, result) => {
                if (err) console.log(err);
                callback(err, result);
            })
        },
        function (callback) {
            // result1
            Club.aggregate({
                $group: {
                    _id: '$country'
                }
            }, (err, result) => {
                callback(err, result);
            })
        }
    ], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json();
        }

        const allClubs = results[0];
        const sortedCountriesResult = _.sortBy(results[1], '_id');

        let countries = [];
        sortedCountriesResult.forEach(element => {
            countries.push(element['_id']);
        });

        // console.log(allClubs);
        // console.log(countries);

        res.status(200).json({
            allClubs,
            countries
        });
    })
}


module.exports.addFavoriteClub = function (req, res) {
    // console.log(req.body);
    const clubId = req.body.clubId;
    const clubName = req.body.clubName;
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;

    async.parallel([
        function (callback) {
            Club.update({
                '_id': clubId,
                'fans.email': {
                    $ne: userEmail
                }
            }, {
                $push: {
                    fans: {
                        username: userName,
                        email: userEmail
                    }
                }
            }, (err, count) => {
                console.log('count', count);

                callback(err, count)
            });
        }
    ], (err, results) => {
        res.status(200).json();
    });

}