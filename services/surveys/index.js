const Survey = require('../../models/Survey');
const _ = require('lodash');
const { URL } = require('url');

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

const updateUniqueEvent = (eventArr, path) =>
  _.chain(eventArr)
    .map(({ email, url }) => {
      const match = path.test(new URL(url).pathname);
      if (match) {
        return { email, surveyId: match.surveyId, choice: match.choice };
      }
    })
    .compact()
    .uniqBy('email', 'surveyId')
    .each((event) => updateSurvey(event))
    .value();

const updateSurvey = ({ surveyId, email, choice }) => {
  const query = Survey.updateOne(
    {
      _id: surveyId,
      recipients: {
        $elemMatch: {
          email: email,
          responded: false,
        },
      },
    },
    {
      $inc: { [choice]: 1 },
      $set: { 'recipients.$.responded': true },
    }
  );

  query.exec();
};

module.exports = { createSurvey, updateUniqueEvent };
