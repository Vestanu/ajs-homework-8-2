/* eslint-disable max-classes-per-file */


class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
    this.errorMap.set(404, 'Not Found');
  }

  translate(code) {
    if (this.errorMap.has(code)) {
      return this.errorMap.get(code);
    }
    return 'Unknown Error';
  }
}


export default ErrorRepository;
