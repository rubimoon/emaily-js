const Survey = require('../../models/Survey');

const createSurvey = (user, survey) => {
  const { title, subject, body, recipients } = survey;
  return new Survey({
    title,
    subject,
    body,
    recipients: getRecipients(recipients),
    _user: user.id,
  });
};

const getRecipients = (recipients) =>
  recipients.split(',').map((email) => ({ email: email.trim() }));

module.exports = { createSurvey };
