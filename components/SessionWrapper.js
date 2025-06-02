import { SessionProvider } from "next-auth/react"

export default function SessionWrapper({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}