$(() => {
  $("body").html(`
    <img
      src="https://www.pngmart.com/files/22/Naruto-Uzumaki-PNG-Isolated-HD.png"
      width="100px"
    />`);
});

$(() => {
  $("img").toggle().delay(1000).fadeIn(500);
  $("img").animate({ width: `200px`, opacity: `0.4` }, "slow");
});
