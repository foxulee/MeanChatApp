const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


// SET ENV VIABLE in the command line
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const S3 = new AWS.S3({});
const uploadClubImage = multer({
    storage: multerS3({
        s3: S3,
        bucket: 'fox-club-pictures',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {
                fieldname: file.fieldname
            });
        },
        key: (req, file, cb) => {
            console.log('file uploaded to AWS', file);
            cb(null, file.originalname)
        }
        // rename: (fieldname, filename) => {
        //     console.log('rename ...');

        //     return filename.replace(/\W+/g, '-')
        // }
    })
});

const uploadUserImage = multer({
    storage: multerS3({
        s3: S3,
        bucket: 'fox-user-pictures',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {
                fieldname: file.fieldname
            });
        },
        key: (req, file, cb) => {
            console.log('file uploaded to AWS', file);
            cb(null, file.originalname)
        }
        // rename: (fieldname, filename) => {
        //     console.log('rename ...');

        //     return filename.replace(/\W+/g, '-')
        // }
    })
});

exports.UploadClubImage = uploadClubImage;


exports.UploadUserImage = uploadUserImage;
