$(document).ready(function() {
			$('.infos_project').hide();
			$('#fullpage').fullpage({
				css3: true,
				loopBottom: true,
				navigation: true,
				navigationPosition: 'right',
        autoplay:true,
        navigationTooltips: ['ACCUEUIL', 'PEUGEOT', 'PSA PEUGEOT CITROËN', 'LEROY MERLIN', 'SACEM', 'PEUGEOT'],
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
            if(index == 2){
	              $('#infos_2').fadeIn(600);
							  $(this).find('.infos__ p').addClass('up_down_css');
								$(this).find('.btn_project').addClass('up_down_css');
            }
						if(index == 3){
	              $('#infos_3').fadeIn(600);
								$(this).find('.infos__ p').addClass('up_down_css');
								$(this).find('.btn_project').addClass('up_down_css');
            }
						if(index == 4){
	              $('#infos_4').fadeIn(600);
								$(this).find('.infos__ p').addClass('up_down_css');
								$(this).find('.btn_project').addClass('up_down_css');
            }
						if(index == 5){
	              $('#infos_5').fadeIn(600);
								$(this).find('.infos__ p').addClass('up_down_css');
								$(this).find('.btn_project').addClass('up_down_css');
            }
						if(index == 6){
	              $('#infos_6').fadeIn(600);
								$(this).find('.infos__ p').addClass('up_down_css');
								$(this).find('.btn_project').addClass('up_down_css');
            }
        },

				onLeave: function(index, nextIndex, direction){
					 var leavingSection = $(this);

					 //after leaving section 2
					 if(index == 2 && direction =='down'){
							 $('#infos_2').fadeOut(600);
							 $(this).find('.infos__ p').removeClass('up_down_css');
							 $(this).find('.btn_project').removeClass('up_down_css');
					 }
					 if(index == 2 && direction =='up'){
							 $('#infos_2').fadeOut(600);
							 $(this).find('.infos__ p').removeClass('up_down_css');
							 $(this).find('.btn_project').removeClass('up_down_css');
					 }
					 if(index == 3 && direction =='down'){
							 $('#infos_3').fadeOut(600);
							 $(this).find('.infos__ p').removeClass('up_down_css');
							 $(this).find('.btn_project').removeClass('up_down_css');
					 }
					 else if(index == 3 && direction == 'up'){
                $('#infos_3').fadeOut(600);
								$(this).find('.infos__ p').removeClass('up_down_css');
 							 	$(this).find('.btn_project').removeClass('up_down_css');
            }
					 if(index == 4 && direction =='down'){
							 $('#infos_4').fadeOut(600);
							 $(this).find('.infos__ p').removeClass('up_down_css');
							 $(this).find('.btn_project').removeClass('up_down_css');
					 }
					 else if(index == 4 && direction == 'up'){
                $('#infos_4').fadeOut(600);
								$(this).find('.infos__ p').removeClass('up_down_css');
 							 	$(this).find('.btn_project').removeClass('up_down_css');
            }
					 if(index == 5 && direction =='down'){
							 $('#infos_5').fadeOut(600);
							 $(this).find('.infos__ p').removeClass('up_down_css');
							 $(this).find('.btn_project').removeClass('up_down_css');
					 }
					 else if(index == 5 && direction == 'up'){
                $('#infos_5').fadeOut(600);
								$(this).find('.infos__ p').removeClass('up_down_css');
 							 	$(this).find('.btn_project').removeClass('up_down_css');
            }
					 if(index == 6 && direction =='down'){
							 $('#infos_6').fadeOut(600);
							 $(this).find('.infos__ p').removeClass('up_down_css');
							 $(this).find('.btn_project').removeClass('up_down_css');
					 }
					 else if(index == 6 && direction == 'up'){
                $('#infos_6').fadeOut(600);
								$(this).find('.infos__ p').removeClass('up_down_css');
 							 	$(this).find('.btn_project').removeClass('up_down_css');
            }

			 }
			});
});
