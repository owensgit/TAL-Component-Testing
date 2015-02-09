require.def("sampleapp/appui/components/dataBindingCarousels",
    [
        "antie/widgets/component",
        "antie/widgets/carousel",
        'antie/events/keyevent',
        "antie/widgets/carousel/keyhandlers/activatefirsthandler",
        "antie/widgets/label",
        "sampleapp/appui/widgets/thecarousel3"
    ],
    function (Component, Carousel, KeyEvent, ActivateFirstHandler, Label, TheCarousel3) {

        return Component.extend({
            init: function() {

                this._super("three");
                var self = this;

                var titleLabel = new Label("Carousel List with Data Binding");
                titleLabel.addClass('subtitle');
                this.appendChildWidget(titleLabel);

                // create a vertical carousel to scroll up/down through horizontal carousels

                this.carouselsList = new Carousel("carouselsList", Carousel.orientations.VERTICAL);

                this.carousel1 = new TheCarousel3({ title: "The first carousel" });
                this.carousel2 = new TheCarousel3({ title: "Here is another one" });
                this.carousel3 = new TheCarousel3({ title: "The third one is here" });
                this.carousel4 = new TheCarousel3({ title: "And finally" });


                // create event handlers for the vertical carousel
                this.handler = new ActivateFirstHandler();
                this.handler.setAnimationOptions({
                    skipAnim: false,
                    duration: 200,
                    easing: "swing"
                });
                this.handler.attach(this.carouselsList);


                // Add component lifecycle event listeners
                this.addEventListener("load", function(ev) { self._onLoad(ev); });
                this.addEventListener("beforerender", function(ev) { self._onBeforeRender(ev); });
                this.addEventListener("beforeshow", function(ev) { self._onBeforeShow(ev); });
                this.addEventListener("beforehide", function(ev) { self._onBeforeHide(ev); });
                this.addEventListener("afterhide", function(ev) { self._onAfterHide(ev); });

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
            },
            _onBeforeRender: function(ev) {
                // Called before a component is rendered.
                // This is the best place to set data-specific content.
                this.carouselsList.appendChildWidget(this.carousel1);
                this.carouselsList.appendChildWidget(this.carousel2);
                this.carouselsList.appendChildWidget(this.carousel3);
                this.carouselsList.appendChildWidget(this.carousel4);
                this.appendChildWidget(this.carouselsList);
            },
            _onBeforeShow: function(ev) {
                // Called after the component is rendered but before it is visible.

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