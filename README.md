# Proyecto Reserva

Este proyecto permite al usuario realizar una reserva, proporcionando su nombre, apellido, el número de adultos y niños, y el régimen de comidas seleccionado. Los datos de la reserva se muestran en una ventana de alerta.

## Descripción

La función `mostrarReserva()` recoge los datos de un formulario HTML y muestra los detalles de la reserva en un mensaje de alerta. El formulario tiene campos de entrada para el nombre, apellido, número de adultos, número de niños, y una selección de régimen de comidas.

## Funcionalidades

1. **Formulario de Reserva**:
    - Permite ingresar nombre, apellido, número de adultos y niños.
    - Selección de régimen de comidas mediante botones de radio.
    
2. **Mostrar la Reserva**:
    - Al enviar el formulario, se muestra una alerta con los datos ingresados.

## Código JavaScript

La función `mostrarReserva()` es la encargada de recopilar los datos y mostrar el mensaje de la reserva. 

### Explicación del código:

- **Recopilación de Datos**: 
    - `guardarNombre`: Obtiene el valor del campo "nombre".
    - `guardarApellido`: Obtiene el valor del campo "apellido".
    - `guardarAdultos`: Obtiene el valor del campo "adultos".
    - `guardarNiños`: Obtiene el valor del campo "niños".
  
- **Selección de Régimen de Comidas**:
    - Se verifica cuál de los botones de radio está marcado para determinar el régimen de comidas seleccionado.
  
- **Alerta de Reserva**: 
    - Se crea un mensaje con los datos de la reserva y se muestra al usuario usando `alert()`.

## Ejemplo de Uso

Este código debe ser utilizado con un formulario HTML que tenga los campos correspondientes. Aquí tienes un ejemplo básico del formulario HTML:

```html
<form>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre"><br><br>

  <label for="apellido">Apellido:</label>
  <input type="text" id="apellido" name="apellido"><br><br>

  <label for="adultos">Adultos:</label>
  <input type="number" id="adultos" name="adultos"><br><br>

  <label for="niños">Niños:</label>
  <input type="number" id="niños" name="niños"><br><br>

  <label>Régimen de Comidas:</label><br>
  <input type="radio" id="desayuno" name="comidas" value="Desayuno">
  <label for="desayuno">Desayuno</label><br>
  <input type="radio" id="almuerzo" name="comidas" value="Almuerzo">
  <label for="almuerzo">Almuerzo</label><br>
  <input type="radio" id="cena" name="comidas" value="Cena">
  <label for="cena">Cena</label><br><br>

  <button type="button" onclick="mostrarReserva()">Mostrar Reserva</button>
</form>
