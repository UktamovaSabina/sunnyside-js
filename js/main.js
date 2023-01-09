// HEADER

const header = document.querySelector("#header");

const headerContainer = document.createElement("div");
headerContainer.classList.add("container", "header-container")

const navWrapper = document.createElement("div");
navWrapper.classList.add("nav-wrapper");

const headerLogo = document.createElement("a");
headerLogo.setAttribute("href", "/");

const hedearLogoImg = document.createElement("img");
hedearLogoImg.setAttribute("src", "images/logo.svg");
hedearLogoImg.setAttribute("alt", "logo of the site");

const navbar = document.createElement("ul");
navbar.classList.add("navbar");

// BURGER FUNCTIONS

const burger = document.createElement("div");
burger.classList.add("burger");

const burgerList = document.createElement("ul")
burgerList.classList.add("burger-list", "d-none");

burger.addEventListener("click", () => {
    burgerList.classList.toggle("d-none");
});

let navbarChoices = ["About", "Services", "Projects", "Contact"];

function writeToNavbar() {
    navbarChoices.forEach((choice) => {
        navbar.innerHTML += `<li><a class="navbar-item-link" href="#">${choice}</a></li>`
    })
}
function writeToBurger() {
    navbarChoices.forEach((choice) => {
        burgerList.innerHTML += `<li><a class="burger-list-item" href="#">${choice}</a></li>`
    })
}

const headerHeading = document.createElement("h2");
headerHeading.textContent = 'We are creatives';
headerHeading.classList.add("header-heading");

/* MAIN / SECTIONS */

// SECTION-1

const main = document.querySelector("#main");
const section1 = document.createElement("section");

const mainContainer = document.createElement("div");
mainContainer.classList.add("container");

// wrapper-1 BRAND-PART

const wrapper1 = document.createElement("div");
wrapper1.classList.add("wrapper1");

const brandPart = document.createElement("div");
brandPart.classList.add("brand-part");

const brandPart_info = document.createElement("div");
brandPart_info.classList.add("brand-part__info");

const wrapper1_h3 = document.createElement("h3");
wrapper1_h3.classList.add("intro-section__heading");
wrapper1_h3.textContent = "Transform your brand";

const wrapper1_p = document.createElement("p");
wrapper1_p.classList.add("intro-section__paragraph");
wrapper1_p.textContent = "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.";

const wrapper1_btn = document.createElement("a");
wrapper1_btn.setAttribute("href", "#");
wrapper1_btn.classList.add("intro-section__link", "brand-btn");
wrapper1_btn.textContent = "LEARN MORE";

const wrapper1_img = document.createElement("img");
wrapper1_img.classList.add("egg-img");
wrapper1_img.setAttribute("src", "images/egg.png");
wrapper1_img.setAttribute("alt", "egg");
wrapper1_img.setAttribute("width", "720");

// wrapper-2 AUDIENCE-PART

const wrapper2 = document.createElement("div");
wrapper2.classList.add("wrapper2");

const wrapper2_img = document.createElement("img");
wrapper2_img.classList.add("cup-img")
wrapper2_img.setAttribute("src", "images/red-cup.png");
wrapper2_img.setAttribute("alt", "red-cup");
wrapper2_img.setAttribute("width", "720");

const audiencePart = document.createElement("div");
audiencePart.classList.add("audience-part");

const audiencePart_info = document.createElement("div");
audiencePart_info.classList.add("audience-part__info");

const wrapper2_h3 = document.createElement("h3");
wrapper2_h3.classList.add("intro-section__heading");
wrapper2_h3.textContent = "Stand out to the right audience";

const wrapper2_p = document.createElement("p");
wrapper2_p.classList.add("intro-section__paragraph");
wrapper2_p.textContent = "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.";

const wrapper2_btn = document.createElement("a");
wrapper2_btn.textContent = "LEARN MORE";
wrapper2_btn.setAttribute("href", "#");
wrapper2_btn.classList.add("intro-section__link", "audience-btn");

// wrapper-3 GRAPHIC DESIGN AND PHOTOGRAPHY

const wrapper3 = document.createElement("div");
wrapper3.classList.add("wrapper3");

let wrapper3_items = [
    {
        heading: "Graphic Design",
        paragraph: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
        bgImg: "images/cherry.png",
        color: "#24554A"
    },
    {
        heading: "Photography",
        paragraph: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        bgImg: "images/orange.png",
        color: "#052C3B"
    }
]

function writeToWrapper3() {
    wrapper3_items.forEach((item) => {
        wrapper3.innerHTML += `
        <div class="photo-design" style="color: ${item.color};background-image: url(${item.bgImg});">
        <div class="photo-design__info">
        <h4>${item.heading}</h4>
        <p>${item.paragraph}</p>
        </div>
        </div>
        `
    })
}

// SECTION-2

const section2 = document.createElement("section");

const mainContainer2 = document.createElement("div");
mainContainer2.classList.add("container", "testimonials-container");

const testimonialsHeading = document.createElement("h2");
testimonialsHeading.textContent = "CLIENT TESTIMONIALS";

const testimonialsList = document.createElement("ul");
testimonialsList.classList.add("testimonials-list");

let clients = [
    {
        img: "images/emily.png",
        paragraph: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        occupncy: "Marketing Director"
    },
    {
        img: "images/thomas.png",
        paragraph: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        occupncy: "Chief Operating Officer"
    },
    {
        img: "images/jennie.png",
        paragraph: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: "Jennie F.",
        occupncy: "Business Owner"
    }
];

function writeTestimonials() {

    clients.forEach((client) => {
        testimonialsList.innerHTML += `
        <li class="testimonials-list__item">
        <img src="${client.img}" alt="the photo of user" width="72">
        <p>${client.paragraph}</p>
        <h4>${client.name}</h4>
        <h5>${client.occupncy}</h5>
        </li>
        `
    })

}

const testimonialSection_pics = document.createElement("div");
testimonialSection_pics.classList.add("testimonial-section__pics");

let pictures = ["images/bottles-of-milk.jpg", "images/orange-in-plate.jpg", "images/waffle-icecream.jpg", "images/cube-sugar.jpg"]

function setPictures() {
    pictures.forEach((picture) => {
        testimonialSection_pics.innerHTML += `
            <img src="${picture}" alt="creative picture">
            `
    })
}

// FOOTER

const footer = document.querySelector("#footer");
const footerContainer = document.createElement("div");
footerContainer.classList.add("container", "footer-container");

const footerLogo = document.createElement("a");
footerLogo.setAttribute("href", "#");
footerLogo.classList.add("footer-logo");

const footerLogoImg = document.createElement("img");
footerLogoImg.setAttribute("src", "images/footer-logo.svg");
footerLogoImg.setAttribute("alt", "logo og the site");

const footerNav = document.createElement("ul");
footerNav.classList.add("footer-nav");

let footerList = ["About", "Services", "Projects"];
function writeFooterNav() {
    footerList.forEach((item) => {
        footerNav.innerHTML += `
        <li><a href="#" class="footer-nav__item">${item}</a></li>
        `
    })
};

const footerLinks = document.createElement("ul");
footerLinks.classList.add("footer-links");

let links = ["images/facebook.svg", "images/instagram.svg", "images/twitter.svg", "images/pinterest.svg"];
function writeFooterLinks() {
    links.forEach((link) => {
        footerLinks.innerHTML += `
        <li><a href="#"><img class="footer-media" src="${link}" alt="link of media"></a></li>
        `
    })
}

header.appendChild(headerContainer);
headerContainer.appendChild(navWrapper);
headerContainer.appendChild(burgerList);
headerContainer.appendChild(headerHeading);
navWrapper.appendChild(headerLogo);
headerLogo.appendChild(hedearLogoImg);
navWrapper.appendChild(navbar);
navWrapper.appendChild(burger);
main.appendChild(section1);
section1.appendChild(mainContainer);
mainContainer.appendChild(wrapper1);
wrapper1.appendChild(brandPart);
wrapper1.appendChild(wrapper1_img);
brandPart.appendChild(brandPart_info);
brandPart_info.appendChild(wrapper1_h3);
brandPart_info.appendChild(wrapper1_p);
brandPart_info.appendChild(wrapper1_btn);
mainContainer.appendChild(wrapper2);
wrapper2.appendChild(wrapper2_img);
wrapper2.appendChild(audiencePart);
audiencePart.appendChild(audiencePart_info);
audiencePart_info.appendChild(wrapper2_h3);
audiencePart_info.appendChild(wrapper2_p);
audiencePart_info.appendChild(wrapper2_btn);
mainContainer.appendChild(wrapper3);
main.appendChild(section2);
section2.appendChild(mainContainer2);
mainContainer2.appendChild(testimonialsHeading);
mainContainer2.appendChild(testimonialsList);
mainContainer2.appendChild(testimonialSection_pics);
footer.appendChild(footerContainer);
footerContainer.appendChild(footerLogo);
footerLogo.appendChild(footerLogoImg);
footerContainer.appendChild(footerNav);
footerContainer.appendChild(footerLinks);

document.body.onload = () => {
    writeToNavbar();
    writeToBurger();
    writeToWrapper3();
    writeTestimonials();
    setPictures();
    writeFooterNav();
    writeFooterLinks();
}