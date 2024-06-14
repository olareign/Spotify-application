import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constant/connection';

const mockService = {
  findAll(){
    return [{
      id: 1,
      title: 'Lasting Love'
    }]
  }
}
@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   //standard provider sample
    //   provide: SongsService,
    //   useClass: SongsService
    // }

    // {//value provider
    //   provide: SongsService,
    //   useValue: mockService
    // }
    {//non class based provider
      provide: 'CONNECTION',
      useValue: connection
    }
  ],
})
export class SongsModule {}
