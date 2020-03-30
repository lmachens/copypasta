# copypasta

Create and share snippets.

## Usage

Install client and server dependencies:

```
npm install
cd client
npm install
```

Add environment variables in .env file. You can copy the .env.example and update the variables.

```
cp .env.example .env
```

Update SLACK_WEBHOOK_URL in .env

To start the server and client at the same time:

```
npm run dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:8080

```
NODE_ENV=production npm run dev:server
```
