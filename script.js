document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('main-view');
    const detailsView = document.getElementById('details-view');
    const moreBtn = document.getElementById('moreBtn');
    const backBtn = document.getElementById('backBtn');
    
    // Navigation animations
    moreBtn.addEventListener('click', () => {
        // Prepare details view
        detailsView.classList.remove('hidden', 'hidden-left');
        detailsView.classList.add('hidden-right');
        
        // Give a small delay for the browser to register the classes before transitioning
        setTimeout(() => {
            mainView.classList.remove('active');
            mainView.classList.add('hidden-left');
            
            detailsView.classList.remove('hidden-right');
            detailsView.classList.add('active');
        }, 50);
    });

    backBtn.addEventListener('click', () => {
        // Move main view to right (off-screen) before sliding it in
        mainView.classList.remove('hidden-left', 'active');
        mainView.classList.add('hidden-right');
        
        setTimeout(() => {
            detailsView.classList.remove('active');
            detailsView.classList.add('hidden-right');
            
            mainView.classList.remove('hidden-right');
            mainView.classList.add('active');
        }, 50);
    });
});
