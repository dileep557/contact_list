const express= require('express');
const bodyperser=require('body-parser');

const path=require('path');// Provides utilities for working with file and directory paths.
const port=4000;  // The port number (4000) on which the server will listen.

const db= require('./config/mongoose');
const Contact= require('./models/contact');

const app=express();//function is called, which is a top-level function exported by the Express module.


app.set('view engine','ejs');// Sets EJS as the view engine.
app.set('views','./view');//Specifies the directory where the views/templates are located.
app.use(express.urlencoded({extended:true}));//The code is middleware that is used to parse incoming requests with URL-encoded payloads.
app.use(express.static('./assets'));
//Middlewhere1
/*app.use(function(req,res,next) {// middle where is used to change the req and response data;
    req.my_name="dileep";
    next();
    
});
//middlewhere
app.use(function(req,res,next) {
    console.log("from middlewhre 1",req.my_name);
    next();
    
});
*/


var contactList= [
    {
        name: "dileepy yadav",
        mobile:"9198473884"
    },
    {
        name: "pradeep yadav",
        mobile:"9198473884"

    },
    {
        name: "dipu yadav",
        mobile:"9198473884"
    },
    {
        name: "aman yadav",
        mobile:"9198473884"

    }

]

// to delete contact in contact list
app.get('/delete-contact', function(req, res) {
    console.log(req.query);
    let mobile = req.query.mobile; // Add your code to delete the contact with the specified mobile number
    const contactIndex= contactList.findIndex(contact =>contact.mobile==mobile);
    if(contactIndex!=-1)
    {
        contactList.splice(contactIndex,1);
    }

    return res.redirect('back');
});
   

app.get('/',function(req, res){// Handles the root route and renders the 'home' view with the provided data (title and contact list).
    return res.render('home' ,{

       title:"my home page ",

        contact_list: contactList
    });//to render the dynamic content write it as object in curly braces and  // within a curly braces all statement called Context;
    

});
app.get('/practice',function(req, res){ //Handles the '/practice' route and renders the 'practice' view with the provided title.
    return res.render('practice' ,{title:"practice page"});
    

});

app.post('/create-contact', function(req,res){//Handles the '/create-contact' route, but only redirects to the '/practice' route without any additional functionality.

    //
   // console.log(req;
   /* contactList.push({
        name: req.body.name,
        mobile: req.body.mobile

    });*/

    Contact.create({
        name: req.body.name,
        mobile: req.body.mobile

    }, function(error, newContact){
        if(error){
            console.log("error to creating contact", error);
            return;
        }

        console.log('************', newContact)
        return res.redirect('back');
    });
   // return res.redirect('/');

});







app.listen(port, function(error){ //Starts the server and listens on the specified port.
   // If there is an error, it will be logged to the console.
    if(error)
    {
        console.log("error occurs !",error);

    }
    console.log("my code running on port seccesfully  ",port);
})