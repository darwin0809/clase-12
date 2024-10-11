export const Operaciones = (numeros, setnumeros) => {
    const { numero1, numero2 } = numeros;
  
    // Función para manejar cambios en los inputs
    const handleChange = (e) => {
      setnumeros({
        ...numeros,
        [e.target.name]: parseFloat(e.target.value) // parseFloat aplicado correctamente
      });
    };
  
    // Funciones para las operaciones
    const suma = () => numero1 + numero2;
    const multiplicacion = () => numero1 * numero2;
    const division = () => numero2 !== 0 ? numero1 / numero2 : 'No se puede dividir entre 0';
  
    // Devolvemos las funciones y valores que queremos usar
    return { handleChange, suma, multiplicacion, division, numero1, numero2 };
  };
  