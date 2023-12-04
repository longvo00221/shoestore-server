const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    mysql: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    mysql2: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', `-----BEGIN CERTIFICATE-----
          MIIEQTCCAqmgAwIBAgIUeK6psOamXdQkY/nw5VvcXpyJpIswDQYJKoZIhvcNAQEM
          BQAwOjE4MDYGA1UEAwwvYmVlZDljZTItNDk5OS00ZGQ4LWI0OTgtNGZiZDY1OWU1
          OGE5IFByb2plY3QgQ0EwHhcNMjMxMjA0MDYzODM0WhcNMzMxMjAxMDYzODM0WjA6
          MTgwNgYDVQQDDC9iZWVkOWNlMi00OTk5LTRkZDgtYjQ5OC00ZmJkNjU5ZTU4YTkg
          UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAMyLmLfW
          LNSUfDZo3UzDXkFkh7bhrt+rEw5ulf53IoglUsTIJXwLNZtbKD2x2+1m1/GlNA1U
          tLqIncmBsY38FHDSa4scG0J4X3r9+yyJ945njkRSysHv/8dOXu0vbAasAqoVT7gw
          aPbYXHSny8uNcaUEURxLgzY6tqnF88cm4ve5vffk+RXXxla9doIA8yKxxNhNZ7GH
          DUa/liuVemRHVB7naEkcSZEW1wjWJByeZ/Q6DNoAcO+XNfpSmcVPI75/JcxWno3D
          2Xqlo1QG9f7dqlNZf6yyiYoyWxyAZzsmwOjIwmmdQErP/v8fW5WqoI4kXm1TDGhZ
          GfMbBltj0rSkS6cN0DRt3lS7cecpECNQT1vpqLDIRUelToZ6FE2PTM2RlP4XeI19
          iSccJdt7oIkxqgEHyqz2ylYz22RSWLb5wgUJm/QuUlLPb1lx+s+Qn0McbY8BMl74
          aP2eQoQ3NMCVI+5c3BxNnJkrh4xX3Cx6Bu5VGbSIpyGchFHiY5HmnObYHwIDAQAB
          oz8wPTAdBgNVHQ4EFgQUfWlFpmUf0wLaSDcDcT9YwqPa3cAwDwYDVR0TBAgwBgEB
          /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAGkYoZX2PRsmX6gH
          dshtUnnVILLXYqvVvmTorwyRB3vcai97nnEgsophg4AaFnOd0fM1bAjK1MWsv7DU
          pelE72lRXfaluZc6tBiexkbPNEo46pEEr3DkKPMqsa0EFm57MVoc137Vfs31Fplp
          To2uXMwGdwD7HV4MDexy2gC2uGdwRXtsoLHj7KQyadhUEiOaw1Jhspg2Q6X8XZUO
          0iBS++lv/Ihk5SgL3m/RmvZB2mlYm+D0SScnvKMYDu0wZM5cBgMsXjYNQS6R8oV5
          HjgTaXw9jfq5vPBB2tRxI8aTdfLNR3gSRyuqDhmyYAWAISi27U1ASiVjnpzU7GsE
          ftEHbrOWwHS05oKYDy74Oqo4NIY09CESALl6zDIRqbJhmbqROoZlOk19rJmNc/1b
          ETzGGifankMFJDnY/rItMeAmc4oK4M3z1B++6X3PsYOEaqEDC3ZmHwte1eschxyt
          4IOi5Qpya4qGDkazu8eDoCYDTV7eO3Va37RjlNXgyoHetYLnRg==
          -----END CERTIFICATE-----`),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            false
          ),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          env('DATABASE_FILENAME', 'data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
