// Scroll Header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  // Kiểm tra vị trí cuộn
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// End Scroll Header

// Mobile Sidebar Menu Logic
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function openSidebar() {
  mobileSidebar.classList.remove("-translate-x-full");
  sidebarOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeSidebar() {
  mobileSidebar.classList.add("-translate-x-full");
  sidebarOverlay.classList.add("hidden");
  document.body.style.overflow = ""; // Restore scrolling
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", openSidebar);
}

if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener("click", closeSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}
// End Mobile Sidebar Menu Logic

// Slide Section-2
const swiperSection2 = new Swiper(".swiper-section-2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 215,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-section-2-next",
    prevEl: ".swiper-section-2-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      coverflowEffect: {
        rotate: 30,
        depth: 100,
      },
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// End Slide Section-2

// Accordion Section-7
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".accordion-icon");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      if (!isActive) {
        item.classList.add("active");
        icon.classList.replace("fa-circle-plus", "fa-circle-minus");
        content.style.height = content.scrollHeight + "px";
        content.classList.remove("opacity-0");
        content.classList.add("opacity-100", "mb-[4px]");
      } else {
        item.classList.remove("active");
        icon.classList.replace("fa-circle-minus", "fa-circle-plus");
        content.style.height = "0px";
        content.classList.remove("opacity-100", "mb-[4px]");
        content.classList.add("opacity-0");
      }
    });
  });
});
// End Accordion Section-7

// Clock Expire
const clockExpire = document.querySelector("[clock-expire]");
if (clockExpire) {
  const expireDateTimeString = clockExpire.getAttribute("clock-expire");

  // Chuyển đổi chuỗi thời gian thành đối tượng Date
  const expireDateTime = new Date(expireDateTimeString);

  // Hàm cập nhật đồng hồ
  const updateClock = () => {
    const now = new Date();
    const remainingTime = expireDateTime - now; // quy về đơn vị mili giây

    if (remainingTime > 0) {
      const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
      // Tính số ngày, 24 * 60 * 60 * 1000 Tích của các số này = số mili giây trong 1 ngày

      const hours = Math.floor((remainingTime / (60 * 60 * 1000)) % 24);
      // Tính số giờ, 60 * 60 * 1000 Chia remainingTime cho giá trị này để nhận được tổng số giờ.
      // % 24 Lấy phần dư khi chia tổng số giờ cho 24 để chỉ lấy số giờ còn lại trong ngày.

      const minutes = Math.floor((remainingTime / (60 * 1000)) % 60);
      // Tính số phút, 60 * 1000 Chia remainingTime cho giá trị này để nhận được tổng số phút.
      // % 60 Lấy phần dư khi chia tổng số phút cho 60 để chỉ lấy số phút còn lại trong giờ.

      const seconds = Math.floor((remainingTime / 1000) % 60);
      // Tính số giây, 1000 Chia remainingTime cho giá trị này để nhận được tổng số giây.
      // % 60 Lấy phần dư khi chia tổng số giây cho 60 để chỉ lấy số giây còn lại trong phút.

      // Cập nhật giá trị vào thẻ span
      const listBoxNumber = clockExpire.querySelectorAll(".inner-number");
      listBoxNumber[0].innerHTML = `${days}`.padStart(2, "0");
      listBoxNumber[1].innerHTML = `${hours}`.padStart(2, "0");
      listBoxNumber[2].innerHTML = `${minutes}`.padStart(2, "0");
      listBoxNumber[3].innerHTML = `${seconds}`.padStart(2, "0");
    } else {
      // Khi hết thời gian, dừng đồng hồ
      clearInterval(intervalClock);
    }
  };

  // Gọi ngay lần đầu tiên để tránh bị trễ 1 giây
  updateClock();
  
  // Gọi hàm cập nhật đồng hồ mỗi giây
  const intervalClock = setInterval(updateClock, 1000);
}
// End Clock Expire
