## Calculadora (proyecto)

Resumen
-------
Esta es una app Expo + React Native con TypeScript que incluye una pantalla de "Saludo" y una pantalla de "Calculadora".

Características principales
- Calculadora editable: puedes escribir o editar la fórmula directamente en pantalla (soporta paréntesis).
- Botones para insertar dígitos y operadores (+, -, ×, ÷, .).
- Botón de borrado `⌫` que elimina un carácter a la vez desde la derecha.
- Las fuentes personalizadas (`Pacifico-Regular` y `Inter18Medium`) se cargan antes de renderizar la app.

Archivos relevantes
- `components/Calculator.tsx` — UI y lógica de la calculadora (evaluación, botones, backspace).
- `app/(tabs)/index.tsx` — pantalla "Saludo".
- `app/(tabs)/about.tsx` — pantalla "Calculadora" (usa el componente `Calculator`).
- `app/_layout.tsx` — carga las fuentes desde `assets/fonts/`.

Requisitos
- Node.js (16+ recomendado)
- npm o yarn

Instalación

```bash
npm install
# o con yarn
# yarn
```

Ejecutar en desarrollo

1. Iniciar Metro / Dev tools

```bash
npx expo start
```

2. Desde la interfaz de Expo puedes:
- Abrir en Expo Go (teléfono físico) escaneando el QR.
- Abrir en emulador Android o iOS.
- Ejecutar en web:

```bash
npx expo start --web
```

Comandos rápidos (desde `package.json`)

```bash
npm run start
npm run android
npm run ios
npm run web
```

Notas y troubleshooting
- Si las fuentes no se muestran correctamente al inicio, reinicia Metro con cache limpio:

```bash
npx expo start -c
```

- La fórmula se evalúa internamente reemplazando `×` por `*` y `÷` por `/` antes de ejecutar la evaluación. Si la expresión no es válida, verás una alerta "Fórmula inválida".
- Para mayor seguridad y robustez puedes reemplazar la evaluación con un parser matemático en lugar de `eval`.

¿Quieres que añada:
- instrucciones para crear una build nativa (Android/iOS)?
- tests unitarios para la lógica de la calculadora?

