// Nav bar shadow/opacity on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.background = 'rgba(21,18,28,0.92)';
  } else {
    nav.style.background = 'rgba(21,18,28,0.75)';
  }
});

// Simple reveal-on-scroll for sections
const revealTargets = document.querySelectorAll('.section, .contact');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

// =========================================================
// PROJECT GALLERY — foto & video diambil dari folder assets/
// (file lokal dari laptop kamu, BUKAN link online)
//
// Cara menambah/mengganti media:
// 1. Buat folder assets/proyek1/, assets/proyek2/, dst.
// 2. Taruh foto (.jpg/.png) atau video (.mp4) di dalamnya.
// 3. Tulis nama filenya di daftar "media" di bawah ini.
// 4. Boleh tambah baris sebanyak yang kamu mau per proyek.
// =========================================================
const projectsData = {
  data: {
    title: 'Tourist Visit Forecasting Using ARIMAX',
    media: [
      { type: 'image', src: 'assets/AI/DATA.1.png' },
      { type: 'image', src: 'assets/AI/DATA.2.png' },
      { type: 'image', src: 'assets/AI/DATA.3.png' },
      { type: 'image', src: 'assets/AI/DATA.4.png' },
      { type: 'image', src: 'assets/AI/DATA.5.png' }
    ]
  },
  dashboard: {
    title: 'FIGMA UI/UX PROJECTS',
    media: [
      { type: 'image', src: 'assets/AI/Dashboard.png' },
      { type: 'image', src: 'assets/AI/konversi.png' },
      { type: 'image', src: 'assets/AI/pet.png' },
      { type: 'image', src: 'assets/AI/pet2.png' },
      { type: 'image', src: 'assets/AI/pet3.png' },
      { type: 'image', src: 'assets/AI/pet4.png' },
      { type: 'image', src: 'assets/AI/pet5.png' },
      { type: 'image', src: 'assets/AI/sk1.png' },
      { type: 'image', src: 'assets/AI/sk2.png' },
      { type: 'image', src: 'assets/AI/sk3.png' },
      { type: 'image', src: 'assets/AI/sk4.png' },
      { type: 'image', src: 'assets/AI/sk5.png' }
    ]
  },
  igXlsmart: {
    title: 'Social Media Management — Instagram @xlsmart_iot',
    media: [
      { type: 'image', src: 'assets/proyek/ig-xlsmart/3.png' },
      { type: 'image', src: 'assets/proyek/ig-xlsmart/4.png' },
      { type: 'image', src: 'assets/proyek/ig-xlsmart/5.png' },
      { type: 'image', src: 'assets/proyek/ig-xlsmart/6.png' },
      { type: 'image', src: 'assets/proyek/ig-xlsmart/7.png' },
      { type: 'image', src: 'assets/proyek/ig-xlsmart/8.png' },
      { type: 'image', src: 'assets/proyek/ig-xlsmart/9.png' },
      { type: 'image', src: 'assets/proyek/ig-xlsmart/10.png' }
    ]
  },
  reelsXl: {
    title: 'Instagram Rells - X-Camp',
    media:  [
      { type: 'video', src: 'assets/proyek/reelsXL/23.MP4' },
      { type: 'video', src: 'assets/proyek/reelsXL/24.MP4' },
      { type: 'video', src: 'assets/proyek/reelsXL/25.MP4' },
      { type: 'video', src: 'assets/proyek/reelsXL/26.MP4' },
      { type: 'image', src: 'assets/proyek/reelsXL/1.jpg' },
      { type: 'image', src: 'assets/proyek/reelsXL/2.PNG' },
      { type: 'image', src: 'assets/proyek/reelsXL/33.jpg' },
      { type: 'image', src: 'assets/proyek/reelsXL/44.jpg' },
      { type: 'image', src: 'assets/proyek/reelsXL/55.jpg' }
    ]
  },
  igMaxtion: {
    title: 'Instagram Klien — Plaza Mebel Garut',
    media: [
      { type: 'image', src: 'assets/proyek/ig-maxtion/1.jpg' },
      { type: 'image', src: 'assets/proyek/ig-maxtion/2.jpg' },
      { type: 'image', src: 'assets/proyek/ig-maxtion/4.jpg' },
      { type: 'image', src: 'assets/proyek/ig-maxtion/5.jpg' },
      { type: 'image', src: 'assets/proyek/ig-maxtion/6.jpg' },
      { type: 'image', src: 'assets/proyek/ig-maxtion/7.jpg' }
    ]
  },
  evanescent: {
    title: 'Instagram Klien — EVANESCENT',
    media: [
      { type: 'video', src: 'assets/proyek/evanescent/1345.mp4' },
      { type: 'image', src: 'assets/proyek/evanescent/IMG_2187.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/1.PNG' },
      { type: 'image', src: 'assets/proyek/evanescent/2,PNG' },
      { type: 'image', src: 'assets/proyek/evanescent/3.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/4.PNG' },
      { type: 'image', src: 'assets/proyek/evanescent/09.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/23.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/44.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/57.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/111.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/112.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/234.jpg' },
      { type: 'image', src: 'assets/proyek/evanescent/278.jpg' }
    ]
  },
  productContent: {
    title: 'AI & IoT Product Content',
    media: [
      { type: 'image', src: 'assets/proyek/productcontent/3.jpg' },
      { type: 'image', src: 'assets/proyek/productcontent/4.jpg' },
      { type: 'image', src: 'assets/proyek/productcontent/5.jpg' },
      { type: 'image', src: 'assets/proyek/productcontent/6.jpg' },
      { type: 'image', src: 'assets/proyek/productcontent/7.jpg' },
      { type: 'image', src: 'assets/proyek/productcontent/8.jpg' },
      { type: 'image', src: 'assets/proyek/productcontent/9.jpg' }
    ]
  },
  eventContent: {
    title: 'Event Content — AI GINATOR & P3DN Business Meeting',
    media: [
      { type: 'video', src: 'assets/proyek/event-content/qw.MP4' },
      { type: 'video', src: 'assets/proyek/event-content/uu.MP4' },
      { type: 'video', src: 'assets/proyek/event-content/yy.MP4' },
      { type: 'image', src: 'assets/proyek/event-content/1.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/2.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/3.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/4.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/5.PNG' },
      { type: 'image', src: 'assets/proyek/event-content/6.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/7.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/8.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/9.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/10.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/11.jpg' },
      { type: 'image', src: 'assets/proyek/event-content/12.jpg' }
    
    ]
  },
  merchandiseDesign: {
    title: 'Merchandise & Corporate Apparel Design',
    media: [
      { type: 'image', src: 'assets/proyek/merchandiseDesign/1.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/2.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/3.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/4.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/5.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/6.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/7.jpg' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/8.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/9.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/10.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/11.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/12.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/13.jpg' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/14.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/15.JPG' },
      { type: 'image', src: 'assets/proyek/merchandiseDesign/16.JPG' },
      { type: 'image', src: 'assets/proyek/productcontent/1.jpg' },
      { type: 'image', src: 'assets/proyek/productcontent/2.jpg' }
    ]
  },
};

const modalEl = document.getElementById('galleryModal');
const modalTitleEl = document.getElementById('modalTitle');
const modalViewerEl = document.getElementById('modalViewer');
const modalThumbsEl = document.getElementById('modalThumbs');

function renderViewer(item) {
  modalViewerEl.innerHTML = '';
  if (!item) {
    modalViewerEl.innerHTML = '<div class="empty-state">Belum ada foto/video di sini.<br>Taruh file di folder assets/ sesuai instruksi README.</div>';
    return;
  }
  let el;
  if (item.type === 'video') {
    el = document.createElement('video');
    el.controls = true;
    el.src = item.src;
  } else {
    el = document.createElement('img');
    el.src = item.src;
    el.alt = '';
  }
  el.onerror = () => {
    modalViewerEl.innerHTML = '<div class="empty-state">File belum ditemukan: <code>' + item.src + '</code><br>Taruh file dengan nama itu di folder assets/.</div>';
  };
  modalViewerEl.appendChild(el);
}

function openGallery(id) {
  const project = projectsData[id];
  if (!project) return;

  modalTitleEl.textContent = project.title;
  modalThumbsEl.innerHTML = '';

  const media = project.media || [];
  renderViewer(media[0]);

  media.forEach((item, index) => {
    const thumbBtn = document.createElement('button');
    thumbBtn.className = index === 0 ? 'is-active' : '';
    const thumbMedia = item.type === 'video' ? document.createElement('video') : document.createElement('img');
    thumbMedia.src = item.src;
    thumbMedia.onerror = () => { thumbBtn.style.opacity = '0.3'; };
    thumbBtn.appendChild(thumbMedia);
    thumbBtn.addEventListener('click', () => {
      renderViewer(item);
      [...modalThumbsEl.children].forEach(c => c.classList.remove('is-active'));
      thumbBtn.classList.add('is-active');
    });
    modalThumbsEl.appendChild(thumbBtn);
  });

  if (media.length === 0) renderViewer(null);

  modalEl.classList.add('is-open');
}

function closeGallery() {
  modalEl.classList.remove('is-open');
  modalViewerEl.innerHTML = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeGallery();
});

// Allow project cards to open gallery using keyboard
document.querySelectorAll('.project-card[role="button"]').forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});