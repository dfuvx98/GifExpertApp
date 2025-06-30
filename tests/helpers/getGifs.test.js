import { getGifs } from "../../helpers/getGifs";
describe('Purebas en getGifs()', ()=> {

    test('debe de retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('One Punch');
        console.log(gifs); 

    });
});