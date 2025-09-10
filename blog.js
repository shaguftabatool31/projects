const blogs = [
    {
      img: "E1.jpg",
      alt: "Eco-Friendly Cleaning",
      author: "JOHN HELTON",
      date: "JAN 6, 2025",
      title: "Eco-Friendly Cleaning: How<br> We Keep Your Home Green",
      desc: "Learn about our commitment to eco<br>-friendly practices. We share the eco<br>-conscious products...",
      type: "link", 
      link: "#"
    },
    {
      img: "E2.jpg",
      alt: "Maintain a Clean Home",
      author: "JOHN HELTON",
      date: "JAN 6, 2025",
      title: "How to Maintain a Clean Home<br> Between Professional Visits",
      desc: "Get practical advice on maintaining <br>cleanliness between our scheduled visits<br>. These easy-to-follow tips...",
      type: "button", 
      link: "#"
    },
    {
      img: "E3.jpg",
      alt: "Benefits of Regular Cleaning",
      author: "JOHN HELTON",
      date: "JAN 6, 2025",
      title: "The Benefits of Regular<br> Professional Cleaning",
      desc: "Understand the numerous advantages of <br>scheduling regular professional cleanings<br>. From improving indoor air...",
      type: "link",
      link: "#"
    }
  ];
  
  const blogContainer = document.getElementById("blogSection");
  
  
  blogs.forEach(blog => {
    const card = document.createElement("div");
    card.classList.add(blog.type === "button" ? "blog-card" : "blc");
  
    
    let actionElement = "";
    if (blog.type === "button") {
      actionElement = '<button style="background-color:green" class="thirdb">Read More</button>';
    } else {
      actionElement = '<a href="${blog.link}" style="color:#666666">Read more</a>';
    }
  
    card.innerHTML = `
      <img src="${blog.img}" alt="${blog.alt}">
      <h6 style="color:#666666;">${blog.author} ${blog.date}</h6>
      <h3>${blog.title}</h3>
      <p>${blog.desc}</p>
      ${actionElement}
    `;
  
    blogContainer.appendChild(card);
  });