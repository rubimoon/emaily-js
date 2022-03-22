const keys = require('../../config/keys');
const sgMail = require('@sendgrid/mail').setApiKey(keys.sendGridKey);

class Mailer {
  constructor({ subject, recipients }, content) {
    this.msg = {
      to: recipients.map(({ email }) => email),
      from: 'dev.rubimoon@gmail.com',
      subject: subject,
      html: content,
      trackingSettings: { enable_text: true, enabled: true },
    };
  }

  async send() {
    const response = await sgMail.send(this.msg);
    return response;
  }
}

module.exports = Mailer;
