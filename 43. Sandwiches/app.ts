function make_sandwich(...ingredients: string[]){
    console.log(`Making a sandwich with: ${ingredients.join(', ')}.`);
}

make_sandwich("beef patty", "lettuce", "ketchup", "mayonise", "cucumber")
make_sandwich("chicken patty", "lettuce")
make_sandwich("grilled cheese")