import { HttpModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { CustomStrategy } from './strategies/custom.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'custom' }), HttpModule],
  providers: [AuthService, CustomStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
