const filterColor = document.getElementById('colors')
const filterBrand = document.getElementById('brand')

const filterButton = document.getElementById('search')
const filterDisplay = document.querySelector('.search-result')

const filterTemplateText = document.querySelector('.filterTemplate').innerHTML;
const filterTemplate = Handlebars.compile(filterTemplateText)

axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {
        filterColor.innerHTML = filterTemplate({ filter: result.data });
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function (result) {
        filterBrand.innerHTML = filterTemplate({ filter: result.data });
    });


// var theColorValue = filterColor.value;
// var theBrandValue = filterBrand.value;

// filterColor.addEventListener('change', function (e) {
//     theColorValue = e.target.value

// });

// filterBrand.addEventListener('change', function (e) {
//     theBrandValue = e.target.value

// });

filterButton.addEventListener('click', function () {
    var theColorValue = filterColor.value;
    console.log(theColorValue);
    var theBrandValue = filterBrand.value;

    if (theColorValue && theBrandValue) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${theBrandValue}/color/${theColorValue}`)
            .then(function (result) {
                console.log(result.data)
                filterDisplay.innerHTML = filterTemplate({ filters: result.data });

            });

    }
    else if (theColorValue) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/color/${theColorValue}`)
            .then(function (result) {
                console.log(result.data)
                filterDisplay.innerHTML = filterTemplate({ filters: result.data });

            });
    }
    else if (theBrandValue) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${theBrandValue}`)
            .then(function (result) {
                console.log(result.data)
                filterDisplay.innerHTML = filterTemplate({ filters: result.data });

            });

    }
    
})