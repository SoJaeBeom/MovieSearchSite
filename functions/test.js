exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Beom',
      age: 30,
      email: 'the@gamil.com'
    })
  }
}