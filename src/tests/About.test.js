import React from 'react';
import { shallow } from 'enzyme';

import About from '../components/About';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<About />);
  })

  it('deve ser visível', () => {
    expect(component).toMatchSnapshot();
  })

  it('tem título', () => {
    expect(component.contains('Aplicação massa')).toEqual(true);
  })

  it('título se altera', () => {
    expect(component.contains(<h1>Aplicação massa</h1>)).toEqual(true);
    expect(component.state('foiClicado')).toEqual(false);

    const botao = component.find('button');
    botao.simulate('click');

    expect(component.contains(<h1>Novo título</h1>)).toEqual(true);
    expect(component.state('foiClicado')).toEqual(true);
  })

  it('título se altera independente do componente', () => {
    expect(component.contains(<h1>Aplicação massa</h1>)).toEqual(true);

    const novotitulo = 'O que eu quiser';
    component.setState({ titulo: novotitulo });

    expect(component.contains(novotitulo)).toEqual(true);
  })
})
