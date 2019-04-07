function resizeCanvasMobile() {
    var logMode = false;

    logger('resizeCanvasMobile()', window.innerWidth, 'window width', logMode);
    logger('resizeCanvasMobile()', window.innerHeight, 'window height', logMode);
    
    if (window.innerHeight > window.innerWidth) {
        //if the screen is wider than it is tall
        canvas.width = window.innerWidth; // adjust screen to window height
        canvas.height = window.innerHeight;     
        logger('resizeCanvasMobile()', 'tall', 'window ratio', logMode);
    
    } else if (window.innerWidth > window.innerHeight) {
        //if the screem is taller than it is wide
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; // adjust screen to window width
        logger('resizeCanvasMobile()', 'wide', 'window ratio', logMode);
    }
    
    logger('resizeCanvasMobile()', window.innerWidth, 'new window width', logMode);
    logger('resizeCanvasMobile()', window.innerHeight, 'new window height', logMode);
}

function resizeCanvasDesktop() {
    var logMode = false;
    
    logger('resizeCanvasDesktop()', window.innerWidth, 'window width', logMode);
    logger('resizeCanvasDesktop()', window.innerHeight, 'window height', logMode);
    
    if (window.innerHeight > window.innerWidth) {
        //if the screen is wider than it is tall
        canvas.width = window.innerWidth; // adjust screen to window height
        canvas.height = window.innerHeight;     
        logger('resizeCanvasDesktop()', 'tall', 'window ratio', logMode);
    
    } else if (window.innerWidth > window.innerHeight) {
        //if the screem is taller than it is wide
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; // adjust screen to window width
        logger('resizeCanvasDesktop()', 'wide', 'window ratio', logMode);
    }
    
    logger('resizeCanvasDesktop()', window.innerWidth, 'new window width', logMode);
    logger('resizeCanvasDesktop()', window.innerHeight, 'new window height', logMode);  
}
