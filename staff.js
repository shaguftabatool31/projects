
const staffMembers = [
  {
    img: "Image (2).png",
    alt: "Erick Reynolds",
    name: "Erick Reynolds",
    stars: "★★★★★",
    desc: "He is an expert cleaning staff member<br> who provides thorough cleaning with<br> precision.",
    socials: [
      { icon: "f", link: "#" },
      { icon: "x", link: "#" },
      { icon: "in", link: "#" }
    ]
  },
  {
    img: "Image (3).png",
    alt: "Erick Reynolds",
    name: "Erick Reynolds",
    stars: "★★★★★",
    desc: "He is an expert cleaning staff member<br> who provides thorough cleaning with<br> precision.",
    socials: [
      { icon: "f", link: "#" },
      { icon: "x", link: "#" },
      { icon: "in", link: "#" }
    ]
  },
  {
    img: "last.png",
    alt: "Erick Reynolds",
    name: "Erick Reynolds",
    stars: "★★★★★",
    desc: "He is an expert cleaning staff member who provides thorough cleaning with precision.",
    socials: [
      { icon: "f", link: "#" },
      { icon: "x", link: "#" },
      { icon: "in", link: "#" }
    ]
  }
];


const staffContainer = document.getElementById("staff");

staffMembers.forEach(staff => {
  const card = document.createElement("div");
  card.classList.add("staff-card");

 
  const socialLinks = staff.socials
    .map(s => `<a href="${s.link}">${s.icon}</a>`)
    .join("");

  card.innerHTML = `
    <img src="${staff.img}" alt="${staff.alt}">
    <h3>${staff.name}</h3>
    <div class="stars">${staff.stars}</div>
    <p>${staff.desc}</p>
    <div class="social-links">
      ${socialLinks}
    </div>
  `;

  staffContainer.appendChild(card);
});

