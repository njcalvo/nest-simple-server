import { Controller, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  googleLogin(@Req() request) {
    return this.authService.googleLogin(request);
  }
}
