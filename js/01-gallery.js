import { galleryItems } from './gallery-items.js';

const makeGalleryItemMarkup = (arr) => {
    return arr
        .map(({ description: descr, preview, original: orig }) => {
            return `<div class="gallery__item">
						<a class="gallery__link" href="large-image.jpg">
							<img
								class="gallery__image"
								src="${preview}"
								data-source="${orig}"
								alt="${descr}"
								/>
						</a>
					</div>`;
        })
        .join('');
};

const galleryContainerRef = document.querySelector('.gallery');
galleryContainerRef.innerHTML = makeGalleryItemMarkup(galleryItems);

const onGalleryImgClick = (e) => {
    if (e.target.nodeName !== 'IMG') return;

    const targetedImgUrl = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${targetedImgUrl}" width="800" height="600">
	`);

    instance.show(
        document.addEventListener('keydown', (e) => {
            if (e.key && e.code === 'Escape') {
                instance.close();
            }
        })
    );
    e.preventDefault();
};

galleryContainerRef.addEventListener('click', onGalleryImgClick);
if (instance.show()) {
    document.addEventListener('keydown', (e) => {
        if (e.code && e.key === 'Escape') {
            instance.close();
        }
    });
}
