import next from 'next';
import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { parse } from 'url';
import parseAppUrl from './__server__/lib/utilities/parseAppUrl';

// initialize environment variables
dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return
const createServer = (): Express => express();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer();
    const { portNumber } = parseAppUrl();

    // Default Page Handler
    server.get('*', async (req: Request, res: Response) => {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    });

    server.listen(portNumber, () => {
      console.log(`Express App listening on port ${portNumber}`);
    });
  })
  .catch((e) => {
    console.error(e);
  });
