# GLUG Catania — GNU/Linux User Group Catania

Prossimo sito web (?) dell'associazione GLUG Catania ([catania.linux.it](https://www.catania.linux.it)),
generato con [Hugo](https://gohugo.io/).


## Preview locale

```bash
hugo server
```

Apri `http://localhost:1313` nel browser.

## Build produzione

```bash
hugo
```

L'output finisce in `public/`. Deploy via rsync/copia su
`www.catania.linux.it`.

## Installare Hugo su Debian

```bash
# Versione extended (necessaria per il supporto CSS/Sass)
wget https://github.com/gohugoio/hugo/releases/download/v0.163.3/hugo_extended_0.163.3_linux-amd64.deb
sudo dpkg -i hugo_extended_0.163.3_linux-amd64.deb
```
