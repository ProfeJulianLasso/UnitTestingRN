import {fireEvent, render, screen} from '@testing-library/react-native';
import axios from 'axios';
import React from 'react';
import MyButton from '../../../src/components/button/Button';
import * as handle from '../../../src/components/button/HandlePress';
import {mockDataFetch} from '../../__mock__/data.mock';

describe('MyButton', () => {
  beforeAll(() => {
    // global.fetch = jest.fn(() => Promise.resolve({json: () => mockDataFetch}));
    jest.mock('axios');
  });

  beforeEach(() => {
    // (fetch as any).mockClear();
    // Runs before each test in this file
  });

  it('should be true', () => {
    // Arrange
    const expectedText = 'Click me';
    const text = 'Click me';

    // Act
    render(<MyButton />);
    const button = screen.queryByText(text);

    // Assert
    expect(button).toHaveTextContent(expectedText);
  });

  it('should be true', async () => {
    // Arrange
    // const mockFetch = jest.spyOn(global, 'fetch');
    // const mockJsonPromise = () => Promise.resolve(mockDataFetch);
    // mockFetch.mockImplementation(mockJsonPromise as any);

    jest.spyOn(axios, 'get').mockReturnValue(
      Promise.resolve({
        data: {
          title: 'hello world',
        },
      }),
    );

    jest
      .spyOn(handle, 'handlePress')
      .mockImplementation((setData: React.Dispatch<any>) => {
        setData(mockDataFetch);
      });

    const expectedText = 'Click me';
    const text = 'Click me';
    // const expectedText2 = /hello world/i;

    // Act
    render(<MyButton />);
    const button = screen.queryByText(text);
    if (button) fireEvent.press(button);
    // const text2 = await screen.findByTestId('message');
    screen.debug();

    // Assert
    expect(button).toHaveTextContent(expectedText);
    // expect(text2).toHaveTextContent(expectedText2);
  });

  afterEach(() => {
    // Runs after each test in this file
  });

  afterAll(() => {
    // Runs after all tests in this file
  });
});
