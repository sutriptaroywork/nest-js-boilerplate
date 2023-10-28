import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Req,
  Res,
  HttpCode,
  Header,
  // Redirect,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { AdminService } from '../../services';
import { CreateAdminResponse } from '../../interfaces';
import { CreateAdminBody } from '../../dtos';

@Controller('app/user')
// @Controller({ path: 'app/user' })
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('health-check')
  getHello(): string {
    return this.adminService.getHello();
  }

  @Post('create-with-req-res/:id')
  // async createWithReq(
  //   @Req() request: Request,
  //   @Res() response: Response,
  // ): Promise<any> {
  async createWithReq(@Req() request: Request, @Res() response: Response) {
    console.log('request params > ', request.params);
    console.log('request body > ', request.body);
    console.log('request headers > ', request.headers);
    try {
      const res = await this.adminService.getResult(request.params.id);
      console.log('res > ', res);
      response.status(200).send({
        success: true,
        data: [
          {
            item_id: 1,
          },
        ],
      });
    } catch (e) {
      console.log('e > ', e);
      response.status(500).send({
        success: false,
        error: e,
      });
    }
  }

  @Post('create/:id/:sub_id')
  @HttpCode(200) // default status returning 201 for POST call. substitute for res.status()
  @Header('Owner', 'Sutripta Roy') // substitute for res.header()
  // @Redirect('https://docs.nestjs.com', 302)
  // async createUser(
  //   @Query('version') version,
  //   @Query('page') page: string,
  //   @Param('sub_id') sub_id,
  //   @Param('id') id: string,
  // ): Promise<Create> {
  // async createUser(@Query() query: any, @Param() params: any): Promise<Create> {
  async createUser(
    // @Query() query,
    @Query() query: any,
    // @Param() params,
    @Param() params: any,
    // @Body() body,
    @Body() body: CreateAdminBody,
  ): Promise<CreateAdminResponse> {
    try {
      // console.log('version > ', version);
      // console.log('page > ', page);
      // console.log('id > ', id);
      // console.log('sub_id > ', sub_id);
      console.log('query > ', query);
      console.log('params > ', params);
      console.log('body > ', body);
      const res = await this.adminService.getResult('112');
      console.log('res > ', res);
      return {
        success: true,
        data: [
          {
            item_id: 1,
          },
        ],
      };
    } catch (e) {
      console.log('e > ', e);
      return {
        success: false,
        error: e,
      };
    }
  }

  @Patch('update/:id')
  // @HttpCode(200)
  updateUser(@Req() request: Request): string {
    console.log('request > ', request.params.id);
    console.log('request body > ', request.body);
    console.log('request headers > ', request.headers);
    return 'Update Patch Call';
  }

  @Put('update/:id')
  // @HttpCode(200)
  upsertUser(@Req() request: Request): string {
    console.log('request > ', request.params.id);
    console.log('request body > ', request.body);
    console.log('request headers > ', request.headers);
    return 'Upsert Put Call';
  }
}
