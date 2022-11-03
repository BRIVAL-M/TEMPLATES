//_____________________________________________ NAV BAR 1 circle START
const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink))
//________________________________________ NAV BAR 1 circle END

//______________________________________________________________ DIGITAL CLOCK START
setInterval(()=>{
    let hh = document.getElementById('hh');
    let mn = document.getElementById('mn');
    let ss = document.getElementById('ss');
    
    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');

    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');

    let ampm = document.getElementById('ampm')

    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "Après midi" : "Matin";
    // convert 24h clock to 12h clock
    // if (h > 12){
    //     h = h -12
    // }
    // add 0 before single digit number
    // h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML=h  +" :";
    minutes.innerHTML=m +" :";
    seconds.innerHTML=s;
    ampm.innerHTML= am;

    hh.style.strokeDashoffset = 510 - (510 * h) / 24;// 24 hours clock
    mn.style.strokeDashoffset = 630 - (630 * m) / 60;// 60mn
    ss.style.strokeDashoffset = 760 - (760 * s) / 60; // 60ss 
    
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;//360/60sec
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;//360/60min
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`;//360/60min
})

// DIGITAL CLOCK END
