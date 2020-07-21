exports.handler = function (event, context, callback) {
  console.log('deploy-succeeded called');
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({event, context})
  });
};
