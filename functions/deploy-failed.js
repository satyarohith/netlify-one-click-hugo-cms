exports.handler = function (event, context, callback) {
  console.log('deploy-failed called');
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({event, context})
  });
};
