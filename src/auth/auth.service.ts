import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup(dto: AuthDto) {
    return { message: 'I am signed up!' };
  }

  login() {
    return { message: 'I am signed in!' };
  }
}
