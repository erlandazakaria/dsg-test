import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { PostDto, UpdateDto } from './type/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  async get(@Req() request, @Res() response) {
    const result = await this.appService.get();
    return response.json(result);
  }

  @Get(":id")
  async getId(@Req() request, @Res() response, @Param() param: {id: string},) {
    console.log("ASDASDASDSA")
    console.log(param.id)
    const result = await this.appService.getId(param.id);
    return response.json(result);
  }

  @Post()
  async post(
    @Req() request,
    @Res() response,
    @Body() postDto: PostDto,
  ) {
    const result = await this.appService.post(postDto);
    return response.json(result);
  }

  @Patch(':id')
  async update(
    @Req() request,
    @Res() response,
    @Param() param: {id: string},
    @Body() updateDto: UpdateDto,
  ) {
    const result = await this.appService.update(param.id, updateDto);
    return await response.json(result);
  }

  @Delete(':id')
  async delete(
    @Req() request,
    @Res() response,
    @Param() param: {id: string},
    @Body() updateDto: UpdateDto,
  ) {
    const result = await this.appService.delete(param.id);
    return await response.json(result);
  }
}
