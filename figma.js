
const services = [
  {
    img: "Image1.png",
    alt: "Office Cleaning",
    title: "Office Cleaning",
    desc: "While we can customize your cleaning plan to <br>suit your needs, most clients schedule regular<br> cleaning services.",
    btnColor: "#e6e8e6"
  },
  {
    img: "Image2.png",
    alt: "Spring Cleaning",
    title: "Spring Cleaning",
    desc: "While we can customize your cleaning plan to<br> suit your needs, most clients schedule regular<br> cleaning services.",
    btnColor: "#36B864"
  },
  {
    img: "Image3.png",
    alt: "House Cleaning",
    title: "House Cleaning",
    desc: "While we can customize your cleaning plan to <br>suit your needs, most clients schedule regular<br> cleaning services.",
    btnColor: "#e6e8e6"
  }
];


const container = document.getElementById("services");


services.forEach(service => {
  const card = document.createElement("div");
  card.classList.add("service-card");

  card.innerHTML = `
    <img src="${service.img}" alt="${service.alt}">
    <h3>${service.title}</h3>
    <p>${service.desc}</p>
    <button class="book-btn" style="background-color:${service.btnColor}">
      Book Now <i class='bx bx-arrow-right'></i>
    </button>
  `;

  container.appendChild(card);
});
