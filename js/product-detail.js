
// Hàm định dạng ngày hiện tại
function getCurrentDate() {
    var today = new Date();
    var weekday = today.toLocaleDateString("vi-VN", { weekday: "long" });
    var day = today.getDate();
    var month = today.toLocaleDateString("vi-VN", { month: "long" });
    var year = today.getFullYear();

    return weekday + ", " + day + " " + month + " " + year;
}

// Cập nhật ngày khi tải trang
window.onload = function () {
    var currentDate = getCurrentDate();
    document.getElementById("dateNow").textContent = currentDate;
};


// Lấy productID từ URL
const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get('productID');

// Dữ liệu mẫu cho sản phẩm (thay thế bằng dữ liệu từ cơ sở dữ liệu hoặc file JSON)
const products = {
    1: {
        name: "iPhone 15 Pro Max 256GB | Chính hãng VN/A",
        sale: "Giảm 16%",
        image: "../images/Hot_Sale/iphone15.png",
        price: "34.990.000đ",
        discount: "29.490.000đ",
        description: "Máy mới 100%, chính hãng Apple Việt Nam, MobiShop hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
        details: [
            "Màn hình: 6.7 inch Super Retina XDR OLED",
            "Chipset: Apple A17 Pro 6 nhân",
            "Camera sau: 48MP",
            "Camera trước: 12MP",
            "Bộ nhớ trong: 256 GB",
            "Hệ điều hành: iOS 17",
        ]
    },
    2: {
        name: "iPhone 11 64GB | Chính hãng VN/A",
        sale: "Giảm 25%",
        image: "../images/Hot_Sale/iphone11_64gb.png",
        price: "11.990.000đ",
        discount: "8.990.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.1 inches IPS LCD",
            "Chipset: A13 Bionic",
            "Camera sau: kép 12MP",
            "Camera trước: 12MP",
            "Bộ nhớ trong: 64 GB",
            "Hệ điều hành: iOS 13 hoặc cao hơn (Tùy vào phiên bản phát hành)",
        ]
    },
    3: {
        name: "iPhone 13 128GB | Chính hãng VN/A",
        sale: "Giảm 22%",
        image: "../images/Hot_Sale/iphone-13.png",
        price: "13.490.000đ",
        discount: "17.290.000đ",
        description: "Máy mới 100%, chính hãng Apple Việt Nam, MobiShop hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
        details: [
            "Màn hình: 6.1 inches Super Retina XDR OLED",
            "Chipset: Apple A15",
            "Camera sau: kép 12MP",
            "Camera trước: 12MP",
            "Bộ nhớ trong: 128 GB",
            "Hệ điều hành: iOS 15",
        ]
    },
    4: {
        name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        sale: "Giảm 25%",
        image: "../images/Hot_Sale/iphone14-pro.png",
        price: "29.990.000đ",
        discount: "25.590.000đ",
        description: "Máy mới 100%, chính hãng Apple Việt Nam, MobiShop hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
        details: [
            "Màn hình: 6.7 inch Super Retina XDR OLED",
            "Chipset: Apple A16 Bionic 6-core",
            "Camera sau: 48MP",
            "Camera trước: 12MP",
            "Bộ nhớ trong: 128 GB",
            "Hệ điều hành: iOS 16",
        ]
    },
    5: {
        name: "iPhone 11 128GB | Chính hãng VN/A",
        sale: "Giảm 27%",
        image: "../images/Hot_Sale/iphone11_128gb.png",
        price: "13.990.000đ",
        discount: "10.190.000đ",
        description: "Máy mới 100%, chính hãng Apple Việt Nam, MobiShop hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
        details: [
            "Màn hình: 6.1 inches IPS LCD",
            "Chipset: A13 Bionic",
            "Camera sau: kép 12MP",
            "Camera trước: 12MP",
            "Bộ nhớ trong: 128 GB",
            "Hệ điều hành: iOS 13 hoặc cao hơn (Tùy vào phiên bản phát hành)",
        ]
    },
    6: {
        name: "Samsung Galaxy S21 FE 8GB 128GB",
        sale: "Giảm 38%",
        image: "../images/Hot_Sale/Samsung_Galaxy_S21_FE.webp",
        price: "16.990.000đ",
        discount: "10.500.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.4 inches Dynamic AMOLED 2X",
            "Chipset: Exynos 2100 (5nm)",
            "Camera sau: kép 12MP",
            "Camera trước: 32MP",
            "Bộ nhớ trong: 128 GB",
            "Hệ điều hành: Android 12",
        ]
    },
    7: {
        name: "Samsung Galaxy S23 FE 5G 8GB 128GB",
        sale: "Giảm 27%",
        image: "../images/Hot_Sale/samsung-s23-fe.png",
        price: "14.890.000đ",
        discount: "10.890.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.4 inches Dynamic AMOLED 2X",
            "Chipset: Exynos 2200 8 nhân",
            "Camera sau: 50 MP & Phụ 12 MP, 8 MP",
            "Camera trước: 10 MP",
            "Bộ nhớ trong: 128 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    8: {
        name: "Samsung Galaxy S23 Ultra 12GB 512GB",
        sale: "Giảm 32%",
        image: "../images/Hot_Sale/samsung-s23-ulatra.png",
        price: "36.990.000đ",
        discount: "24.990.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.8 inches Dynamic AMOLED 2X",
            "Chipset: Snapdragon 8 Gen 2 (4 nm)",
            "Camera sau: 200MP F1.7 OIS ±3° (Super Quad Pixel AF)",
            "Camera trước: 12MP F2.2 (Dual Pixel AF)",
            "Bộ nhớ trong: 512 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    9: {
        name: "Samsung Galaxy Z Fold5 12GB 512GB",
        sale: "Giảm 33%",
        image: "../images/Hot_Sale/samsung-z-fold5.png",
        price: "44.990.000đ",
        discount: "29.990.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 7.6 inches Dynamic AMOLED 2X",
            "Chipset: Snapdragon 8 Gen 2 for Galaxy (4nm) 8 nhân",
            "Camera sau: 50MP",
            "Camera trước: 14MP",
            "Bộ nhớ trong: 512 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    10: {
        name: "Samsung Galaxy Z Flip5 8GB 512GB",
        sale: "Giảm 48%",
        image: "../images/Hot_Sale/samsung-z-lip5.png",
        price: "29.990.000đ",
        discount: "15.490.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.7 inches Dynamic AMOLED 2X",
            "Chipset: Snapdragon 8 Gen 2 for Galaxy",
            "Camera sau: 12MP, F1.8, Dual Pixel, 1.8μm, OIS",
            "Camera trước: 10MP, F2.4, 1.22μm",
            "Bộ nhớ trong: 512 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    11: {
        name: "OPPO A77s 8GB 128GB",
        sale: "Giảm 17%",
        image: "../images/Hot_Phone/oppo-a77.png",
        price: "6.290.000đ",
        discount: "5.190.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.56 inches IPS LCD",
            "Chipset: Snapdragon 680 4G",
            "Camera sau: 50 MP, f/1.8, PDAF",
            "Camera trước: 8 MP, f/2.0",
            "Bộ nhớ trong: 128 GB",
            "Hệ điều hành: Android 12",
        ]
    },
    12: {
        name: "OPPO Reno10 Pro+ 5G 12GB 256GB",
        sale: "Giảm 28%",
        image: "../images/Hot_Phone/oppo_reno_pro_plus.png",
        price: "19.990.000đ",
        discount: "14.490.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.74 inches AMOLED",
            "Chipset: Snapdragon 8 plus Gen 1 8 nhân",
            "Camera sau: 64 MP, PDAF, 5x optical zoom",
            "Camera trước:  32 MP, f/2.4",
            "Bộ nhớ trong: 256 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    13: {
        name: "realme 11 Pro (8GB - 256GB)",
        sale: "Giảm 35%",
        image: "../images/Hot_Phone/realme-11-pro.png",
        price: "11.990.000đ",
        discount: "7.790.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.7 inches AMOLED",
            "Chipset: Snapdragon 680 4G",
            "Camera sau: 100 MP, f/1.75, 26mm, PDAF, OIS",
            "Camera trước: 16 MP, f/2.45, 25mm",
            "Bộ nhớ trong: 256 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    14: {
        name: "realme C53 (8GB 256GB)",
        sale: "Giảm 28%",
        image: "../images/Hot_Phone/realme-c53-vang-1.webp",
        price: "4.790.000đ",
        discount: "3.450.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.74 inchess IPS LCD",
            "Chipset: Unisoc Tiger T612",
            "Camera sau: 50MP",
            "Camera trước: 8 MP",
            "Bộ nhớ trong: 256 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    15: {
        name: "vivo V29E 8GB 256GB",
        sale: "Giảm 11%",
        image: "../images/Hot_Phone/v29e.png",
        price: "8.990.000đ",
        discount: "7.990.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.67 inches 6.67 inches",
            "Chipset: Qualcomm Snapdragon 695",
            "Camera sau: 64MP, f/1.79, OIS",
            "Camera trước: 50 MP, f/2.0, AF",
            "Bộ nhớ trong: 256 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    16: {
        name: "vivo V30E 12GB 256GB",
        sale: "Giảm 10%",
        image: "../images/Hot_Phone/v30e.png",
        price: "10.490.000đ",
        discount: "9.490.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.78 inches AMOLED",
            "Chipset: Snapdragon 680 4G",
            "Camera sau: 50 MP, f/1.8, 1/1.95",
            "Camera trước: 32 MP HD Selfie Camera f/2.0, 84º FoV, 5P lens",
            "Bộ nhớ trong: 256 GB",
            "Hệ điều hành: Android 14 OS",
        ]
    },
    17: {
        name: "vivo V25e 8GB 128GB",
        sale: "Giảm 32%",
        image: "../images/Hot_Phone/vivov25e.webp",
        price: "8.490.000đ",
        discount: "5.790.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.44 inches AMOLED",
            "Chipset: Snapdragon 680 4G",
            "Camera sau: 64 MP, f/1.79",
            "Camera trước: 32 MP, f/2.0",
            "Bộ nhớ trong: 128 GB",
            "Hệ điều hành: Android 12",
        ]
    },
    18: {
        name: "Xiaomi 14 (12GB 256GB)",
        sale: "Giảm 13%",
        image: "../images/Hot_Phone/xiaomi-14-xanh-la.png",
        price: "22.990.000đ",
        discount: "19.990.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.36 inches LTPO OLED",
            "Chipset: Qualcomm Snapdragon 8 Gen 3 (4 nm)",
            "Camera sau: 50 MP, f/1.6, 23mm, 2.4µm, PDAF, OIS",
            "Camera trước: 32 MP, f/ 2.2, PDAF",
            "Bộ nhớ trong: 256 GB",
            "Hệ điều hành: Android 14",
        ]
    },
    19: {
        name: "Xiaomi Redmi Note 13 (6GB 128GB)",
        sale: "Giảm 12%",
        image: "../images/Hot_Phone/xiaomi-redmi-note-13.png",
        price: "4.890.000đ",
        discount: "4.290.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.67 inches AMOLED",
            "Chipset: Snapdragon 685",
            "Camera sau: Chính 108 MP & Phụ 8 MP, 2 MP",
            "Camera trước: 16MP",
            "Bộ nhớ trong: 128 GB",
            "Hệ điều hành: Android 13",
        ]
    },
    20: {
        name: "Xiaomi POCO X6 Pro 5G 8GB 256GB",
        sale: "Giảm 15%",
        image: "../images/Hot_Phone/Xiaomi_POCO_X6.webp",
        price: "9.990.000đ",
        discount: "8.490.000đ",
        description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
        details: [
            "Màn hình: 6.67 inches AMOLED",
            "Chipset: Dimensity 8300-Ultra",
            "Camera sau: 64 MP, f/1.7",
            "Camera trước: 16 MP",
            "Bộ nhớ trong: 256 GB",
            "Hệ điều hành: Android 14",
        ]
    },
};

// Hiển thị chi tiết sản phẩm dựa trên productID
const product = products[productID];
if (product) {
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('discount-badge').innerText = product.sale;
    document.getElementById('product-image').src = product.image;
    document.getElementById('price-original').innerText = product.price;
    document.getElementById('price-discount').innerText = product.discount;
    document.getElementById('product-description').innerText = product.description;

    // Hiển thị chi tiết sản phẩm dạng list
    const detailsList = document.getElementById('product-details-list');
    product.details.forEach(detail => {
        const listItem = document.createElement('li');
        listItem.innerText = detail;
        detailsList.appendChild(listItem);
    });
} else {
    document.body.innerHTML = "<h1>Không tìm thấy sản phẩm</h1>";
}

document.getElementById("increase-quantity").addEventListener("click", function () {
    const quantityInput = document.getElementById("quantity-input");
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
});

document.getElementById("decrease-quantity").addEventListener("click", function () {
    const quantityInput = document.getElementById("quantity-input");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }
});


document.getElementById("add-to-cart-btn").addEventListener("click", function () {
    const product = products[productID];
    const quantity = parseInt(document.getElementById("quantity-input").value);

    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push({
                name: product.name,
                image: product.image,
                price: product.price,
                discount: product.discount,
                quantity: quantity,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // Cập nhật số lượng giỏ hàng trong biểu tượng
        updateCartIcon();

        // Hiển thị modal
        $('#cartModal').modal('show');
    } else {
        alert("Không tìm thấy sản phẩm");
    }
});

function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("cart-count").textContent = totalItems;
}

// Khởi tạo số lượng giỏ hàng khi trang được tải
updateCartIcon();

document.getElementById("buy-now-btn").addEventListener("click", function () {
    const product = products[productID];
    const quantity = parseInt(document.getElementById("quantity-input").value);

    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push({
                name: product.name,
                image: product.image,
                price: product.price,
                discount: product.discount,
                quantity: quantity,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // Chuyển trực tiếp đến trang giỏ hàng mà không cần xác nhận
        window.location.href = "../html/shopping-cart.html";
    } else {
        alert("Không tìm thấy sản phẩm");
    }
});
