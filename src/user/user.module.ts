import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class UserModule { }
