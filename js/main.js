var FX = ( function( FX, $ ) {


	$( () => {
		FX.TeamSlider.init();
	})


	FX.TeamSlider = {
		$slider: null,

		init() {


			$('.slider').slick({
			  dots: false,
			  infinite: true,
			  speed: 500,
			  arrows:false,
			  button: false,
			  fade: true,
			  cssEase: 'linear'
			});


			this.$slider = $('.slider');

			if( this.$slider.length ) {
				this.applySlick()
			}
		},

		applySlick() {
            this.$slider.slick( {
                infinite: true,
				speed: 300,
				dots: false,
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							arrows: true,
							dots: false,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: true,
							dots: false,
						}
					},
				]
            });
		}
	}




	return FX

} ( FX || {}, jQuery ) )