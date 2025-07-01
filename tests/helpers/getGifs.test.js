import { getGifs } from "../../src/helpers/getGifs";
describe('Purebas en getGifs()', ()=> {

    test('debe de retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('One Punch');
        
        //Esperar que llegue al menos un gif
        expect(gifs.length).toBeGreaterThan(0);
        //Ver que tenga la estructura correcta
        expect(gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

    });
});