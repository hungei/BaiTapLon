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
const productID = urlParams.get("productID");

// Dữ liệu mẫu cho sản phẩm (thay thế bằng dữ liệu từ cơ sở dữ liệu hoặc file JSON)
const products = {
  1: {
    name: "iPhone 15 Pro Max 256GB | Chính hãng VN/A",
    sale: "Giảm 16%",
    image: "../images/Hot_Sale/iphone15.png",
    price: "34.990.000đ",
    discount: "29.490.000đ",
    description:
      "Máy mới 100%, chính hãng Apple Việt Nam, MobiShop hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
    details: [
      "Màn hình: 6.7 inch Super Retina XDR OLED",
      "Chipset: Apple A17 Pro 6 nhân",
      "Camera sau: 48MP",
      "Camera trước: 12MP",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: iOS 17",
    ],
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
      "Hệ điều hành: iOS 13 hoặc cao hơn",
    ],
  },
  3: {
    name: "iPhone 13 128GB | Chính hãng VN/A",
    sale: "Giảm 22%",
    image: "../images/Hot_Sale/iphone-13.png",
    price: "13.490.000đ",
    discount: "17.290.000đ",
    description: "Máy mới 100%, chính hãng Apple Việt Nam",
    details: [
      "Màn hình: 6.1 inches Super Retina XDR OLED",
      "Chipset: Apple A15",
      "Camera sau: kép 12MP",
      "Camera trước: 12MP",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: iOS 15",
    ],
  },
  4: {
    name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
    sale: "Giảm 25%",
    image: "../images/Hot_Sale/iphone14-pro.png",
    price: "29.990.000đ",
    discount: "25.590.000đ",
    description:
      "Máy mới 100%, chính hãng Apple Việt Nam, MobiShop hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
    details: [
      "Màn hình: 6.7 inch Super Retina XDR OLED",
      "Chipset: Apple A16 Bionic 6-core",
      "Camera sau: 48MP",
      "Camera trước: 12MP",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: iOS 16",
    ],
  },
  5: {
    name: "iPhone 11 128GB | Chính hãng VN/A",
    sale: "Giảm 27%",
    image: "../images/Hot_Sale/iphone11_128gb.png",
    price: "13.990.000đ",
    discount: "10.190.000đ",
    description:
      "Máy mới 100%, chính hãng Apple Việt Nam, MobiShop hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
    details: [
      "Màn hình: 6.1 inches IPS LCD",
      "Chipset: A13 Bionic",
      "Camera sau: kép 12MP",
      "Camera trước: 12MP",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: iOS 13 hoặc cao hơn (Tùy vào phiên bản phát hành)",
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
  11: {
    name: "OPPO A77s 8GB 128GB Chính hãng",
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
    ],
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
    ],
  },
  13: {
    name: "realme 11 Pro (8GB - 256GB) Chính hãng",
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
    ],
  },
  14: {
    name: "realme C53 (8GB 256GB) Chính hãng",
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
    ],
  },
  15: {
    name: "vivo V29E 8GB 256 GB Chính hãng",
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
    ],
  },
  16: {
    name: "vivo V30E 12GB 256GB Chính hãng",
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
    ],
  },
  17: {
    name: "vivo V25e 8GB 128 GB Chính hãng",
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
    ],
  },
  18: {
    name: "Xiaomi 14 (12GB 256GB) Chính hãng",
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
    ],
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
    ],
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
    ],
  },
  21: {
    name: "iPhone 13 Pro Max 128GB | Chính hãng VN/A",
    sale: "Giảm 21%",
    image: "../images/Iphone/iphone-13-promax-128gb.png",
    price: "28.990.000đ",
    discount: "22.990.000đ",
    description:
      "Máy mới 100% , chính hãng Apple Việt Nam. MobiShop hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
    details: [
      "Màn hình: 6.7 inches Super Retina XDR OLED",
      "Chipset: Apple A15 Bionic 6 nhân",
      "Camera sau: kép 12MP",
      "Camera trước: 12MP, ƒ/2.2",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: iOS 15",
    ],
  },
  22: {
    name: "iPhone 11 64GB | Chính hãng VN/A",
    sale: "Giảm 25%",
    image: "../images/Iphone/iphone-13-promax-256gb.png",
    price: "31.990.000đ",
    discount: "23.990.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.7 inches Super Retina XDR OLED",
      "Chipset: Apple A15 Bionic 6 nhân",
      "Camera sau: kép 12MP",
      "Camera trước: 12MP, ƒ/2.2",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: iOS 15",
    ],
  },
  23: {
    name: "iPhone 16 Plus 256GB | Chính hãng VN/A",
    sale: "Giảm 2%",
    image: "../images/Iphone/iphone16-plus.png",
    price: "28.990.000đ",
    discount: "28.490.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.7 inches Super Retina XDR OLED",
      "Chipset: Apple A18 Pro",
      "Camera sau: 48MP",
      "Camera trước: 12MP, ƒ/1.9, Tự động lấy nét theo pha Focus Pixels",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: iOS 18",
    ],
  },
  24: {
    name: "iPhone 16 Pro Max 256GB | Chính hãng VN/A",
    sale: "Giảm 1%",
    image: "../images/Iphone/iphone16-pro.png",
    price: "34.990.000đ",
    discount: "34.790.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.9 inches Super Retina XDR OLED",
      "Chipset: Apple A18 Pro",
      "Camera sau: 48MP",
      "Camera trước: 12MP, ƒ/1.9, Tự động lấy nét theo pha Focus Pixels",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: iOS 18",
    ],
  },
  25: {
    name: "Nokia 105 4G Pro ",
    sale: "Giảm 10%",
    image: "../images/Nokia/nokia-105-4g-pro.png",
    price: "1.200.000đ",
    discount: "1.080.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 1.77 inches IPS LCD",
      "Chipset: Unisoc T107",
      "Camera sau: Không có",
      "Camera trước: Không có",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: S30 +",
    ],
  },
  26: {
    name: "Nokia 110 4G Pro",
    sale: "Giảm 10%",
    image: "../images/Nokia/nokia-110-4g-pro.png",
    price: "1.200.000đ",
    discount: "1.080.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 1.77 inches IPS LCD",
      "Chipset: Unisoc T107",
      "Camera sau: QVGA",
      "Camera trước: Không có",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: S30 +",
    ],
  },
  27: {
    name: "Nokia 220 4G",
    sale: "Giảm 10%",
    image: "../images/Nokia/nokia-220-4g.png",
    price: "1.200.000đ",
    discount: "1.080.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 2.8 inches TFT LCD",
      "Chipset: Unisoc T107",
      "Camera sau: Không có",
      "Camera trước: Không có",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: S30 +",
    ],
  },
  28: {
    name: "Nokia 3210 4G",
    sale: "Giảm 3%",
    image: "../images/Nokia/nokia-3210-4g.png",
    price: "1.590.000đ",
    discount: "1.550.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 2.4 inches IPS LCD",
      "Chipset: Unisoc T107",
      "Camera sau: Không có",
      "Camera trước: Không có",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: S30 +",
    ],
  },
  29: {
    name: "Nokia 8210 4G 128MB",
    sale: "Giảm 1%",
    image: "../images/Nokia/nokia-8210_4g-sand-front_back-int.webp",
    price: "1.590.000đ",
    discount: "1.570.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 2.8 inches TFT LCD",
      "Chipset: Unisoc T107 (22 nm)",
      "Camera sau: 0,3 MP",
      "Camera trước: Không có",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: S30 +",
    ],
  },
  30: {
    name: "Nokia HMD 105 4G",
    sale: "Giảm 10%",
    image: "../images/Nokia/nokia-hmd-105-4g.png",
    price: "1.200.000đ",
    discount: "1.080.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 2.4 inches TFT LCD",
      "Chipset: Unisoc 8910 & T127",
      "Camera sau: Không có",
      "Camera trước: Không có",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: S30 +",
    ],
  },
  31: {
    name: "OPPO Find N3 16GB 512GB Chính hãng",
    sale: "Giảm 7%",
    image: "../images/Oppo/oppo_find_N3.webp",
    price: "44.990.000đ",
    discount: "41.990.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 2.4 inches Unisoc 8910 & T127",
      "Chipset: Unisoc T107",
      "Camera sau: Không có",
      "Camera trước: Không có",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: S30 +",
    ],
  },
  32: {
    name: "OPPO A17K 8GB 128GB Chính hãng",
    sale: "Giảm 15%",
    image: "../images/Oppo/oppo-a17k.png",
    price: "3.290.000đ",
    discount: "2.790.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.56 inches IPS LCD",
      "Chipset: MediaTek Helio G35 8 nhân",
      "Camera sau: 8 MP, f/2.0, FOV 78°",
      "Camera trước: 5MP (f/2.2); FOV 76.8°",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 12",
    ],
  },
  33: {
    name: "OPPO A79 5G (8GB 256GB) Chính hãng",
    sale: "Giảm 4%",
    image: "../images/Oppo/oppo-a79-tim.png",
    price: "7.490.000đ",
    discount: "7.190.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.72 inches IPS LCD",
      "Chipset: Snapdragon 680 4G",
      "Camera sau: 50 MP, f/1.8, PDAF",
      "Camera trước: 8 MP, f/2.0",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 13",
    ],
  },
  34: {
    name: "OPPO Reno11 F 5G (8GB 256GB) Chính hãng",
    sale: "Giảm 6%",
    image: "../images/Oppo/oppo-reno-11-f.png",
    price: "8.990.000đ",
    discount: "8.490.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.7 inches AMOLED",
      "Chipset: Mediatek Dimensity 7050 (6 nm)",
      "Camera sau: 64 MP, f/1.8, PDAF",
      "Camera trước: 8 MP, f/2.0",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: ColorOS 14 Android 14",
    ],
  },
  35: {
    name: "OPPO Reno7 5G (8GB 256GB) Chính hãng",
    sale: "Giảm 42%",
    image: "../images/Oppo/oppo-reno7.png",
    price: "12.990.000đ",
    discount: "7.590.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.4 inches IPS LCD",
      "Chipset: MediaTek Dimensity 900",
      "Camera sau: 32MP f/2.4",
      "Camera trước: 8 MP, f/2.0",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 12",
    ],
  },
  36: {
    name: "OPPO Reno12 F 5G (8GB 256GB) Chính hãng",
    sale: "Giảm 3%",
    image: "../images/Oppo/oppo-Reno12-F.png",
    price: "9.490.000đ",
    discount: "9.190.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.7 inches AMOLED",
      "Chipset: Snapdragon 680 4G",
      "Camera sau: 50 MP, f/1.8, PDAF",
      "Camera trước: 32 MP",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 14",
    ],
  },
  37: {
    name: "realme 13+ 5G (8GB 256GB) Chính hãng",
    sale: "Giảm 2%",
    image: "../images/Realme/realme-13-plus.png",
    price: "9.490.000đ",
    discount: "9.190.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.67 inches OLED",
      "Chipset: Dimensity 7300 Energy 5G",
      "Camera sau: 50MP 882 OIS + 2MP + Flicker",
      "Camera trước: 16MP, f/2.4",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 14",
    ],
  },
  38: {
    name: "realme C30s 2GB 32GB Chính hãng",
    sale: "Giảm 20%",
    image: "../images/Realme/realme-C30s.png",
    price: "2.490.000đ",
    discount: "1.990.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.5 inches IPS LCD",
      "Chipset: Unisoc SC9863A1",
      "Camera sau: 8 MP",
      "Camera trước: 5 MP",
      "Bộ nhớ trong: 32 GB",
      "Hệ điều hành: Android 11",
    ],
  },
  39: {
    name: "realme C33 4G (3GB - 32GB) Chính hãng",
    sale: "Giảm 47%",
    image: "../images/Realme/realme-C33.png",
    price: "3.490.000đ",
    discount: "1.850.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.5 inches IPS LCD",
      "Chipset: Unisoc T612",
      "Camera sau: 50 MP + 0.3MP",
      "Camera trước: 5 MP",
      "Bộ nhớ trong: 32 GB",
      "Hệ điều hành: Android 11",
    ],
  },
  40: {
    name: "realme C51 6GB 256GB Chính hãng",
    sale: "Giảm 28%",
    image: "../images/Realme/realme-c51.png",
    price: "4.490.000đ",
    discount: "3.250.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.74 inches IPS LCD",
      "Chipset: Unisoc UNISOC T612",
      "Camera sau: Chính 50 MP & Phụ 0.3 MP",
      "Camera trước: 5M, f/2.22",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 12",
    ],
  },
  41: {
    name: "realme C55 8GB 256GB Chính hãng",
    sale: "Giảm 38%",
    image: "../images/Realme/realme-c55-256gb.png",
    price: "5.990.000đ",
    discount: "3.690.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.72 inches IPS LCD",
      "Chipset: Helio G88",
      "Camera sau: 64 MP",
      "Camera trước: 8 MP, f/2.0",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 13",
    ],
  },
  42: {
    name: "realme C61 (4GB 128GB) Chính hãng",
    sale: "Giảm 6%",
    image: "../images/Realme/realme-c61.png",
    price: "3.590.000đ",
    discount: "3.390.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.745 inches IPS LCD",
      "Chipset: Unisoc Tiger T612",
      "Camera sau: 50 MP",
      "Camera trước: 5 MP",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 14",
    ],
  },
  43: {
    name: "realme Note 60 64 GB Chính hãng",
    sale: "Giảm 3%",
    image: "../images/Realme/realme-note-60-64gb.png",
    price: "3.090.000đ",
    discount: "2.990.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.74 inches IPS LCD",
      "Chipset: Snapdragon 680 4G",
      "Camera sau: chính 32MP",
      "Camera trước: 5 MP",
      "Bộ nhớ trong: 64 GB",
      "Hệ điều hành: Android 14",
    ],
  },
  44: {
    name: "Samsung Galaxy A05S 4GB 128GB",
    sale: "Giảm 10%",
    image: "../images/Samsung/samsung-galaxy-a50s.png",
    price: "3.990.000đ",
    discount: "3.590.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.7 inches PLS LCD",
      "Chipset: Snapdragon 680 4G",
      "Camera sau: 50 MP",
      "Camera trước: 13 MP, f/2.0",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 13",
    ],
  },
  45: {
    name: "Samsung Galaxy A54 8GB 256GB Chính hãng",
    sale: "Giảm 31%",
    image: "../images/Samsung/samsung-galaxy-a54.png",
    price: "11.490.000đ",
    discount: "7.890.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.4 inches Super AMOLED",
      "Chipset: Exynos 1380 (5 nm)",
      "Camera sau: 50 MP",
      "Camera trước: 32 MP",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 13",
    ],
  },
  46: {
    name: "Samsung Galaxy M34 5G 8GB 128GB",
    sale: "Giảm 26%",
    image: "../images/Samsung/samsung-galaxy-m34.webp",
    price: "7.990.000đ",
    discount: "5.890.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.5 inches Super AMOLED",
      "Chipset: Exynos 1280 (5 nm)",
      "Camera sau: 50 MP",
      "Camera trước: 16 MP",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 13",
    ],
  },
  47: {
    name: "Samsung Galaxy Z Fold4 256GB Chính hãng",
    sale: "Giảm 45%",
    image: "../images/Samsung/samsung-galaxy-z-fold-4.png",
    price: "40.990.000đ",
    discount: "22.490.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 7.6 inches Dynamic AMOLED 2X",
      "Chipset: Snapdragon 8 Plus Gen 1",
      "Camera sau: 50MP",
      "Camera trước: 10MP (bên ngoài) + 4MP (dưới màn hình)",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 12",
    ],
  },
  48: {
    name: "vivo Y02t 4GB 128 GB Chính hãng",
    sale: "Giảm 17%",
    image: "../images/Vivo/vivo-y02t.png",
    price: "2.390.000đ",
    discount: "2.790.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.51 inches IPS LCD",
      "Chipset: MediaTek Helio P35 8 nhân",
      "Camera sau: 8 MP, f/2.0",
      "Camera trước: 5 MP, f/2.2",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 13",
    ],
  },
  49: {
    name: "Vivo Y100 4GB 256GB Chính hãng",
    sale: "Giảm 13%",
    image: "../images/Vivo/vivo-y100.png",
    price: "7.690.000đ",
    discount: "6.690.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.67 inches AMOLED",
      "Chipset: Snapdragon 685 8 nhân",
      "Camera sau: 50 MP",
      "Camera trước: 8MP, f/2.0",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 14",
    ],
  },
  50: {
    name: "vivo Y16S 4GB 128 GB Chính hãng",
    sale: "Giảm 18%",
    image: "../images/Vivo/vivo-y16.png",
    price: "4.490.000đ",
    discount: "3.690.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.51 inches IPS LCD",
      "Chipset: MediaTek Helio P35 8 nhân",
      "Camera sau: 13 MP",
      "Camera trước: 5 MP",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 12",
    ],
  },
  51: {
    name: "vivo Y18S 6GB 128GB Chính hãng",
    sale: "Giảm 5%",
    image: "../images/Vivo/vivo-y18s.png",
    price: "4.190.000đ",
    discount: "3.990.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình:  6.56 inches IPS LCD",
      "Chipset: Helio G85",
      "Camera sau: 50MP",
      "Camera trước: 8MP khẩu độ f/2.0 (8MP)",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 14",
    ],
  },
  52: {
    name: "vivo Y19S 8GB 128GB Chính hãng",
    sale: "Giảm 2%",
    image: "../images/Vivo/vivo-y19s.png",
    price: "4.790.000đ",
    discount: "4.690.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.68 inches IPS LCD",
      "Chipset: Snapdragon 8 Plus Gen 1",
      "Camera sau: 50MP",
      "Camera trước: 5MP",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 14",
    ],
  },
  53: {
    name: "vivo Y36 8GB 256GB Chính hãng",
    sale: "Giảm 5%",
    image: "../images/Vivo/vivo-y36.png",
    price: "6.190.000đ",
    discount: "5.890.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.64 inches IPS LCD",
      "Chipset: Qualcomm Snapdragon 680 8 nhân",
      "Camera sau: 50MP",
      "Camera trước: 16MP",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 13",
    ],
  },
  54: {
    name: "Xiaomi 13 Lite",
    sale: "Giảm 28%",
    image: "../images/Xiaomi/xiaomi-13-lite.png",
    price: "11.490.000đ",
    discount: "8.290.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.55 inches AMOLED",
      "Chipset: Chip Snapdragon 7 Gen 1 (4 nm)",
      "Camera sau: 50MP",
      "Camera trước: 16MP",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 12",
    ],
  },
  55: {
    name: "Xiaomi 13T 12GB 256GB",
    sale: "Giảm 18%",
    image: "../images/Xiaomi/xiaomi-13t.png",
    price: "12.990.000đ",
    discount: "10.590.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.67 inches AMOLED",
      "Chipset: MediaTek Dimensity 8200-Ultra",
      "Camera sau: 50MP",
      "Camera trước: 20 MP, f/2,2",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 13",
    ],
  },
  56: {
    name: "Xiaomi 14 Ultra 5G (16GB 512GB)",
    sale: "Giảm 9%",
    image: "../images/Xiaomi/xiaomi-14-ultra.png",
    price: "32.990.000đ",
    discount: "29.990.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.73 inches AMOLED",
      "Chipset: Snapdragon 8 Gen 3",
      "Camera sau: 50MP",
      "Camera trước: 32MP",
      "Bộ nhớ trong: 512 GB",
      "Hệ điều hành: Xiaomi HyperOS",
    ],
  },
  57: {
    name: "Xiaomi POCO M5 (6GB 128GB)",
    sale: "Giảm 36%",
    image: "../images/Xiaomi/xiaomi-poco-m5.png ",
    price: "4.690.000đ",
    discount: "2.990.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.58 inches IPS LCD",
      "Chipset: MediaTek Helio G99 (6nm)",
      "Camera sau: 50MP",
      "Camera trước: 16MP",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 12, MIUI 13",
    ],
  },
  58: {
    name: "Xiaomi Redmi Note 10 Pro 6GB",
    sale: "Giảm 17%",
    image: "../images/Xiaomi/xiaomi-redmi-note-10-pro_2__2.webp",
    price: "6.990.000đ",
    discount: "5.790.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.66 inches AMOLED",
      "Chipset: Snapdragon 732G (8 nm)",
      "Camera sau: 108MP",
      "Camera trước: 16MP",
      "Bộ nhớ trong: 128 GB",
      "Hệ điều hành: Android 11, MIUI 12",
    ],
  },
  59: {
    name: "Xiaomi Redmi Note 12 Pro 5G",
    sale: "Giảm 31%",
    image: "../images/Xiaomi/xiaomi-redmi-note-12-pro.png",
    price: "9.490.000đ",
    discount: "6.590.000đ",
    description: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    details: [
      "Màn hình: 6.67 inches AMOLED",
      "Chipset: MediaTek Dimensity 1080 8 nhân",
      "Camera sau: 50MP",
      "Camera trước: 16MP",
      "Bộ nhớ trong: 256 GB",
      "Hệ điều hành: Android 12",
    ],
  },
};

// Hiển thị chi tiết sản phẩm dựa trên productID
const product = products[productID];
if (product) {
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("discount-badge").innerText = product.sale;
  document.getElementById("product-image").src = product.image;
  document.getElementById("price-original").innerText = product.price;
  document.getElementById("price-discount").innerText = product.discount;
  document.getElementById("product-description").innerText =
    product.description;

  // Hiển thị chi tiết sản phẩm dạng list
  const detailsList = document.getElementById("product-details-list");
  product.details.forEach((detail) => {
    const listItem = document.createElement("li");
    listItem.innerText = detail;
    detailsList.appendChild(listItem);
  });
} else {
  document.body.innerHTML = "<h1>Không tìm thấy sản phẩm</h1>";
}

document
  .getElementById("increase-quantity")
  .addEventListener("click", function () {
    const quantityInput = document.getElementById("quantity-input");
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
  });

document
  .getElementById("decrease-quantity")
  .addEventListener("click", function () {
    const quantityInput = document.getElementById("quantity-input");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  });

document
  .getElementById("add-to-cart-btn")
  .addEventListener("click", function () {
    const product = products[productID];
    const quantity = parseInt(document.getElementById("quantity-input").value);

    if (product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProductIndex = cart.findIndex(
        (item) => item.name === product.name
      );

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
      $("#cartModal").modal("show");
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
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    );

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
