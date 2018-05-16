const path = require('path');
const fs = require('fs');
const formidable = require('formidable');
const mongoose = require('mongoose');
const Club = mongoose.model('Club');
const aws = require('../helpers/AWSUpload');


// save uploaded file as static file s in public/uploads folder, but here we upload file to the AWS S3
module.exports.uploadFile = function (req, res) {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../../public/uploads');

    form.on('file', (field, file) => {
        fs.rename(file.path, path.join(form.uploadDir, file.name), (err) => {
            if (err) throw err;
            console.log('File renamed successfully');
        })
    });

    form.on('error', (err) => {
        console.log(err);
    });

    form.on('end', () => {
        console.log('File upload is successful');
    });

    form.parse(req);
    res.status(200).end();
}

module.exports.addClub = function (req, res) {
    const newClub = new Club();
    newClub.name = req.body.name;
    newClub.country = req.body.country;
    newClub.image = req.body.imageName;
    console.log('newClub',newClub);
    
    newClub.save((err) => {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        };
        res.status(200).end();
    })
}