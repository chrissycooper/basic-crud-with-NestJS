import { Controller, Get, Redirect, Query } from '@nestjs/common';

interface RedirectResponse {
  url: string;
  statusCode: number;
}

@Controller('nest-docs')
export class NestDocsController {

  @Get()
  @Redirect('https://docs.nestjs.com', 301)
  getDocs(@Query('version') version:string): RedirectResponse {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/', statusCode: 301};
    }
  }
}
