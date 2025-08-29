'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  // reset,
}: {
  error: Error & { digest?: string }
  // reset: () => void
}) {

  const reportError = () => {

    fetch("https://test/report-error", {
      method: "POST",
      body: JSON.stringify({
        type: "client-react",
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
      }),
      headers: { "Content-Type": "application/json" },
    })

  }

  useEffect(() => {
    reportError()
  }, [])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <Link href="/">Go to Home Page</Link>
      {/* <button */}
      {/*   onClick={ */}
      {/*     () => reset() */}
      {/*   } */}
      {/* > */}
      {/*   Try again */}
      {/* </button> */}
    </div>
  )
}
