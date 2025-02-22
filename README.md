# React E-Commerce Application

## Live Demo

[View the Project](https://ecommercereacttask.netlify.app/)

## Overview

This is a fully functional eCommerce web application built with React, featuring a dynamic UI and seamless user experience. The app fetches product data from an external API and provides an intuitive shopping interface.

## Features

- Product listing with dynamic data fetching
- Shopping cart management
- User authentication (if implemented)
- Responsive UI using Bootstrap and Material UI
- Notifications and alerts with React Hot Toast
- Image sliders for featured products

## Tech Stack

- **React**: Core framework for building the UI.
- **Axios**: Used for making HTTP requests to fetch data from [RouteMisr API](https://ecommerce.routemisr.com).
- **React Redux**: State management for handling global states efficiently.
- **Bootstrap**: Provides responsive and styled components.
- **MUI (Material UI)**: Used for modern UI components and design.
- **React Icons**: Provides a rich set of icons for UI elements.
- **React Hot Toast**: Displays real-time notifications.
- **React Slick**: Implements smooth image sliders for product carousels.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/react-ecommerce.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react-ecommerce
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## API Integration

The project fetches product data from `https://ecommerce.routemisr.com`. The Axios library is used to make API requests, ensuring efficient data retrieval.

Example API request:

```javascript
import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://ecommerce.routemisr.com/api/products"
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching products", error);
  }
};

fetchProducts();
```

## Usage of Libraries

### 1. **Axios**

Used for fetching data from the API.

```javascript
axios
  .get("https://ecommerce.routemisr.com/api/products")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### 2. **React Redux**

Used for state management, ensuring smooth data flow.

```javascript
import { useSelector, useDispatch } from "react-redux";

const products = useSelector((state) => state.products);
const dispatch = useDispatch();
```

### 3. **Bootstrap**

Used for responsive design and styling.

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
<button className="btn btn-primary">Add to Cart</button>;
```

### 4. **Material UI (MUI)**

Used for enhanced UI components.

```jsx
import { Button } from "@mui/material";
<Button variant="contained" color="primary">
  Buy Now
</Button>;
```

### 5. **React Icons**

Used for adding icons to the UI.

```jsx
import { FaShoppingCart } from "react-icons/fa";
<FaShoppingCart size={24} />;
```

### 6. **React Hot Toast**

Used for real-time notifications.

```jsx
import toast from "react-hot-toast";

toast.success("Item added to cart!");
```

### 7. **React Slick**

Used for image sliders.

```jsx
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

<Slider {...settings}>
  <div>
    <img src="image1.jpg" alt="Product 1" />
  </div>
  <div>
    <img src="image2.jpg" alt="Product 2" />
  </div>
</Slider>;
```

## Contributing

Feel free to fork the project and submit pull requests!

## License

This project is open-source and available under the MIT License.
