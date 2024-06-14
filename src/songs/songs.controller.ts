import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';
import { Connection } from 'src/common/constant/connection';



@Controller('songs')
export class SongsController {
  constructor(
    private SongsService: SongsService,
  @Inject('CONNECTION')
  private Connection: Connection
  ) {
    console.log("THIS IS THE CONNECTION STRING: ",this.Connection)
  }

  @Post('/create')
  create(@Body() createSongDTO : CreateSongDTO) {
    return this.SongsService.create(createSongDTO)
  }

  @Get('/single/:id')
  findOne(
    //@param ('id', parseIntPipe)
    @Param(
      'id',
      ParseIntPipe
      // new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})
    )
    id: number,
  ) {
    return `find songs based on id ${typeof id}`;
  }

  @Get('/all')
  findAll() {
    try {
      const data = this.SongsService.findAll();
      return {
        que: 'find all songs endpoint',
        result: data,
      };
      
    } catch (error) {
      // throw new Error('Erro while fetching data in DB!')
      // console.log("ERROR==> ", error)
      throw new HttpException(
        'server error happen!',
        HttpStatus.INTERNAL_SERVER_ERROR, {
           cause: error
        }
      )
      
    }
  }

  @Patch('/update/:id')
  update() {
    return 'update songs based on id';
  }

  @Delete('/delete/:id')
  delete() {
    return 'find songs based on id';
  }
}
