require.def("sampleapp/appui/widgets/thecarousel3", 
	[
		"antie/widgets/container",
		"antie/widgets/component",
		"antie/widgets/carousel",
		"antie/widgets/button",
		"antie/widgets/label",
		"antie/events/keyevent",
		"antie/widgets/carousel/keyhandlers/activatefirsthandler",
		"antie/datasource",
		"antie/widgets/carousel/binder",
		"sampleapp/appui/formatters/simpleformatter",
		"sampleapp/appui/datasources/simplefeed"
	],
	function (
		Container, 
		Component,
		Carousel, 
		Button, 
		Label, 
		KeyEvent, 
		ActivateFirstHandler,
		DataSource,
		Binder,
		SimpleFormatter,
		SimpleFeed) {

		return Component.extend({

			init: function (args) {
		
				var self = this,
					args = args || {};

				args.title = args.title || null;

				this._super(args.title.replace(/\s/g, '-'));

				var title = new Label(args.title);
				title.addClass('carouselTitle');
				this.appendChildWidget(title);

				var carousel = new Carousel(args.title, Carousel.orientations.HORIZONTAL);


				var simpleFormatter = new SimpleFormatter();
				var simpleFeed = new SimpleFeed();
				var dataSource = new DataSource(this, simpleFeed, "loadData");
				var binder = new Binder(simpleFormatter, dataSource);
				binder.appendAllTo(carousel);


				var animOptions = {
			    	skipAnim: false,
			    	duration: 200,
			    	easing: "swing"
			    };
				var handler = new ActivateFirstHandler();
				handler.setAnimationOptions(animOptions);
				handler.attach(carousel);

				this.appendChildWidget(carousel);

				return this;

			}
		});
});