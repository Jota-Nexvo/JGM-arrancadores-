# 04 — Glosario técnico (término + traducción)

> **Regla de idioma de la app:** mostrar el término técnico tal como aparece en el manual, con su **traducción entre paréntesis la primera vez** que aparece en cada pantalla. Este glosario es la referencia. Mantener consistencia.

## Términos generales
| Término técnico | Traducción / explicación breve |
|---|---|
| Soft starter / arrancador electrónico | Arrancador suave |
| By-pass | Derivación (contactor/relé que puentea los tiristores al llegar a tensión plena) |
| Bypass integrado | Derivación interna (viene dentro del equipo) |
| inside-delta / dentro del triángulo | Conexión del arrancador dentro del triángulo del motor (6 cables) |
| en línea / in-line | Conexión estándar en serie con el motor (3 cables) |
| DOL (Direct On Line) | Arranque directo en línea |
| SCR / tiristor | Semiconductor de potencia que controla la tensión al motor |
| Ramp / rampa | Subida/bajada gradual de tensión o par |
| Kick Start | Impulso de arranque (pulso de par extra al inicio) |
| Pedestal / initial voltage | Tensión inicial (punto de arranque de la rampa) |
| Coast / rueda libre | Parada por inercia (sin rampa) |
| Stall | Rotor bloqueado |
| Trip class / clase térmica | Clase de disparo de la protección térmica (ej. clase 10, 20, 30) |
| Duty / régimen | Ciclo de trabajo (arranques por hora, etc.) |

## Arranque y control
| Término | Traducción |
|---|---|
| Voltage ramp | Rampa de tensión |
| Current limit | Límite de corriente |
| Current ramp | Rampa de corriente |
| Torque control / torque ramp | Control de par / rampa de par |
| Pump control | Control de bombas |
| Acceleration time | Tiempo de rampa de aceleración |
| Deceleration time | Tiempo de rampa de desaceleración |
| Initial voltage / final voltage | Tensión inicial / tensión final |
| DC Braking | Frenado por inyección de corriente continua |
| Jog | Marcha lenta / a impulsos |
| FWD / REV | Sentido de giro directo / inverso |
| Kick start time / level | Tiempo / nivel del impulso de arranque |
| AUTOSET | Configuración guiada automática (asistente de puesta en marcha) |

## Bornes y cableado
| Término | Traducción / significado |
|---|---|
| Line / red (R, S, T o L1, L2, L3) | Entrada de la red trifásica |
| Load / carga (U, V, W o T1, T2, T3) | Salida al motor |
| DI (Digital Input) | Entrada digital (ej. DI1, DI2, DI3) |
| RL / relay output | Salida de relé (ej. RL1, RL2) |
| A1 / A2 | Alimentación de control (electrónica) |
| PE / earth / tierra | Puesta a tierra |
| Line contactor (K1/KM1) | Contactor de línea |
| Isolation contactor | Contactor de aislamiento |
| PTC | Sonda térmica del motor (termistor) |
| 2-wire / 3-wire control | Comando por 2 hilos (retención) / 3 hilos (pulsadores) |
| Emergency start / stop | Arranque / paro de emergencia |
| Enable / disable (general) | Habilitación general |
| End of start / full voltage | Fin de arranque / tensión plena |

## Protecciones y fallas
| Término | Traducción |
|---|---|
| Phase loss | Falta de fase |
| Phase sequence | Secuencia de fase |
| Undervoltage / overvoltage | Subtensión / sobretensión |
| Overcurrent / undercurrent | Sobrecorriente / subcorriente |
| Current imbalance / asymmetry | Desbalance / asimetría de corriente |
| Locked rotor / stall | Rotor bloqueado |
| Overload (thermal) | Sobrecarga (térmica) |
| Overtemperature | Sobretemperatura |
| Bypass relay fault | Falla del relé de By-pass (derivación) |
| Short circuit | Cortocircuito |
| Fan fault | Falla del ventilador |
| External fault | Falla externa |
| Reset (fault) | Rearme / reinicio de falla |
| Auto-reset | Rearme automático |
| Thermal image / memory | Imagen / memoria térmica |
| Service factor | Factor de servicio |

## Interfaz
| Término | Traducción |
|---|---|
| HMI / keypad | Teclado / interfaz de operador |
| Parameter | Parámetro |
| Trim-pot | Potenciómetro de ajuste |
| DIP switch | Micro-interruptor de configuración |
| LED status | LED de estado |
| Local / Remote | Local / Remoto |
| Factory settings | Valores de fábrica |
| Password / lock | Contraseña / bloqueo de parámetros |
| Firmware / software version | Versión de software |
| Modbus / RS-485 / RS-232 | Protocolos de comunicación serie |
| CAN / DeviceNet / Fieldbus | Buses de comunicación industrial |
| NFC | Comunicación de campo cercano (programar acercando el celular) |

## Unidades
| Símbolo | Significado |
|---|---|
| HP | Caballos de fuerza (potencia) — **mostrar junto a kW** |
| kW | Kilovatios (potencia) — **mostrar junto a HP** |
| A / In / Ie | Ampere / corriente nominal del motor / corriente nominal del equipo |
| V / Un | Volt / tensión nominal |
| Hz | Hertz (frecuencia) — trabajo en 50 Hz |
| Nm | Newton-metro (par de apriete de bornes) |
| Tn | Par nominal |
| cv | Caballo vapor (equivalente a HP en manuales WEG/brasileños) |

> **Nota:** en manuales WEG suele aparecer **cv** (caballo vapor) ≈ HP. Tratarlos como equivalentes al mostrar potencia, pero respetar el valor del manual.
