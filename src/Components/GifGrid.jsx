import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

//import {getGifs} from '../helpers/getGifs';




export const GifGrid = ({category,remove}) =>{

    const { images, isLoading } = useFetchGifs ( category );
    
    /*
*/
    return (
        <>
            <h3>{ category }</h3>
            
            {
                isLoading && (<h2>Cargando...</h2>)
                
            }
            
            
            <div className="card-grid">
                {
                    images.map((image) =>(
                        <GifItem 
                        key={image.id}
                        {...image }
                        
                        />
                    ))
                }
            
            </div>
            <div>
                <button onClick={() => remove(category)}>Quitar</button>
            </div>
        </>
  )
}

/*const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=UxpAKOsLTci9tZCEndNn97sIOk7j8r48&q=${ category }&limit=20` 
    const resp = await fetch(url);
    const { data =[]} = await resp.json();
    
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
}


export const GifGrid = ({category}) => {
    
    
    getGifs(category);

*/  