import React from "react";

function NutritionLabel(props) {
  const recipe = props.recipe;
  const nutrients = recipe.totalNutrients;
  const daily = recipe.totalDaily;

  // Check if all nutrients were returned. If not we can use this to just
  // not display the nutrients label.
  const displayNutrients =
    nutrients.ENERC_KCAL &&
    nutrients.FAT &&
    nutrients.FASAT &&
    nutrients.FATRN &&
    nutrients.CHOCDF &&
    nutrients.FIBTG &&
    nutrients.SUGAR &&
    nutrients.PROCNT &&
    nutrients.CHOLE &&
    nutrients.NA &&
    nutrients.CA &&
    nutrients.K &&
    nutrients.FE &&
    nutrients.THIA &&
    nutrients.NIA &&
    nutrients.VITB6A &&
    nutrients.VITD;

  if (displayNutrients) {
    return (
      <section className="nutrition-label vertical-label">
        <div className="nutrition-row">
          <div className="nutrition-column">
            <header className="nutrition-header">
              <h1 className="nutrition-facts border-b">Nutrition Facts</h1>
              <div className="nutrition-row">
                <div className="nutrition-column">
                  <div className="servings">{recipe.yield} servings</div>
                  <div className="text-md text-bold show-tablet">
                    Serving size
                  </div>
                </div>
              </div>
              <div className="nutrition-row border-b-lg border-b-tablet">
                <div className="nutrition-column hide-tablet">
                  <div className="text-md text-bold">Serving size</div>
                </div>
                <div className="nutrition-column">
                  <div className="text-md text-bold text-right text-left-tablet">
                    {Math.ceil(recipe.totalWeight / recipe.yield)}g
                  </div>
                </div>
              </div>
              <div className="nutrition-row border-b-md border-b-none-tablet">
                <div className="nutrition-column text-bold">
                  <div className="text-sm hide-tablet">Amount per serving</div>
                  <div className="calories">Calories</div>
                  <div className="text-sm show-tablet">per serving</div>
                </div>
                <div className="nutrition-column calories amount align-bottom text-right">
                  {Math.ceil(recipe.calories / recipe.yield)}
                </div>
              </div>
            </header>
          </div>
          <div className="nutrition-column">
            <div className="nutrition-row">
              <div className="nutrition-column">
                <div className="nutrition-row border-b border-b-md-tablet">
                  <div className="nutrition-column text-bold text-sm show-tablet">
                    Amount/serving
                  </div>
                  <div className="nutrition-column text-right text-bold text-sm">
                    % Daily Value *
                  </div>
                </div>
                <div className="nutrition-row border-b">
                  <div className="nutrition-column">
                    <span className="text-bold">
                      Total Fat{" "}
                      {Math.ceil(nutrients.FAT.quantity / recipe.yield)}
                      {nutrients.FAT.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right">
                    {Math.ceil(daily.FAT.quantity / recipe.yield)}
                    {daily.FAT.unit}
                  </div>
                </div>
                <div className="nutrition-row border-b">
                  <div className="nutrition-column">
                    <span className="text-indent">
                      Saturated Fat{" "}
                      {Math.ceil(nutrients.FASAT.quantity / recipe.yield)}
                      {nutrients.FASAT.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right">
                    {Math.ceil(daily.FASAT.quantity / recipe.yield)}
                    {daily.FASAT.unit}
                  </div>
                </div>
                <div className="nutrition-row border-b">
                  <div className="nutrition-column">
                    <span className="text-indent">
                      <i>Trans</i> Fat{" "}
                      {Math.ceil(nutrients.FATRN.quantity / recipe.yield)}
                      {nutrients.FATRN.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right"></div>
                </div>
                <div className="nutrition-row border-b">
                  <div className="nutrition-column">
                    <span className="text-bold">
                      Cholesterol{" "}
                      {Math.ceil(nutrients.CHOLE.quantity / recipe.yield)}
                      {nutrients.CHOLE.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right">
                    {Math.ceil(daily.CHOLE.quantity / recipe.yield)}
                    {daily.CHOLE.unit}
                  </div>
                </div>
                <div className="nutrition-row border-b border-b-md-tablet">
                  <div className="nutrition-column">
                    <span className="text-bold">
                      Sodium {Math.ceil(nutrients.NA.quantity / recipe.yield)}
                      {nutrients.NA.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right">
                    {Math.ceil(daily.NA.quantity / recipe.yield)}
                    {daily.NA.unit}
                  </div>
                </div>
              </div>
              <div className="nutrition-column">
                <div className="nutrition-row border-b-md show-tablet">
                  <div className="nutrition-column text-bold text-sm">
                    Amount/serving
                  </div>
                  <div className="nutrition-column text-right text-bold text-sm">
                    % Daily Value *
                  </div>
                </div>
                <div className="nutrition-row border-b">
                  <div className="nutrition-column">
                    <span className="text-bold">
                      Total Carbohydrate{" "}
                      {Math.ceil(nutrients.CHOCDF.quantity / recipe.yield)}
                      {nutrients.CHOCDF.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right">
                    {Math.ceil(daily.CHOCDF.quantity / recipe.yield)}
                    {daily.CHOCDF.unit}
                  </div>
                </div>
                <div className="nutrition-row border-b">
                  <div className="nutrition-column">
                    <span className="text-indent">
                      Dietary Fiber{" "}
                      {Math.ceil(nutrients.FIBTG.quantity / recipe.yield)}
                      {nutrients.FIBTG.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right">
                    {Math.ceil(daily.FIBTG.quantity / recipe.yield)}
                    {daily.FIBTG.unit}
                  </div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-column">
                    <span className="text-indent">
                      Total Sugars{" "}
                      {Math.ceil(nutrients.SUGAR.quantity / recipe.yield)}
                      {nutrients.SUGAR.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right"></div>
                </div>
                <div className="nutrition-row text-indent-md border-t-sm">
                  <div className="nutrition-column">
                    Includes 0g Added Sugars
                  </div>
                  <div className="nutrition-column text-bold text-right">
                    0%
                  </div>
                </div>
                <div className="nutrition-row border-t-sm border-b-lg border-b-md-tablet">
                  <div className="nutrition-column">
                    <span className="text-bold">
                      Protein{" "}
                      {Math.ceil(nutrients.PROCNT.quantity / recipe.yield)}
                      {nutrients.PROCNT.unit}
                    </span>
                  </div>
                  <div className="nutrition-column text-bold text-right"></div>
                </div>
              </div>
            </div>
            <div className="nutrition-row">
              <div className="nutrition-column">
                Vitamin D {Math.ceil(nutrients.VITD.quantity / recipe.yield)}
                {nutrients.VITD.unit}{" "}
                {Math.ceil(daily.VITD.quantity / recipe.yield)}
                {daily.VITD.unit} • Calcium{" "}
                {Math.ceil(nutrients.CA.quantity / recipe.yield)}
                {nutrients.CA.unit}{" "}
                {Math.ceil(daily.CA.quantity / recipe.yield)}
                {daily.CA.unit} • Iron{" "}
                {Math.ceil(nutrients.FE.quantity / recipe.yield)}
                {nutrients.FE.unit}{" "}
                {Math.ceil(daily.FE.quantity / recipe.yield)}
                {daily.FE.unit} • Potassium{" "}
                {Math.ceil(nutrients.K.quantity / recipe.yield)}
                {nutrients.K.unit} {Math.ceil(daily.K.quantity / recipe.yield)}
                {daily.K.unit} • Thiamin{" "}
                {Math.round((nutrients.THIA.quantity / recipe.yield) * 10) / 10}
                {nutrients.THIA.unit}{" "}
                {Math.ceil(daily.THIA.quantity / recipe.yield)}
                {daily.THIA.unit} • Niacin{" "}
                {Math.ceil(daily.NIA.quantity / recipe.yield)}
                {daily.NIA.unit} • Vitamin B6{" "}
                {Math.round((nutrients.VITB6A.quantity / recipe.yield) * 10) /
                  10}
                {nutrients.VITB6A.unit}{" "}
                {Math.ceil(daily.VITB6A.quantity / recipe.yield)}
                {daily.VITB6A.unit}
              </div>
            </div>
          </div>
          <div className="nutrition-column">
            <footer className="nutrition-footer">
              <div className="asteric">*</div>
              <div className="footnote">
                The % Daily Value (DV) tells you how much a nutrient in a
                serving of food contributes to a daily diet. 2,000 calories a
                day is used for general nutrition advice.
              </div>
            </footer>
          </div>
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
}

export default NutritionLabel;
