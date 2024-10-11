
    const image1 = document.getElementById('image1');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const image3 = document.getElementById('image3');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');

    image1.addEventListener('click', () => {
      image1.classList.add('dragging');

      setTimeout(() => {
        page1.classList.add('opacity-0');
        setTimeout(() => {
          page1.classList.add('hidden');
          page2.classList.remove('hidden');
          setTimeout(() => {
            page2.classList.remove('opacity-0');
          }, 10);
        }, 500);
      }, 500);
    });

    // Functionality to show page 3 when page 2 is clicked
    document.getElementById('page2').onclick = function () {
      if (page3.classList.contains('hidden')) {
        page2.classList.add('fade-out'); // Fade out page 2
        setTimeout(() => {
          page2.classList.add('hidden'); // Hide page 2
          page3.classList.remove('hidden'); // Show page 3
          page3.classList.add('fade-in');
          page3.classlist.add('top-0 left-0'); // Slide in page 3
        }, 500); // Delay to match fade out
      }
    };

    image3.addEventListener('click', () => {
      image3.classList.add('dragging');

      setTimeout(() => {
        page3.classList.add('opacity-0');
        setTimeout(() => {
          page3.classList.add('hidden');
          page4.classList.remove('hidden');
          setTimeout(() => {
            page4.classList.remove('opacity-0');
          }, 10);
        }, 500);
      }, 500);
    });
    
 