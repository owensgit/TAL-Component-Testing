require.def("sampleapp/appui/components/dataBindingList",
    [
        'antie/application',
        "antie/datasource",
        "antie/widgets/component",
        "antie/widgets/horizontallist",
        "antie/widgets/label",
        "sampleapp/appui/widgets/menubutton",
        "sampleapp/appui/formatters/simpleformatter",
        "sampleapp/appui/datasources/simplefeed"
    ],
    function (
        Application, 
        DataSource,
        Component, 
        HorizontalList, 
        Label, 
        MenuButton,
        SimpleFormatter,
        SimpleFeed) {
        
        // All components extend Component
        return Component.extend({
            init: function () {
                var self, label, button;

                self = this;
                this._super("simplecomponent");

                var titleLabel = new Label("Data bound horizontal list");
                titleLabel.addClass('subtitle');
                this.appendChildWidget(titleLabel);



                var simpleFormatter = new SimpleFormatter();
                var simpleFeed = new SimpleFeed();

                this._dataSource = new DataSource(this, simpleFeed, "loadData");

                this.buttonList = new HorizontalList("buttonList", simpleFormatter);

                /*this.buttonOne = new MenuButton("Item One", "boxButton");
                this.buttonTwo = new MenuButton("Item Two", "boxButton");
                this.buttonThree = new MenuButton("Item Three", "boxButton");

                this.buttonList.appendChildWidget(this.buttonOne);
                this.buttonList.appendChildWidget(this.buttonTwo);
                this.buttonList.appendChildWidget(this.buttonThree);*/




                this.addEventListener("load", function(ev) { self._onLoad(ev); });

            },

            _onLoad: function(ev) {
                // Called when component is first loaded.
                this.appendChildWidget(this.buttonList);
                this.buttonList.setDataSource(this._dataSource);
            },
        });
    }
);