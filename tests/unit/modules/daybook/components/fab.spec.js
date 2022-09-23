import { shallowMount, mount } from "@vue/test-utils";
import fab from "@/modules/daybook/components/Fab";





describe('Pruebas en el FAB Component', () => {

  let wrapper;
    
  beforeEach(() => {
      wrapper = shallowMount(fab);
  })


  test('Debe de mostrar el icono por defecto', () => {

    // fa-plus
    


    
  });

  test('Debe de mostrar el icono por defecto', () => {

    // fa-circle
    
  });

  test('Debe de emitir el evento on:click cuando se hace click', () => {
    

    // wrapper.emitted('on:click')

  });
  
});