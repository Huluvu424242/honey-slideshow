[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@huluvu424242/honey-slideshow)

# honey-slideshow

This component realize an slide show with speaker support by browser speaker api.

## installation

npm install --save honey-slideshow

## usage

```html
<script 
    type="module" 
    src="https://unpkg.com/@huluvu424242/honey-slideshow@0.0.1/dist/honey-slideshow/honey-slideshow.js">
</script>
```

[Vision of API (under construction)](src/components/honey-slideshow/readme.md)

## demo

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="docs/index.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html

<honey-slideshow id="slideshow1" baseurl="https://funthomas424242.github.io/foile-pile/ux/designrules/">

  <h2 slot="title"> Titel der Präsentation</h2>

  <!-- Dieser Slot dient nur dazu das Styling der Folien von außen per CSS beeinflussen zu können -->
  <div id="slidewin" slot="slide-area" class="slides meine tollen styles sind dabei"></div>

</honey-slideshow>

```
Structure of [demo project](https://github.com/FunThomas424242/foile-pile/tree/master/ux/designrules).

![Folderstructure](./docs/img/FolderStructure.png)

To the [live demo](https://funthomas424242.github.io/honey-slideshow/index.html)

## become an supporter

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## releaselog

### v0.0.2 

* [issue#30](https://github.com/FunThomas424242/honey-slideshow/issues/30) foile link added
* [issue#28](https://github.com/FunThomas424242/honey-slideshow/issues/28) baseurl for foile sources added

### v0.0.1

* setup project based at https://github.com/FunThomas424242/honey-speech

## warranty

no warranty

## license

MIT License

## technology used

* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
* [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements)


## browser support

### Web Speech API

Firefox

Maybe you must via about:config set media.webspeech.synth.enabled to true 

Generell

* [Can I use with browsers?](https://caniuse.com/#feat=speech-synthesis)

### Custom Elements

* [Can I use with browsers?](https://caniuse.com/#feat=mdn-api_window_customelements)
