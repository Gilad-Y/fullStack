<?php
for ($i = 1; $i <= 10; $i++) {
    $res = "";
    for ($j = 1; $j <= 10; $j++) {
        $res += $i * $j;
    }
    echo "$res";
}
?>