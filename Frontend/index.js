let card = document.getElementsByClassName("booking-cards")[0];

let setcard = setInterval(() => {
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = "<span>hello</span>";
  card.append(div);
}, 1000);
