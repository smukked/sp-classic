$webUrl = (Get-PnPWeb).ServerRelativeUrl.TrimEnd('/')

$scriptName = "client.demo" + $global:scriptVersion + ".js"

$clientJsUrl = $webUrl + "/Style Library/Client/Scripts/" + $scriptName
$clientStyleUrl = $webUrl + "/Style Library/Client/Styles/client.demo.css?v=" + $global:scriptVersion

### SHOULD BE MODIFIED TO FIT THE SERVER ###

$jsScriptBlock = "
                SP.SOD.registerSod('" + $scriptName + "', '$clientJsUrl');
                RegisterSodDep('react-dom.production.min.js', 'react.production.min.js');
                RegisterSodDep('pnp.vendor.js', 'react-dom.production.min.js');
                RegisterSodDep('" + $scriptName + "', 'pnp.vendor.js');
                SP.SOD.loadMultiple(['react-dom.production.min.js', 'react.production.min.js', 'pnp.vendor.js', '" + $scriptName + "'], function(){
                });
                "
$styleScriptBlock = "
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.id = 'stylesheet' + Math.random();
                link.href = '$clientStyleUrl';
                link.type = 'text/css';
                link.rel = 'stylesheet';
                head.appendChild(link);
                "

Add-PnPJavaScriptBlock -Name "Client Demo Style" -script $styleScriptBlock -Sequence 1019 -Scope Site
Add-PnPJavaScriptBlock -Name "Client Demo Script" -script $jsScriptBlock -Sequence 1020 -Scope Site