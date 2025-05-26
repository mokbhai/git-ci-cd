# Calculator API Demo

A simple Node.js application that provides calculator APIs.

## Available Endpoints

1. Sum API

   - Endpoint: `POST /api/calculator/sum`
   - Body: `{ "num1": number, "num2": number }`
   - Response: `{ "result": number }`

2. Multiply API

   - Endpoint: `POST /api/calculator/multiply`
   - Body: `{ "num1": number, "num2": number }`
   - Response: `{ "result": number }`

3. Health Check
   - Endpoint: `GET /health`
   - Response: `{ "status": "healthy" }`

## Running the Application

### Using Docker

1. Build and run using Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. The application will be available at `http://localhost:3000`

### Without Docker

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the application:
   ```bash
   node src/index.js
   ```

## Example Usage

Using curl:

```bash
# Sum API
curl -X POST http://localhost:3000/api/calculator/sum \
  -H "Content-Type: application/json" \
  -d '{"num1": 5, "num2": 3}'

# Multiply API
curl -X POST http://localhost:3000/api/calculator/multiply \
  -H "Content-Type: application/json" \
  -d '{"num1": 5, "num2": 3}'
```
# git-ci-cd
# git-ci-cd
