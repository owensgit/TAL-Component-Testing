require.def("sampleapp/appui/components/header",
    [
        "antie/widgets/component",
        "antie/widgets/label",
        "antie/widgets/horizontallist",
        "sampleapp/appui/widgets/menubutton"
    ],
    function (Component, Label, HorizontalList, MenuButton) {
        return Component.extend({
            init: function() {

                this._super("header");
                this.addClass("headerComponent");

                var self = this,
                    application = self.getCurrentApplication();

                var titleLabel = new Label("TV App Section Test");
                titleLabel.addClass("headerTitle");
                this.appendChildWidget(titleLabel);


                // add menu items
                this.mainMenu = new HorizontalList("mainMenu");
                this.menuItemOne = new MenuButton("Data Bound Carousel List");
                this.menuItemTwo = new MenuButton("Data Bound Horizontal List");
                this.menuItemThree = new MenuButton("Stacked Carousels");


                this.menuItemOne.addEventListener("select", function (evt) {
                    application.mainContainer.show("sampleapp/appui/components/dataBindingCarousels");
                });

                this.menuItemTwo.addEventListener("select", function (evt) {
                    application.mainContainer.show("sampleapp/appui/components/dataBindingList");
                });

                this.menuItemThree.addEventListener("select", function (evt) {
                    application.mainContainer.show("sampleapp/appui/components/highlights");
                });

                this.mainMenu.appendChildWidget(this.menuItemOne);
                this.mainMenu.appendChildWidget(this.menuItemTwo);
                this.mainMenu.appendChildWidget(this.menuItemThree);

                this.appendChildWidget(this.mainMenu);

                // Add component lifecycle event listeners
                this.addEventListener("load", function(ev) { self._onLoad(ev); });
                this.addEventListener("beforerender", function(ev) { self._onBeforeRender(ev); });
                this.addEventListener("beforeshow", function(ev) { self._onBeforeShow(ev); });
                this.addEventListener("aftershow", function(ev) { self._onAfterShow(ev); });
                this.addEventListener("beforehide", function(ev) { self._onBeforeHide(ev); });
                this.addEventListener("afterhide", function(ev) { self._onAfterHide(ev); });
            },
            _onLoad: function(ev) {
                // Called when component is first loaded.
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