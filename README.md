# Gestor de Frases

Una aplicación web desarrollada en **React** que permite agregar, editar, eliminar y buscar frases. Las frases se muestran en tarjetas organizadas en una grilla y se pueden filtrar a medida que el usuario empiece a tipear. Esto es un ejercicio hecho para IT Patagonia, para demostrar mis conocimientos de React.

## 🚀 Tecnologías utilizadas y conceptos aplicados

- **React**
- **Vite** 
- **Tailwind CSS** 
- **Hooks**: `useState`, `useReducer`, `useContext`, `useMemo`.
- **Context API**: Para manejo global del estado.
- **High Order Components (HOC)**: Para agregar funcionalidad de búsqueda de manera abstraída.

---

## 🛠️ Funcionalidades e implementaciones

1. **Agregar Frases**:
   - Los usuarios pueden agregar nuevas frases en un campo.

2. **Editar Frases**

3. **Eliminar Frases**

4. **Buscar Frases**:
   - Un campo de búsqueda filtra las frases mientras el usuario escribe.
   - Si no hay coincidencias, se muestra un mensaje de alerta/advertencia.

5. **Matriz de Tarjetas**:
   - Las frases se muestran en una grid responsiva.
   - Las tarjetas tienen un ancho fijo y el texto se ajusta automáticamente.

6. **Validaciones**:
   - No se pueden guardar frases vacías.
   - Mensajes para el usuario si ingresa una frase vacía o su búsqueda no coincide con las frases disponible.

7. **Optimización**:
   - `useMemo` para evitar que se recree el objeto de contexto en cada renderizado.
   - `useReducer` para manejar el estado de las frases.

