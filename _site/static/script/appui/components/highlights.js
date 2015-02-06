require.def("sampleapp/appui/components/highlights",
    [
        "antie/widgets/component",
        'antie/events/keyevent',
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/verticallist",
        "antie/widgets/horizontallist",
        "sampleapp/appui/widgets/menubutton",
    ],
    function (Component, KeyEvent, Button, Label, VerticalList, HorizontalList, MenuButton) {
        /**
         * <DESCRIPTION>
         * @name <APPNAME>.appui.components.<COMPONENT>
         * @class
         * @extends antie.widgets.Component
         * @requires ...
         */
        return Component.extend(/** @lends <APPNAME>.appui.components.<COMPONENT>.prototype */{
            init: function() {
                this._super("highlights");
                var self = this;


                this.pageLayout = new VerticalList();


                this.buttonList = new HorizontalList();
                this.buttonListTwo = new HorizontalList();

                this.pageLayout.appendChildWidget(this.buttonList);
                this.pageLayout.appendChildWidget(this.buttonListTwo);

                this.buttonOne = new MenuButton("Item One", "boxButton");
                this.buttonTwo = new MenuButton("Item Two", "boxButton");
                this.buttonThree = new MenuButton("Item Three", "boxButton");

                this.buttonList.appendChildWidget(this.buttonOne);
                this.buttonList.appendChildWidget(this.buttonTwo);
                this.buttonList.appendChildWidget(this.buttonThree);


                this._buttonOne = new MenuButton("Item One", "boxButton");
                this._buttonTwo = new MenuButton("Item Two", "boxButton");
                this._buttonThree = new MenuButton("Item Three", "boxButton");

                this.buttonListTwo.appendChildWidget(this._buttonOne);
                this.buttonListTwo.appendChildWidget(this._buttonTwo);
                this.buttonListTwo.appendChildWidget(this._buttonThree);


                // Add component lifecycle event listeners
                this.addEventListener("load", function(ev) { self._onLoad(ev); });
                this.addEventListener("beforerender", function(ev) { self._onBeforeRender(ev); });
                this.addEventListener("beforeshow", function(ev) { self._onBeforeShow(ev); });
                this.addEventListener("beforehide", function(ev) { self._onBeforeHide(ev); });
                this.addEventListener("afterhide", function(ev) { self._onAfterHide(ev); });


                // calls Application.ready() the first time the component is shown
                // the callback removes itself once it's fired to avoid multiple calls.
                this.addEventListener("aftershow", function appReady() {
                    var application = self.getCurrentApplication();

                    application.ready();
                    application._getKeyEvents(KeyEvent);
                    application._applyCustomEventHanders();

                    self.removeEventListener('aftershow', appReady);
                });
            },
            _onLoad: function(ev) {
                // Called when component is first loaded.
                this.appendChildWidget(this.pageLayout);
            },
            _onBeforeRender: function(ev) {
                // Called before a component is rendered.
                // This is the best place to set data-specific content.
            },
            _onBeforeShow: function(ev) {
                // Called after the component is rendered but before it is visible.
            },
            _onAfterShow: function(ev) {
                // Called after the component is visible.
            },
            _onBeforeHide: function(ev) {
                // Called before the component is hidden.
            },
            _onAfterHide: function(ev) {
                // Called after the component is hidden.
            }
        });
    }
);