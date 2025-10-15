import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { ErrorResponse } from '@repo/types';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name); // <--- Stwórz instancję loggera

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    this.logger.error(
      `HttpException caught: Status ${String(status)}`,
      JSON.stringify(exceptionResponse),
    );
    const getMessage = (): string => {
      if (typeof exceptionResponse === 'string') {
        return exceptionResponse;
      }
      if (
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
