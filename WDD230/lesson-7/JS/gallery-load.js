/* Original Creator: Kevin Powell  https://www.youtube.com/watch?v=mC93zsEsSrg&feature=emb_logo */

const images = document.querySelectorAll("[data-src]");  /*pulls items with specific [data-src] attribute*/

function preloadImage(img){ /* function searches for img */
    const src = img.getAttribute("data-src"); /* finds data-src attribute within img */
    if(!src){        /* if no data-src found, return. */
        return;
    }
    img.src = src;   /* If data-src is found, const src will make data-src become src (make image appear) */ 
    img.removeAttribute("data-src") ; 
}

const imgOptions = {
    threshold: 1,                       /* higher threshold means slower loading time of images*/
    rootMargin: " 0px 0px -100px 0px",  /* -100 loads image when image is 100px into the viewport. Positive 100 would load 100px before viewport*/
                                        /* Can use different numbers, i.e. -500, -400, -300...300, 400, 500 px */
};

const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){    /* if entry is not intersecting, return. Else, load image */
            return;
        } else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target); /* once image is preloaded, stop observing it with unobserve */
        }
    })

}, imgOptions);

images.forEach(image => {           /* cannot apply one imgObserver to entire list of images, 
                                    we need to run imgObserver for each image inside of images list (observe each image individually)*/ 
    imgObserver.observe(image);
});