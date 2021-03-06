import React, { useEffect, useState } from 'react';
import {connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import '../assets/styles/App.scss';


const Home = ( {myList, trends, originals}) => {
  return (
    <>
      <Header/>
      <Search isHome/>
      {myList.length > 0 && 
        <Categories title="Mi lista">
          <Carrousel>
          {myList.map(item =>
            <CarrouselItem 
              key={item.id} 
              {...item}
              isList
            />
          )}
          </Carrousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carrousel>
          {trends.map(item =>
            <CarrouselItem key={item.id} {...item}/>
          )}
        </Carrousel>
      </Categories>
      <Categories title="Populares">
        <Carrousel>
        {originals.map(item =>
            <CarrouselItem key={item.id} {...item}/>
          )}
        </Carrousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return{
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home)