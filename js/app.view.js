function addEventsToMenuBar () {
    addEventToAddHeroButton();
    addEventToLoadMockHeroesButton ();
    addEventToClearHeroesButton ();
    showRemoveHeroOptions();
}

function addEventToLoadMockHeroesButton () {
    var loadMockHeroesButton = document.getElementById('loadMockHeroes-button');
    loadMockHeroesButton.addEventListener('click',function () {
        loadMockHeroes();
        }
    )
}

function addEventToClearHeroesButton () {
    var clearHeroesBaseButton = document.getElementById('clearHeroes-button');
    clearHeroesBaseButton.addEventListener('click', function () {
        clearHeroesList ();
        }
    )
}

// function addEventToRemoveHeroButton () {
//     var removeHero = document.getElementById('removeHero-button');
//     removeHero.addEventListener('click', function (){
//         showRemoveHeroOptions ();
//         }
//     )
// }