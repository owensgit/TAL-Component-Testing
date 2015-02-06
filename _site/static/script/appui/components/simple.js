require.def("sampleapp/appui/components/simple",
    [
        'antie/application',
        "antie/widgets/component",
        "antie/widgets/componentcontainer",
        'antie/events/keyevent'
    ],
    function (Application, Component, ComponentContainer, KeyEvent) {
        
        // All components extend Component
        return Component.extend({
            init: function () {
                var self, label, button;

                self = this;
                this._super("simplecomponent");

                var mainContainer = self.getComponent("mainContainer");

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
        });
    }
);