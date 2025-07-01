import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from "../../src/Components";

describe('Pruebas en <AddCategory />', () =>{

    test('debe cambiar el valor de la caja de texto', () =>{

        render( <AddCategory onNewCategory={() =>{}}/>);
        //Cogemos el textbox
        const input = screen.getByRole('textbox');
        //Simulamos el inputchange
        fireEvent.input(input, {target:{value:'Saitama'}} );
        //Vemos que el input si se actualice correctamente
        expect(input.value).toBe('Saitama');
        

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () =>{
        const inputValue='Saitama';
        // Mock es una simulación de una función
        const onNewCategory = jest.fn();
        //TODO: ????

        render( <AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, {target:{value: inputValue}} );
        fireEvent.submit(form);
        expect(input.value).toBe('');
        //Esperar que sea llamada la función (en este caso onNewCategory)
        expect(onNewCategory ).toHaveBeenCalled();
        //Esperar que sea llamada la función X cantidad de veces
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe llamar el onNewCategory si el input está vacio', ()=>{
        
        // Mock es una simulación de una función
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });



});