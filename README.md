# quickstart
vue.js branch.

Quick start project.

## Install Node.js, as root.
```bash
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
apt-get install -y nodejs

# Using Debian
curl -sL https://deb.nodesource.com/setup_13.x | bash -
apt-get install -y nodejs

apt-get install -y build-essential

```
[Node.js distributions](https://github.com/nodesource/distributions/blob/master/README.md)

init npm or cnpm.
```bash
npm i -global npm
npm i -global cnpm --registry=https://r.npm.taobao.org
npm init
```

## Install vue.js.
usr 'npm' or 'cnpm' install vue.
```bash
npm i --global vue-cli
or
npm i --global @vue/cli
```

### Vue.js Init.
```bash
vue init webpack 'project-name'
cd 'project-name'
npm run dev
```

Or usr This:
```bash
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

If 'npm i' Not install:
```bash
sh package-fix.sh
```
