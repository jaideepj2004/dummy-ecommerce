// ===========================
// Product Data
// ===========================
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 79.99,
        rating: 4.5,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
        description: "Premium wireless headphones with active noise cancellation and superior sound quality. Enjoy up to 30 hours of battery life.",
        brand: "AudioTech",
        model: "AT-WH1000"
    },
    {
        id: 2,
        name: "Smart Watch Series 5",
        category: "Electronics",
        price: 299.99,
        rating: 4.8,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
        description: "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and GPS. Water-resistant design perfect for any activity.",
        brand: "TechWatch",
        model: "TW-S5"
    },
    {
        id: 3,
        name: "4K Ultra HD Camera",
        category: "Electronics",
        price: 899.99,
        rating: 4.7,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
        description: "Professional-grade 4K camera with advanced image stabilization and multiple shooting modes. Perfect for content creators.",
        brand: "ProCam",
        model: "PC-4K100"
    },
    {
        id: 4,
        name: "Leather Messenger Bag",
        category: "Fashion",
        price: 89.99,
        rating: 4.6,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
        description: "Handcrafted genuine leather messenger bag with multiple compartments. Professional look for work or travel.",
        brand: "LeatherCraft",
        model: "LC-MB200"
    },
    {
        id: 5,
        name: "Designer Sunglasses",
        category: "Fashion",
        price: 149.99,
        rating: 4.4,
        reviews: 278,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
        description: "Premium polarized sunglasses with UV protection. Stylish design that complements any outfit.",
        brand: "StyleVision",
        model: "SV-SUN50"
    },
    {
        id: 6,
        name: "Classic Denim Jacket",
        category: "Fashion",
        price: 69.99,
        rating: 4.3,
        reviews: 421,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        description: "Timeless denim jacket with comfortable fit. A wardrobe essential that never goes out of style.",
        brand: "DenimCo",
        model: "DC-CJ100"
    },
    {
        id: 7,
        name: "Ergonomic Office Chair",
        category: "Home & Garden",
        price: 249.99,
        rating: 4.7,
        reviews: 523,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop",
        description: "Premium ergonomic chair with lumbar support and adjustable features. Perfect for long working hours.",
        brand: "ComfortSeating",
        model: "CS-EC500"
    },
    {
        id: 8,
        name: "Smart LED Table Lamp",
        category: "Home & Garden",
        price: 49.99,
        rating: 4.5,
        reviews: 367,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
        description: "WiFi-enabled LED lamp with adjustable brightness and color temperature. Control via smartphone app.",
        brand: "SmartHome",
        model: "SH-LAMP20"
    },
    {
        id: 9,
        name: "Indoor Plant Collection",
        category: "Home & Garden",
        price: 39.99,
        rating: 4.8,
        reviews: 645,
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500&h=500&fit=crop",
        description: "Set of 3 beautiful indoor plants perfect for home or office decoration. Easy to maintain.",
        brand: "GreenLife",
        model: "GL-IPC3"
    },
    {
        id: 10,
        name: "Yoga Mat Premium",
        category: "Sports",
        price: 34.99,
        rating: 4.6,
        reviews: 892,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
        description: "Non-slip yoga mat with extra cushioning. Eco-friendly material perfect for all types of exercises.",
        brand: "FitGear",
        model: "FG-YM100"
    },
    {
        id: 11,
        name: "Running Shoes Pro",
        category: "Sports",
        price: 119.99,
        rating: 4.7,
        reviews: 534,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        description: "Lightweight running shoes with advanced cushioning technology. Designed for optimal performance and comfort.",
        brand: "RunFast",
        model: "RF-RS300"
    },
    {
        id: 12,
        name: "Fitness Tracker Band",
        category: "Sports",
        price: 59.99,
        rating: 4.4,
        reviews: 721,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
        description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and smartphone notifications.",
        brand: "HealthTech",
        model: "HT-FTB50"
    },
    {
        id: 13,
        name: "The Complete Guide to Web Development",
        category: "Books",
        price: 29.99,
        rating: 4.9,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
        description: "Comprehensive guide covering HTML, CSS, JavaScript, and modern web frameworks. Perfect for beginners and professionals.",
        brand: "TechBooks",
        model: "TB-WD2024"
    },
    {
        id: 14,
        name: "Wireless Gaming Mouse",
        category: "Electronics",
        price: 69.99,
        rating: 4.6,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
        description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
        brand: "GameGear",
        model: "GG-WM200"
    },
    {
        id: 15,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        price: 49.99,
        rating: 4.5,
        reviews: 789,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
        description: "Waterproof portable speaker with 360-degree sound. Perfect for outdoor adventures and parties.",
        brand: "SoundWave",
        model: "SW-BT100"
    }
];

// ===========================
// Utility Functions
// ===========================
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function showToast(message, type = 'success') {
    const toast = $('#toast');
    const toastMessage = $('#toastMessage');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.style.background = type === 'success' ? '#10b981' : '#ef4444';
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ===========================
// Local Storage Functions
// ===========================
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart(cart);
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    showToast('Item removed from cart', 'success');
}

function updateCartItemQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart(cart);
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = $$('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// ===========================
// Product Rendering
// ===========================
function renderProducts(productsToRender = products, containerId = 'productsGrid') {
    const container = $(`#${containerId}`);
    if (!container) return;
    
    container.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onclick="goToProduct(${product.id})">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        container.appendChild(productCard);
    });
}

function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// ===========================
// Category Filtering
// ===========================
function filterByCategory(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    renderProducts(filteredProducts);
    
    // Update active button
    $$('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// ===========================
// Search Functionality
// ===========================
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filtered);
}

// ===========================
// Product Detail Page
// ===========================
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update breadcrumb
    if ($('#breadcrumbCategory')) {
        $('#breadcrumbCategory').textContent = product.category;
    }
    if ($('#breadcrumbProduct')) {
        $('#breadcrumbProduct').textContent = product.name;
    }
    
    // Update product details
    if ($('#productImage')) {
        $('#productImage').src = product.image;
        $('#productImage').alt = product.name;
    }
    if ($('#productTitle')) {
        $('#productTitle').textContent = product.name;
    }
    if ($('#productPrice')) {
        $('#productPrice').textContent = formatPrice(product.price);
    }
    if ($('#productDescription')) {
        $('#productDescription').textContent = product.description;
    }
    if ($('#productCategory')) {
        $('#productCategory').textContent = product.category;
    }
    if ($('#productSku')) {
        $('#productSku').textContent = `SKU-${product.id.toString().padStart(5, '0')}`;
    }
    if ($('#productRating')) {
        $('#productRating').innerHTML = `
            <div class="stars">${generateStars(product.rating)}</div>
            <span class="rating-count">(${product.reviews} reviews)</span>
        `;
    }
    if ($('#specBrand')) {
        $('#specBrand').textContent = product.brand;
    }
    if ($('#specModel')) {
        $('#specModel').textContent = product.model;
    }
    
    // Quantity controls
    const quantityInput = $('#quantity');
    const decreaseBtn = $('#decreaseQty');
    const increaseBtn = $('#increaseQty');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 99) {
                quantityInput.value = currentValue + 1;
            }
        });
    }
    
    // Add to cart button
    const addToCartBtn = $('#addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            addToCart(product.id, quantity);
        });
    }
    
    // Load related products
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
    renderProducts(relatedProducts, 'relatedProductsGrid');
}

// ===========================
// Shopping Cart Page
// ===========================
function renderCart() {
    const cart = getCart();
    const cartItemsList = $('#cartItemsList');
    const emptyCart = $('#emptyCart');
    const cartGrid = $('#cartGrid');
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartGrid) cartGrid.style.display = 'none';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartGrid) cartGrid.style.display = 'grid';
    
    if (cartItemsList) {
        cartItemsList.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-quantity">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id}); renderCart();">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            `;
            cartItemsList.appendChild(cartItem);
        });
    }
    
    updateCartSummary();
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
    } else {
        updateCartItemQuantity(productId, newQuantity);
    }
    renderCart();
}

function updateCartSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    if ($('#itemCount')) {
        $('#itemCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    if ($('#subtotal')) {
        $('#subtotal').textContent = formatPrice(subtotal);
    }
    if ($('#shipping')) {
        $('#shipping').textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
    }
    if ($('#tax')) {
        $('#tax').textContent = formatPrice(tax);
    }
    if ($('#total')) {
        $('#total').textContent = formatPrice(total);
    }
}

// ===========================
// Checkout Page
// ===========================
function loadCheckout() {
    const cart = getCart();
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    // Render order items
    const orderItems = $('#orderItems');
    if (orderItems) {
        orderItems.innerHTML = '';
        
        cart.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="order-item-image">
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-quantity">Qty: ${item.quantity}</div>
                </div>
                <div class="order-item-price">${formatPrice(item.price * item.quantity)}</div>
            `;
            orderItems.appendChild(orderItem);
        });
    }
    
    // Update summary
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    if ($('#checkoutSubtotal')) {
        $('#checkoutSubtotal').textContent = formatPrice(subtotal);
    }
    if ($('#checkoutShipping')) {
        $('#checkoutShipping').textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
    }
    if ($('#checkoutTax')) {
        $('#checkoutTax').textContent = formatPrice(tax);
    }
    if ($('#checkoutTotal')) {
        $('#checkoutTotal').textContent = formatPrice(total);
    }
    
    // Payment method toggle
    const paymentMethods = $$('input[name="paymentMethod"]');
    const cardDetails = $('#cardDetails');
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', (e) => {
            if (e.target.value === 'card') {
                cardDetails.style.display = 'block';
                // Make card fields required
                $('#cardNumber').required = true;
                $('#cardName').required = true;
                $('#expiryDate').required = true;
                $('#cvv').required = true;
            } else {
                cardDetails.style.display = 'none';
                // Make card fields optional
                $('#cardNumber').required = false;
                $('#cardName').required = false;
                $('#expiryDate').required = false;
                $('#cvv').required = false;
            }
        });
    });
    
    // Form submission
    const checkoutForm = $('#checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate form
            if (!checkoutForm.checkValidity()) {
                checkoutForm.reportValidity();
                return;
            }
            
            // Show success modal
            const successModal = $('#successModal');
            if (successModal) {
                successModal.classList.add('show');
            }
            
            // Clear cart
            clearCart();
            
            // Redirect after 3 seconds
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        });
    }
}

// ===========================
// Mobile Menu Toggle
// ===========================
function initMobileMenu() {
    const mobileMenuToggle = $('#mobileMenuToggle');
    const navMenu = $('#navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header')) {
                navMenu.classList.remove('active');
            }
        });
    }
}

// ===========================
// Back to Top Button
// ===========================
function initBackToTop() {
    const backToTop = $('#backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===========================
// Newsletter Form
// ===========================
function initNewsletterForm() {
    const newsletterForm = $('#newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            showToast('Thank you for subscribing!');
            newsletterForm.reset();
        });
    }
}

// ===========================
// Initialize based on page
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on all pages
    updateCartCount();
    
    // Initialize common features
    initMobileMenu();
    initBackToTop();
    initNewsletterForm();
    
    // Page-specific initialization
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        // Home page
        renderProducts();
        
        // Category filter buttons
        const categoryButtons = $$('.category-btn');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                filterByCategory(category);
            });
        });
        
        // Search functionality
        const searchInput = $('#searchInput');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    searchProducts(e.target.value);
                }, 300);
            });
        }
        
        // Category links in nav
        const categoryLinks = $$('[data-category]');
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.dataset.category;
                filterByCategory(category);
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            });
        });
    } else if (currentPage === 'product.html') {
        // Product detail page
        loadProductDetail();
    } else if (currentPage === 'cart.html') {
        // Cart page
        renderCart();
    } else if (currentPage === 'checkout.html') {
        // Checkout page
        loadCheckout();
    }
});

// Make functions globally accessible
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.goToProduct = goToProduct;
window.filterByCategory = filterByCategory;
