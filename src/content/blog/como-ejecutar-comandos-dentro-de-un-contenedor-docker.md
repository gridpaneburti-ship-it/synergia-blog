---
title: "Cómo Ejecutar Comandos Dentro de un Contenedor Docker: Guía Completa"
description: "Aprende paso a paso a interactuar con contenedores activos mediante docker exec, abrir shells interactivos bash/sh y gestionar usuarios."
pubDate: 2026-03-12
author: "Albert Domènec"
tags: ["docker", "devops", "sysadmin"]
featured: true
---

Los contenedores Docker han revolucionado la forma en que los equipos de ingeniería desarrollan, distribuyen y ejecutan aplicaciones. Al proporcionar entornos aislados, homogéneos y reproducibles, facilitan la gestión de dependencias y la portabilidad entre diferentes plataformas.

Sin duda, una de las tareas operativas más habituales es saber **cómo ejecutar comandos dentro de un contenedor Docker** para depurar procesos, revisar logs o verificar configuraciones.

## 1. Ejecución interactiva mediante shell en Docker

La alternativa más flexible cuando necesitas explorar el sistema de archivos o ejecutar múltiples órdenes consecutivas es abrir una sesión de terminal interactiva dentro del contenedor.

```bash
docker exec -it mi_contenedor /bin/bash
```

> **Nota útil:** En imágenes ultraligeras basadas en Alpine Linux donde Bash no está instalado, sustituye `/bin/bash` por `/bin/sh`.

## 2. Ejecutar comandos únicos sin sesión interactiva

En muchas ocasiones, solo requieres consultar el resultado puntual de una instrucción sin necesidad de abrir una terminal permanente. Esto es ideal para scripts de CI/CD o monitorización.

```bash
docker exec mi_contenedor ls -la /app
```

## 3. Ejecutar comandos como usuario específico

Por motivos de seguridad, las aplicaciones en producción no deben correr como `root`. Con el modificador `-u` puedes ejecutar instrucciones simulando el usuario de la aplicación:

```bash
docker exec -u www-data mi_contenedor whoami
```

Esto evita que se creen ficheros temporales con propietario `root` inaccesibles para tu servicio.
