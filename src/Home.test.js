
import { normalizeData } from "../src/helpers";

const input1 = [
  {
    "id": 1,
    "name": "Product 1",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    "price": "100.00",
    "quantity": "10",
    "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
  },
  {
    "id": 2,
    "name": "Product 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    "price": "130.00",
    "quantity": "10",
    "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
  },
];

const output1 = {
  '1': {
    "name": "Product 1",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    "price": "100.00",
    "quantity": "10",
    "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
  },
  '2': {
    "name": "Product 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    "price": "130.00",
    "quantity": "10",
    "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
  },
};

const input2 = [
  {
    "name": "Product 1",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    "price": "100.00",
    "quantity": "10",
    "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
  },
  {
    "id": 2,
    "name": "Product 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    "price": "130.00",
    "quantity": "10",
    "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
  },
];

const output2 = {
  '2': {
    "name": "Product 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    "price": "130.00",
    "quantity": "10",
    "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
  },
};

const input3 = [
  {
    "id": "2"
  }
];

const output3 = {
  '2': {},
};

describe('Testing util functions of home', () => {
  it('Test if normalizeData function returns id to its corresponding content mapped data', () => {
    //general expected case
    expect(normalizeData(input1)).toEqual(output1);
    // id not present case
    expect(normalizeData(input2)).toEqual(output2);
    // no content other than id
    expect(normalizeData(input3)).toEqual(output3);
    // no product as input
    expect(normalizeData([])).toEqual({});
    // data types other than array as input
    expect(normalizeData('')).toEqual({});
    expect(normalizeData(1)).toEqual({});
    expect(normalizeData(Symbol('1'))).toEqual({});
    expect(normalizeData(false)).toEqual({});
    expect(normalizeData(true)).toEqual({});
    // no content as input
    expect(normalizeData(undefined)).toEqual({});
    expect(normalizeData(null)).toEqual({});
    expect(normalizeData(undefined)).not.toEqual(undefined);
    expect(normalizeData(null)).not.toEqual(null);
  });
});
