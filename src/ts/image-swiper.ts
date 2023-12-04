document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const largeImage = document.querySelector('.image-swiper_large-image') as HTMLImageElement;

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const largeImagePath = thumbnail.getAttribute('data-large');
      if (largeImagePath) {
        largeImage.src = largeImagePath;
      }

    //   const sources = largeImage.parentElement?.querySelectorAll('source');
    //   if (sources) {
    //     sources.forEach(source => {
    //       const srcset = source.getAttribute('data-srcset');
    //       if (srcset) {
    //         source.setAttribute('srcset', srcset);
    //       }
    //     });
    //   }
    });
  });
});

const leftArrow = document.getElementById('leftArrow') as HTMLElement | null;
const rightArrow = document.getElementById('rightArrow') as HTMLElement | null;
const gallery = document.querySelector('.image-swiper_gallery') as HTMLElement | null;

if (leftArrow && rightArrow && gallery) {
  leftArrow.addEventListener('click', () => {
    // Логіка для руху галереї вліво
    if (gallery.scrollLeft > 50) {
      gallery.scrollLeft -= 50; // Ви можете вказати інше значення для зсуву
    } else {
      gallery.scrollLeft = 0; // Забезпечення, що scrollLeft не буде від'ємним
    }
  });

  rightArrow.addEventListener('click', () => {
    // Логіка для руху галереї вправо
    gallery.scrollLeft += 50; // Ви можете вказати інше значення для зсуву
  });
}