const feedbacks = [
    {
      img: "Image (6).png",
      name: "Robert Fox",
      role: "Business Man",
      rating: "★★★★★",
      quote: `"Thorough service! The team was punctual, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service."`
    },
    {
      img: "Image (2).png",
      name: "Erick Reynolds",
      role: "Designer",
      rating: "★★★★★",
      quote:'"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae provident recusandae quidem nihil eos qui facilis voluptatum, libero aut voluptate ea doloribus assumenda laborum odit minima vero deserunt id!"'
    },
    {
      img: "Image (3).png",
      name: "Erick Reynolds",
      role: "Engineer",
      rating: "★★★★☆",
      quote: '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae provident recusandae quidem nihil eos qui facilis voluptatum, libero aut voluptate ea doloribus assumenda laborum odit minima vero deserunt id!."'
    }
  ];
  
  let currentIndex = 0;
  const feedbackCard = document.getElementById("feedbackCard");
  
  function showFeedback(index) {
    const fb = feedbacks[index];
    feedbackCard.innerHTML = `
      <img src="${fb.img}" alt="${fb.name}">
      <h3>${fb.name}</h3>
      <p>${fb.role}</p>
      <p class="rating">${fb.rating}</p>
      <p class="quote">${fb.quote}</p>
    `;
  }
  
  
  showFeedback(currentIndex);
  

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
    showFeedback(currentIndex);
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % feedbacks.length;
    showFeedback(currentIndex);
  });