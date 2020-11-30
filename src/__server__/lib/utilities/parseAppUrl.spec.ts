import parseAppUrl from './parseAppUrl';

describe('/src/__server__/lib/utilities/parseAppUrl', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('should parse APP_URL env variable into an object, in localhost with port', () => {
    process.env.APP_URL = 'http://localhost:4040';
    const parsedAppUrl = parseAppUrl();

    expect(parsedAppUrl.protocol).toBe('http:');
    expect(parsedAppUrl.host).toBe('localhost:4040');
    expect(parsedAppUrl.hostname).toBe('localhost');
    expect(parsedAppUrl.port).toBe('4040');
    expect(parsedAppUrl.portNumber).toEqual(4040);
  });

  it('should parse APP_URL env variable into an object, with FQDN', () => {
    process.env.APP_URL = 'http://example.com';
    const parsedAppUrl = parseAppUrl();

    expect(parsedAppUrl.protocol).toBe('http:');
    expect(parsedAppUrl.host).toBe('example.com');
    expect(parsedAppUrl.hostname).toBe('example.com');
    expect(parsedAppUrl.port).toBeNull();
    expect(parsedAppUrl.portNumber).toEqual(80);
  });

  it('should parse APP_URL env variable into an object, with FQDN with base url', () => {
    process.env.APP_URL = 'https://example.com/base';
    const parsedAppUrl = parseAppUrl();

    expect(parsedAppUrl.protocol).toBe('https:');
    expect(parsedAppUrl.host).toBe('example.com');
    expect(parsedAppUrl.hostname).toBe('example.com');
    expect(parsedAppUrl.path).toBe('/base');
    expect(parsedAppUrl.pathname).toBe('/base');
    expect(parsedAppUrl.port).toBeNull();
    expect(parsedAppUrl.portNumber).toEqual(80);
  });

  it('should parse APP_URL env variable into an object, with FQDN in https', () => {
    process.env.APP_URL = 'https://example.com';
    const parsedAppUrl = parseAppUrl();

    expect(parsedAppUrl.protocol).toBe('https:');
    expect(parsedAppUrl.host).toBe('example.com');
    expect(parsedAppUrl.hostname).toBe('example.com');
    expect(parsedAppUrl.path).toBe('/');
    expect(parsedAppUrl.pathname).toBe('/');
    expect(parsedAppUrl.port).toBeNull();
    expect(parsedAppUrl.portNumber).toEqual(80);
  });
});
