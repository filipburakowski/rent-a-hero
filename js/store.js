var heroesList = [];


function saveToLocalStorage () {
    var heroesListToObject =  {
        data: heroesList
    };
    heroesString = JSON.stringify(heroesListToObject);
    localStorage.setItem('heroesList',heroesString)
}

function loadFromLocalStorage () {
    var localStorageHeroesList = localStorage.getItem('heroesList'),
        parsedLocalStorageData = {};

    if (!localStorageHeroesList) {
        parsedLocalStorageData = {
            data: []
        };
    }
    else
        parsedLocalStorageData = JSON.parse(localStorageHeroesList);
    heroesList = parsedLocalStorageData.data;
    return heroesList;
}

function loadMockHeroes () {
    var mockHeroesList = [
        {
            name: "Thor",
            price: 225,
            image: "thor.jpg",
            description: "Lorem..."
        },
        {
            name: "Batman",
            price: 1225,
            image: "batman.jpg",
            description: "Lorem..."
        },
        {
            name: "Hulk",
            price: 2225,
            image: "hulk.jpg",
            description: "Lorem..."
        },
        {
            name: "Ironman",
            price: 4225,
            image: "ironman.jpg",
            description: "Lorem..."
        },
        {
            name: "Superman",
            price: 5225,
            image: "superman.jpg",
            description: "Lorem..."
        },
        {
            name: "Harry Potter",
            price: 3225,
            image: "potter.jpg",
            description: "Lorem..."
        }
    ];
    heroesList = heroesList.concat(mockHeroesList);
    saveToLocalStorage ();
    showHeroList();
}

function clearHeroesList () {
    heroesList = [];
    saveToLocalStorage ();
    clearRegions();
    showHeroList();
}

