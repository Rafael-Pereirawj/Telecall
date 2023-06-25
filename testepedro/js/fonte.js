var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $(".teste");

function obterTamnhoFonte() {
  return parseFloat($elemento.css('font-size'));
}

$btnAumentar.on('click', function() {
  $elemento.css('font-size', obterTamnhoFonte() + 1);
});

$btnDiminuir.on('click', function() {
  $elemento.css('font-size', obterTamnhoFonte() - 1);
});