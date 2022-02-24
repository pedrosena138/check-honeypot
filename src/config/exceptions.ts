class BaseException extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class UnauthorizedException extends BaseException {
  constructor(message: string) {
    super(message, 401);
  }
}

export class NotFoundException extends BaseException {
  constructor(message: string) {
    super(message, 404);
  }
}

export class BadRequestException extends BaseException {
  constructor(message: string) {
    super(message, 400);
  }
}

export class UnexpectedException extends BaseException {
  constructor(message: string) {
    super(message, 500);
  }
}
