import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Router from 'express-promise-router'
import { serializeCache } from 'axios-hooks'

import App from '../client/App'

const router = new Router()

const publicFolder = path.resolve(__dirname, '../../public')

router.use(async (req, res) => {
  const index = fs.readFileSync(`${publicFolder}/index.html`, 'utf8')

  ReactDOM.renderToString(<App />)

  const cache = await serializeCache()

  console.log(cache)

  const html = ReactDOM.renderToString(<App />)

  console.log(html)

  res.send(
    index
      .replace('{{{html}}}', html)
      .replace('{{{cache}}}', JSON.stringify(cache).replace(/</g, '\\u003c'))
  )
})

export default router
