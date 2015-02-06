require.def("sampleapp/appui/widgets/menubutton",
	[
		'antie/widgets/button',
		'antie/widgets/label',
	],
	function (Button, Label) {

		return Button.extend({

			init: function (title, btnClass) {
				var self = this;

				this._super();

				var label = new Label(title);			
				this.appendChildWidget(label);

				if (btnClass && typeof btnClass === 'string') {
					this.addClass(btnClass);
				} else {
					this.addClass('mainMenuButton');
				}

				return this;

        	}
		});
	}
);