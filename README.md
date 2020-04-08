<a href="https://copypasta.lmachens.now.sh/" target="_blank"><img src="./.github/logo.jpg" alt="copypasta" align="right" height="212" width="188" /></a>

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

To start the server and client in development mode at the same time:

```
npm run dev
```

If you like to run the production build, you have to build the client first.

```
npm run build
npm start
```
