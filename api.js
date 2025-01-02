import { Hono } from 'hono'
const app = new Hono()

app.get('/api', (c) => c.text('Hello Cloudflare Workers!'))

app.get('/api/users', (c) => c.text('Hello Cloudflare Workers! - Users Path'))

export default app