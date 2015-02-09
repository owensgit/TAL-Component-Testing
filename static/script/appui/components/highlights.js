require.def("sampleapp/appui/components/highlights",
    [
        "antie/widgets/component",
        'antie/events/keyevent',
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/verticallist",
        "antie/widgets/horizontallist",
        "antie/widgets/carousel",
        "sampleapp/appui/widgets/menubutton",
        "sampleapp/appui/widgets/thecarousel2",
        "antie/widgets/carousel/keyhandlers/activatefirsthandler"
    ],
    function (
        Component, 
        KeyEvent, 
        Button, 
        Label, 
        VerticalList, 
        HorizontalList, 
        Carousel, 
        MenuButton, 
        TheCarousel2, 
        ActivateFirstHandler) {

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

                var titleLabel = new Label("Stacked carousels");
                titleLabel.addClass('subtitle');
                this.appendChildWidget(titleLabel);

                this.pageLayout = new Carousel("highlightsList", Carousel.orientations.VERTICAL);

                this.carouselOne = new TheCarousel2({id: "carousel1"});
                this.carouselTwo = new TheCarousel2({id: "carousel2"});
                this.carouselThree = new TheCarousel2({id: "carousel3"});
                this.carouselFour = new TheCarousel2({id: "carousel4"});

                this.pageLayout.appendChildWidget(this.carouselOne);
                this.pageLayout.appendChildWidget(this.carouselTwo);
                this.pageLayout.appendChildWidget(this.carouselThree);
                this.pageLayout.appendChildWidget(this.carouselFour);

                
                var handler = new ActivateFirstHandler();
                handler.setAnimationOptions({ skipAnim: false }); 
                handler.attach(this.pageLayout);
                


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