$(document).ready(function(){
	$(".weigth_1").keyup(function(){
    	$('.grade_1').val( parseFloat($('.weigth_1').val()) * parseFloat($('.t_grade_1').text()));
  			count_total();
	});

	$(".liquefaction").click(function(){
		$('.weigth_2').val($(this).val());
		$('.grade_2').val( parseFloat($('.weigth_2').val()) * parseFloat($('.t_grade_2').text()));
		count_total();
	});

	$(".r").keyup(function(){
    	var R = $(this).val();
    	var W = 0;

    	if(R >= 2){
    		W = 1.0;
    	}
    	else if((R < 2 ) && R > 1){
    		W = R-1;
    	}
    	else if(R < 1){
    		W = 0;
    	}
    	$('.weigth_3').val(W);
    	$('.grade_3').val( parseFloat($('.weigth_3').val()) * parseFloat($('.t_grade_3').text()));
    	count_total();
	});

	$(".suspended").click(function(){
		$('.weigth_4').val($(this).val());
		$('.grade_4').val( parseFloat($('.weigth_4').val()) * parseFloat($('.t_grade_4').text()));
		count_total();
	});

	$(".weigth_5").keyup(function(){
    	$('.grade_5').val( parseFloat($('.weigth_5').val()) * parseFloat($('.t_grade_5').text()));
  			count_total();
	});

	$(".weigth_6").keyup(function(){
    	$('.grade_6').val( parseFloat($('.weigth_6').val()) * parseFloat($('.t_grade_6').text()));
  			count_total();
	});

	$(".weigth_7").keyup(function(){
    	$('.grade_7').val( parseFloat($('.weigth_7').val()) * parseFloat($('.t_grade_7').text()));
  			count_total();
	});

	$(".foundation").click(function(){
		$('.weigth_8').val($(this).val());
		$('.grade_8').val( parseFloat($('.weigth_8').val()) * parseFloat($('.t_grade_8').text()));
		count_total();
	});

	$(".weigth_9").keyup(function(){
    	$('.grade_9').val( parseFloat($('.weigth_9').val()) * parseFloat($('.t_grade_9').text()));
  			count_total();
	});

	$(".restrainer").click(function(){
		$('.weigth_10').val($(this).val());
		$('.grade_10').val( parseFloat($('.weigth_10').val()) * parseFloat($('.t_grade_10').text()));
		count_total();
	});

	$(".weigth_11").keyup(function(){
    	$('.grade_11').val( parseFloat($('.weigth_11').val()) * parseFloat($('.t_grade_11').text()));
  			count_total();
	});

});



function count_total () {
	$('.sum').val( 
		parseFloat($('.grade_1').val()) + 
		parseFloat($('.grade_2').val()) + 
		parseFloat($('.grade_3').val()) + 
		parseFloat($('.grade_4').val()) + 
		parseFloat($('.grade_5').val()) + 
		parseFloat($('.grade_6').val()) + 
		parseFloat($('.grade_7').val()) + 
		parseFloat($('.grade_8').val()) + 
		parseFloat($('.grade_9').val()) + 
		parseFloat($('.grade_10').val()) + 
		parseFloat($('.grade_11').val()) 
	);
}