require.def('sampleapp/appui/sampleapp',
    [
        'antie/application',
        'antie/widgets/container',
        'antie/widgets/componentcontainer',
        "antie/widgets/verticallist",
        'antie/events/keyevent'
    ],
    function(Application, Container, ComponentContainer, KeyEvent) {
    
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
                //var headerContainer = this.addComponentContainer("headerContainer");
                //headerContainer.showComponent("sampleapp/appui/components/header");

                // this works...
                this.headerContainer = this.addComponentContainer("headerContainer", "sampleapp/appui/components/header");

                //this.mainContainer = this.addComponentContainer("mainContainer", "sampleapp/appui/components/simple");

                this.mainContainer = new ComponentContainer("mainContainer");
                this.getRootWidget().appendChildWidget(this.mainContainer);

                this.mainContainer.show("sampleapp/appui/components/highlights");
                
            },

            _applyCustomEventHanders: function () {

                var self = this;
                var headerContainer = self.getComponent("headerContainer");
                var mainContainer = self.getComponent("mainContainer");

                this.addEventListener('keydown', function (evt) {

                    var KeyEvent = self.KeyEvent;

                    if (evt.keyCode === KeyEvent.VK_UP) {
                        headerContainer.focus();
                    }

                    if (evt.keyCode === KeyEvent.VK_DOWN) {
                        mainContainer.focus();  
                    }

                });   
            },

            _getKeyEvents: function (KeyEvent) {
                this.KeyEvent = KeyEvent;
            }
        });     
    }
);