var developerTanya = {
  message:
    " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  name: "Tanya Sinclair",
  occupation: "UX Engineer",
};

var developerJohn = {
  message:
    "“ If you want to lay the best foundation possible I’ d recommend taking this course. The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer.”",
  name: "John Tarkpor",
  occupation: "Junior Front - end Developer",
};

var position = "";

$(".btn-right").click(function (e) {
  e.preventDefault();

  animateAndUpdate();
});

$(".btn-left").click(function (e) {
  e.preventDefault();

  animateAndUpdate();
});

function updateInformation() {
  if (position === 1) {
    showTanya();
    position = 2;
  } else {
    showJohn();
    position = 1;
  }
}

function animateAndUpdate() {
  $(".developer-message").slideUp();
  setTimeout(() => {
    updateInformation();
  }, 400);
  $(".developer-message").slideDown();
  $(".developer-image").fadeOut(500).fadeIn(500);
  setTimeout(() => {
    $(".developer-occupation").toggle("slide").toggle("slide");
  }, 100);
  $(".developer-name").toggle("fold").toggle("fold");
}

function showJohn() {
  $(".developer-image").attr("src", "../images/image-john.jpg");
  $(".developer-message").text(developerJohn.message);
  $(".developer-name").text(developerJohn.name);
  $(".developer-occupation").text(developerJohn.occupation);
}

function showTanya() {
  $(".developer-image").attr("src", "../images/image-tanya.jpg");
  $(".developer-message").text(developerTanya.message);
  $(".developer-name").text(developerTanya.name);
  $(".developer-occupation").text(developerTanya.occupation);
}
