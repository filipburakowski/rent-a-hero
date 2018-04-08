function presentHero (hero) {
    var heroesListRegion=document.getElementById("heroesList-region");
    var element=document.createElement("div");
    var template = '' +
        '<div class="hero-item">'+
        '<div>'+
        '<img src="images/heroes/'+hero.image+'" alt="'+hero.name+'">'+
        '</div>'+
        '<div>'+
        '<span>'+hero.name+'</span>'+
        '<span>'+hero.price+' PLN/h </span>'+
        '</div>'+
        '</div>';
    element.innerHTML = template;
    heroesListRegion.appendChild(element);
}

function showHeroList () {
    loadFromLocalStorage ();
    heroesList.forEach(function(hero){
        presentHero(hero);
        }
    )
}
