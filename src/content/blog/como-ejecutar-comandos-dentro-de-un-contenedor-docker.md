---
title: "Cómo ejecutar comandos dentro de un contenedor Docker"
description: "Guía práctica para interactuar con contenedores activos mediante docker exec, abrir shells interactivos y gestionar permisos de usuario."
pubDate: 2026-03-12
author: "Albert Domènec"
tags: ["docker", "sysadmin"]
---

Los contenedores Docker han transformado la forma en que los equipos de ingeniería desarrollan, distribuyen y ejecutan aplicaciones. Al proporcionar entornos aislados, homogéneos y reproducibles, facilitan la gestión de dependencias y la portabilidad entre diferentes plataformas.

Sin duda, una de las tareas operativas más habituales es saber cómo ejecutar comandos dentro de un contenedor en ejecución para depurar procesos, revisar logs o verificar configuraciones.

## 1. Sesión interactiva mediante shell

La alternativa más flexible cuando necesitas explorar el sistema de archivos o ejecutar múltiples órdenes consecutivas es abrir una sesión de terminal interactiva dentro del contenedor:

```bash
docker exec -it mi_contenedor /bin/bash
```

> **Nota:** En imágenes ultraligeras basadas en Alpine Linux donde Bash no está instalado, simplemente sustituye `/bin/bash` por `/bin/sh`.

## 2. Comandos únicos sin sesión interactiva

En muchas ocasiones, solo requieres consultar el resultado puntual de una instrucción sin necesidad de abrir una terminal permanente. Esto es ideal para scripts de CI/CD o monitorización:

```bash
docker exec mi_contenedor ls -la /app
```

La salida estándar (stdout) se transmitirá de inmediato a tu terminal local, permitiéndote encadenar filtros con `grep`, `awk` o redirigir el contenido a un fichero local.

## 3. Ejecutar comandos como usuario específico

Por motivos de seguridad, las aplicaciones en producción no deben correr como `root`. Con el modificador `-u` puedes ejecutar instrucciones simulando el usuario de la aplicación:

```bash
docker exec -u www-data mi_contenedor whoami
```

Esta opción resulta indispensable para verificar permisos de escritura sobre volúmenes montados y evitar que se creen ficheros con propietario `root` inaccesibles para la aplicación principal.
