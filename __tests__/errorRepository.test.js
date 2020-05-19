import ErrorRepository from '../src/errorRepo';

test('выдает название ошибки, которая есть в мар', () => {
  const errorItem = new ErrorRepository();
  expect(errorItem.translate(404)).toBe('Not Found');
});

test('выдает неизвестную ошибку, если её нет в мар', () => {
  const errorItem = new ErrorRepository();
  expect(errorItem.translate(500)).toBe('Unknown Error');
});
