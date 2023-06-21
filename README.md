# D8 Notes

> Full-featured, open-source Notes Markdown editor.

You will need Python 2.7 to self host D8 Notes


https://notes.7erver.com/


### Build

```bash
# Install Python 2.7 using PyENV

# Install nvm - go to https://github.com/nvm-sh/nvm for more info
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# export nvm directory to your environment
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# Install and set node 8 
nvm install 8
nvm use 8

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Deploy with Vercel

D8 Notes allows easy deployment to any Vercel.

