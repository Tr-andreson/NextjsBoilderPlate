import { type Instrumentation } from 'next'

export const onRequestError: Instrumentation.onRequestError = async (
  err: any,
  request: any,
  context
) => {
  console.log("Insturment running")
  await fetch('https://test/report-error', {
    method: 'POST',
    body: JSON.stringify({
      message: err.message,
      stack: err.stack,
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers),
      timestamp: new Date().toISOString(),
      context,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
