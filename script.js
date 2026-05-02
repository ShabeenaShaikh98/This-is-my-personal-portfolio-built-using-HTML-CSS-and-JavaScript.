$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY > 60){
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});

document.addEventListener('visibilitychange', function(){
    if(document.visibilityState === "visible"){
        document.title = "Portfolio | Shabeena Shaikh";
    } else {
        document.title = "Come Back To Portfolio";
    }
});

// typed.js effect
var typed = new Typed(".typing-text", {
    strings: ["Full Stack Development", "Django & Python", "AI/ML Projects", "Web Applications", "Clean Code"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// vanilla tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// particles.js config
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00aced" },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 5, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "repulse": { "distance": 200 },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});

// skills data
const skills = [
    { name: "HTML5",      icon: "fab fa-html5",       color: "#e34f26" },
    { name: "CSS3",       icon: "fab fa-css3-alt",    color: "#1572b6" },
    { name: "JavaScript", icon: "fab fa-js",           color: "#f7df1e" },
    { name: "Bootstrap",  icon: "fab fa-bootstrap",   color: "#7952b3" },
    { name: "Python",     icon: "fab fa-python",      color: "#3776ab" },
    { name: "Django",     icon: "fas fa-cogs",        color: "#092e20" },
    { name: "REST API",   icon: "fas fa-plug",        color: "#0f46a2" },
    { name: "PostgreSQL", icon: "fas fa-database",    color: "#336791" },
    { name: "MySQL",      icon: "fas fa-database",    color: "#4479a1" },
    { name: "Git",        icon: "fab fa-git-alt",     color: "#f05032" },
    { name: "GitHub",     icon: "fab fa-github",      color: "#fff" },
    { name: "AI / ML",    icon: "fas fa-brain",       color: "#ff6b6b" },
    { name: "Photoshop",  icon: "fas fa-paint-brush", color: "#31a8ff" },
    { name: "AG Grid",    icon: "fas fa-table",       color: "#00c0ff" },
    { name: "Linux",      icon: "fab fa-linux",       color: "#fcc624" },
    { name: "VS Code",    icon: "fas fa-code",        color: "#007acc" },
    { name: "Figma",      icon: "fab fa-figma",       color: "#f24e1e" },
    { name: "Excel",      icon: "fas fa-file-excel",  color: "#217346" },
];

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <i class="${skill.icon}" style="color:${skill.color}"></i>
                <span>${skill.name}</span>
            </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

showSkills(skills);

// EmailJS contact form
$("#contact-form").submit(function(event){
    event.preventDefault();
    emailjs.init("YOUR_PUBLIC_KEY");
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contact-form')
        .then(function(response){
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();
            alert("Message Sent Successfully!");
        }, function(error){
            console.log('FAILED...', error);
            alert("Failed to send message. Please try again.");
        });
});

// ScrollReveal animations
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srtop.reveal('.home .content h3',  {delay: 200});
srtop.reveal('.home .content p',   {delay: 200});
srtop.reveal('.home .content .btn',{delay: 200});
srtop.reveal('.home .linkedin',    {interval: 600});
srtop.reveal('.home .github',      {interval: 800});
srtop.reveal('.home .gmail',       {interval: 1000});

srtop.reveal('.about .content h3',            {delay: 300});
srtop.reveal('.about .content .tag',          {delay: 400});
srtop.reveal('.about .content p',             {delay: 300});
srtop.reveal('.about .content .box-container',{delay: 300});
srtop.reveal('.about .content .resumebtn',    {delay: 300});

srtop.reveal('.education .box',    {interval: 200});
srtop.reveal('.education .cert-box',{interval: 150});

srtop.reveal('.work .box',         {interval: 200});

srtop.reveal('.experience .timeline',          {delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400});

srtop.reveal('.contact .container',       {delay: 400});
srtop.reveal('.contact .container .field',{delay: 400});
