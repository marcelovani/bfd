INSTALLATION OF THE SUBTHEME
-----------------------

Copy the `bfd_subtheme` folder to `/sites/themes/custom` folder and set it as
default theme.

If you are using a multisites Drupal instance you have to copy the
"Bootstrap for drupal" base theme to your site specific folder or
change the the relative path in the SCSS master file -
`bfd_subtheme/assets/scss/style.scss`.

SUBTHEME USAGE
---------------

# CSS
There is a CSS file at `bfd_subtheme/assets/css/style-custom.css` for you to
add your custom CSS

# SCSS
You can theme with SCSS by adding SCSS files to the master SCSS file
`bfd_subtheme/assets/scss/tools/_subtheme.scss`. Gulp file is provided to
compile SCSS but you will have to install node.js modules.

ALTERNATIVE WITOUT SUBTHEME
---------

# CSS
There is a CSS file at `assets/css/style-custom.css` for you to add your
custom CSS rules.

# SCSS
There is a SCSS template folder for you to add your custom CSS without subtheme.
Find in `assets/scss/tools` a `custom` folder, copy it to `assets/scss/`
and in the bottom of the file `assets/scss/style.scss` uncomment the line
`@import 'custom/include`. **After updating the theme** dont forget to
uncomment that line again. Gulp file is provided to
compile SCSS but you will have to install node.js modules.
