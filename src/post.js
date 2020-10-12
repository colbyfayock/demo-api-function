function handler(event = {}, context, callback) {
  const { headers, body} = event;

  console.log(`Event Path: ${event.path}`);
  console.log(`Event HTTP Method: ${event.httpMethod}`);

  try {
    const data = JSON.parse(body);
    console.log('Event Body:')
    console.log(data);
  } catch(e) {
    console.log(`Failed to parse body: ${e}`)
  }

  callback(null, {
    statusCode: 200,
    body: 'Ok'
  });
}

exports.handler = handler;