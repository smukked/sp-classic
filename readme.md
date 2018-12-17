## SharePoint template
SharePoint Classic template using React, Flux, PnPjs, TypeScript, Sass, WebPack, Jest (test), Istanbul (code coverage) and PnP PowerShell for deployment. Working on SP Online and 2016. The project also includes a SP authentication proxy. IE 10+ compatible.

### Setup steps
* Setup Proxy: npm run proxy
* Set _spPageContextInfo-object in default.html

### Build
npm run build

### Develop
npm run serve
    
### Test
npm run lint  
npm run test  
jest --c ./config/Jest/jest.config.json --no-cache --watch