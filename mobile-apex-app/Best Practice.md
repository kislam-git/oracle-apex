Reference : https://lmoreaux.hashnode.dev/how-to-make-your-mobile-apex-application-look-like-a-native-one-part-1
Lot of Help for APEX developers, Thanks a Lot

**Content Unselectable **

body {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
}


**Disable the zooming option for the entire viewport**

Adding it to you  page

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">


**Disable the pull to refresh**

body {
    overscroll-behavior-y: none;
}

**Disable the default context menu**

JavaScript code to the "Execute when Page Loads"

document.addEventListener("contextmenu", function(e) { e.preventDefault(); })
