$global:scriptVersion = (New-Guid).GetHashCode() * -1

#Add version to file
$newJsName = ("client.demo" + $global:scriptVersion + ".js")
Rename-Item -Path ".\client.demo.js" -NewName $newJsName

#Add Js
Add-PnPFile -Path $newJsName -Folder "/Style Library/Client/Scripts" -checkout -publish
Add-PnPFile -Path ".\client.demo.js.map" -Folder "/Style Library/Client/Scripts" -checkout -publish

#Add Css
Add-PnPFile -Path ".\client.demo.css" -Folder "/Style Library/Client/Styles" -checkout -publish