/**
 * [ES] Calcula un porcentaje de compatibilidad aleatorio entre dos personas.
 * Lee los valores de dos inputs HTML, valida que no estén vacíos,
 * genera un número aleatorio del 0 al 100 y actualiza el DOM con el resultado.
 *
 * [EN] Calculates a random compatibility percentage between two people.
 * Reads values from two HTML inputs, validates they are not empty,
 * generates a random number from 0 to 100, and updates the DOM with the result.
 */
function calculateLove() {
    // [ES] 1. Obtención y limpieza de entradas
    // [EN] 1. Input retrieval and cleaning
    // [ES] Se obtienen los valores de los elementos con ID "name1" y "name2".
    // [EN] Gets values from elements with ID "name1" and "name2".
    // [ES] .trim() elimina los espacios en blanco al inicio y al final para evitar entradas vacías falsas.
    // [EN] .trim() removes whitespace from the start and end to prevent false empty inputs.
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    // [ES] 2. Validación de entradas
    // [EN] 2. Input validation
    // [ES] Si alguno de los dos nombres está vacío tras el trim, muestra una alerta y detiene la ejecución implícita (el else).
    // [EN] If either name is empty after trimming, shows an alert and stops implicit execution (the else block).
    if (name1 == "" || name2 == "") {
        alert("Please enter both names."); 
    } else {

        // [ES] 3. Generación del algoritmo de "amor"
        // [EN] 3. "Love" algorithm generation
        // [ES] Math.random() genera un decimal entre 0 y 1.
        // [EN] Math.random() generates a decimal between 0 and 1.
        // [ES] Se multiplica por 101 para incluir el 100 (ya que floor redondea hacia abajo).
        // [EN] Multiplied by 101 to include 100 (since floor rounds down).
        const loverPorcentage = Math.floor(Math.random() * 101);

        // [ES] 4. Selección del elemento de salida
        // [EN] 4. Selection of the output element
        const result = document.getElementById("result");

        // [ES] 5. Mostrar el resultado numérico inicial
        // [EN] 5. Display the initial numeric result
        // [ES] Se usa un Template Literal (backticks) para insertar las variables.
        // [EN] Uses a Template Literal (backticks) to insert the variables.
        result.innerHTML = `${name1} and ${name2} 's Love Percentage:%${loverPorcentage}`;
        
        // [ES] 6. Lógica condicional para el mensaje de estatus
        // [EN] 6. Conditional logic for the status message
        // [ES] Se concatena (+ =) un mensaje adicional al HTML existente según el rango numérico.
        // [EN] Concatenates (+=) an additional message to the existing HTML based on the numeric range.
        
        if (loverPorcentage < 30) {
            // [ES] Caso: Menor a 30 (Baja compatibilidad)
            // [EN] Case: Less than 30 (Low compatibility)
            result.innerHTML += "<br> Not a Great Match. Keep Looking!";
        } else if (loverPorcentage >= 30 && loverPorcentage < 70) {
            // [ES] Caso: Entre 30 y 69 inclusive (Compatibilidad media)
            // [EN] Case: Between 30 and 69 inclusive (Medium compatibility)
            result.innerHTML += "<br> There's potential. Give it a try!";
        } else {
            // [ES] Caso: 70 o mayor (Alta compatibilidad)
            // [EN] Case: 70 or higher (High compatibility)
            // [ES] Nota: Este 'else' captura todo lo que no sea < 70.
            // [EN] Note: This 'else' captures everything that isn't < 70.
            result.innerHTML += "<br> Great Match! Love is in the Air!";
        }
    }
}