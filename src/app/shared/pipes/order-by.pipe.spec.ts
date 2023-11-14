import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    //Arrange
    pipe = new OrderByPipe();
  });

  it('should be created', () => {
    //Assert
    expect(pipe).toBeTruthy();
  });

  it('should return the original array if it is not an array or has length <= 1', () => {
    //Arrange
    const array = [1, 2, 3];

    //Act
    expect(pipe.transform(array, 'key')).toEqual(array);
    expect(pipe.transform([], 'key')).toEqual([]);
  });

  it('should sort the array by the specified key in ascending order', () => {
    //Arrange
    const array = [
      { id: 3, name: 'Product C' },
      { id: 1, name: 'Product A' },
      { id: 2, name: 'Product B' }
    ];

    //Act
    const result = pipe.transform(array, 'id', true);

    //Assert
    expect(result).toEqual([
      { id: 1, name: 'Product A' },
      { id: 2, name: 'Product B' },
      { id: 3, name: 'Product C' }
    ]);
  });

  it('should sort the array by the specified key in descending order', () => {
    //Arrange
    const array = [
      { id: 3, name: 'Product C' },
      { id: 1, name: 'Product A' },
      { id: 2, name: 'Product B' }
    ];

    //Act
    const result = pipe.transform(array, 'id', false);

    //Assert
    expect(result).toEqual([
      { id: 3, name: 'Product C' },
      { id: 2, name: 'Product B' },
      { id: 1, name: 'Product A' }
    ]);
  });

  it('should handle nested keys', () => {
    //Arrange
    const array = [
      { product: { id: 3, name: 'Product C' } },
      { product: { id: 1, name: 'Product A' } },
      { product: { id: 2, name: 'Product B' } }
    ];

    //Act
    const result = pipe.transform(array, 'product.id', true);

    //Assert
    expect(result).toEqual([
      { product: { id: 1, name: 'Product A' } },
      { product: { id: 2, name: 'Product B' } },
      { product: { id: 3, name: 'Product C' } }
    ]);
  });
});
