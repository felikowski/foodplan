import * as config from '../../../config.json';
export const environment = {
  production: false,
  auth: {
    domain: config.auth0.domain,
    clientId: config.auth0.clientId,
    redurectUri: window.location.origin,
    audience: config.auth0.audience,
  },
  api_server: {
    url: config.api_webserver.url,
    port: config.api_webserver.port
  }
};
