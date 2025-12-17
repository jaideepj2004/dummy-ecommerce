# ShopHub - E-commerce Frontend Application

A fully functional e-commerce frontend application built with vanilla HTML, CSS, and JavaScript. This project demonstrates modern web development practices including responsive design, localStorage persistence, and interactive user interfaces.

## Features

### Pages
- **Home Page (`index.html`)**: Product catalog with hero section, category filters, search functionality, and dynamic product grid
- **Product Detail Page (`product.html`)**: Detailed product view with specifications, customer reviews, and related products
- **Shopping Cart Page (`cart.html`)**: Full cart management with quantity controls, remove items, and order summary
- **Checkout Page (`checkout.html`)**: Complete checkout flow with shipping information form and payment method selection

### Functionality
- ✅ 15 dummy products across 5 categories (Electronics, Fashion, Home & Garden, Sports, Books)
- ✅ Dynamic product rendering
- ✅ Add to cart with real-time counter updates
- ✅ localStorage persistence for cart data
- ✅ Cart management (add, remove, update quantity)
- ✅ Category filtering
- ✅ Product search
- ✅ Form validation for checkout
- ✅ Responsive mobile menu
- ✅ Toast notifications
- ✅ Back to top button
- ✅ Newsletter subscription form

### Design
- Modern, clean UI with professional color scheme (blue primary color)
- Fully responsive design (mobile, tablet, desktop)
- CSS Grid and Flexbox for layouts
- Smooth transitions and hover effects
- Card-based product design
- Mobile-first approach
- Accessible and semantic HTML

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family
- **localStorage API**: Cart persistence

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jaideepj2004/dummy-ecommerce.git
cd dummy-ecommerce
```

2. Open the application:

**Option 1: Using a local web server (recommended)**
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

**Option 2: Direct file opening**
Simply open `index.html` in your web browser. Note: Some features may not work properly due to CORS restrictions.

## Project Structure

```
dummy-ecommerce/
├── index.html          # Home page with product catalog
├── product.html        # Product detail page
├── cart.html          # Shopping cart page
├── checkout.html      # Checkout page
├── styles.css         # All CSS styles
├── script.js          # All JavaScript functionality
└── README.md          # Project documentation
```

## Usage

### Shopping Flow

1. **Browse Products**: Visit the home page to see all products
2. **Filter by Category**: Click category buttons to filter products
3. **Search Products**: Use the search bar to find specific items
4. **View Details**: Click on any product card to see detailed information
5. **Add to Cart**: Click "Add to Cart" button on any product
6. **Manage Cart**: Visit cart page to update quantities or remove items
7. **Checkout**: Proceed to checkout and fill in shipping/payment information
8. **Place Order**: Submit the form to complete the purchase

### Key Features

#### Cart Persistence
The shopping cart data is stored in the browser's localStorage, so items remain in your cart even after refreshing the page or closing the browser.

#### Responsive Design
The application automatically adapts to different screen sizes:
- **Mobile**: Single column layout, hamburger menu
- **Tablet**: Two-column product grid
- **Desktop**: Multi-column grid, full navigation menu

#### Category Filtering
Click on category buttons to filter products by:
- All Products
- Electronics
- Fashion
- Home & Garden
- Sports
- Books

#### Search Functionality
Use the search bar to find products by:
- Product name
- Category
- Description

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features to be Added (Future Enhancements)

- User authentication and accounts
- Product reviews and ratings submission
- Wishlist functionality
- Order history
- Backend API integration
- Payment gateway integration
- Image gallery for products
- Product variants (size, color)
- Advanced filtering (price range, ratings)
- Pagination for products

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Created by [jaideepj2004](https://github.com/jaideepj2004)

## Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)
