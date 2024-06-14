const express = require('express');
const { getdata, putdata, getchocolate, getsweet, getbak, getfood,signup,login } = require('../control/control');
const  path = require('path')
 const routerr =express.Router();
 const multer = require('multer');
// const multer  = require('../../src/Pages/Upload');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/Images');
    },
    filename: function (req, file, cb) {
   
      // cb(null, file.originalname);
      cb(null, file.fieldname + "-" +Date.now() +path.extname( file.originalname));
    }
  });
  const upload = multer({ storage: storage });


 

// routerr.post('/Signup', signup);
// routerr.get('/Login', login);
 routerr.get('/all',getdata);
 routerr.post('/give',upload.single('img1'), putdata);
 routerr.get('/choco',getchocolate);
 routerr.get('/sweet',getsweet);
 routerr.get('/bak',getbak);
 routerr.get('/food',getfood);


 module.exports =routerr;