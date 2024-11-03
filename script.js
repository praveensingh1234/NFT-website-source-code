// BRANDS SLIDER

var swiper = new Swiper('.brandSwiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    breakpoint:{
        1200:{
            slidesPerView:4,
        },
        900:{
            slidesPerView:3,
        },
        500:{
            slidesPerView:2,
        },
    },
});

// ARTIST SLIDER

var swiper = new Swiper('.artistSwiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:2000,
    }
    // breakpoint:{
    //     1200:{
    //         slidesPerView:4,
    //     },
    //     900:{
    //         slidesPerView:3,
    //     },
    //     500:{
    //         slidesPerView:1,
    //     },
    // },
     
});
// SHOW ANSWER

// let questions = document.querySelectorAll('.question_head');
// let answers = document.querySelectorAll('.ans');
// let answers = document.querySelectorAll('.Qarrow');

// questions.forEach((question, index) => {
//     question.addEventListener('click', function () {
//         answers.forEach((ans) => {
//             ans.classList.remove('show_ans');
//         });
//         Qarrows.forEach((arrow) => {
//             arrow.classList.remove('rotate_arrow');
//         });
        

//         let answer = this.nextElementSibling;
//         if (!answer.classList.contins('show_ans')) {
//             answer.classList.add('show_ans');
//             Qarrows[index].classList.add('.rotate_arrow')
            
//         }
//     });
// });  



// SHOW MWNU

let bar = document.querySelector('.bars')
let menu = document.querySelector('.menu')

bar.addEventListener('click',() =>{
    menu.classList.toggle('show_menu')
})