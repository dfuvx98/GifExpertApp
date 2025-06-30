import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/Components";

describe('Pruebas en <GifItem />', () =>{
        const title = 'Saitama';
        const url = 'https://one-punch.com/saitama.jpg';
        test('debe de hacer match cn el snapshot', () => {

            const { container } =  render( <GifItem title= {title} url= {url} />);
            expect( container ).toMatchSnapshot();
            
    });
    
    test('debe de mosrar la imagen con el URL y el ALT indicado', () =>{
         render( <GifItem title= {title} url= {url} />);
         //screen.debug();
         /*expect(screen.getByRole('img').src).toBe(url);
         expect(screen.getByRole('img').alt).toBe(title);*/
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

    });

    test('debe de mostrar el título en el componente', () =>{

        render( <GifItem title={title} url={url} />);
        expect( screen.getByText(title)).toBeTruthy();
        //a
    })
});
 