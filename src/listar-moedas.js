import React from 'react';

function ListarMoedas(){

    const MOEDAS = [
        {"sigla": "AUD", "descricao": "Dolar Australiano"},
        {"sigla": "BGN", "descricao": "Lev Bulgaro"},
        {"sigla": "BRL", "descricao": "Real Brasileiro"},
        {"sigla": "CAD", "descricao": "Dolar Canadense"},
        {"sigla": "CHF", "descricao": "Franco Suiço"},
        {"sigla": "CNY", "descricao": "Yuan Chines"},
        {"sigla": "CZK", "descricao": "Coroa República Tcheca"},
        {"sigla": "DKK", "descricao": "Coroa Dinamarquesa"},
        {"sigla": "EUR", "descricao": "Euro"},
        {"sigla": "GBP", "descricao": "Libra Esterlina"},
        {"sigla": "HKD", "descricao": "Dolar de Hong Kong"},
        {"sigla": "HRK", "descricao": "Coroa Croacia"},
        {"sigla": "HUF", "descricao": "Florim Húngaro"},
        {"sigla": "IDR", "descricao": "Rupia Indonesia"},
        {"sigla": "ILS", "descricao": "Novo Shekel Israelense"},
        {"sigla": "INR", "descricao": "Rupia Indiana"},
        {"sigla": "JPY", "descricao": "Iene Japônes"},
        {"sigla": "KRW", "descricao": "Won Sul-coreano"},
        {"sigla": "MXN", "descricao": "Peso Mexicano"},
        {"sigla": "MYR", "descricao": "Malasia Ringgit"},
        {"sigla": "NOK", "descricao": "Coroa Noruega"},
        {"sigla": "NZD", "descricao": "Dolar da Nova Zelandia"},
        {"sigla": "PHP", "descricao": "Peso Filipino"},
        {"sigla": "PLN", "descricao": "Zyoty Polônia"},
        {"sigla": "RON", "descricao": "Leu Romeno"},
        {"sigla": "RUB", "descricao": "Belarus Ruble"},
        {"sigla": "SEK", "descricao": "Coroa Suécia"},
        {"sigla": "SGD", "descricao": "Dólar de Singapura"},
        {"sigla": "THB", "descricao": "Baht Tailândia"},
        {"sigla": "TRY", "descricao": "Lira Turca"},
        {"sigla": "USD", "descricao": "Dólar dos Estados Unidos"},
        {"sigla": "ZAR", "descricao": "Rand África do Sul"}
    ];

    function compare(moeda1, moeda2){
        if (moeda1.descricao < moeda2.descricao){
            return -1
        } else if (moeda1.descricao > moeda2.descricao){
            return 1;
        }
        return 0;
    }

    return MOEDAS.sort(compare).map(moeda =>
        <option value={moeda.sigla} key={moeda.sigla}>
            {moeda.descricao}
        </option> 
    );

}

export default ListarMoedas;