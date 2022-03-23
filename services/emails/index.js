const Mailer = require('./Mailer');

const createMailer = (email, template) => new Mailer(email, template(email));

const sendEmails = async (user, mailer, email) => {
  await mailer.send();
  await email.save();
  user.credits -= 1;
  return await user.save();
};

module.exports = { createMailer, sendEmails };
