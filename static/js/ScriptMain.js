let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .fromTo(".con", 10, { x: 0 }, { x: 1750 })
    .fromTo(".rope-hooks .one", 1, { display: "none" }, { display: "block" })
    .fromTo(".rope-hooks .two", 1, { display: "none" }, { display: "block" })
    .fromTo(".rope-hooks .one", 10, { y: -1750 }, { y: 0 })
    .fromTo(".rope-hooks .two", 10, { y: -1500 }, { y: 0 })
    .fromTo(".abt", 5, { scale: 0.75 }, { scale: 1.0 });

let scene = new ScrollMagic.Scene({
        triggerElement: "home",
        duration: "20%",
        triggerHook: 0,
    })
    .setTween(timeline)
    .setPin("about")
    .addTo(controller);