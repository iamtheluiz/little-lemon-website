import recipes from "../recipes";
import RecipeCard from "./RecipeCard";

function SpecialSection() {
  return (
    <section id="special">
      <div className="container">
        <header>
          <h2>This weeks specials!</h2>
          <a href="#!" className="btn">Online menu</a>
        </header>
        <div className="list">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              price={recipe.price}
              description={recipe.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialSection;