# GIT

## [Conceptos importantes](#conceptos-importantes-para-arrancar)

- [Qué es git](#¿qué-es)

## ¿Qué es GIT?

Es un `software de control de versiones`que registra los cambios realizados sobre un archivo o un conjunto de archivos a lo largo del tiempo.

### ¿Qué nos permite?

Git nos permite `gestionar distintas versiones` de un mismo archivo.

### ¿Qué es un repositorio?

Cuando trabajamos con GIT lo que creamos es un `REPOSITORIO`, es decir, un lugar donde guardamos y administramos nuestros achivos.

Existen dos tipos de repositorios:

1. Locales: Se crean de manera "local" en nuestra PC.
2. Remotos: Son aquellos que se encuentran alojados en algún servidor externo y que puede ser accedido desde cualquier lugar.
   Un ejemplo de un repositorio remoto puede ser GITHUB.

### ¿Cómo configurar GIT?

```
$ git init
$ git config user.name "username"
$ git config user.email "email@ejemplo.com"
$ git remote add origin "https://github.com/<username>/<nombreRepo>.git"
```

### GIT ADD + GIT COMMIT + GIT PUSH

```
$ git status
$ git add nombreArchivo
$ git commit -m "estoy seguro de este commit"
$ git push -u origin master
```

### GIT CLONE

Lo usamos cuando queremos clonar completamente un repositorio.

```
$ git clone urldelproyecto
```

### GIT PULL

Nos permite bajar los cambios que tiene nuestro repositorio remoto en una determiinada rama.

```
$ git pull origin master
```

### ¿Qué es una BRANCH?

![BRANCHES](/back/git-github/branches.png)

Las ramas son como `punteros` para cada uno de los `cambios o versiones` que queremos armar en nuestro proyecto o desarrollo.

Cada rama representa una `línea independiente` de desarrollo.

Git cuenta con una rama principal master/main de la cual parten todas las demás ramas que se pueden crear.

```
$ git branch (nos dice en que rama estamos parados)

$ git branch rama1
$ git branch -m rama1 ramita (cambiar nombre de una rama)

$ git checkout ramita1 (cambiar de rama)

$ git branch -d ramita (borrar rama)

$ touch "texto.txt" (crear un nuevo archivo)
```

### GIT DIFF

Me devuelve las diferencias entre una rama y la otra.

```
$ git diff master rama1
```

### GIT MERGE

![Merge](/back/git-github/merge.png)

Nos permite unificar dos ramas en una sola.

```
$ git diff rama1 rama2
$ git checkout ramaAActualizar
$ git merge ramaOrigen ramaDestino

```
