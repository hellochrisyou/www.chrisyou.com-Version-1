function scrollNav() {
  $('.navbar a').click(function() {
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.' + theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 130
    }, 600);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['name','percentage'],
      ['Java,\nC#,\nC++', .45],
      ['Visual Studio,\nEclipse', .35],
      ['MySQL', .20],
  
    ]);

    var options = {
    title: 'Top Skills', titleTextStyle:{fontSize:18, color:'#d3d3d3'},
  	legend: {textStyle:{color: '#d3d3d3', fontSize: 13}},
	backgroundColor: '#212121'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }









