const sgMail = require("@sendgrid/mail");
const path = require('path');
// get the Console class
const { Console } = require("console");
// get fs module for creating write streams
const fs = require("fs");
// make a new logger
const myLogger = new Console({
    stdout: fs.createWriteStream("logger.txt"),
    stderr: fs.createWriteStream("error-log.txt"),
});

require('dotenv').config({ path: path.join('.env') });
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

templates = {
    register : "d-728f4e0c953747bdb1e62bfbcc0a8514"
}

const sgMailer = (data) => {
    const msg = {
        to: data.receiver,
        from: data.sender,
        templateId: templates[data.templateName],
        dynamic_template_data: {
           name: data.name,
           event_name: data.event_names
        }
     };
     sgMail.send(msg, (error, result) => {
        if (error) {
            console.log(error.response.body);
            myLogger.error(error.response.body)
        } else {
            console.log("Mail to " + data.receiver + " sent");
            myLogger.log("Mail to " + data.receiver + " sent");
        }
     });
}

module.exports = { sgMailer }