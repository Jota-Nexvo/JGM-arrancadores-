# 02 — Sistema de diseño **JGM Arrancadores**

> Identidad **propia de JGM Servicios**, extraída del logo. Independiente de cualquier otro proyecto/marca. Objetivo: verse **técnica, limpia y profesional**, y ser **legible en campo** (sol directo y tableros oscuros).

## Logo
- Archivo: `assets/jgm-logo.png` (provisto por el usuario).
- Usarlo para: ícono de la PWA (todas las medidas Android), splash, encabezado de Inicio.
- La gota del logo puede usarse como motivo/acento sutil (no abusar).

## Paleta (muestreada del logo)
| Rol | Color | HEX |
|---|---|---|
| Azul de marca (primario) | Azul profundo / índigo | `#344687` |
| Tinta de titulares | Azul marino | `#374074` |
| Acción / azul medio | Azul brillante | `#2767A5` |
| Acento / estado activo | Azure / celeste | `#327DB8` |
| Superficie / texto sobre azul | Blanco | `#FFFFFF` |

Neutros sugeridos (derivar con oklch para armonizar, no inventar colores sueltos):
- Grises fríos con un dejo azulado para texto secundario, bordes y superficies.
- **Semánticos** (definir dentro de la familia, alto contraste): éxito/OK (verde), advertencia (ámbar), falla/peligro (rojo). Se usan en estados de falla, avisos de seguridad y sellos de verificación.

### Tema claro (default de día / exteriores)
- Fondo: casi blanco (neutro frío muy claro). Superficies/tarjetas: blanco.
- Texto principal: azul marino `#374074` / casi negro azulado. 
- Acciones primarias: azul de marca `#344687` / azul brillante `#2767A5`.
- Alto contraste para lectura a pleno sol.

### Tema oscuro — ❌ DESCARTADO
El usuario decidió que la app use **solo modo claro**. No implementar tema oscuro ni toggle. (Se conserva esta nota para que quede registrada la decisión.)

### Modo de tema
- **Automático** (sigue el sistema) + **toggle manual** en Ajustes, con persistencia.

## Tipografía
Pareja técnica, legible y **no genérica** (evitar Inter/Roboto/Arial):
- **Texto e interfaz:** **IBM Plex Sans** (clara, técnica, excelente legibilidad en móvil).
- **Códigos y datos técnicos:** **IBM Plex Mono** — para códigos de parámetro (`P01.02`, `P105`), bornes (`A1`, `DI1`, `R/S/T`), códigos de falla (`E72`, `A08`). El monoespaciado ayuda a leer y alinear datos.
- Alternativa si se busca algo más neutro para largo texto: alguna humanista legible, pero mantener **mono para los códigos**.
- Jerarquía clara y generosa: títulos grandes, cuerpo ≥ 16px, datos técnicos destacados.

## Escala y densidad (mobile-first)
- **Objetivos táctiles ≥ 48px** (campo, a veces con guantes).
- Cuerpo de texto **≥ 16px**; nunca menos de 14px para datos importantes.
- Espaciados en múltiplos de 4px. Radios de esquina suaves y consistentes.
- Un pulgar debe alcanzar las acciones frecuentes → navegación y acciones principales **abajo**.

## Componentes base a construir (Fase 1.3)
- **Botón** (primario/secundario/peligro), con estados y tamaño táctil grande.
- **Tarjeta** (para modelos, resultados de falla, secciones de ficha).
- **Encabezado** de pantalla (con logo/volver).
- **Chip / etiqueta** (para specs: corriente, tensión, By-pass; y para fuente/estado).
- **Acordeón / pestañas** para las secciones de la ficha.
- **Campo de búsqueda** grande (buscador de fallas).
- **Callout de seguridad** (aviso ámbar/rojo) — reutilizable para advertencias y para el aviso de la calculadora.
- **Sello de verificación** (verificado ✓ / sin verificar ⚠) — visible en cada ficha.

## Patrones visuales
- **Estados de falla:** el color/patrón del LED (cuando el manual lo indica) se representa visualmente (ej. "LED Fault ×4 parpadeos").
- **Bornes interactivos:** al tocar, se resaltan en el diagrama y en la lista sincronizada.
- **Fuente citada:** siempre visible al pie de cada sección/ficha (manual + revisión).
- **Íconos:** set simple y técnico, line-style, coherente. **Sin emojis en la UI** (los emojis de estos documentos son solo para lectura del equipo).

## Qué evitar
- Gradientes cargados, sombras exageradas, tarjetas con borde-acento a la izquierda tipo "plantilla".
- Tipografías finas para datos críticos.
- Colores fuera de la familia de marca (derivar todo de la paleta).
- Densidad excesiva: en campo, mejor aire y toques grandes.
