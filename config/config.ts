import { Dialect } from 'sequelize';

interface SequelizeConfig {
  USERNAME: string;
  PASSWORD: string;
  DATABASE: string;
}

interface SequelizeOptions {
  host: string;
  dialect: Dialect;
  pool: {
    max: number;
    min: number;
    idle: number;
  };
  define: {
    timestamps: boolean;
  };
  charset: string;
  collate: string;
  logging: boolean;
  log: any;
}

interface Config {
  SEQUELIZE: SequelizeConfig;
  SEQUELIZEOPTIONS: SequelizeOptions;
}

const config: Config = {
  SEQUELIZE: {
    USERNAME: process.env.MYSQL_USER || 'root',
    PASSWORD: process.env.MYSQL_PASSWORD || 'qwert123',
    DATABASE: process.env.MYSQL_DATABASE || 'easy-manager',
  },
  SEQUELIZEOPTIONS: {
    host: process.env.MYSQL_HOST || '0.0.0.0',
    dialect: 'mysql',
    pool: {
      max: 20,
      min: 5,
      idle: 10000,
    },
    define: {
      timestamps: false,
    },
    charset: 'utf8',
    collate: 'utf8mb3_general_ci',
    logging: false,
    log: console.log,
  },
};

export default config;
