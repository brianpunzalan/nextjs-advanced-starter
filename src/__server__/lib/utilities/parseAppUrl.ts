import { parse, Url } from 'url';

const defaultAppUrl = 'http://localhost:4040';
const httpPort = '80';

interface ParsedAppUrl extends Url {
  portNumber: number;
}

const parseAppUrl = (): ParsedAppUrl => {
  const appUrl = process.env.APP_URL ?? defaultAppUrl;
  const parsedUrl = parse(appUrl);
  const { port } = parsedUrl;
  const unparsedPort = port ?? httpPort;
  const parsedPort = parseInt(unparsedPort, 10);

  return {
    portNumber: parsedPort,
    ...parsedUrl,
  };
};

export default parseAppUrl;
