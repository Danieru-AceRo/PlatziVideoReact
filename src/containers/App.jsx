import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const InitialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {InitialState.mylist.length > 0 && 
        <Categories title="Mi lista">
          <Carrousel>
          {InitialState.mylist.map(item =>
            <CarrouselItem key={item.id} {...item}/>
          )}
          </Carrousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carrousel>
          {InitialState.trends.map(item =>
            <CarrouselItem key={item.id} {...item}/>
          )}
        </Carrousel>
      </Categories>
      <Categories title="Populares">
        <Carrousel>
        {InitialState.originals.map(item =>
            <CarrouselItem key={item.id} {...item}/>
          )}
        </Carrousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
