<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## Traits

You can customize the initial state of the module from the editor initialization, by passing the following [Configuration Object][1]

```js
const editor = grapesjs.init({
 traitManager: {
   // options
 }
})
```

Once the editor is instantiated you can use the API below and listen to the events. Before using these methods, you should get the module from the instance.

```js
// Listen to events
editor.on('trait:value', () => { ... });

// Use the Trait Manager API
const tm = editor.Traits;
tm.select(...)
```

## Available Events
* `trait:select` New traits selected (eg. by changing a component).

```javascript
editor.on('trait:select', ({ traits, component }) => { ... });
```

* `trait:value` Trait value updated.

```javascript
editor.on('trait:value', ({ trait, component, value }) => { ... });
```

* `trait:custom` Event to use in case of [custom Trait Manager UI](https://grapesjs.com/docs/modules/Traits.html#custom-trait-manager).

```javascript
editor.on('trait:custom', ({ container }) => { ... });
```

* `trait` Catch-all event for all the events mentioned above. An object containing all the available data about the triggered event is passed as an argument to the callback.

```javascript
editor.on('trait', ({ event, model, ... }) => { ... });
```

[Component]: component.html

[Trait]: trait.html

## getConfig

Get configuration object

Returns **[Object][2]** 

## select

Select traits from a component.

### Parameters

*   `component` **[Component]** 

### Examples

```javascript
tm.select(someComponent);
```

## getCategories

Get trait categories from the currently selected component.

### Examples

```javascript
const traitCategories: Category[] = tm.getCategories();
```

Returns **[Array][3]\<Category>** 

## getTraits

Get traits from the currently selected component.

### Examples

```javascript
const currentTraits: Trait[] = tm.getTraits();
```

Returns **[Array][3]<[Trait]>** 

## getTraitsByCategory

Get traits by category from the currently selected component.

### Parameters

*   `traits` **[Array][3]\<Trait>?** 

### Examples

```javascript
tm.getTraitsByCategory();
// Returns an array of items of this type
// > { category?: Category; items: Trait[] }

// NOTE: The item without category is the one containing traits without category.

// You can also get the same output format by passing your own array of Traits
const myFilteredTraits: Trait[] = [...];
tm.getTraitsByCategory(myFilteredTraits);
```

Returns **[Array][3]\<TraitsByCategory>** 

## getComponent

Get component from the currently selected traits.

### Examples

```javascript
tm.getComponent();
// Component {}
```

## addType

Add new trait type.
More about it here: [Define new Trait type][4].

### Parameters

*   `name` **[string][5]** Type name.
*   `methods` **[Object][2]** Object representing the trait.

[1]: https://github.com/GrapesJS/grapesjs/blob/master/src/trait_manager/config/config.ts

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://grapesjs.com/docs/modules/Traits.html#define-new-trait-type

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String