let sections = document.querySelectorAll('.section');
let secbtns = document.querySelectorAll('.controls');
let secbtn = document.querySelectorAll('.control');
let allsections = document.querySelector('.main-content');

function pagetran() {
    for (let i = 0; i < secbtn.length; i++) {
        secbtn[i].addEventListener('click', function () {
            let currentbtn = document.querySelectorAll('.activebtn');
            currentbtn[0].className = currentbtn[0].className.replace('activebtn', '');
            this.className += ' activebtn';
        })
    }
    allsections.addEventListener('click', (e) => {
        let id = e.target.dataset.id;
        if (id) {
            secbtns.forEach((btn) => {
                btn.classList.remove('active');

            })
            e.target.classList.add('active');
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');

        }

    })

    let themebtn = document.querySelector('.themebtn');
    themebtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}
pagetran();