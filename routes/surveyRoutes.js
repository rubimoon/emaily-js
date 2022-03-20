const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const Survey = require('../models/Survey');
const Mailer = require('../services/email/Mailer');
const surveyTemplate = require('../services/email/templates/surveyTemplate');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(',')
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();

    // TODO make sure emails got sent successfully
    // await survey.save();
  });
};
