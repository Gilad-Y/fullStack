const dataLink = "./funko_pop.json";
let popData=[];
let popName;
let popIMG;
let popSeries=[];
let popSpecialty;
$(async () => {
  popData = await $.get(dataLink);
  console.log(popData);
  $("#content").html()
  createContent(popData);
});
const createSelection=()=>{
  popSeries.map((item)=>{
    $("#content").append(`${item}`);
});
};
const createContent=(popData)=>{
  popData.map((item)=>{
    popName=item.title.replaceAll("-"," ");
    popIMG=item.imageName;
    // popSeries=(item.series[0]);
if (!popSeries.find(element=> element===item.series[0])){
popSeries.push(item.series[0]);
}
    popSpecialty=item.series[1];
  //   $("#content").append(`
  //   <div class="box">
  //   ${popSeries}
  //   ${popName}
  //   <img src="${popIMG}" width="100px">
  //   ${popSpecialty}
  //  </div>`

    // )
  });
   popSeries =popSeries.filter((item)=>{
     item!= undefined;
  });
  console.log(popSeries);
  createSelection(popSeries);
};
