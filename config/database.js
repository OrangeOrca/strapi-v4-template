module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi-demo'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'postgres'),
          //ssl: false
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
      },
    }
  }
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi-demo'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'postgres'),
        ssl: false
      },
    },
  }
};
