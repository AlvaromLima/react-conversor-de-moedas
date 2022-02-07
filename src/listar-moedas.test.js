import React from 'react';
import reactDom from 'react-dom';
import ListarMoedas from './listar-moedas';

describe('Teste do componente de listagem de moedas', () => {
    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        reactDom.render(<ListarMoedas />, div);
        reactDom.unmountComponentAtNode(div);
    });
});