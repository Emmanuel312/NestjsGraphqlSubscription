import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'graphSub',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
