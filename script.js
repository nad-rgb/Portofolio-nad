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
      { type: 'image', src: 'assets/proyek/reelsXL/1.jpg' },
      { type: 'image', src: 'assets/proyek/reelsXL/2.PNG' },
      { type: 'image', src: 'assets/proyek/reelsXL/33.jpg' },
      { type: 'image', src: 'assets/proyek/reelsXL/44.jpg' },
      { type: 'image', src: 'assets/proyek/reelsXL/55.jpg' },
      { type: 'image', src: 'assets/proyek/reelsXL/66.jpg' }
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
  commercialVideo: {
    title: 'Video Komersial',
    media: [
      { type: 'video', src: 'assets/videos/2w.mp4' },
      { type: 'video', src: 'assets/videos/4r.mp4' }
    ]
  },
  productContent: {
    title: 'AI & IoT Product Content',
    media: [
      { type: 'image', src: 'assets/proyek/productcontent/1.jpg' },
      { type: 'image', src: 'assets/proyek/productcontent/2.jpg' },
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
  }
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
