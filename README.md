<a href='https://copypasta.lmachens.now.sh/'><img src="./.github/logo.jpg" alt="copypasta" align="right" height="212" width="188" /></a>

# copypasta

Create and share snippets.

## Develop

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

Update SLACK_WEBHOOK_URL and SENDGRID_API_TOKEN in .env

To start the server and client at the same time:

```
npm run dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:8080.

```
NODE_ENV=production npm run dev:server
```
