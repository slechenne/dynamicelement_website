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
    window.addEventListener("mousemove", onMouseMove),
       lastFrame += new Date, buildDots(), render()

    document.addEventListener('mouseleave', function (e) {
      cursor.style.display = "none";
    }, false);

    document.addEventListener('mouseenter', function (e) {
  		cursor.style.display = "block";
  	}, false);

    $(document).on('mouseenter', 'a, .cursor_hover, input, textarea', function() {
      $("#cursor").addClass('hover');
    });
    $(document).on('mouseleave', 'a, .cursor_hover, input, textarea', function() {
      $("#cursor").removeClass('hover');
    });



    $( ".blue-box" ).hover(function(){
      $("#cursor").toggleClass('blue-hover');
    });


    window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());

    if (window.isMobile === true) {
    	cursor.style.display = "none";

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
    if(window.innerWidth > 1) {
     noise();
     init();
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



// blob


var blob1 = createBlob({
  element: document.querySelector("#blob_path"),
  numPoints: 15,
  centerX: 800,
  centerY: 500,
  minRadius: 230,
  maxRadius: 290,
  minDuration: 3,
  maxDuration: 5
});


var blob2 = createBlob({
  element: document.querySelector("#blob_path2"),
  numPoints: 15,
  centerX: 500,
  centerY: 500,
  minRadius: 430,
  maxRadius: 490,
  minDuration: 3,
  maxDuration: 5
});



function createBlob(options) {

  var points = [];
  var path = options.element;
  var slice = (Math.PI * 2) / options.numPoints;
  var startAngle = random(Math.PI * 2);

  var tl = new TimelineMax({
    onUpdate: update
  });

  for (var i = 0; i < options.numPoints; i++) {

    var angle = startAngle + i * slice;
    var duration = random(options.minDuration, options.maxDuration);

    var point = {
      x: options.centerX + Math.cos(angle) * options.minRadius,
      y: options.centerY + Math.sin(angle) * options.minRadius
    };

    var tween = TweenMax.to(point, duration, {
      x: options.centerX + Math.cos(angle) * options.maxRadius,
      y: options.centerY + Math.sin(angle) * options.maxRadius,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut
    });

    tl.add(tween, -random(duration));
    points.push(point);
  }

  options.tl = tl;
  options.points = points;

  function update() {
    path.setAttribute("d", cardinal(points, true, 1));
  }

  return options;
}

// Cardinal spline - a uniform Catmull-Rom spline with a tension option
function cardinal(data, closed, tension) {

  if (data.length < 1) return "M0 0";
  if (tension == null) tension = 1;

  var size = data.length - (closed ? 0 : 1);
  var path = "M" + data[0].x + " " + data[0].y + " C";

  for (var i = 0; i < size; i++) {

    var p0, p1, p2, p3;

    if (closed) {
      p0 = data[(i - 1 + size) % size];
      p1 = data[i];
      p2 = data[(i + 1) % size];
      p3 = data[(i + 2) % size];

    } else {
      p0 = i == 0 ? data[0] : data[i - 1];
      p1 = data[i];
      p2 = data[i + 1];
      p3 = i == size - 1 ? p2 : data[i + 2];
    }

    var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
    var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

    var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
    var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

    path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
  }

  return closed ? path + "z" : path;
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}





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









function init_blender() {
  const canvas = document.querySelector('#padlock');


  renderer = new THREE.WebGLRenderer({canvas, alpha: true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.setClearColor( 0x000000, 0 );

  scene = new THREE.Scene();


  camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
  camera.rotation.x = 0.0;
  camera.rotation.y = 0.0;
  camera.rotation.z = 0.0;
  camera.position.x = 0;
  camera.position.y = 2.5;
  camera.position.z = 35;


  // var controls = new THREE.OrbitControls( camera, renderer.domElement);

  hlight = new THREE.AmbientLight (0x404040,100);
  scene.add(hlight);

  light = new THREE.PointLight(0xffffff,6);
  light.position.set(5000,1000,0);
  scene.add(light);


  light2 = new THREE.PointLight(0xffffff,5);
  light2.position.set(-5000,3000,5000);
  scene.add(light2);


  let loader = new THREE.GLTFLoader();

  loader.load('blender/padlock.gltf', function(gltf){
    padlock = gltf.scene.children[3];
    scene.add(gltf.scene);
    animate();
  });
}


var angularSpeed = 0.1;
var lastTime = 0;

function animate() {
  var time = (new Date()).getTime();
  var timeDiff = time - lastTime;
  var angularChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
  padlock.rotation.z += angularChange;
  // camera.position.z += angularChange;
  lastTime = time;

  renderer.render(scene,camera);

  requestAnimationFrame(function(){
    animate();
  });
}



init_blender();
