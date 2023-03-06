//menu
const header = document.querySelector('.header-wrapper');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');


burger.addEventListener('click', () => {
    header.classList.toggle('open');
})

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.nav') && !target.closest('.burger')) {
        header.classList.remove('open');
    }
})

nav.addEventListener('click', () => {
    header.classList.remove('open');
})

//filter
const buttonsList = document.querySelector('.buttons-list');
const buttons = document.querySelectorAll('.button-filter');
const projects = document.querySelectorAll('.project');

let firstContainerFlag = false;
let index = 0;

const filter = () => {

    buttonsList.addEventListener('click', (event) => {
        if (event.target.tagName != 'BUTTON') return;

        if (!firstContainerFlag) {
            projects.forEach(el => {
                el.classList.add('project-blur');
            })
        }


        if (event.target.classList.contains('button-active')) {
            index--;
            event.target.classList.remove('button-active');

            switch (event.target.dataset.id) {
                case 'gardens':
                    removeBlur('project-garden');
                    break;

                case 'lawn':
                    removeBlur('project-lawn');
                    break;

                case 'planting':
                    removeBlur('project-planting');
                    break;
            }


        } else if (index < 2) {
            index++;
            event.target.classList.add('button-active');

            switch (event.target.dataset.id) {
                case 'gardens':
                    getBlur('project-garden');
                    break;

                case 'lawn':
                    getBlur('project-lawn');
                    break;

                case 'planting':
                    getBlur('project-planting');
                    break;
            }

        } 
        
        if (index == 0) {
            location.reload();
        }

        firstContainerFlag = true;

    })


}

filter();

const getBlur = (className) => {
    projects.forEach(el => {
        if (el.classList.contains(className)) {
            el.classList.remove('project-blur')
        }
    });
}

const removeBlur = (className) => {
    projects.forEach(el => {
        if (el.classList.contains(className)) {
            el.classList.add('project-blur')
        }
    });
}

//accordion

const ratesList = document.querySelector('.rates-list');
const rates = document.querySelectorAll('.rate-item');

ratesList.addEventListener('click', (event) => {
    if (event.target.tagName != 'LI') {
        return;
    };

    if (event.target.classList.contains('rate-open')) {
        event.target.classList.remove('rate-open');
    } else {
        rates.forEach(el => {
            el.classList.remove('rate-open');
        });
        event.target.classList.add('rate-open');
    }

})

//select

const cityWrapper = document.querySelector('.city-wrappers');
const city = document.querySelector('.city');
const cities = document.querySelectorAll('.city');
const optionList = document.querySelector('.city-list');
const options = document.querySelectorAll('.city-item');
const cards = document.querySelectorAll('.city-card');
const nameList = document.querySelector('.names-list');
const contacts = document.querySelector('.contacts');

const openSelector = () => {
    nameList.addEventListener('click', (event) => {
        if (event.target.classList.contains('city')) {
            cityWrapper.classList.toggle('open-city');
        }
    })
}

const selectCity = () => {
    optionList.addEventListener('click', (event) => {
        if (event.target.classList.contains('city-item')) {
            cityWrapper.classList.remove('open-city');
        }

        switch (event.target.dataset.id) {
            case 'one':
                getItems('card-one');
                getNames('city-one');
                break;

            case 'two':
                getItems('card-two');
                getNames('city-two');
                break;

            case 'three':
                getItems('card-three');
                getNames('city-three');
                break;

            case 'four':
                getItems('card-four');
                getNames('city-four');
                break;
        }
    })
}

const getItems = (className) => {

    cards.forEach(el => {
        if (el.classList.contains(className)) {
            el.classList.remove('city-none');
            el.classList.add('city-active');
        } else {
            el.classList.remove('city-active');
            el.classList.add('city-none');
        }
    });

};

const getNames = (className) => {
    cities.forEach(el => {
        if (el.classList.contains(className)) {
            el.classList.remove('name-none');
        } else {
            el.classList.add('name-none');
        }
    });
}

openSelector();
selectCity();

console.log('100 баллов')