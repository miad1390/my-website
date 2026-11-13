
/* ورود به وب‌سایت */
function enterSite() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
}

/* ساعت و تاریخ */
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("fa-IR");

    document.getElementById("date").textContent =
        now.toLocaleDateString("fa-IR");
}

updateClock();
setInterval(updateClock, 1000);

/* بخش‌های وب‌سایت */
function showPage(page) {
    const content = document.getElementById("content");
    const pageContent = document.getElementById("pageContent");

    const pages = {

        profile: `
            <div class="profile-card">

                <div class="profile-avatar">MA</div>

               
<div class="profile-card">

    <div class="profile-avatar">MA</div>

    <h2>درباره من | میعاد عابد</h2>
    <p class="english-subtitle">About Me | Miad Abed</p>

    <div class="profile-line"></div>

    <p>
        سلام! من میعاد عابد هستم، ۱۵ ساله.
        در حال حاضر دانش‌آموز پایه دهم رشته کامپیوتر هستم.
    </p>
    <p class="english-subtitle" dir="ltr">
        Hello! My name is Miad Abed, and I am 15 years old.
        I am currently a tenth-grade computer science student.
    </p>

    <p>
        از کودکی به دنیای تکنولوژی علاقه داشتم؛
        به‌خصوص گوشی‌های هوشمند، لپ‌تاپ و دنیای کامپیوتر.
        همین علاقه باعث شد رشته کامپیوتر رو
        برای ادامه تحصیل انتخاب کنم.
    </p>
    <p class="english-subtitle" dir="ltr">
        I have been interested in technology since childhood,
        especially smartphones, laptops, and computers.
        This interest inspired me to choose computer studies
        for my education.
    </p>

    <p>
        در ابتدا به تدوین و ویرایش ویدیو علاقه‌مند بودم،
        اما بعد از آشنایی با طراحی سایت، این حوزه توجه من رو
        بیشتر از قبل به خودش جلب کرد.
        حالا بخش زیادی از زمانم رو به یادگیری طراحی وب
        اختصاص می‌دم و از نرم‌افزار Visual Studio Code
        برای نوشتن و ویرایش کدها استفاده می‌کنم.
    </p>
    <p class="english-subtitle" dir="ltr">
        At first, I was interested in video editing.
        However, after discovering web design, I became
        even more interested in this field.
        Now I spend much of my time learning web development
        and use Visual Studio Code to write and edit code.
    </p>

    <p>
        علاوه بر طراحی سایت، به نگهداری، عیب‌یابی و تعمیر
        سیستم‌های کامپیوتری هم علاقه دارم.
        همیشه دوست دارم چیزهای تازه یاد بگیرم،
        مهارت‌هام رو گسترش بدم و ایده‌هام رو
        به پروژه‌های واقعی تبدیل کنم.
    </p>
    <p class="english-subtitle" dir="ltr">
        Besides web design, I am also interested in
        maintaining, troubleshooting, and repairing computer systems.
        I always enjoy learning new things, improving my skills,
        and turning my ideas into real projects.
    </p>

    <p>
        در کنار علاقه‌مندی‌های فنی، از وقت‌گذرانی
        با دوستانم و تجربه‌کردن چیزهای جدید لذت می‌برم.
    </p>
    <p class="english-subtitle" dir="ltr">
        Alongside my technical interests, I enjoy spending
        time with my friends and experiencing new things.
    </p>

    <h3>هدف من</h3>
    <p class="english-subtitle">My Goal</p>

    <p>
        اینه که در آینده به یک طراح وب حرفه‌ای تبدیل بشم،
        وب‌سایت‌هایی زیبا، کاربردی و باکیفیت بسازم
        و از راه علاقه و مهارتم به درآمد برسم.
    </p>
    <p class="english-subtitle" dir="ltr">
        My goal is to become a professional web designer,
        create beautiful, useful, and high-quality websites,
        and earn an income through my passion and skills.
    </p>

    <p>
        به مسیری که انتخاب کردم افتخار می‌کنم و می‌دونم
        برای رسیدن به هدف‌هام باید قدم‌به‌قدم
        یاد بگیرم و پیشرفت کنم.
    </p>
    <p class="english-subtitle" dir="ltr">
        I am proud of the path I have chosen.
        I know that reaching my goals requires me to
        keep learning and improving step by step.
    </p>

    <div class="profile-tag">
        به اولین وب‌سایت شخصی من خوش آمدید!
    </div>
    <p class="english-subtitle" dir="ltr">
        Welcome to my first personal website!
    </p>

</div>

        `,

        projects: `
            <h2>پروژه‌های من</h2>
            <p>
                اینجا محل نمایش پروژه‌هایی است که در مسیر یادگیری
                طراحی وب و کامپیوتر می‌سازم.
            </p>
        `,

        skills: `
            <h2>مهارت‌های من</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript - در حال یادگیری</p>
            <p>Visual Studio Code</p>
        `,

        contact: `
            <h2>ارتباط با من</h2>
            <p>
                به‌زودی راه‌های ارتباطی من در این بخش قرار می‌گیرند.
            </p>
        `
    };

    pageContent.innerHTML = pages[page] || "";
    content.classList.remove("hidden");

    content.scrollIntoView({
        behavior: "smooth"
    });
}

/* بازگشت به صفحه اصلی */
function backHome() {
    document.getElementById("content").classList.add("hidden");

    document.querySelector(".welcome-text").scrollIntoView({
        behavior: "smooth"
    });
}

/* نور دنبال‌کننده موس */
document.addEventListener("mousemove", function(event) {
    const glow = document.getElementById("mouse-glow");

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
});

/* ذرات متحرک پس‌زمینه */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < 40; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#00bfff";
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const button = document.getElementById("themeToggle");

    if (document.body.classList.contains("light-mode")) {
        button.textContent = "🌙 حالت شب";
    } else {
        button.textContent = "☀️ حالت روز";
    }
}
