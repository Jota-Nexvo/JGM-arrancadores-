# 01 — Visión y alcance de **JGM Arrancadores**

## Para qué existe la app
JGM Servicios instala, programa y pone en marcha **arrancadores suaves** (*soft starters* / arrancadores electrónicos) sobre motores trifásicos. En campo, muchas veces sin señal, se necesita tener a mano —en el celular— **toda la información técnica** de cada equipo para conectarlo, parametrizarlo y arrancarlo correctamente, y para **diagnosticar fallas** rápido.

**JGM Arrancadores** es esa herramienta: una **guía técnica de bolsillo**, completa y confiable, para el día a día del trabajo.

## Qué ES
- Una **PWA instalable**, **offline-first**, pensada para **celular en vertical**.
- Un **catálogo** de arrancadores suaves donde cada modelo tiene todo lo necesario para **conectar, configurar y arrancar**.
- Dos herramientas destacadas: **buscador de códigos de falla** y **calculadora de parámetros**.
- **Editable**: viene con contenido cargado, pero el usuario puede **agregar/editar** modelos.

## Qué NO es (límites claros del alcance)
- ❌ **No** es un sistema de registro de trabajos.
- ❌ **No** guarda clientes, instalaciones, historial, notas ni fotos por trabajo.
- ❌ **No** genera informes/PDF para clientes.
- ❌ **No** necesita servidor ni cuentas de usuario.
- ❌ **No** requiere señal para funcionar (una vez instalada).

> Mantener este límite es importante: cada vez que aparezca la tentación de "guardar el trabajo del cliente", recordá que la app es **solo guía de consulta**. Lo único que se persiste es el **catálogo** (y las ediciones que haga el usuario sobre él).

## Usuarios y dispositivos
- **Usuario:** el propio JGM (uso personal / profesional). Un solo perfil, sin login.
- **Dispositivos objetivo:** **Poco X7 Pro** y **Samsung Galaxy A25 5G** (Android). Diseñar y probar para estas pantallas.
- **Contexto de uso:** tableros eléctricos, salas de máquinas, campo. A veces a plena luz del sol, a veces en penumbra. A veces con una sola mano. A veces con guantes → objetivos táctiles grandes.

## Contenido de cada ficha de modelo (resumen)
1. **Datos del equipo** — rango de corriente / HP (y kW), tensión, si trae By-pass (derivación).
2. **Diagrama de conexión interactivo** — tocás un borne y te dice qué es, de dónde viene y a dónde va (potencia + control + aguas arriba + motor + relés de salida).
3. **Parámetros de configuración** — curva de arranque, parada, tensión, rampa, límite de corriente, etc., con su significado.
4. **Presets por tipo de carga** — bomba, ventilador, compresor, cinta, molino… indicando la **fuente** del valor.
5. **Protecciones** — sobrecarga, térmica, secuencia de fase, etc.
6. **Conexión en línea vs inside-delta (dentro del triángulo)** — cuando aplica.
7. **By-pass (derivación) y comando** — 2 y 3 hilos.
8. **Códigos de falla** — enlazados al buscador.
9. **Checklist de puesta en marcha** — para seguir en el momento (no se guarda por trabajo).
10. **Fuente + estado** — manual/revisión de origen y sello verificado/sin verificar.

## Tensiones y unidades de trabajo
- Tensiones habituales: **220 V, 380 V, 400 V** (y las que traigan los manuales: 440/480/500/575/600 V). Los filtros priorizan 220/380/400.
- Frecuencia: **50 Hz** (los equipos suelen soportar 50/60).
- Potencia: mostrar **HP y kW juntos**.

## Principios de diseño (resumen; detalle en 02)
- **Mobile-first, pulgar-first, vertical.**
- **Offline siempre.**
- **Legibilidad y contraste** por encima de la estética. Sin tipografías finas para datos críticos.
- **Confiabilidad:** cada dato con su fuente; nada inventado; sello de verificación.
- **Rapidez para llegar al dato** (buscador de fallas destacado, filtros claros).
