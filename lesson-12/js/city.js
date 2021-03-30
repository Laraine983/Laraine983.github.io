
// Original Creator: Kevin Powell  https://www.youtube.com/watch?v=mC93zsEsSrg&feature=emb_logo 

//lazy load images

const images = document.querySelectorAll("[data-src]");  

function preloadImage(img){ 
    const src = img.getAttribute("data-src"); 
    if(!src){       
        return;
    }
    img.src = src;  
    img.removeAttribute("data-src") ; 
}

const imgOptions = {
    threshold: 1,                      
    rootMargin: " 0px 0px 100px 0px",  // -100 loads image when image is 100px into the viewport. Positive 100 would load 100px before viewport
                                        // Can use different numbers, i.e. -500, -400, -300...300, 400, 500 px 
};

const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){    
            return;
        } else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target); 
        }
    })

}, imgOptions);

images.forEach(image => {           
                                     
    imgObserver.observe(image);
});