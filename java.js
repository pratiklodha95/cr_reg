var name,email,mobile,fbid,city,college,access_token,year,address;

$(document).ready(function(){
	$.get('http://cr.moodi.org/api/city',function(data){
		for(var i=0;i<data.length;i++)
		{
			$('.citydrop').append('<option value='+data[i].city_name+'>'+data[i].city_name+'</option>');
		}
	});
	$('.register').click(function(){
		name=$('.name_in').val();
		email=$('.email_in').val();
		mobile=$('.phone_in').val();
		college=$('.college_in').val();
		city=$( ".citydrop option:selected" ).text();
		console.log(city);
		year=$('yeardrop').val();
		address=$('address_in').val();
		if($('.check_tnc').is(':checked'))
		{
			var send_data="name="+name+"&email="+email+"&mobile="+mobile+"&college="+college+"&city="+city+"&fbid="+fbid+"&access_token="+access_token+"&address="+address+"&year="+year;
			$.post( "https://cr.moodi.org/api/register",send_data,function(data) {
			  console.log(data);
			  if(true)
			  {
			  	$('.form_wrapper').html('<h3>'+data.data+'</h3>');
			  }
			});
		}
		else
		{
			console.log("PLEASE TICK");
		}
	});
});