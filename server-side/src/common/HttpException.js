export class HttpException extends Error {
    status;

    message;

    description;

    constructor(statusCode, message, description) {
      super(message);

      this.status = statusCode;
      this.message = message;
      this.description = description || null;
    }
}
