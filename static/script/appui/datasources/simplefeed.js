require.def("sampleapp/appui/datasources/simplefeed",
    [
        "antie/class",
        "antie/runtimecontext"
    ],
    function(Class, RuntimeContext) {
        return Class.extend({
            // You will probably want to do something
            // more useful then returning static data.
            // An array of objects is expected.

            loadData : function(callbacks) {

                var device = RuntimeContext.getDevice();


                device.loadURL('/section_test_tal/test_data/test_data.json', {
                    onLoad: function(responseText) {
                        // run the callback onSuccess method to apply the data
                        callbacks.onSuccess(JSON.parse(responseText));
                    },
                    onError: function(responseText) {
                        console.error("Error!", responseText);
                    }
                });

            }

            /*loadData : function(callbacks) {
                callbacks.onSuccess(
                    [
                        {
                            "id": "1",
                            "title":"cherry"
                        },
                        {
                            "id": "2",
                            "title":"strawberry"
                        },
                        {
                            "id": "3",
                            "title":"peach"
                        },
                        {
                            "id": "4",
                            "title":"apple"
                        },
                        {
                            "id": "5",
                            "title":"melon"
                        },
                        {
                            "id": "6",
                            "title":"Pear"
                        },
                        {
                            "id": "7",
                            "title":"Rasberry"
                        },
                        {
                            "id": "8",
                            "title":"Pineapple"
                        },
                        {
                            "id": "9",
                            "title":"Kiwi Fruit"
                        }
                    ]
                );
            }*/
        });
    });