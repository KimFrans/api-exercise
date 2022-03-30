const colors = document.querySelector('.colors');
const brand = document.querySelector('.brands');
const cars = document.querySelector('.cars');

// const filterColor = document.getElementById('colors')

const colorTemplateText = document.querySelector('.colourTemplate');
// const filterTemplateText = document.querySelector('.filterTemplate');

const colorTemplate =  Handlebars.compile(colorTemplateText.innerHTML)
// const filterTemplate =  Handlebars.compile(filterTemplateText.innerHTML)

const carsTemplateText = document.querySelector('.table');
// const filterTemplateText = document.querySelector('.filterTemplate');

const carsTemplate =  Handlebars.compile(carsTemplateText.innerHTML)

axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function(result){
        // colors.innerHTML = result.data
        colors.innerHTML = colorTemplate({color: result.data});
       console.log(result.data);
       
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function(result){
        // colors.innerHTML = result.data
        brand.innerHTML = colorTemplate({color: result.data});
       console.log(result.data);
       
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then(function(result){
        // colors.innerHTML = result.data
        cars.innerHTML = carsTemplate({car: result.data});
       console.log(result.data);
       
    });
