// Define the companyData array
const companyData = [{
        "logo": "https://cdn-icons-png.flaticon.com/512/5968/5968753.png",
        "name": "Wix",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "Authentication",
            "class": "violetbaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "In30minutes",
        "meatClass": "greenbaco"

    },
    {
        "logo": "https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg",
        "name": "Shopify",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "Ecommerce",
            "class": "pinkbaco"
        }, {
            "data": "B2B",
            "class": "yellowbaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "Tomorrow",
        "meatClass": "greenbaco"
    },
    {
        "logo": "https://www.drupal.org/files/project-images/MC_Logo_0.jpg",
        "name": "MailChimp",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "SAAS",
            "class": "greenbaco"
        }, {
            "data": "B2B",
            "class": "yellowbaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "Tomorrow",
        "meatClass": "greenbaco"
    },
    {
        "logo": "data:image/png;base64,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",
        "name": "PayPal",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "MarketPlace",
            "class": "greenbaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "In8Hours",
        "meatClass": "bluebaco"
    },
    {
        "logo": "https://yt3.googleusercontent.com/gXnRNuCTSnH-3gJW03EIYzHV3nADigi_R07nWUq3L4KftIuy0hyYrkeIkRR0PzS9PmG2x9LT8g=s900-c-k-c0x00ffffff-no-rj",
        "name": "Disney",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "B2B",
            "class": "yellowbaco"
        }, {
            "data": "Publishing",
            "class": "ygbaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "InanHour",
        "meatClass": "greenbaco"
    },
    {
        "logo": "https://play-lh.googleusercontent.com/yMNajav1zL1AvKtDN0CrCX-r4yKiyuWRAfo8nj_oCxg8Ha9_VLMCgW_CGvd5pR932Zam",
        "name": "Intercom",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "SAAS",
            "class": "greenbaco"
        }, {
            "data": "Intercom",
            "class": "violetbaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "In30minutes",
        "meatClass": "greenbaco"
    },
    {
        "logo": "data:image/png;base64,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",
        "name": "Evernote",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "Transportation",
            "class": "yellowbaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "NextMonth",
        "meatClass": "greybaco"
    },
    {
        "logo": "https://developer.microsoft.com/_devcom/images/logo-ms-social.png",
        "name": "Microsoft",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "Publishing",
            "class": "yellowbaco"
        }, {
            "data": "B2C",
            "class": "ygbaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "Tomorrow",
        "meatClass": "bluebaco"
    },
    {
        "logo": "https://avatars.githubusercontent.com/u/1536893?s=280&v=4",
        "name": "Invision",
        "description": "A simple description.",
        "members": [
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNF8xLmpwZw.jpg",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0yMC5wbmc.png",
            "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png"
        ],
        "categories": [{
            "data": "WebServices",
            "class": "bluebaco"
        }],
        "tags": ["#abc"],
        "nextmeating": "NoContact",
        "meatClass": "redbaco"
    }
];

// Select DOM elements
let closenav = document.querySelector(".close-nav");
let opennav = document.querySelector(".open-nav");
let navsection = document.querySelector(".left");
let table = document.getElementById("tabledata");
let down = document.getElementsByClassName("fa-chevron-down");
let up = document.getElementsByClassName("fa-chevron-up");
let list = document.getElementsByClassName("list");
let li = document.getElementsByTagName("li");
let vallength = companyData.length; // Initialize vallength with companyData length

// close side nav bar
closenav.addEventListener("click", () => {
    navsection.style.left = `-${navsection.offsetWidth}px`;
    closenav.style.display = "none";
    opennav.style.display = "flex";
});

// open sidenavbar
opennav.addEventListener("click", () => {
    navsection.style.left = "10px";
    closenav.style.display = "flex";
    opennav.style.display = "none";
});

// for dropdown icons on clicking property changes
for (let i = 0; i < 3; i++) {
    down[i].addEventListener("click", () => {
        list[i].style.display = "flex";
        li[i].style.height = "116px";
        down[i].style.display = "none";
        up[i].style.display = "flex";
    })
    up[i].addEventListener("click", () => {
        list[i].style.display = "none";
        li[i].style.height = "23px";
        up[i].style.display = "none";
        down[i].style.display = "flex";
    });
}

// Populate table with company data
// Populate table with company data
companyData.forEach((company) => {
    let row = document.createElement("div");
    row.className = "row";
    let span1 = document.createElement("span");
    span1.className = "d-flex align-center gap-3 fixed scroll";
    let span2 = document.createElement("span");
    span2.className = "w-20  gap-3 fixed scroll";
    let span3 = document.createElement("span");
    span3.className = "w-15 gap-3 fixed scroll";
    let span4 = document.createElement("span");
    span4.className = "w-20";
    let span5 = document.createElement("span");
    span5.className = "w-15 scroll";
    let span6 = document.createElement("span");
    span6.className = "w-15";
    let span7 = document.createElement("span");
    span7.className = "w-6";

    span1.innerHTML = `<input type="checkbox"> <img src=${company.logo}> ${company.name}`;
    span2.innerHTML = `<p> ${company.description} </p>`;

    // Dynamically generate members section
    let membersSection = document.createElement("div");
    membersSection.className = "members";
    if (Array.isArray(company.members)) {
        company.members.forEach((memberImageUrl) => {
            let memberImage = document.createElement("img");
            memberImage.src = memberImageUrl;
            membersSection.appendChild(memberImage);
        });
    }
    span3.appendChild(membersSection);

    span4.innerHTML = company.categories.map(val => `<span class="${val.class}"> ${val.data} </span>`);
    span5.innerHTML = company.tags.map(val => `<span class="greybaco"> ${val} </span>`);
    span6.innerHTML = `<span class="${company.meatClass}"> ${company.nextmeating} </span>`;
    span7.innerHTML = "";
    row.appendChild(span1);
    row.appendChild(span2);
    row.appendChild(span3);
    row.appendChild(span4);
    row.appendChild(span5);
    row.appendChild(span6);
    row.appendChild(span7);
    table.appendChild(row);
});

// for searching data available in table with respect to name
function searchdata() {
    let searchstr = document.getElementById("search").value;
    searchstr = searchstr.toLowerCase();
    let row = document.getElementsByClassName("row");

    for (let i = 0; i < vallength; i++) {
        if (!row[i].innerHTML.toLowerCase().includes(searchstr)) {
            row[i].style.display = "none";
        } else {
            row[i].style.display = "flex";
        }
    }
}
