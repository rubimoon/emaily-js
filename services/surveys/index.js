const Survey = require('../../models/Survey');
const _ = require('lodash');
const { URL } = require('url');

const createSurvey = (userId, survey) => {
  const { title, subject, body, recipients } = survey;
  return new Survey({
    title,
    subject,
    body,
    recipients: getRecipients(recipients),
    _user: userId,
  });
};

const getRecipients = (recipients) =>
  recipients.split(',').map((email) => ({ email: email.trim() }));

const updateUniqueEvent = (path, eventArr) =>
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
      lastResponded: new Date(),
    }
  );

  query.exec();
};

const getSurveysByUser = async (userId) => {
  const query = Survey.find({ _user: userId }).select({
    recipients: false,
  });

  const surveys = await query.cache({ key: userId }).exec();
  return surveys;
};

module.exports = { createSurvey, updateUniqueEvent, getSurveysByUser };
