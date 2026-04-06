import { createContext, useContext, useState } from "react";

const Product = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            "id": 1,
            "name": "Wireless Bluetooth Headphones",
            "category": "Electronics",
            "price": "99.99",
            "rating": 3.8,
            "reviews": 120,
            "description": "High-fidelity audio with active noise cancellation and 40-hour battery life.",
            "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
        },
        {
            "id": 2,
            "name": "Smart Watch Series 5",
            "category": "Electronics",
            "price": "299.99",
            "rating": 4.2,
            "reviews": 85,
            "description": "Advanced smartwatch with health monitoring, GPS, and water resistance.",
            "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
        },
        {
            "id": 3,
            "name": "MacBook Pro M2",
            "category": "Electronics",
            "price": "1299.99",
            "rating": 5,
            "reviews": 210,
            "description": "Supercharged by M2 chip for incredible performance and battery life.",
            "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800"
        },
        {
            "id": 4,
            "name": "Mechanical Gaming Keyboard",
            "category": "Electronics",
            "price": "149.99",
            "rating": 4.7,
            "reviews": 340,
            "description": "RGB backlit mechanical keyboard with blue switches and aluminum frame.",
            "image": "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800"
        },
        {
            "id": 5,
            "name": "Mirrorless Digital Camera",
            "category": "Electronics",
            "price": "899.99",
            "rating": 4.6,
            "reviews": 55,
            "description": "4K video recording with ultra-fast autofocus and 24.2MP sensor.",
            "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800"
        },
        {
            "id": 6,
            "name": "Classic White T-Shirt",
            "category": "Clothing",
            "price": "25.00",
            "rating": 4.5,
            "reviews": 450,
            "description": "100% organic cotton, pre-shrunk for a perfect fit and soft feel.",
            "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
        },
        {
            "id": 7,
            "name": "Denim Jacket",
            "category": "Clothing",
            "price": "75.99",
            "rating": 4.4,
            "reviews": 120,
            "description": "Rugged denim jacket with vintage wash and reinforced stitching.",
            "image": "https://images.unsplash.com/photo-1576995853123-5a103055b19b?w=800"
        },
        {
            "id": 8,
            "name": "Modern Office Chair",
            "category": "Furniture",
            "price": "249.99",
            "rating": 4.8,
            "reviews": 90,
            "description": "Ergonomic design with lumbar support and breathable mesh back.",
            "image": "https://images.unsplash.com/photo-1592078650245-66a19e3a093b?w=800"
        },
        {
            "id": 9,
            "name": "Minimalist Desk Lamp",
            "category": "Furniture",
            "price": "45.00",
            "rating": 4.3,
            "reviews": 60,
            "description": "Sleek LED desk lamp with touch controls and adjustable brightness.",
            "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"
        },
        {
            "id": 10,
            "name": "Stainless Steel Bottle",
            "category": "Home",
            "price": "34.99",
            "rating": 4.7,
            "reviews": 150,
            "description": "Double-walled insulation keeps drinks cold for 24 hours.",
            "image": "https://images.unsplash.com/photo-1602143307185-8a15505560bb?w=800"
        },
        {
            "id": 11,
            "name": "Leather Travel Bag",
            "category": "Accessories",
            "price": "189.00",
            "rating": 4.9,
            "reviews": 40,
            "description": "Handcrafted genuine leather bag perfect for weekend getaways.",
            "image": "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800"
        },
        {
            "id": 12,
            "name": "Noise Cancelling Earbuds",
            "category": "Electronics",
            "price": "129.99",
            "rating": 3.5,
            "reviews": 320,
            "description": "Compact earbuds with crystal clear sound and sweat resistance.",
            "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800"
        },
        {
            "id": 13,
            "name": "Ultrawide Gaming Monitor",
            "category": "Electronics",
            "price": "499.99",
            "rating": 4.8,
            "reviews": 75,
            "description": "34-inch curved display with 144Hz refresh rate and 1ms response time.",
            "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800"
        },
        {
            "id": 14,
            "name": "Canvas Sneakers",
            "category": "Clothing",
            "price": "55.00",
            "rating": 4.4,
            "reviews": 280,
            "description": "Classic everyday sneakers with durable canvas and rubber soles.",
            "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
        },
        {
            "id": 15,
            "name": "Polarized Sunglasses",
            "category": "Accessories",
            "price": "89.00",
            "rating": 5,
            "reviews": 110,
            "description": "UV400 protection with lightweight frames for maximum comfort.",
            "image": "https://images.unsplash.com/photo-1511499767350-a1590f676bf1?w=800"
        },
        {
            "id": 16,
            "name": "Wooden Coffee Table",
            "category": "Furniture",
            "price": "179.99",
            "rating": 4.5,
            "reviews": 45,
            "description": "Solid oak coffee table with a modern mid-century design.",
            "image": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800"
        },
        {
            "id": 17,
            "name": "Ceramic Plant Pot",
            "category": "Home",
            "price": "22.50",
            "rating": 4.7,
            "reviews": 95,
            "description": "Hand-glazed ceramic pot with drainage hole for indoor plants.",
            "image": "https://images.unsplash.com/photo-1485955900106-39a47e35d8ad?w=800"
        },
        {
            "id": 18,
            "name": "Gaming Mouse",
            "category": "Electronics",
            "price": "69.99",
            "rating": 2.7,
            "reviews": 560,
            "description": "High-precision sensor with customizable DPI and RGB lighting.",
            "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800"
        },
        {
            "id": 19,
            "name": "Casual Cotton Hoodie",
            "category": "Clothing",
            "price": "45.99",
            "rating": 1.6,
            "reviews": 180,
            "description": "Heavyweight fleece hoodie with a relaxed fit and front pouch.",
            "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800"
        },
        {
            "id": 20,
            "name": "Suede Loafers",
            "category": "Clothing",
            "price": "110.00",
            "rating": 4.3,
            "reviews": 65,
            "description": "Premium suede leather loafers with comfortable cushioned insoles.",
            "image": "https://images.unsplash.com/photo-1533279443086-d1c19a186416?w=800"
        },
        {
            "id": 21,
            "name": "Portable Power Bank",
            "category": "Electronics",
            "price": "49.99",
            "rating": 5,
            "reviews": 890,
            "description": "20,000mAh capacity with fast charging for all mobile devices.",
            "image": "https://images.unsplash.com/photo-1609091839311-d5368195ad0d?w=800"
        },
        {
            "id": 22,
            "name": "Smart Home Speaker",
            "category": "Electronics",
            "price": "129.00",
            "rating": 4.4,
            "reviews": 430,
            "description": "Voice-activated assistant with room-filling 360-degree sound.",
            "image": "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800"
        },
        {
            "id": 23,
            "name": "Velvet Armchair",
            "category": "Furniture",
            "price": "349.99",
            "rating": 4.9,
            "reviews": 30,
            "description": "Luxury velvet upholstery with gold-finished metal legs.",
            "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
        },
        {
            "id": 24,
            "name": "Minimalist Wall Clock",
            "category": "Home",
            "price": "39.00",
            "rating": 4.2,
            "reviews": 70,
            "description": "Silent non-ticking mechanism with a clean wooden finish.",
            "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800"
        },
        {
            "id": 25,
            "name": "Leather Wallet",
            "category": "Accessories",
            "price": "45.00",
            "rating": 4.7,
            "reviews": 210,
            "description": "Slim bifold wallet made from premium top-grain cowhide leather.",
            "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800"
        },
        {
            "id": 26,
            "name": "Graphic Print Tee",
            "category": "Clothing",
            "price": "28.99",
            "rating": 4.5,
            "reviews": 140,
            "description": "Unique artistic design printed on heavyweight premium cotton.",
            "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800"
        },
        {
            "id": 27,
            "name": "Knitted Scarf",
            "category": "Accessories",
            "price": "32.00",
            "rating": 4.8,
            "reviews": 85,
            "description": "Soft wool blend scarf to keep you warm and stylish during winter.",
            "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800"
        },
        {
            "id": 28,
            "name": "Electric Toothbrush",
            "category": "Home",
            "price": "89.99",
            "rating": 4.6,
            "reviews": 340,
            "description": "Smart vibration technology with 3 cleaning modes and timer.",
            "image": "https://images.unsplash.com/photo-1559591937-e62030c63402?w=800"
        },
        {
            "id": 29,
            "name": "Bookshelf Unit",
            "category": "Furniture",
            "price": "120.00",
            "rating": 3.4,
            "reviews": 55,
            "description": "5-tier open shelving unit with a sturdy industrial metal frame.",
            "image": "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800"
        },
        {
            "id": 30,
            "name": "Fitness Yoga Mat",
            "category": "Sports",
            "price": "40.00",
            "rating": 5,
            "reviews": 190,
            "description": "Extra thick non-slip yoga mat with carrying strap included.",
            "image": "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800"
        },
        {
            "id": 31,
            "name": "Bamboo Cutting Board",
            "category": "Home",
            "price": "18.99",
            "rating": 4.5,
            "reviews": 110,
            "description": "Durable and eco-friendly bamboo board with deep juice grooves.",
            "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800"
        },
        {
            "id": 32,
            "name": "Adjustable Dumbbells",
            "category": "Sports",
            "price": "199.99",
            "rating": 4.8,
            "reviews": 60,
            "description": "Space-saving weights that adjust from 5 to 50 lbs quickly.",
            "image": "https://images.unsplash.com/photo-1584735975646-e6b5d31afaa3?w=800"
        },
        {
            "id": 33,
            "name": "Beanie Hat",
            "category": "Accessories",
            "price": "15.00",
            "rating": 4.3,
            "reviews": 230,
            "description": "Stretchy acrylic knit beanie available in multiple colors.",
            "image": "https://images.unsplash.com/photo-1576871333020-221618337719?w=800"
        },
        {
            "id": 34,
            "name": "Compact Umbrella",
            "category": "Accessories",
            "price": "24.99",
            "rating": 4.2,
            "reviews": 85,
            "description": "Windproof reinforced frame with automatic open/close button.",
            "image": "https://images.unsplash.com/photo-1531012278403-e5db3b774373?w=800"
        },
        {
            "id": 35,
            "name": "Wireless Charger Pad",
            "category": "Electronics",
            "price": "29.99",
            "rating": 4.5,
            "reviews": 410,
            "description": "Qi-certified fast wireless charging for iPhone and Android.",
            "image": "https://images.unsplash.com/photo-1586816829380-496677a28e93?w=800"
        },
        {
            "id": 36,
            "name": "Linen Bedding Set",
            "category": "Home",
            "price": "150.00",
            "rating": 5,
            "reviews": 25,
            "description": "Premium French linen duvet cover set for a cool night's sleep.",
            "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"
        },
        {
            "id": 37,
            "name": "Bluetooth Car Adapter",
            "category": "Electronics",
            "price": "19.99",
            "rating": 5,
            "reviews": 320,
            "description": "Stream music and take calls in older car models via FM radio.",
            "image": "https://images.unsplash.com/photo-1493238792040-5718473a06c2?w=800"
        },
        {
            "id": 38,
            "name": "Aromatherapy Diffuser",
            "category": "Home",
            "price": "35.00",
            "rating": 4.6,
            "reviews": 145,
            "description": "Ultrasonic oil diffuser with 7-color LED mood lighting.",
            "image": "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800"
        },
        {
            "id": 39,
            "name": "Modern Floor Lamp",
            "category": "Furniture",
            "price": "85.00",
            "rating": 3.4,
            "reviews": 50,
            "description": "Tall arch lamp with fabric shade, perfect for reading corners.",
            "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"
        },
        {
            "id": 40,
            "name": "Casual Backpack",
            "category": "Accessories",
            "price": "60.00",
            "rating": 4.7,
            "reviews": 310,
            "description": "Water-resistant daily backpack with a padded 15-inch laptop sleeve.",
            "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
        },
        {
            "id": 41,
            "name": "Smart Light Bulb",
            "category": "Electronics",
            "price": "15.99",
            "rating": 3.3,
            "reviews": 750,
            "description": "App-controlled LED bulb with 16 million colors and Alexa support.",
            "image": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800"
        },
        {
            "id": 42,
            "name": "Scented Candle",
            "category": "Home",
            "price": "12.50",
            "rating": 3.8,
            "reviews": 120,
            "description": "Soy wax candle with a calming lavender and vanilla fragrance.",
            "image": "https://images.unsplash.com/photo-1596433809252-260c2745dfdd?w=800"
        },
        {
            "id": 43,
            "name": "Floating Wall Shelves",
            "category": "Furniture",
            "price": "45.00",
            "rating": 4.5,
            "reviews": 85,
            "description": "Set of 3 minimalist wooden shelves for decor and storage.",
            "image": "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800"
        },
        {
            "id": 44,
            "name": "Running Shorts",
            "category": "Clothing",
            "price": "22.00",
            "rating": 2.6,
            "reviews": 190,
            "description": "Breathable moisture-wicking fabric with a secure phone pocket.",
            "image": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800"
        },
        {
            "id": 45,
            "name": "Professional Chef Knife",
            "category": "Home",
            "price": "65.00",
            "rating": 3.9,
            "reviews": 110,
            "description": "High-carbon stainless steel blade with an ergonomic pakkawood handle.",
            "image": "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800"
        },
        {
            "id": 46,
            "name": "Tabletop Succulent",
            "category": "Home",
            "price": "10.00",
            "rating": 1.2,
            "reviews": 320,
            "description": "Low-maintenance live succulent in a decorative geometric pot.",
            "image": "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800"
        },
        {
            "id": 47,
            "name": "Leather Belt",
            "category": "Accessories",
            "price": "35.00",
            "rating": 4.4,
            "reviews": 140,
            "description": "Classic full-grain leather belt with a solid brass buckle.",
            "image": "https://images.unsplash.com/photo-1624222247344-550fb8ecf7c4?w=800"
        },
        {
            "id": 48,
            "name": "Laptop Stand",
            "category": "Electronics",
            "price": "40.00",
            "rating": 4.6,
            "reviews": 220,
            "description": "Adjustable aluminum stand to improve posture and laptop cooling.",
            "image": "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?w=800"
        },
        {
            "id": 49,
            "name": "Cotton Bath Towel",
            "category": "Home",
            "price": "18.00",
            "rating": 4.5,
            "reviews": 85,
            "description": "Extra large and absorbent luxury Turkish cotton bath towel.",
            "image": "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800"
        },
        {
            "id": 50,
            "name": "Decorative Throw Pillow",
            "category": "Home",
            "price": "25.00",
            "rating": 1.2,
            "reviews": 45,
            "description": "Soft velvet cushion cover with a modern geometric pattern.",
            "image": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800"
        }
    ]);


    return (<Product.Provider
        value={{
            products
        }}
    >{children}
    </Product.Provider>)
}

export const useProducts = () => useContext(Product);

