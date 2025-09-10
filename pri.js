const pricingPlans = [
    {
      name: "Basic Package",
      price: "$59.00/Monthly",
      highlight: false,
      features: [
        "Dusting of all surfaces",
        "Sweeping and mopping floors",
        "Vacuuming carpets and rugs",
        "Cleaning of kitchen surfaces",
        "Cleaning of bathroom surfaces",
        "Emptying trash bins"
      ]
    },
    {
      name: "Enterprise Package",
      price: "$69.00/Monthly",
      highlight: true,
      features: [
        "All services in the Basic Plan",
        "Detailed dusting",
        "Wiping down kitchen appliances",
        "Cleaning inside the microwave",
        "Changing bed linens",
        "Spot cleaning walls and doors"
      ]
    },
    {
      name: "Premium Package",
      price: "$99.00/Monthly",
      highlight: false,
      features: [
        "All services in the Clean Plan",
        "Deep cleaning of kitchen appliances",
        "Baseboards, door frames, & vents",
        "Organization of closets & pantries",
        "Carpet, upholstery spot cleaning",
        "Detailed bathroom cleaning"
      ]
    }
  ];
  
  const pricingContainer = document.getElementById("pricingCards");
  
  
  pricingPlans.forEach(plan => {
    const card = document.createElement("div");
    card.classList.add("pricing-card");
  
    const featuresList = plan.features.map(f => `<li>${f}</li>`).join("");
  
    card.innerHTML = `
      <h3 style="padding: 20px;">${plan.name}</h3>
      <button class="mont" style="background-color:#36B864;">${plan.price}</button>
      <ul>${featuresList}</ul>
      <button style="${plan.highlight ? 'background-color:#36B864;color:#fff;' : ''}">Book Now</button>
    `;
  
    pricingContainer.appendChild(card);
  });