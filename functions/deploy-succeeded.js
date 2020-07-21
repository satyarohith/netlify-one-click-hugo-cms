exports.handler = function (event, context, callback) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_TOKEN);
  const msg = {
    to: 'me@satyarohith.com',
    from: 'test@example.com',
    subject: 'Deploy succeeded triggered',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };
  sgMail.send(msg);
  callback(null, {
    statusCode: 200,
    body: {event, context}
  });
};
