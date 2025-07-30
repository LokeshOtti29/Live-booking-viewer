const socket = io("http://localhost:3000");
let card = document.getElementsByClassName("booking-cards")[0];

socket.on("new-booking", (booking) => {
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <strong>Venue:</strong> ${booking.venueName}<br>
    <strong>Party Size:</strong> ${booking.partySize}<br>
    <strong>Time:</strong> ${booking.time}
  `;
  card.prepend(div);
});
