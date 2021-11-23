// Set the date we're counting down to
var countDownDate = new Date(Date.UTC(2021, 10, 28, 21)).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdowntext").innerHTML =
      "⭐ THE EVENT IS ON ⭐";
  }
}, 1000);

function specialClick(text) {
  document.getElementById("sdes").classList.add("visible");
  document.getElementById("sdes").innerHTML = text;
}

function mainClick(text) {
  document.getElementById("maintitle").innerHTML = text;
}

const elements = {
  ST: "Social! You, us, your friends, our friends, we all come together for an evening of fun.",
  PE: "Positive! We are all here to have fun.",
  EN: "Educational! Ask away! People with more experience will be happy to help.",
  CH: "Cozy! Organized by our Cozy Fallout Discord Server.",
  IN: "Idyllic! Set on the rolling hills of the Appalachian Forest area, only the Scorched and Supermutants break the breathtaking sights.",
  AG: "Accessible! You don't use mic? No worries! Drop by and just listen. Follow us around. Throw emotes at us.",
  LU: "Lighthearted! Let's have fun while learning new things about the Wasteland.",
  who: "Everyone is invited! Get some <span>friends</span> over!",
  how: "Add <span>ZedtheRedd</span>, MorteTM, NarwindilTM, or Dravgr!",
  wha: "Yourself! Bring <span>yourself</span> and have fun!",
};

for (const [el, message] of Object.entries(elements)) {
  if (el.length === 2) {
    document.getElementById(el).addEventListener("click", function () {
      specialClick(message);
    });
  } else if (el.length === 3) {
    document.getElementById(el).addEventListener("click", function () {
      mainClick(message);
    });
  }
}
