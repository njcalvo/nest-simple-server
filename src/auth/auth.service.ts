import { Injectable } from '@nestjs/common';
import { CustomStrategy } from './strategies/custom.strategy';

@Injectable()
export class AuthService {
  constructor(private readonly customStrategy: CustomStrategy) {}
  async googleLogin(request: Request) {
    const googleResponse = await this.customStrategy.validate(request);

    const response = {
      email: googleResponse.data['email'],
      name: googleResponse.data['name'],
    };

    return response;
  }
}
