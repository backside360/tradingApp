import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import {
  fireEvent,
  getByText,
  findByText,
  getRoles
} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Enviorment from '../../../environments/test';
import Test from '../Test';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//** Проверка введения символа */

it('entering the value', async () => {
  // const fakeQuote = {
  //   symbol: 'AAPL'
  // };
  act(() => {
    render(<Enviorment component={Test} />, container);
  });
  const area = container.querySelector('textarea');
  act(() => {
    fireEvent.change(container.querySelector('textarea'), {
      target: { value: 'APPL' }
    });
  });

  act(() => {
    fireEvent.click(
      container.querySelector('textarea'),
      new MouseEvent('click', { bubbles: true })
    );
    // fireEvent.click(container.querySelector('.global-search-item-count'))
  });
  console.log(container.querySelector('ul').textContent);
  expect(area.textContent).toBe('APPL');
});

//** Введенное значение есть в списке  */

it('matches the value', async () => {
  act(() => {
    render(<Enviorment component={Test} />, container);
  });
  act(() => {
    fireEvent.change(container.querySelector('textarea'), {
      target: { value: 'APPL' }
    });
  });

  const title = await findByText(container, 'Apple, Inc.');

  expect(title).toBe('Apple, Inc.');
});

//** Список очищается по нажатию */

it('clears the value', async () => {
  act(() => {
    render(<Enviorment component={Test} />, container);
  });

  const area = container.querySelector('textarea');

  act(() => {
    fireEvent.change(area, {
      target: { value: 'APPL' }
    });
  });

  act(() => {
    fireEvent.click(
      container.querySelector('.anticon-close-circle'),
      new MouseEvent('click', { bubbles: true })
    );
  });

  // console.log(container.querySelector('.anticon-close-circle').classList);

  //@ts-ignore

  expect(area.value).toBe('');
});
