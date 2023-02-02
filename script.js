const playList = ["Who wants to live forever", "Sthlm Sunset", "The Last Goodbye", "Woo", "Paint it Black", "Come and Get Your Love", "Never Tear Us Apart", "Forever Young", "Glue", "Redbone"];

playList.forEach(visEnAfGangen);

function visEnAfGangen(playList) {
  console.log(playList + " er god");
  document.querySelector("#playList").innerHTML += `<li>${playList}</li>`;
}
