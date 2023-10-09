# Investigacion de Git
Git es un sistema de control de versiones distribuido, lo que significa que un clon local del 
proyecto es un repositorio de control de versiones completos. Estos repositorios locales 
plenamente funcionales permiten trabajar sin conexión o de forma remota con facilidad. 
La flexibilidad y popularidad de Git lo convierte en una excelente opción para cualquier 
equipo.
Las ventajas de Git son numerosas como el desarrollo simultaneo, versiones de lanzamiento 
más rápidas, integración incorporada, solido soporte técnico de la comunidad, directivas de 
ramas.

## Comandos Git
### Configuración Básica
- Iniciar un repositorio: `git init` 
- Clonamos el repositorio de GitHub: `git clone <url>`
- Añadimos todos los archivos para el commit: `git add .`
- Hacemos el primer commit: `git commit -m “primer commit”`
- Subimos al repositorio: `git push origin master`

### Git Clone
- Clonamos el repositorio de GitHub: `git clone <url>`
- Clonamos el repositorio de GitHub: `git clone <url> git demo`

### Git Add
- Añadimos todos los archivos para el commit: `git add .`
- Añadimos el archivo al commit: `git add <archivo>`
- Añadimos todos los archivos para el commit omitiendo los nuevos: `git add –all`
- Añadimos todos los archivos con la extensión especifica: `git add *.txt`
- Añadimos todos los archivos dentro de un directorio y extensión especifica: `git add docs/*.txt`
- Añadimos todos los archivos dentro de un directorio: `git add docs/`

### Git Commit
- Carga en el HEAD los cambios realizados: `git commit -m “un commit”`
- Agrega y carga en el HEAD los cambios realizados: `git commit -a -m “un commit”`
- De haber conflictos los muestra: `git commit -a`
- Agrega al último commit, este no se muestra como un nuevo commit en los logs. Se puede 
  especificar un nuevo mensaje: `git commit --amend -m “un commit”`

### Git Push
- Subimos al repositorio: `git push <origen> <rama>`
- Subimos un tag: `git push --tags`

### Git Branch
- Crea un Branch: `git branch <rama>`
- Lista los Branch: `git branch`
- Comando -d elimina el Branch y lo une a la master: `git branch -d <rama>`
- Elimina sin preguntar: `git branch -D <rama>`

### Git Log
- Muestra los logs de los commit: `git log`
- Muestra los cambios en los commit: `git log --oneline -stat`
- Muestra los gráficos de los commit: `git log --oneline --graph`

### Git Diff
- Muestra los cambios realizados a un archivo: `git diff` `git diff –staged`

### Git Head
- Saca un archivo del commit: `git reset HEAD <archivo>`
- Devuelve el ultimo commit que se hizo y pone los cambios en staging: `git reset --soft HEAD^`
- Devuelve el ultimo commit y todos los cambios: `git reset --hard Head^`
- Devuelve los últimos dos commit y todos los cambios: `git reset --hard HEAD^^`
- Rollback merge/commit: `git log git reset --hard <commit_sha>`

### Git Remote
- Agrega un repositorio remoto: `git remote add origin <url>`
- Cambiar de remote: `git remote set-url origin <url>`
- Remover repositorio: `git remote rm <name/origin>`
- Muestra lista de repositorios: `git remote -v`
- Muestra los branches remotos: `git remote show origin`
- Limpiar todos los branches eliminados: `git remote prune origin`

### Git Tag
- Muestra una lista de todos los tags: `git tag`
- Crea un nuevo tag: `git tag -a <versión> - m “este es la versión y”`

### Git Rebase
Los rebase se usan cuando trabajamos con branches esto hace que los branches se pongan al día con
el master sin afectar al mismo.
- Une el Branch actual con el master, esto no se puede ver como un merge: `git rebase`
- Cuando resolvemos conflictos --continue continua la secuencia del rebase donde se pauso: 
`git rebase --continue`
- Omite el conflicto y sigue su camino: `git rebase --skip`
- Devuelve todo al principio del rebase: `git rebase --abort`
- Para hacer un rebase a un Branch en específico: `git rebase <namebranch>` 

### Otros Comandos
- Lista un estado actual del repositorio con lista de archivos modificados o agregados: `git 
status`
- Quita del HEAD un archivo y le pone el estado de no trabajado: `git checkout --<file>`
- Crea un Branch en base a uno online: `git checkout -b newlocalbranchname origin/branch-name`
- Busca los cambios nuevos y actualiza el repositorio: `git pull origin <rama>`
- Cambiar de Branch: `git checkout <namebranch/tagname>`
- Une al branch con el especificado: `git merge <rama>`
- Verifica cambios en el repositorio online local: `git fetch`
- Borra un archivo del repositorio: `git rm <archivo>`

Un pull request es una característica que se utiliza para solicitar que los cambios realizados 
en una rama se funcionen en otra.
