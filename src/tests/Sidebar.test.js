import React from 'react';
import { shallow, render, mount } from 'enzyme';

import Sidebar from '../components/Sidebar';

describe('Sidebar', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Sidebar />);
  })

  it('deve ser visível', () => {
    expect(component).toMatchSnapshot();
  })

  it('tem área de notificação', () => {
    //expect(component.contains('Menu lateral')).toEqual(true);
  })
})

test('Qualquer coisa', () => {
  const valor = 2 + 2;
  expect(2).toEqual(2);
})
