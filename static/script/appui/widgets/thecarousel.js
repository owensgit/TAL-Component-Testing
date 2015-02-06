require.def("sampleapp/appui/widgets/thecarousel", 
	[
		"antie/widgets/carousel",
		"antie/widgets/button",
		"antie/widgets/label",
		"antie/events/keyevent",
	],
	function (Carousel, Button, Label, KeyEvent) {

		return Carousel.extend({
			
			init: function (args) {
				var self = this;

				this._super(args.id, Carousel.orientations.HORIZONTAL);

				console.log(this);

				var item1 = new Button('item1');
				item1.appendChildWidget(new Label("C Item 1"));
				var item2 = new Button('item2');
				item2.appendChildWidget(new Label("C Item 2"));
				var item3 = new Button('item3');
				item3.appendChildWidget(new Label("C Item 3"));
				var item4 = new Button('item4');
				item4.appendChildWidget(new Label("C Item 4"));
				var item5 = new Button('item5');
				item5.appendChildWidget(new Label("C Item 5"));
				var item6 = new Button('item6');
				item6.appendChildWidget(new Label("C Item 6"));
				var item7 = new Button('item7');
				item7.appendChildWidget(new Label("C Item 7"));
				var item8 = new Button('item8');
				item8.appendChildWidget(new Label("C Item 8"));

				this.appendChildWidget(item1);
				this.appendChildWidget(item2);
				this.appendChildWidget(item3);
				this.appendChildWidget(item4);
				this.appendChildWidget(item5);
				this.appendChildWidget(item6);
				this.appendChildWidget(item7);
				this.appendChildWidget(item8);

				/*this.addEventListener("keyup", function(evt) { 
					console.log("Carousel key up", evt);
					if (evt.keyCode === KeyEvent.VK_UP) {

					}
				});*/

				return this;
			}

		});

	})