import React, { useEffect, useState } from 'react';
import { getImoveis } from '../../services/imovelApiService';
import ImovelCard from './../../components/ImovelCard';
import './ImoveisPage.css';

function ImoveisPage() {
  const [listaImoveis, setListaImoveis] = useState([]);

  useEffect(() => {
    getImoveis().then((data) => {
      setListaImoveis(data);
    });
  }, []);

  return (
    <div className='listaImoveis'>
      <h1> Página de Imóveis </h1>
      <div>
        {listaImoveis.map((item, i) =>
          <div key={i} className='listaImoveis__imovelCard'>
            <ImovelCard imovel={item} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImoveisPage;