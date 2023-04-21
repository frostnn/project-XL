import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: unknown, done: (error: Error, user: unknown) => void) {
    done(null, user);
  }

  deserializeUser(
    payload: unknown,
    done: (error: Error, user: unknown) => void,
  ) {
    done(null, payload);
  }
}
