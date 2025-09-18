import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponse } from '@repo/types';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const getMessage = (): string => {
      if (typeof exceptionResponse === 'string') {
        return exceptionResponse;
      }
      if (
        exceptionResponse &&
        typeof exceptionResponse === 'object' &&
        'message' in exceptionResponse
      ) {
        const message = (exceptionResponse as { message: string | string[] })
          .message;
        return Array.isArray(message) ? message.join(', ') : message;
      }
      return 'Internal server error';
    };

    const errorBody: ErrorResponse = {
      success: false,
      error: {
        message: getMessage(),
      },
    };

    response.status(status).json(errorBody);
  }
}
