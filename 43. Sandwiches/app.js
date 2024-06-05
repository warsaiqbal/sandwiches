function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(ingredients.join(', '), "."));
}
make_sandwich("beef patty", "lettuce", "ketchup", "mayonise", "cucumber");
make_sandwich("chicken patty", "lettuce");
make_sandwich("grilled cheese");
