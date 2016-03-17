var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//
  //res.send('respond with a resource');
    
//    var usernames = ['Me', 'You', 'Them'];
//
//    // show the users.ejs view in the browser
//    res.render('users', { title: 'Users',
//                         users: usernames });
//});

    //show users that are in database

//connect to mongoose, models and passport
var mongoose = require('mongoose');
var User = require('../models/user');
var passport = require('passport');

// set up the GET handler for the main users page
router.get('/', function(req, res, next) {
    // use the user model to retrieve all users
    User.find(function (err, users) {
        // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // we got data back
            // show the view and pass the data to it
            res.render('users/index', {

                title: 'Users',
                users: users
            });
        }
    });
});


//auth check
//function isLoggedIn(req, res, next) {
//    //is the user authenticated>
//    if (req.isAuthenticated()) {
//        return next;
//    }
//    else {
//        res.redirect('/auth/login');
//    }
//}



module.exports = router;
