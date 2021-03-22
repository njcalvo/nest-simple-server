import { HttpService, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class CustomStrategy {
  constructor(private readonly httpService: HttpService) {}

  async validate(request: Request) {
    const config = {
      headers: {
        authorization: request.headers['authorization'],
      },
    };
    const url = 'https://www.googleapis.com/oauth2/v2/userinfo';
    const response = await this.httpService
      .get(url, config)
      .toPromise()
      .catch(() => {
        throw new UnauthorizedException();
      });

    return response;
  }
}
