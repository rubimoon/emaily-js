const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const surveyTemplate = require('../services/emails/templates/surveyTemplate');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const { createMailer, sendEmails } = require('../services/emails');
const { createSurvey } = require('../services/surveys');

module.exports = (app) => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('<h1>Thanks for voting</h1>');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const survey = createSurvey(req.user, req.body);
    const mailer = createMailer(survey, surveyTemplate);

    try {
      const user = await sendEmails(mailer, survey, req.user);
      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body);
    res.send({});
  });
};
