function clearRegions() {
    var regions = [
        'heroesList-region',
        'addHeroForm-region',
        'removeHeroForm-region'
    ];
    regions.forEach(function (region) {
        var DOMelement = document.getElementById(region);
        DOMelement.innerHTML = '';
        }
    )
}

addEventsToMenuBar ();
showHeroList();


