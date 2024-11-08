const paragraphs= document.querySelectorAll(".tabs p");
const slider = document.querySelector('input[type=range]');
const listItems = document.querySelectorAll('.scale li');

paragraphs.forEach((para) =>{
    para.addEventListener('click', ()=>{
        //Add the active class to the clicked para
        para.classList.toggle("active");

        //Remove the active class from the rest of the paras
        const otherParas=[...paragraphs].filter(p => p!=para);
        otherParas.forEach(p => p.classList.remove("active"));
    })
})

// lis.forEach((li) =>{
//     li.addEventListener('click', ()=>{
//         input.value=80;
//     })
// })

// input.addEventListener('input', ()=>{
//     console.log(typeof e.target.value)//string
//     // e.target.value="25";
// })



// Add a click event listener to each list item
listItems.forEach(item => {
    item.addEventListener('click', (e)=> {
        // Get the 'data-value' attribute from the clicked li
        // const value = this.getAttribute('data-value');
        const value = item.getAttribute('data-value');

        // Update the slider value based on the clicked li
        slider.value = value;


        // Manually trigger the 'input' event for the slider to highlight the correct li
        slider.dispatchEvent(new Event('input'));
    });
});

// Sync slider value with the list
slider.addEventListener('input', function() {
    const currentValue = slider.value;

    // Highlight the selected li based on the slider value
    listItems.forEach(item => {
        if (item.getAttribute('data-value') == currentValue) {
            item.style.color = 'rgb(44,44,44)';  // Example highlight
        } else {
            item.style.color = 'rgb( 166, 166, 166)';  // Reset the others
        }
    });

    updateSliderBackground();
});

function updateSliderBackground() {
    const value = (slider.value) / (slider.max) * 100;
    slider.style.background = `linear-gradient(to right,  rgba(83, 49, 156, 1) ${value}%, #ccc ${value}%)`;
}
