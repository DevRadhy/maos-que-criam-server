import express, { type Request, type Response} from 'express'
import 'express-async-errors'

const app = express()

app.use(express.json())

/**
 * Routes
 */

app.use((error: Error, _request: Request, response: Response) => {
  if (error instanceof Error) {
    response.status(400).json({
      error: error.message
    })
  }

  response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

export default app