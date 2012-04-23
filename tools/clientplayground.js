var IMAPClient = require("../lib/client");

var gmail = {
    secureConnection: true,
    auth: {
        user: "test.nodemailer@gmail.com",
        pass: "Nodemailer123"
    },
    debug: false
};

var imap = new IMAPClient(false, "imap.gmail.com", gmail);

imap.on("error", console.log);

imap.on("mailbox", function(mailbox){
    console.log("INBOX")
    console.log(mailbox)
    imap.close();
});


imap.connect();