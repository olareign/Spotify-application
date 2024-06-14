import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(songs) {
    this.songs.push(songs);
    return this.songs;
  }
  findAll() {
    // return this.songs;
    throw new Error('Error in the DB while fetching the data!')
  }
}
