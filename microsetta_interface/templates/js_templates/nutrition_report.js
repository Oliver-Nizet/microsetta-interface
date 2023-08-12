class NutritionReport {
    constructor(user_data){
        this.user_data = user_data;

        for (const [component, amount] of Object.entries(this.user_data)) {
            if(amount==null){
                console.log(component);
            }
        }

        // total daily calories
        this.calories = this.user_data["calories"];

        // food groups user data
        this.veg = this.user_data["V_TOTAL"];
        this.fruit = this.user_data["F_TOTAL"];
        this.grains = this.user_data["tgrain"];
        this.dairy = this.user_data["D_TOTAL"];
        // food groups comparisons
        this.veg_rec = this.veg>=3 ? "Good" : "Low"
        this.fruit_rec = this.fruit>=2 ? "Good" : "Low"
        this.grains_rec = this.grains>=8 ? "Good" : "Low"
        this.dairy_rec = this.dairy>3 ? "Good" : "Low"

        // macronutriets user data
        this.fat = this.user_data["fat"];
        this.protein = this.user_data["protein"];
        this.carbo = this.user_data["carbo"];
        this.fiber = this.user_data["fiber"]
        // macronutrients percentages
        this.fat_p = (this.fat*9)/this.calories*100;
        this.protein_p = (this.protein*4)/this.calories*100;
        this.carbo_p = (this.carbo*4)/this.calories*100;
        // macronutrients comparisons
        this.fat_rec = this.fat_p>30 ? "High" : (this.fat_p>=20 ? "Good" : "Low");
        this.protein_rec = this.protein_p>30 ? "High" : (this.protein_p>=10 ? "Good" : "Low");
        this.carbo_rec = this.carbo_p>65 ? "High" : (this.carbo_p>=45 ? "Good" : "Low");
        this.fiber_rec = this.fiber>=30 ? "Good" : "Low";

        // minerals user data
        this.calcium = this.user_data["calcium"];
        this.iron = this.user_data["iron"];
        this.magnesium = this.user_data["magnes"];
        this.phosphorus = this.user_data["phosphor"];
        this.potassium = this.user_data["potass"];
        this.selenium = this.user_data["selenium"];
        this.zinc = this.user_data["zinc"];
        // minerals comparisons
        this.calcium_rec = this.calcium>=1000 ? "Good" : "Low";
        this.iron_rec = this.iron>=9.1 ? "Good" : "Low";
        this.magnesium_rec = this.magnesium>=220 ? "Good" : "Low";
        this.phosphorus_rec = this.phosphorus>=700 ? "Good" : "Low";
        this.potassium_rec = this.potassium>=2600 ? "Good" : "Low";
        this.selenium_rec = this.selenium>=26 ? "Good" : "Low";
        this.zinc_rec = this.zinc>=9.8 ? "Good" : "Low";

        // vitamins user datas
        this.b1 = this.user_data["thiamin"];
        this.b2 = this.user_data["ribofla"];
        this.b3 = this.user_data["niacineq"];
        this.b5 = this.user_data["pantothe"];
        this.b6 = this.user_data["vitb6"];
        this.b12 = this.user_data["vitb12"];
        this.folate = this.user_data["fol_deqv"];
        this.vita = this.user_data["vita_re"];
        this.vitc = this.user_data["vitc"];
        this.vitd = this.user_data["vitd"];
        this.vite = this.user_data["alphtoce"];
        this.vitk = this.user_data["vitk"];
        // vitamins comparisons
        this.b1_rec = this.b1>=1.1 ? "Good" : "Low";
        this.b2_rec = this.b2>=1.1 ? "Good" : "Low";
        this.b3_rec = this.b3>=14 ? "Good" : "Low";
        this.b5_rec = this.b5>=5 ? "Good" : "Low";
        this.b6_rec = this.b6>=1.3 ? "Good" : "Low";
        this.b12_rec = this.b12>=2.4 ? "Good" : "Low";
        this.folate_rec = this.folate>=400 ? "Good" : "Low";
        this.vita_rec = this.vita>=500 ? "Good" : "Low";
        this.vitc_rec = this.vitc>=45 ? "Good" : "Low";
        this.vitd_rec = this.vitd>=5 ? "Good" : "Low";
        this.vite_rec = this.vite>=7.5 ? "Good" : "Low";
        this.vitk_rec = this.vitk>=55 ? "Good" : "Low";

        // nutrients to limit user data
        this.addsug = this.user_data["adsugtot"];
        this.satfat = this.user_data["sfatot"];
        this.sodium = this.user_data["sodium"];
        // nutrients to limit percentages
        this.addsug_p = (this.addsug*4)/this.calories*100;
        this.satfat_p = (this.satfat*9)/this.calories*100;
        // nutrients to limit comparisons
        this.addsug_rec = this.addsug_p<=10 ? "Good" : "High";
        this.satfat_rec = this.satfat_p<=10 ? "Good" : "High";
        this.sodium_rec = this.sodium<=1500 ? "Good" : "High";

        // other food components user data
        this.water = this.user_data["water"];
        this.caffeine = this.user_data["caffeine"];
    }

    plotData(){
        // food groups summary
        var fg_values = [
            ['Vegetables', 'Fruit', 'Grains', 'Dairy'],
            [this.veg.toFixed(2)+" cup eq/day", this.fruit.toFixed(2)+" cup eq/day",
                this.grains.toFixed(2)+" oz eq/day", this.dairy.toFixed(2)+" cup eq/day"],
            [this.veg_rec, this.fruit_rec, this.grains_rec, this.dairy_rec]
        ]
        var fg_table = [{
            type: 'table',
            header: {
              values: [["<b>Food Groups</b>"], ["<b>Your Daily Intake</b>"],
                       ["<b>Compared to Recommended Intake</b>"]],
              align: "center",
            },
            cells: {
              values: fg_values,
              align: "center",
            }
        }]
        Plotly.newPlot('foodGroupsSummary', fg_table);

        // macronutrient summary
        var macro_values = [
            ['Fat', 'Protein', 'Carbohydrates', 'Fiber'],
            [this.fat_p.toFixed(2)+"%", this.protein_p.toFixed(2)+"%",
                this.carbo_p.toFixed(2)+"%", this.fiber.toFixed(2)+" g/day"],
            [this.fat_rec, this.protein_rec, this.carbo_rec, this.fiber_rec]
        ]
        var macro_table = [{
            type: 'table',
            header: {
              values: [["<b>Macronutrients</b>"], ["<b>Your Daily Intake</b>"],
                       ["<b>Compared to Recommended Intake</b>"]],
              align: "center",
            },
            cells: {
              values: macro_values,
              align: "center",
            }
        }]
        Plotly.newPlot('macronutrientSummary', macro_table);

        // minerals summary
        var minerals_values = [
            ['Calcium', 'Iron', 'Magnesium', 'Phosphorus', 'Potassium', 'Selenium', 'Zinc'],
            [this.calcium.toFixed(2)+" mg/day", this.iron.toFixed(2)+" mg/day",
                this.magnesium.toFixed(2)+" mg/day", this.phosphorus.toFixed(2)+" mg/day",
                this.potassium.toFixed(2)+" mg/day", this.selenium.toFixed(2)+" µg/day",
                this.zinc.toFixed(2)+" mg/day"],
            [this.calcium_rec, this.iron_rec, this.magnesium_rec, this.phosphorus_rec,
                this.potassium_rec, this.selenium_rec, this.zinc_rec]
        ]
        var minerals_table = [{
            type: 'table',
            header: {
              values: [["<b>Minerals</b>"], ["<b>Your Daily Intake</b>"],
                       ["<b>Compared to Recommended Intake</b>"]],
              align: "center",
            },
            cells: {
              values: minerals_values,
              align: "center",
            }
        }]
        Plotly.newPlot('mineralsSummary', minerals_table);

        // vitamins summary
        var vitamins_values = [
            ['B1 - Thiamine', 'B2 - Riboflavin', 'B3 - Niacin', 'B5 - Pantothenic Acid',
                'B6 - Pyridoxine', 'B12 - Cobalamin', 'Folate', 'Vitamin A',
                'Vitamin C', 'Vitamin D', 'Vitamin E', 'Vitamin K'],
            [this.b1.toFixed(2)+" mg/day", this.b2.toFixed(2)+" mg/day",
                this.b3.toFixed(2)+" mg NE/day", this.b5.toFixed(2)+" mg/day",
                this.b6.toFixed(2)+" mg/day", this.b12.toFixed(2)+" µg/day",
                this.folate.toFixed(2)+" mµ DFE/day", this.vita.toFixed(2)+" mµ RE/day",
                this.vitc.toFixed(2)+" mg/day", this.vitd.toFixed(2)+" µg/day",
                this.vite.toFixed(2)+" mg a-TE/day", this.vitk.toFixed(2)+" mµ/day"],
            [this.b1_rec, this.b2_rec, this.b3_rec, this.b5_rec, this.b6_rec,
                this.b12_rec, this.folate_rec, this.vita_rec, this.vitc_rec,
                this.vitd_rec, this.vite_rec, this.vitk_rec]
        ]
        var vitamins_table = [{
            type: 'table',
            header: {
              values: [["<b>Vitamins</b>"], ["<b>Your Daily Intake</b>"],
                       ["<b>Compared to Recommended Intake</b>"]],
              align: "center",
            },
            cells: {
              values: vitamins_values,
              align: "center",
            }
        }]
        Plotly.newPlot('vitaminsSummary', vitamins_table);

        // nutrients to limit summary
        var ntl_values = [
            ['Added sugar', 'Saturated fat', 'Sodium'],
            [this.addsug_p.toFixed(2)+"%", this.satfat_p.toFixed(2)+"%",
                this.sodium.toFixed(2)+" mg/day"],
            [this.addsug_rec, this.satfat_rec, this.sodium_rec]
        ]
        var ntl_table = [{
            type: 'table',
            header: {
              values: [["<b>Nutrients to Limit</b>"], ["<b>Your Daily Intake</b>"],
                       ["<b>Compared to Recommended Intake</b>"]],
              align: "center",
            },
            cells: {
              values: ntl_values,
              align: "center",
            }
        }]
        Plotly.newPlot('nutrientsToLimitSummary', ntl_table);

        // other food components summary
        var other_values = [
            ['Water', 'Caffeiene'],
            [this.water.toFixed(2)+" mL/day", this.caffeine.toFixed(2)+" mg/day"],
            ["No target", "No target"]
        ]
        var other_table = [{
            type: 'table',
            header: {
              values: [["<b>Other Food Components</b>"], ["<b>Your Daily Intake</b>"],
                       ["<b>Compared to Recommended Intake</b>"]],
              align: "center",
            },
            cells: {
              values: other_values,
              align: "center",
            }
        }]
        Plotly.newPlot('otherSummary', other_table);


        // graphs
        const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
        var scope = this;

        $.when($.ajax({
            type: "GET",
            url: "{{endpoint}}/vioscreen/foodcomponents/code/calories",
            dataType: "html",
            contentType: "application/json"
        }), $.ajax({
            type: "GET",
            url: "{{endpoint}}/vioscreen/foodcomponents/code/fat",
            dataType: "html",
            contentType: "application/json"
        }), $.ajax({
            type: "GET",
            url: "{{endpoint}}/vioscreen/foodcomponents/code/protein",
            dataType: "html",
            contentType: "application/json"
        }), $.ajax({
            type: "GET",
            url: "{{endpoint}}/vioscreen/foodcomponents/code/carbo",
            dataType: "html",
            contentType: "application/json"
        }).then(function (calories, fat, protein, carbo) {
            // macro
            var calories_data = JSON.parse(calories[0]);
            var calories_amounts = calories_data.amounts;
            var pop_calories = average(calories_amounts);
            pop_calories = 2000;

            var fat_data = JSON.parse(fat[0]);
            var fat_amounts = fat_data.amounts;
            var pop_fat = average(fat_amounts);
            pop_fat = 60;

            var protein_data = JSON.parse(protein[0]);
            var protein_amounts = protein_data.amounts;
            var pop_protein = average(protein_amounts);
            pop_protein = 70;

            var carbo_data = JSON.parse(carbo[0]);
            var carbo_amounts = carbo_data.amounts
            var pop_carbo = average(carbo_amounts)
            pop_carbo = 255;

            var pop_fat_p = (pop_fat*9)/pop_calories*100;
            var pop_protein_p = (pop_protein*4)/pop_calories*100;
            var pop_carbo_p = (pop_carbo*4)/pop_calories*100;

            var x = ['Fat', 'Protein', 'Carbohydrates']
            var x2 = ['Fat', 'Fat', 'Protein', 'Protein',
                      'Carbohydrates', 'Carbohydrates']

            var trace1 = {
              y: [scope.fat_p, scope.protein_p, scope.carbo_p],
              x: x,
              name: 'Your Values',
              marker: {color: '#FF8A33'},
              type: 'box'
            };

            var trace2 = {
              y: [pop_fat_p, pop_protein_p, pop_carbo_p],
              x: x,
              name: 'Microsetta Averages',
              marker: {color: '#801EED'},
              type: 'box'
            };

            var trace3 = {
              y: [20,30,10,30,45,65],
              x: x2,
              name: 'Recommended Ranges',
              marker: {color: '#1EBED8'},
              type: 'box'
            };

            var data = [trace1, trace2, trace3];

            var layout = {
              yaxis: {
                title: 'Percentage of Daily Intake',
                range: [0,100]
              },
              boxmode: 'group'
            };

            Plotly.newPlot('macronutrientGraph', data, layout);
        });
    }
}
