import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";


export const GifExpertApp = () => {
/* Cuando quiero almacenar información y esa información tiene
que cambiar el HTML, usualmente en lo primero que debemos pensar
es en un Hook para mantener el estado como el useState
 */

//No poner condicionalmente hooks. Ej. 
/* if(true){
        const [ categories, setcategories] = useState(['One Punch','Dragon Ball'])
}
*/
    const [ categories, setcategories] = useState(['One Punch','Valorant'])
    
    const onAddCategory = (newCategory) =>{
        //Valorant
        if (categories.includes(newCategory)) return;

        setcategories([newCategory, ...categories]);
        //setcategories(cat =>[...cat, 'Valorant']) otra forma de
        //hacerlo.
    }

    
    //Función para eliminar una categoría del Use State
    const removeCategory = (category) =>{

        setcategories(categories.filter((name) => name !== category));
        console.log(categories);
        

    }
    
    return (
        <>
            
            <h1>GifExpertApp</h1>

            
                <AddCategory 
                //enviar una propiedad
                onNewCategory={ (value) => onAddCategory(value) }
                />
                {
                    categories.map( (category ) =>(                        
                        <GifGrid 
                            key={category}
                            category={category} 
                            remove = {(category) => removeCategory(category)}
                            />
                        
                        ))
                
                
                }
            


                {/* Gif Item */}
        </>
    )
}