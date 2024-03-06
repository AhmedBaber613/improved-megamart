async function asynchronous() {
  try {
    //trying the code if there is an error
    const apiUrl = "https://fakestoreapi.com/products";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();

    // Assuming there's a parent container in your HTML to append all product divs to.
    // Ensure this element exists in your HTML structure.
    const parentContainer = document.querySelector(".parent-container");

    // Clear existing content in the parent container.
    parentContainer.innerHTML = "";

    data.forEach((product) => {
      const { title, description, image } = product;

      // Create a new div for each product with class 'pro-max'
      const productDiv = document.createElement("div");
      productDiv.classList.add("pro-max");

      const productTitle = document.createElement("h2");
      productTitle.textContent = title;

      const productDescription = document.createElement("p");
      productDescription.textContent = description;

      const productImage = document.createElement("img");
      productImage.src = image;
      productImage.classList.add("img");

      // Append the title, description, and image to the new product div
      productDiv.appendChild(productImage);
      productDiv.appendChild(productTitle);
      productDiv.appendChild(productDescription);

      // Append the new product div to the parent container
      parentContainer.appendChild(productDiv);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

asynchronous();
