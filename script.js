document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const city = document.getElementById('location').value;
    const squareFeet = document.getElementById('area').value;
  
    if (!city || !squareFeet) {
      alert("Please fill in both the city and square feet.");
      return;
    }
  
    // Define the price multiplier for each city
    const cityPriceMultipliers = {
      AnnaNagar: 10,
      Adayar: 9,
      TNagar: 8,
      Velachery: 7,
      Tambaram: 9,
      Nungambakkam: 8,
      Mylapore: 7,
      Kodambakkam: 8,
      Guindy: 7,
      Perambur: 6
    };
  
    // Get the price multiplier for the selected city
    const multiplier = cityPriceMultipliers[city];
  
    // Calculate the price using the selected city's multiplier
    const price = squareFeet * multiplier;
  
    // Display the calculated price
    document.getElementById('price').textContent = `₹${price.toLocaleString()}`;
  });
  
  // script.js

  // script.js
