import React from 'react'
import {GifItem} from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = () => {

  const {images, isLoading} = useFetchGifs();

  return (
    <>
      <h3>{}</h3>
      {isLoading && (<h2>Cargando...</h2>)}
      <div className="card-grid">
        {
          images.map((image: any) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
