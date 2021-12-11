window.addEventListener('load', () => {

    const siButton = document.getElementById('siButton');
    const noButton = document.getElementById('noButton');

    function numberBetween(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
    }

    noButton.addEventListener('mouseover', () => {
        const maxHeight = window.innerHeight - noButton.getBoundingClientRect().height;
        const maxWidth = window.innerWidth - noButton.getBoundingClientRect().width;

        noButton.style.position = 'absolute';
        noButton.style.top = numberBetween(0, maxHeight) + 'px';
        noButton.style.left = numberBetween(0, maxWidth)+ 'px';
    });


    siButton.addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: 'Increíble',
            text: '¡Sabía que aceptarías salir conmigo!',
            timer: 3000
          })
    });
});
