window.addEventListener("mousemove",function(dets) {
     const ract = document.querySelector("#rect");
    
     let xval =gsap.utils.mapRange(0,window.innerWidth,50,window.innerWidth-50 ,dets.clientX);
    gsap.to ("#rect",{
        left:xval+ "px",
        ease:Power3,
    });

});