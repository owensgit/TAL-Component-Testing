require.def("sampleapp/appui/widgets/thecarousel", 
	[
		"antie/widgets/carousel",
		"antie/widgets/button",
		"antie/widgets/label",
		"antie/events/keyevent",
		"antie/widgets/carousel/keyhandlers/activatefirsthandler",
	],
	function (Carousel, Button, Label, KeyEvent, ActivateFirstHandler) {

		return Carousel.extend({
			
			init: function (args) {
				var self = this,
					args = args || {};

				args.id = args.id || null;

				this.addClass("basicCarousel");


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
				var item9 = new Button('item8');
				item9.appendChildWidget(new Label("C Item 8"));
				var item10 = new Button('item8');
				item10.appendChildWidget(new Label("C Item 8"));
				var item11 = new Button('item8');
				item11.appendChildWidget(new Label("C Item 8"));

				var items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11];

				for (var i = 0; i < items.length; i = i + 1) {
					items[i].addClass('basicCarouselItem');
					this.appendChildWidget(items[i]);
				}

				var animOptions = {
			    	skipAnim: false,
			    	duration: 200,
			    	easing: "swing"
			    };
				var handler = new ActivateFirstHandler();
				handler.setAnimationOptions(animOptions); 
                handler.attach(this);

				/*this.addEventListener("keyup", function(evt) { 
					console.log("Carousel key up", evt);
					if (evt.keyCode === KeyEvent.VK_UP) {

					}
				});*/

				return this;
			}

		});

	})