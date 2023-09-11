# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.1.0] - 2023-08-08

### Added

- default project template
- first component
- product functionality(components, model, service)
- products cart

### Removed
-default template of app.component

## [0.2.0] - 2023-08-24

### Added 
- cart, product, orders, shared modules
- cart-item component and it's functionality(quantity change, price calculation and deleting item)
- directive to higlight cart item on mouse hover
- 'bootstrap' css library to make the page more pretier and user friendly

### Removed
- markup of each cart item in cart-list component
- some of old markup during bootstrap reworking
- first component from app.component markup

## [0.3.0] - 2023-09-03

### Added
   - new methods in cart.service to work with producs cart
   - config-options.service that provide functionality of setting and getting config user information(id, loging,email)
   - constant.service provide constant object for app
   - generator.service generates random string with alphanumeric items
   - local-storage.service provides functionality for working with local storage
   - demo code in first.component to demonstrate functionality of services metioned above 
   - click-style.directive that can change font style of element when click event raises

### [0.4-0] - 2023-09-11

### Added
    - order-pipe, that can order elements by specific field and set the direction of elements(asc, desc)
    - some angular built-in pipe usages to make the interface more userfriendly
    - sorting and ordering feature for products cart, using pipe mentioned above
    - FormsModule and CommonModule import and export in shared-module. That module will be used in future to get acces for those mudules
### Removed
    - All imports and exports of FormsModule and CommonModule in other modules
