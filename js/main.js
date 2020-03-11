// cursor

let cursorInit = !1;
  const cursor = document.getElementById("cursor"),
    amount = 20,
    sineDots = Math.floor(.3 * amount),
    width = 26,
    idleTimeout = 150;
  let timeoutID, hoverButton, hoverTL, lastFrame = 0,
    mousePosition = {
      x: 0,
      y: 0
    },
    dots = [],
    idle = !1;

  class HoverButton {
    constructor (e) {
      this.hovered = !1, this.animatingHover = !1, this.forceOut = !1, this.timing = .65, this.el = document
        .getElementById(e)
    }

    onMouseEnter () {
      this.hoverInAnim()
    }

    hoverInAnim () {
      this.hovered || (this.hovered = !0, this.animatingHover = !0, this.forceOut = !1, TweenMax.fromTo(this
        .bg, this.timing, {
        x: "-112%"
      }, {
        x: "-12%",
        ease: Power3.easeOut,
        onComplete: () => {
          this.animatingHover = !1, this.forceOut && (this.foceOut = !1, this
            .hoverOutAnim())
        }
      }))
    }

    onMouseLeave () {
      this.animatingHover ? this.forceOut = !0 : this.hoverOutAnim()
    }

    hoverOutAnim () {
      this.hovered = !1, TweenMax.to(this.bg, this.timing, {
        x: "100%",
        ease: Power3.easeOut,
        onComplete: () => {
        }
      })
    }
  }

  class Dot {
    constructor (e = 0) {
      this.index = e, this.anglespeed = .05, this.x = 0, this.y = 0, this.scale = 1 - .05 * e, this.range =
        width / 2 - width / 2 * this.scale + 2, this.limit = .75 * width * this.scale, this.element =
        document.createElement("span"), TweenMax.set(this.element, {
        scale: this.scale
      }), cursor.appendChild(this.element)
    }

    lock () {
      this.lockX = this.x, this.lockY = this.y, this.angleX = 2 * Math.PI * Math.random(), this.angleY = 2 *
        Math.PI * Math.random()
    }

    draw (e) {
      !idle || this.index <= sineDots ? TweenMax.set(this.element, {
        x: this.x,
        y: this.y
      }) : (this.angleX += this.anglespeed, this.angleY += this.anglespeed, this.y = this.lockY + Math
        .sin(this.angleY) * this.range, this.x = this.lockX + Math.sin(this.angleX) * this.range,
        TweenMax.set(this.element, {
          x: this.x,
          y: this.y
        }))
    }
  }

  class Circle {
    constructor (e) {
      const t = document.getElementById(e);
      t.parentElement.removeChild(t)
    }
  }

  function init () {
    window.addEventListener("mousemove", onMouseMove), window.addEventListener("touchmove", onTouchMove),
      hoverButton = new HoverButton("button"), lastFrame += new Date, buildDots(), render()

    window.addEventListener("mouseleave", leaveMouse);

    function leaveMouse(){
      alert("mouse leave");
    }
  }


  function startIdleTimer () {
    timeoutID = setTimeout(goInactive, idleTimeout), idle = !1
  }

  function resetIdleTimer () {
    clearTimeout(timeoutID), startIdleTimer()
  }

  function goInactive () {
    idle = !0;
    for (let e of dots) e.lock()
  }

  function buildDots () {
    for (let e = 0; e < amount; e++) {
      let t = new Dot(e);
      dots.push(t)
    }
  }

  const onMouseMove = e => {
      mousePosition.x = e.clientX - width / 2, mousePosition.y = e.clientY - width / 2, resetIdleTimer()
    },
    onTouchMove = () => {
      mousePosition.x = event.touches[0].clientX - width / 2, mousePosition.y = event.touches[0].clientY - width /
        2, resetIdleTimer()
    },
    render = e => {
      positionCursor(e - lastFrame), lastFrame = e, requestAnimationFrame(render)
    },
    positionCursor = e => {
      let t = mousePosition.x,
        i = mousePosition.y;
      dots.forEach((o, s, n) => {
        let h = n[s + 1] || n[0];
        if (o.x = t, o.y = i, o.draw(e), !idle || s <= sineDots) {
          const e = .35 * (h.x - o.x),
            s = .35 * (h.y - o.y);
          t += e, i += s
        }
      })
    },
    inkTablet = window.matchMedia("(max-width: 991px)"),
    inkMobile = window.matchMedia("(max-width: 479px)"),
    inkMediaObserver = () => {
      inkMobile.matches || inkTablet.matches || cursorInit || (cursorInit = !0, init())
    };

  const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };



};




  window.onload = function() {
    if(window.innerWidth > 991) {
     noise();
     inkMediaObserver(), inkTablet.addListener(inkMediaObserver), inkMobile.addListener(inkMediaObserver);
    }
  }









// nav
$(document).ready(function(){
  $(".burger-box").on( "click", function(){
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
  });
});






var myWave = $('#wave1').wavify({
  height: 40,
  bones: 4,
  amplitude: 120,
  // color: '#FFF',
  speed: .11
});

var myWave2 = $('#wave2').wavify({
  height: 40,
  bones: 3,
  amplitude: 120,
  color: '#FFF',
  speed: .11
});

var myWave3 = $('#wave3').wavify({
  height: 40,
  bones: 5,
  amplitude: 120,
  // color: '#FFF',
  speed: .12
});

var myWave4 = $('#wave4').wavify({
  height: 40,
  bones: 3,
  amplitude: 120,
  color: '#FFF',
  speed: .13
});

var myWave5 = $('#wave5').wavify({
  height: 40,
  bones: 4,
  amplitude: 120,
  // color: '#FFF',
  speed: .12
});

var myWave6 = $('#wave6').wavify({
  height: 40,
  bones: 3,
  amplitude: 120,
  color: '#FFF',
  speed: .13
});




var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
