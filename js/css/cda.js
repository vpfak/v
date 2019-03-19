/*! cda v1.0.0 | (c) 2019年3月5日, 2019年3月18日 唐方鹏, Inc. |  */
document.writeln("
$("#divx").click(function(){
  $("#divy").fadeIn();
  $("#divx").fadeOut();
}),

$("#divy").click(function(){
  $("#divy").fadeOut();
  $("#divx").fadeIn();
}),

");