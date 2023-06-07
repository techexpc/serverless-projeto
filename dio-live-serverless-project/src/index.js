module.exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Sua função foi executada com sucesso.',
        input: event
      },
      null,
      2
    )
  }
}
