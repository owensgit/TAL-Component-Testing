require.def('sampleapp/appui/sampleapp',
    [
        'antie/application',
        'antie/widgets/container',
        'antie/widgets/componentcontainer'
    ],
    function(Application, Container, ComponentContainer) {
    
        return Application.extend({
            init: function(appDiv, styleDir, imgDir, callback) {
                var self;
                self = this;
                
                self._super(appDiv, styleDir, imgDir, callback);
                
                // Sets the root widget of the application to be
                // an empty container
                self._setRootContainer = function() {
                    var container = new Container();
                    container.outputElement = appDiv;
                    self.setRootWidget(container);
                };
            },
            
            run: function() {
                // Called from run() as we need the framework to be ready beforehand.
                this._setRootContainer();
                
                // this doesn't work...
                var headerContainer = this.addComponentContainer("headerContainer");
                headerContainer.showComponent("sampleapp/appui/components/header");

                // this works...
                //this.addComponentContainer("headerContainer", "sampleapp/appui/components/header");

                this.addComponentContainer("maincontainer", "sampleapp/appui/components/simple");
            }
        });     
    }
);