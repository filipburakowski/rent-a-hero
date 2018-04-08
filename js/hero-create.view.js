function prepareHeroData(heroData) {
    return {
        name: heroData.name.value,
        price: heroData.price.value,
        image: heroData.photo.value,
        description: 'dupa'
    }
}

function addHero(newHeroObject){
    heroesList.push(newHeroObject);
}

function addEventToSubmitButton () {
    var submitHeroButton = document.getElementById('submitHeroButton');
    submitHeroButton.addEventListener('click', function (event) {
        event.preventDefault();
        var heroForm = document.forms[0],
            heroData = prepareHeroData(heroForm);
        addHero(heroData);
        saveToLocalStorage();
        clearRegions();
        showHeroList();
        }
    )
}

function addEventToAddHeroButton () {
    var addHero = document.getElementById('addHero-button');
    addHero.addEventListener('click', function(event) {
        event.preventDefault();
        clearRegions();
        var addHeroRegion = document.getElementById('addHeroForm-region');
        var element=document.createElement("div");
        var submitHeroButton = document.getElementById('submitHeroButton');
        var addHeroTemplate = '' +
            '<div class="form-container">' +
            '<form>' +
            '<h1>Dodaj Herosa</h1>' +
            '<div class="form-group">' +
            '<input type="text" name="name" />' +
            '<label class="control-label" for="name">Nazwa Bohatera</label><i class="bar"></i>' +
            '</div>' +
            '<div class="form-group">' +
            '<input type="text" name="photo" />' +
            '<label class="control-label" for="photo">Adres/nazwa zdjęcia</label><i class="bar"></i>' +
            '</div>' +
            '<div class="form-group">' +
            '<input type="text" name="price" />' +
            '<label class="control-label" for="price">Cena wynajmu /h</label><i class="bar"></i>' +
            '</div>' +
            '<div class="form-group">' +
            '<textarea></textarea>' +
            '<label class="control-label" for="textarea">Opis Bohatera</label><i class="bar"></i>' +
            '</div>' +
            '</form>' +
            '<div class="button-container" id="submitHeroButton">' +
            '<button class="button" type="button"><span>Submit</span></button>' +
            '</div>' +
            '</div>';
        element.innerHTML = addHeroTemplate;
        addHeroRegion.appendChild(element);
        addEventToSubmitButton ();
    });
}

function showRemoveHeroOptions () {
    var removeHeroButton = document.getElementById('removeHero-button');
    removeHeroButton.addEventListener('click',function(event){
        event.preventDefault();
        clearRegions();
        var removeHeroRegion = document.getElementById('removeHeroForm-region');
        var element=document.createElement("div");
        var removeHeroTemplate = '' +
            '<div class="form-container">' +
            '<form>' +
            '<h1>Usuń Herosa :-(</h1>' +
            '<div class="form-group">' +
            '<select name="hero" id="heroToRemove">' +
                '<option>--- WYBIERZ ---</option>' +
                defineNumberOfOptions(heroesList) +
            '</select>' +
            '<label class="control-label" for="select">Wybierz istniejącego Heroesa</label><i class="bar"></i>' +
            '</div>' +
            '</form>' +
            '<div class="button-container" id="removeButton">' +
            '<button class="button" type="button"><span>Usuń</span></button>' +
            '</div>' +
            '</div>';
        element.innerHTML = removeHeroTemplate;
        removeHeroRegion.appendChild(element);
        addEventToRemoveButton ();
    });
}

function addEventToRemoveButton () {
    var removeButton = document.getElementById('removeButton');
    removeButton.addEventListener('click',function () {
        var heroNameToRemove = document.getElementById('heroToRemove').value;
        var newHeroes = heroesList.filter(function (hero) {
                return heroNameToRemove !== hero.name;
                }
            );
        saveToLocalStorage();
        clearRegions();
        showHeroList();
        }
    )
}

function defineNumberOfOptions (heroesList) {
    var optionsToShow = '';
    heroesList.forEach(function (heroesList) {
        var option = '<option>' + heroesList.name + '</option>';
        optionsToShow += option;
        }
    );
    return optionsToShow
}
