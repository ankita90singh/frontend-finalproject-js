gsap.set("#main", {
  overflowX: "hidden",
  overflowY: "hidden",
});

function loadingAnim() {
  var timer = document.querySelector("#timer h1");
  var timerButton = document.querySelector("#timer button");
  var grow = 0;
  var int = setInterval(function () {
    if (grow < 90) {
      grow += Math.floor(Math.random() * 20);
      timer.innerHTML = grow + "%";
    } else {
      grow = 100;
      timer.innerHTML = grow + "%";
      // console.log("Hey")
      timer.style.transform = "translateY(-100%)";
      timerButton.style.transform = "translateY(-100%)";
      timerButton.style.opacity = "1";

      clearInterval(int);
    }
  }, Math.floor(Math.random() * 300));

  var btn = document.querySelector("#page1 button");
  btn.addEventListener("click", function () {
    // locoScroll.start()
    var tl = gsap.timeline();
    tl.to(
      "#page1",
      {
        scale: 1,
        duration: 0.8,
      },
      "anim"
    );
    tl.to(
      "#main",
      {
        overflowY: "auto",
      },
      "anim"
    ),
      tl.to(
        "#log",
        {
          opacity: 1,
        },
        "anim"
      );
    tl.to(
      "#orangegola",
      {
        opacity: 1,
      },
      "anim"
    );
    tl.to(
      "#para p",
      {
        opacity: 1,
      },
      "anim"
    );
    tl.to(
      btn,
      {
        opacity: 0,
      },
      "anim"
    ),
      tl.to("#page2 video", {
        opacity: 1,
        // scrollTrigger:{
        //     trigger:"#page2",
        //     scroller:"body",
        //     start:"top 0",
        //     end: "top 100%",
        //     markers:true,
        //     scrub:2

        // }
      });
  });
}

function colorScroll() {
  var texth1 = document.querySelector("#page3-part1 h1").textContent;
  clutter = "";
  texth1.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  document.querySelector("#page3-part1 h1").innerHTML = clutter;

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      scrub: 2,
      pin: true,
      start: "top 0",
      end: "top -200%",
    },
  });
  tl.to("#page3-part1 h1 span", {
    color: "#111",
    stagger: 0.2,
  });
  // var tl1 = gsap.timeline()

  tl.to(
    "#page3-part1",
    {
      transform: "translateX(-100vw)",
      duration: 20,
    },
    "anim"
  )
    .to(
      "#page3-part2",
      {
        transform: "translateX(-100vw)",
        duration: 20,
      },
      "anim"
    )
    .to(
      "#page3-part3",
      {
        transform: "translateX(-100vw)",
        duration: 20,
      },
      "anim"
    );
}

loadingAnim();
colorScroll();
