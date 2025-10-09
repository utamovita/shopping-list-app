import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //Force redeploy
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-i18n')
  getTestTranslation() {
    return this.appService.getHelloTranslated();
  }
}
