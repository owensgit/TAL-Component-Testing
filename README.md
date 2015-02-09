# TAL-Component-Testing

A basic TAL example app consisiting of the following:

### Header Section

A component container that houses a header component. This is the main menu. The menu items have `select` events which open up the relevent component into the `mainContainer` below.


### Main Section

A component container to which all main content is shown, using the `show` method of the `componentContainer`.


### Focus switching between the header and main section

In `staticscript/appui/sampleapp.js` there are some custom methods that handle focus management between the sections.

`_applyCustomEventHanders` is called in the after show event of the first component shown in the main section; which in this case is `static/script/appui/components/dataBindingCarousels.js`.

### Data Binding

The following sections have [TAL data binding](http://fmtvp.github.io/tal/widgets/data-binding.html) applied to them, which is simulated by an HTTP request to a local JSON file. 