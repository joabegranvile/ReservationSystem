declare namespace NodeJS {
  interface ProcessEnv {
    PSQL_HOST: string;
    PSQL_USER: string;
    PSQL_DATABASE: string;
    PSQL_PASSWORD: string;
    PORT: number;
  }
}
