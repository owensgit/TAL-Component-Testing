require.def("sampleapp/appui/components/simple",
    [
        'antie/application',
        "antie/widgets/component",
        "antie/widgets/horizontallist",
        "antie/widgets/label",
        "sampleapp/appui/widgets/menubutton",
    ],
    function (Application, Component, HorizontalList, Label, MenuButton) {
        
        // All components extend Component
        return Component.extend({
            init: function () {
                var self, label, button;

                self = this;
                this._super("simplecomponent");

                var titleLabel = new Label("This is another section");
                titleLabel.addClass('subtitle');

                this.appendChildWidget(titleLabel);


                this.buttonList = new HorizontalList();

                this.buttonOne = new MenuButton("Item One", "boxButton");
                this.buttonTwo = new MenuButton("Item Two", "boxButton");
                this.buttonThree = new MenuButton("Item Three", "boxButton");

                this.buttonList.appendChildWidget(this.buttonOne);
                this.buttonList.appendChildWidget(this.buttonTwo);
                this.buttonList.appendChildWidget(this.buttonThree);

                this.addEventListener("load", function(ev) { self._onLoad(ev); });

            },

            _onLoad: function(ev) {
                // Called when component is first loaded.
                this.appendChildWidget(this.buttonList);
            },
        });
    }
);