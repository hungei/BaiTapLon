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

document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các sản phẩm trong giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length > 0) {
        // Tạo HTML cho mỗi sản phẩm trong giỏ hàng
        let cartHTML = '';
        cart.forEach(item => {
            cartHTML += `
        <div class="item-details" style="margin-top: 25px;" id="cart-item-${item.name}">
            <img src="${item.image}" alt="Product Image" style="width: 100px;">
            <div>
                <h5>${item.name}</h5>
                <div class="product-price">
                    <p class="price-discount">${item.discount}</p>
                    <p class="price-original">${item.price}</p>
                </div>
                <div class="quantity">
                    <button class="btn btn-light" onclick="updateQuantity('${item.name}', -1)">-</button>
                    <input class="form-control d-inline" value="${item.quantity}" id="quantity-${item.name}" onchange="updateQuantity('${item.name}', this.value)">
                    <button class="btn btn-light" onclick="updateQuantity('${item.name}', 1)">+</button>
                </div>
                <div class="delete-item" style="margin-left: 550px; margin-top: -35px;" onclick="removeItem('${item.name}')">
                    <i class="fa-solid fa-trash" style="color: #f50505;"></i>
                </div>
            </div>
        </div>
            `;
        });

        document.getElementById("cart-item").innerHTML = cartHTML;

        // Tính tổng giá trị của tất cả các sản phẩm trong giỏ hàng
        const totalPrice = cart.reduce((sum, item) => {
            const price = parseFloat(item.discount.replace("đ", "").replace(".", "").trim());
            return sum + (price * item.quantity * 1000);
        }, 0).toLocaleString();

        document.getElementById("total-price").innerText = `${totalPrice}đ`;
        document.getElementById("final-price").innerText = `${totalPrice}đ`;
    } else {
        document.getElementById("cart-item").innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
    }
});

// Cập nhật số lượng cho một sản phẩm cụ thể và lưu lại vào localStorage
function updateQuantity(productName, value) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) return; // Nếu giỏ hàng không có sản phẩm, không làm gì cả

    const product = cart.find(item => item.name === productName);

    if (product) {
        const quantity = typeof value === 'number' ? product.quantity + value : parseInt(value);

        if (quantity > 0) {
            product.quantity = quantity;
            localStorage.setItem("cart", JSON.stringify(cart));

            // Cập nhật tổng giá trị sau khi thay đổi số lượng
            const totalPrice = cart.reduce((sum, item) => {
                const price = parseFloat(item.discount.replace("đ", "").replace(".", "").trim());
                return sum + (price * item.quantity * 1000);
            }, 0).toLocaleString();

            document.getElementById("total-price").innerText = `${totalPrice}đ`;
            document.getElementById("final-price").innerText = `${totalPrice}đ`;

            // Cập nhật trường số lượng cho sản phẩm cụ thể
            document.getElementById(`quantity-${productName}`).value = quantity;
        }
    }
}

// Xóa một sản phẩm cụ thể khỏi giỏ hàng
function removeItem(productName) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) return; // Nếu giỏ hàng không có sản phẩm, không làm gì cả

    // Lọc bỏ sản phẩm để xóa
    cart = cart.filter(item => item.name !== productName);

    // Lưu giỏ hàng đã cập nhật vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Xóa sản phẩm khỏi hiển thị giỏ hàng
    const itemElement = document.getElementById(`cart-item-${productName}`);
    if (itemElement) {
        itemElement.remove();
    }

    // Tính toán và cập nhật tổng giá trị
    const totalPrice = cart.reduce((sum, item) => {
        const price = parseFloat(item.discount.replace("đ", "").replace(".", "").trim());
        return sum + (price * item.quantity * 1000);
    }, 0).toLocaleString();

    document.getElementById("total-price").innerText = `${totalPrice}đ`;
    document.getElementById("final-price").innerText = `${totalPrice}đ`;

    // Nếu giỏ hàng trống, hiển thị thông báo
    if (cart.length === 0) {
        document.getElementById("cart-item").innerHTML = "<p>Giỏ hàng của bạn trống.</p>";
    }
}
