# Corner-badge


Mimics 'Fork me on Github' corner badge (without being an link) using a polymer element and pure css within it

To use simply add the import:
```html
  <link href="corner-badge.html" rel="import" />
```

Then add the tag (defaults to the top right corner):
```html
  <corner-badge>Beta site</corner-badge>
```

To customize the location:
```html
  <corner-badge location='bottom left'>Beta site</corner-badge>
```
Use the keywords ```top```, ```bottom```, ```right```, and ```left```

To customize the color:
```html
  <corner-badge color='#456456'>Beta site</corner-badge>
```

Remember that you need polymer to make this work, so if you haven't added it yet:
```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/polymer/0.1.2/platform.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/polymer/0.1.2/polymer.js"></script>
```

You can style the text within the element by specifying css text properties on the element.

## Todo

- allow more styling options using CSS
- allow any html within the tag, not just text

## License

MIT License
