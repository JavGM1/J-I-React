# J-I-React

Repositorio del proyecto J-I implementado con React y TypeScript.

Descripción
-----------
J-I-React es una aplicación frontend construida con Vite, React 18 y TypeScript. Contiene componentes UI basados en React-Bootstrap, hooks personalizados y una suite de pruebas configurada con Jest y Testing Library.

Estructura principal
--------------------
- `frontend/`: cliente web construido con Vite (React + TypeScript).
	- `src/`: código fuente de la aplicación.
	- `public/`: activos estáticos (imágenes, favicon, etc.).
	- `package.json`: scripts y dependencias del frontend.

Instalación y ejecución (desarrollador)
-------------------------------------
Requisitos: Node.js (LTS recomendado) y Git.

Clonar y preparar:

```bash
git clone https://github.com/<tu-usuario>/J-I-React.git
cd J-I-React/frontend
npm install
```

Comandos útiles (desde `frontend`):

```bash
npm run dev       # iniciar server de desarrollo (vite)
npm run build     # crear build de producción
npm run preview   # previsualizar build localmente
npm test          # ejecutar la suite de tests (Jest)
```

Testing
-------
El proyecto usa Jest + ts-jest y Testing Library para las pruebas unitarias. La configuración de Jest se encuentra en `frontend/jest.config.cjs`. Hay un archivo de setup (`src/tests/jest.setup.ts`) que carga `@testing-library/jest-dom` y aplica utilidades globales para los tests.

Contribuciones
--------------
- Abre un issue para discutir cambios grandes.
- Crea un fork y luego un pull request para proponer cambios.
- Asegúrate de ejecutar `npm test` antes de enviar un PR y agrega pruebas cuando corresponda.

Licencia
--------
Indica aquí la licencia del proyecto (por ejemplo, MIT) si aplica.

Contacto
-------
Para dudas o consultas, crea un issue en GitHub o contacta al mantenedor del repositorio.

