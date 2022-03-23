const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const surveyTemplate = require('../services/emails/templates/surveyTemplate');
const { Path } = require('path-parser');
const { createMailer, sendEmails } = require('../services/emails');
const {
  createSurvey,
  updateUniqueEvent,
  getSurveysByUser,
} = require('../services/surveys');

module.exports = (app) => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await getSurveysByUser(req.user.id);
    res.send(surveys);
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const survey = createSurvey(req.user, req.body);
    const mailer = createMailer(survey, surveyTemplate);

    try {
      const user = await sendEmails(req.user, mailer, survey);
      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('<h1>Thanks for voting</h1>');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');
    updateUniqueEvent(req.body, p);
  });
};
