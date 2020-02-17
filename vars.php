<?php
$videos = array('','');
$hides = array('','');

$full1 = '8 400р.';
$full2 = '16 900р.';

$sales1 = array('1 000р.','500р.');
$sales2 = array('2 000р.','1 000р.');

$todays1 = array('7 400р.','7 900р.');
$todays2 = array('14 900р.','15 900р.');

$links1 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4502&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4503&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4504&clean=true&lg=ru');
$links2 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4505&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4506&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4507&clean=true&lg=ru');

$dates = array(strtotime('2020-02-21'),strtotime('2020-02-22'),strtotime('2020-02-25'));
$now = strtotime('now');

if ($now < $dates[0]) {
    $sale1 = $sales1[0];
    $sale2 = $sales2[0];

    $today1 = $todays1[0];
    $today2 = $todays2[0];

    $link1 = $links1[0];
    $link2 = $links2[0];
}
elseif (($now >= $dates[0])&&($now < $dates[1])) {
    $sale1 = $sales1[1];
    $sale2 = $sales2[1];

    $today1 = $todays1[1];
    $today2 = $todays2[1];

    $link1 = $links1[1];
    $link2 = $links2[1];
}
else {
    $link1 = $links1[2];
    $link2 = $links2[2];
}
?>