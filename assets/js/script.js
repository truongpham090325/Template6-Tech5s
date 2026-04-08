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

// Section-6 Testimonial Logic
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      image: "assets/images/client-1.png",
      name: "Nguyễn Minh Ánh",
      stars: 5,
      desc: "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa phasellus diam. Sit mi at nibh amet, suscipit dui ornare cursus duis.",
    },
    {
      image: "assets/images/client-2.png",
      name: "Vũ Thị Yến",
      stars: 4,
      desc: "Chất lượng dịch vụ tuyệt vời, bác sĩ tận tình và chu đáo.",
      content:
        "Tôi rất hài lòng với trải nghiệm tại Bệnh viện Phương Đông. Cơ sở vật chất hiện đại, sạch sẽ. Đội ngũ y bác sĩ luôn lắng nghe và giải đáp mọi thắc mắc của tôi một cách rõ ràng. Tôi sẽ giới thiệu cho người thân và bạn bè.",
    },
    {
      image: "assets/images/client-3.png",
      name: "Phạm Quang Trường",
      stars: 5,
      desc: "Điều trị hậu Covid ở đây rất an tâm. Sức khỏe tôi phục hồi nhanh chóng.",
      content:
        "Sau khi chữa khỏi Covid, tôi gặp nhiều vấn đề về hô hấp. Nhờ gói khám và điều trị hậu Covid tại bệnh viện, tôi đã hồi phục hoàn toàn. Cảm ơn các y bác sĩ rất nhiều!",
    },
    {
      image: "assets/images/client-4.png",
      name: "Phạm Hữu Đạt",
      stars: 5,
      desc: "Quy trình thăm khám chuyên nghiệp, không phải chờ đợi lâu.",
      content:
        "Mình rất ấn tượng với phong cách làm việc của bệnh viện. Mọi thứ từ đăng ký đến lúc nhận kết quả đều rất trơn tru và nhanh gọn. Bác sĩ tư vấn cực kỳ kỹ lưỡng và có tâm. Chắc chắn sẽ quay lại khi cần thiết.",
    },
    {
      image: "assets/images/client-5.png",
      name: "Hoàng Mai Trang",
      stars: 4,
      desc: "Nhân viên y tế thân thiện, hướng dẫn cực kỳ nhiệt tình.",
      content:
        "Lần đầu đến thăm khám, tôi hơi bỡ ngỡ nhưng được các bạn điều dưỡng hướng dẫn từng bước rất chu đáo. Không gian bệnh viện thoáng đãng, nhiều cây xanh nên cảm giác thoải mái hơn hẳn.",
    },
    {
      image: "assets/images/client-6.png",
      name: "Nguyễn Thị Hồng",
      stars: 5,
      desc: "Trang thiết bị y tế cực kỳ hiện đại, bác sĩ chuyên môn cao.",
      content:
        "Sau nhiều nơi thăm khám, tôi quyết định chọn Phương Đông. Phải nói là tôi thực sự hài lòng về cả cơ sở vật chất lẫn trình độ của y bác sĩ. Cảm giác rất đáng tin cậy. Dịch vụ quá xuất sắc!",
    },
  ];

  const centerAvatar = document.querySelector(".section-6-avatar");
  const centerName = document.querySelector(".section-6-name");
  const centerStars = document.querySelector(".section-6-stars");
  const centerDesc = document.querySelector(".section-6-desc");
  const centerContent = document.querySelector(".section-6-content");

  const clientImages = document.querySelectorAll(".section-6-client");

  clientImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      const data = testimonials[index];
      if (data && centerAvatar && centerName && centerDesc && centerContent) {
        // Apply fade out effect
        const elementsToFade = [
          centerAvatar,
          centerName,
          centerStars,
          centerDesc,
          centerContent,
        ];

        elementsToFade.forEach((el) => {
          el.style.opacity = "0";
          el.style.transition = "opacity 0.3s ease";
        });

        setTimeout(() => {
          centerAvatar.src = data.image;
          centerName.innerText = data.name;
          centerDesc.innerText = data.desc;
          centerContent.innerText = data.content;

          // Render stars
          centerStars.innerHTML = "";
          // Because star-section-6.png is already a 5-star image, we just need to show it once
          // or render dynamic stars based on data.stars. Let's render dynamic FontAwesome stars
          // so it can accurately reflect 1 to 5 stars.
          if (data.stars) {
            centerStars.className =
              "flex justify-center gap-x-[4px] section-6-stars"; // add some gap
            for (let i = 1; i <= 5; i++) {
              const starIcon = document.createElement("i");
              if (i <= data.stars) {
                starIcon.className =
                  "fa-solid fa-star text-[#FFC107] text-[18px]";
              } else {
                starIcon.className =
                  "fa-regular fa-star text-[#FFC107] text-[18px]";
              }
              centerStars.appendChild(starIcon);
            }
          } else {
            // Fallback
            const starImg = document.createElement("img");
            starImg.src = "assets/images/star-section-6.png";
            starImg.alt = "star";
            centerStars.appendChild(starImg);
          }

          // Apply fade in effect
          elementsToFade.forEach((el) => (el.style.opacity = "1"));
        }, 300);
      }
    });
  });

  // Initialize the first item to render correct stars on load
  if (clientImages.length > 0) {
    clientImages[0].click();
  }
});
// End Section-6 Testimonial Logic

// Section-5 Doctor Slider Logic
document.addEventListener("DOMContentLoaded", function () {
  const doctors = [
    {
      name: "Bác sĩ Nguyễn Trung Chính",
      position: "PGS.TS. Bác sĩ Ung bướu",
      desc: "PGS.TS. Bác sĩ Nguyễn Trung Chính - Nguyên Chủ nhiệm khoa và phụ trách trung tâm tế bào gốc Bệnh viện TW Quân đội 108 là chuyên gia có gần 40 năm kinh nghiệm trong lĩnh Ung bướu và Tế bào gốc. PGS.TS Nguyễn Trung Chính đã giúp hàng nghìn bệnh nhân trên cả nước chẩn đoán và điều trị các vấn đề về ung bướu; thực hiện thành công nhiều kĩ thuật khó trong lĩnh vực tế bào gốc.",
      rating: "4.8/5 (38 bình chọn)",
      image: "assets/images/image-section-5.png",
    },
    {
      name: "Bác sĩ Trần Đức Minh",
      position: "Tiến sĩ. Bác sĩ Tim mạch",
      desc: "TS.BS Trần Đức Minh là chuyên gia hàng đầu về tim mạch, với hơn 30 năm kinh nghiệm. Bác sĩ đã thực hiện thành công hàng nghìn ca phẫu thuật, mang lại cuộc sống mới cho các bệnh nhân mắc bệnh lý tim mạch phức tạp.",
      rating: "4.9/5 (56 bình chọn)",
      image: "assets/images/image-section-5.png",
    },
    {
      name: "Bác sĩ Lê Thu Hà",
      position: "Thạc sĩ. Bác sĩ Nội tiết",
      desc: "Thạc sĩ Lê Thu Hà chuyên điều trị các bệnh lý nội tiết, đặc biệt là đái tháo đường và tuyến giáp. Phương pháp điều trị của bác sĩ chú trọng vào việc cá thể hóa, mang lại hiệu quả rõ rệt cho bệnh nhân.",
      rating: "4.7/5 (24 bình chọn)",
      image: "assets/images/image-section-5.png",
    },
    {
      name: "Bác sĩ Phạm Hoàng Long",
      position: "Bác sĩ CKII Hô hấp",
      desc: "Bác sĩ Phạm Hoàng Long có nhiều năm tu nghiệp ở nước ngoài và hiện là một trong những bác sĩ Hô hấp uy tín nhất. Ông chuyên chẩn đoán, điều trị các bệnh phổi tắc nghẽn, hen suyễn, bệnh lý hô hấp phức tạp.",
      rating: "4.9/5 (62 bình chọn)",
      image: "assets/images/image-section-5.png",
    },
    {
      name: "Bác sĩ Nguyễn Thanh Trúc",
      position: "Thạc sĩ. Bác sĩ Nhi khoa",
      desc: "Với tình yêu thương trẻ nhỏ và chuyên môn cao, Thạc sĩ Nguyễn Thanh Trúc luôn tận tâm chăm sóc sức khỏe cho các bé. Bác sĩ luôn là lựa chọn hàng đầu của nhiều bậc phụ huynh khi con gặp vấn đề sức khỏe.",
      rating: "4.8/5 (41 bình chọn)",
      image: "assets/images/image-section-5.png",
    },
    {
      name: "Bác sĩ Đặng Quang Huy",
      position: "Tiến sĩ. Bác sĩ Thần kinh",
      desc: "TS.BS Đặng Quang Huy chuyên gia với hơn 20 năm kinh nghiệm trong khoa Thần kinh. Ông chẩn đoán và điều trị xuất sắc các bệnh lý như đau đầu mãn tính, rối loạn tiền đình, Parkinson và tai biến mạch máu não.",
      rating: "4.9/5 (73 bình chọn)",
      image: "assets/images/image-section-5.png",
    },
  ];

  const sec5Img = document.getElementById("sec5-img");
  const sec5Rating = document.getElementById("sec5-rating");
  const sec5Name = document.getElementById("sec5-name");
  const sec5Position = document.getElementById("sec5-position");
  const sec5Desc = document.getElementById("sec5-desc");
  const sec5Prev = document.getElementById("sec5-btn-prev");
  const sec5Next = document.getElementById("sec5-btn-next");
  const sec5CurrentPage = document.getElementById("sec5-current-page");

  let currentDoctorIndex = 0;

  function updateArrows() {
    if (sec5Prev) {
      if (currentDoctorIndex === 0) {
        sec5Prev.style.opacity = "0.5";
        sec5Prev.style.cursor = "default";
      } else {
        sec5Prev.style.opacity = "1";
        sec5Prev.style.cursor = "pointer";
      }
    }
    
    if (sec5Next) {
      if (currentDoctorIndex === doctors.length - 1) {
        sec5Next.style.opacity = "0.5";
        sec5Next.style.cursor = "default";
      } else {
        sec5Next.style.opacity = "1";
        sec5Next.style.cursor = "pointer";
      }
    }
  }

  function updateDoctorInfo(index) {
    const data = doctors[index];
    if (!data) return;

    // Apply fade out effect
    const elements = [sec5Img, sec5Rating, sec5Name, sec5Position, sec5Desc, sec5CurrentPage];
    
    elements.forEach(el => {
      if(el) {
        el.style.opacity = "0";
        el.style.transition = "opacity 0.3s ease";
      }
    });

    setTimeout(() => {
      if(sec5Img) sec5Img.src = data.image;
      if(sec5Rating) sec5Rating.innerText = data.rating;
      if(sec5Name) sec5Name.innerText = data.name;
      if(sec5Position) sec5Position.innerText = data.position;
      if(sec5Desc) sec5Desc.innerText = data.desc;
      if(sec5CurrentPage) sec5CurrentPage.innerText = index + 1;

      // Apply fade in effect
      elements.forEach(el => {
        if(el) el.style.opacity = "1";
      });
      
      updateArrows();
    }, 300);
  }

  if (sec5Prev && sec5Next) {
    updateArrows(); // Init correct state
    
    sec5Prev.addEventListener("click", () => {
      if (currentDoctorIndex > 0) {
        currentDoctorIndex--;
        updateDoctorInfo(currentDoctorIndex);
      }
    });

    sec5Next.addEventListener("click", () => {
      if (currentDoctorIndex < doctors.length - 1) {
        currentDoctorIndex++;
        updateDoctorInfo(currentDoctorIndex);
      }
    });
  }
});
// End Section-5 Doctor Slider Logic
