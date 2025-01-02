import { Hono } from 'hono'
import { authHandler, initAuthConfig, verifyAuth } from '@hono/auth-js'
import GitHub from '@auth/core/providers/github'


const app = new Hono()

app.use(
    '*',
    initAuthConfig((c) => ({
      secret: c.env.AUTH_SECRET,
      providers: [
        GitHub({
          clientId: c.env.GITHUB_ID,
          clientSecret: c.env.GITHUB_SECRET,
        }),
      ]
    }))
  )


app.use('/api/auth/*', authHandler())

app.use('/api/*', verifyAuth())

app.get('/api', (c) => c.text('Hello Cloudflare Workers!'))

app.get('/api/users', (c) => c.text('Hello Cloudflare Workers! - Users Path'))

app.get('/api/protected', (c) => {
  const auth = c.get('authUser')
  return c.json(auth)
})

app.all('/api/session', (c) => {
  console.log("Notty");
  const auth = c.get('authUser')
  return c.json(auth)
})
export default app