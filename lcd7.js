function _drawLCD(val)
{
  if(val & 1) { $('#line0').css("background-color","white");} else { $('#line0').css("background-color","black");}
  if(val & 2) { $('#line1').css("background-color","white");} else { $('#line1').css("background-color","black");}
  if(val & 4) { $('#line2').css("background-color","white");} else { $('#line2').css("background-color","black");}
  if(val & 8) { $('#line3').css("background-color","white");} else { $('#line3').css("background-color","black");}
  if(val & 16) { $('#line4').css("background-color","white");} else { $('#line4').css("background-color","black");}
  if(val & 32) { $('#line5').css("background-color","white");} else { $('#line5').css("background-color","black");}
  if(val & 64) { $('#line6').css("background-color","white");} else { $('#line6').css("background-color","black");}
  if(val & 128) {
  $('#line7u').css("background-color","white");
  $('#line7b').css("background-color","white");
  } else {
  $('#line7u').css("background-color","black");
  $('#line7b').css("background-color","black");
  }

  
  if(val & 256) { $('#line8').css("background-color","white");} else { $('#line8').css("background-color","red");}
  if(val & 512) { $('#line9').css("background-color","white");} else { $('#line9').css("background-color","red");}
  if(val & 1024) { $('#line10').css("background-color","white");} else { $('#line10').css("background-color","red");}
  if(val & 2048) { $('#line11').css("background-color","white");} else { $('#line11').css("background-color","red");}
  if(val & 4096) { $('#line12').css("background-color","white");} else { $('#line12').css("background-color","red");}
  if(val & 8192) { $('#line13').css("background-color","white");} else { $('#line13').css("background-color","red");}
  if(val & 16384) { $('#line14').css("background-color","white");} else { $('#line14').css("background-color","red");}  
  if(val & 32768) {
  $('#line15u').css("background-color","white");
  $('#line15b').css("background-color","white");
  } else {
  $('#line15u').css("background-color","red");
  $('#line15b').css("background-color","red");
  }
}
