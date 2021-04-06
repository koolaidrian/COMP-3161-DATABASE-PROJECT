#credit ingredients https://github.com/mbezhanov/faker-provider-collection/blob/master/src/Faker/Provider/Food.php
#credit food_names https://www.tasteatlas.com/most-popular-food-in-the-world

import random
from faker import Faker
from collections import defaultdict
from faker.providers import BaseProvider


##Generating Dummy Data
#To generate our dummy data, we will first initialize our Faker instance that we’ll be using to get our dummy data.
fake = Faker()



# create new provider class
class MyProvider(BaseProvider):
    ingredients = ["Achacha", "Adzuki Beans", "Agar", "Agave Syrup", "Ajowan Seed", "Albacore Tuna", "Alfalfa", "Allspice", "Almond oil", "Almonds", "Amaranth", "Amchur", "Anchovies", "Anchovies", "Aniseed", "Annatto seed", "Apple Cider Vinegar", "Apple juice", "Apple Juice Concentrate", "Apples", "Bonza", "Apples", "Apricots", "Arborio rice", "Arrowroot", "Artichoke", "Arugula", "Asafoetida", "Asian Greens", "Asian Noodles", "Asparagus", "Aubergine", "Avocado", "Avocado Oil", "Avocado Spread", "Bacon", "Baking Powder", "Baking Soda", "Balsamic Vinegar", "Bamboo Shoots", "Banana", "Barberry", "Barley", "Barramundi", "Basil Basmati rice", "Bay Leaves", "Bean Shoots", "Bean Sprouts", "Beans", "Green beans", "Beef", "Beetroot", "Berries", "Black Eyed Beans", "Blackberries", "Blood oranges", "Blue Cheese", "Blue Eye Trevalla", "Blue Swimmer Crab", "Blueberries", "Bocconcini", "Bok Choy", "Bonito Flakes", "Borlotti Beans", "Brazil Nut", "Bran", "Bread", "RyeBread", "Sour Dough Bread", "SpeltBread", "WhiteBread", "Wholegrain Bread", "Wholemeal", "Brie", "Broccoli", "Broccolini", "Brown Rice", "Brown rice vinegar", "Brussels Sprouts", "Buckwheat", "Buckwheat Noodles", "BulghurBurghul", "Bush Tomato", "Butter", "Butter Beans", "Buttermilk", "Butternut lettuce", "Butternut pumpkin", "Cabbage", "Cacao", "Cake", "Calamari", "Camellia Tea Oil", "Camembert", "Camomile", "Candle Nut", "Cannellini Beans", "Canola Oil", "Cantaloupe", "Capers", "Capsicum", "Starfruit", "Caraway Seed", "Cardamom", "CarobCarrot", "Carrot", "Cashews", "Cassia bark", "Cauliflower", "Cavalo", "Cayenne", "Celery", "Celery Seed", "Cheddar", "Cherries", "Cherries", "Chestnut", "Chestnut", "Chia seeds", "Chicken", "Chickory", "Chickpea", "Chilli Pepper", "FreshChillies", "dried Chinese Broccoli", "Chinese Cabbage", "Chinese Five Spice", "Chives", "Dark Chocolate", "MilkChocolate", "Choy Sum", "Cinnamon", "Clams", "Cloves", "Cocoa powder", "Coconut", "Coconut Oil", "Coconut water", "Coffee", "Corella Pear", "Coriander Leaves", "Coriander Seed", "Corn Oil", "Corn Syrup", "Corn Tortilla", "Cornichons", "Cornmeal", "Cos lettuce", "Cottage Cheese", "Cous Cous", "Crabs", "Cranberry", "Cream", "Cream Cheese", "Cucumber", "Cumin", "Cumquat", "Currants", "Curry Leaves", "Curry Powder", "Custard Apples", "Custard ApplesDaikon", "Dandelion", "Dashi", "Dates", "Dill", "Dragonfruit", "Dried Apricots", "Duck", "Edam", "Edamame", "Eggplant", "Eggs", "Elderberry", "Endive", "English Spinach", "Extra Virgin Olive Oil", "Farmed Prawns", "Feijoa", "Fennel", "Fennel Seeds", "Fenugreek", "Feta", "Figs", "File Powder", "Fingerlime", "Fish Sauce", "Flathead", "Flaxseed", "Flaxseed Oil", "Flounder", "Flour", "Besan", "Buckwheat Flour", "FlourOat", "FlourPotato", "FlourRice", "Brown Flour", "WhiteFlour", "SoyFlour", "Tapioca Flour", "UnbleachedFlour", "Wholewheat flour", "Freekeh", "French eschallots", "Fromage Blanc", "Fruit", "Galangal", "Garam Masala", "Garlic", "Garlic", "Chives", "GemGinger", "Goat Cheese", "Goat Milk", "Goji Berry", "Grape Seed Oil", "Grapefruit", "Grapes", "Green Chicken Curry", "Green Pepper", "Green Tea", "Green Tea noodles", "Greenwheat Freekeh", "Gruyere", "Guava", "Gula MelakaHaloumiHam", "Haricot Beans", "Harissa", "Hazelnut", "Hijiki", "Hiramasa Kingfish", "Hokkien Noodles", "Honey", "Honeydew melon", "Horseradish", "Hot smoked salmon", "Hummus", "Iceberg lettuce", "Incaberries", "Jarrahdale pumpkin", "Jasmine rice", "Jelly", "Jerusalem Artichoke", "Jewfish", "Jicama", "Juniper Berries", "Lime Leaves", "Kale", "Kangaroo", "Kecap Manis", "Kenchur", "Kidney Beans", "Kidneys", "Kiwi Fruit", "Kiwiberries", "Kohlrabi", "Kokam", "Kombu", "Koshihikari rice", "Kudzu", "Kumera", "Lamb", "Lavender Flowers", "Leeks", "Lemon", "Lemongrass", "Lentils", "Lettuce", "Licorice", "Limes", "Liver", "Lobster", "Longan", "Loquats", "Lotus Root", "Lychees", "Lychees", "Macadamia Nut", "Macadamia oil", "Mace", "Mackerel", "Mackerel", "Tinned", "Mahi mahi", "Mahlab", "Malt vinegar", "Mandarins", "Mango", "Mangosteens", "Maple Syrup", "Margarine", "Marigold", "Marjoram", "Mastic", "Melon", "Milk", "Mint", "Miso", "Molasses", "Monkfish", "Morwong", "Mountain Bread", "Mozzarella", "Muesli", "Mulberries", "Mullet", "Mung Beans", "Flat Mushrooms", "Brown Mushrooms", "Common Cultivated Mushrooms", "Enoki Mushrooms", "Oyster Mushrooms", "Shiitake Mushrooms" , "Mussels", "Mustard", "Mustard Seed", "Nashi Pear", "Nasturtium", "Nectarines", "Nori", "Nutmeg", "Nutritional Yeast", "Nuts", "Oatmeal", "Oats", "Octopus", "Okra", "Olive Oil", "Olives", "Omega Spread", "Onion", "Oranges", "Oregano", "Oyster Sauce", "Oysters", "Pear", "Pandanus leaves", "Papaw", "Papaya", "Paprik", "Parmesan cheese", "Parrotfish", "Parsley", "Parsnip", "Passionfruit", "Pasta", "Peaches", "Peanuts", "Pear Juice", "Pears", "Peas", "Pecan Nut", "Pecorino", "PepitasPepper", "Szechuan Pepperberry", "Peppercorns", "Peppermint", "Peppers", "Persimmon", "Pine Nut", "Pineapple", "Pinto Beans", "Pistachio Nut", "Plums", "Polenta", "Pomegranate", "Poppy Seed", "Porcini mushrooms", "Pork", "Potatoes", "Provolone", "Prunes", "Pumpkin", "Pumpkin Seed", "Purple carrot", "Purple RiceQuail", "Quark Quinc", "Quinoa", "Radicchio", "Radish", "Raisin", "Raspberry", "Red cabbage", "Red Lentils", "Red Pepper", "Red Wine Vinegar", "Redfish", "Rhubarb", "Rice Noodles", "Rice paper", "Rice Syrup", "Ricemilk", "Ricotta", "Rockmelon", "Rose Water", "Rosemary", "Rye", "Safflower Oil", "Saffron", "Sage", "Sake", "Salmon", "Sardines", "Sausages", "Scallops", "Sea Salt", "Semolina", "Sesame Oil", "Sesame seed", "Sesame Seeds", "Shark", "Silverbeet", "Slivered Almonds", "Smoked Trout", "Snapper", "Snowpea sprouts", "Snowpeas", "Soba", "Soy Beans", "Soy Milk", "Soy Sauce", "Soy", "Sprouts", "Soymilk", "Spearmint", "Spelt", "Spinach", "Spring Onions", "Squash", "Squid", "Star Anise", "Star Fruit", "Stevia", "Beef Stock", "Chicken Stock", "Fish Stock", "Vegetable Stock", "Strawberries", "Sugar", "Sultanas", "Sun dried tomatoes", "Sunflower Oil", "Sunflower Seeds", "SwedeSweet Chilli Sauce", "Sweet Potato", "Swiss Chard", "SwordfishTabasco", "Tahini", "Taleggio cheese", "Tamari", "Tamarillo", "Tangelo", "Tapioca", "Tarragon", "Tea", "Tea Oil", "Tempeh", "ThymeTofu", "Tom Yum", "Tomatoes", "Trout", "Tuna", "Turkey", "Turmeric", "Turnips", "Vanilla Beans", "Vegetable Oil", "Vegetable spaghetti", "Vermicelli Noodles", "Vinegar", "Wakame", "Walnut", "Warehou", "Wasabi", "Water", "Watercress", "Watermelon", "Wattleseed", "Wheat", "Wheatgrass juice", "White rice", "White wine vinegar", "Whiting Wild Rice", "William Pear", "RedWine", "White Wine", "Yeast", "Yellow Papaw", "Yellowtail Kingfish", "Yoghurt", "Yogurt", "Zucchini", "Achiote Seed", "Ajwain Seed", "Ajwan Seed", "Allspice Ground", "Allspice Whole", "Amchoor", "Anise", "Anise Star", "Aniseed Whole", "Annatto Seed", "Arrowroot", "Asafoetida", "Baharat", "Balti Masala", "Balti Stir Fry Mix", "Basil", "Bay Leaves", "Bay Leaves Chopped", "BBQ Seasoning", "Biryani Spice Mix", "Cajun Seasoning", "Caraway Seed", "Cardamom Ground", "Cardamom Whole", "Cassia", "Cassia Bark", "Cayenne Pepper", "Celery Leaf", "Celery Salt", "Celery Seed", "Chamomile", "Chervil", "Chicken Seasoning", "Chilli Crushed", "Chilli Ground", "Chilli Pepper", "Chillies Whole", "China Star", "Chinese 5 Spice", "Chives", "Cinnamon Bark", "Cinnamon Ground", "Cinnamon Powder", "Cinnamon Sticks", "Cloves Ground", "Cloves Whole", "Colombo Powder", "Coriander Ground", "Coriander Leaf", "Coriander Seed", "Creole Seasoning", "Cumin Ground", "Cumin Seed", "Cumin Seed Black", "Cumin Seed Royal", "Curly Leaf Parsley", "Curry Chinese", "Curry Hot", "Curry Leaves", "Curry Madras Medium", "Curry Mild", "Curry Thai Green", "Curry Thai Red", "Dhansak Spice Mix", "Dill Herb", "Dill Leaf", "Dill Seed", "Fajita Seasoning", "Fennel Seed", "Fenugreek Ground", "Fenugreek Leaf", "Fenugreek Seed", "Fines Herbes", "Fish Seasoning", "Five Spice Mix", "French Lavender", "Galangal Ground", "Garam Masala", "Garlic Chips", "Garlic Granules", "Garlic Powder", "Garlic Salt", "German Chamomile", "Ginger Root", "Ginger Ground", "Green Cardamom", "Herbes de Provence", "Jalfrezi Curry Powder", "Jalfrezi Mix", "Jerk Seasoning", "Juniper Berries", "Kaffir Leaves", "Korma Curry Powder", "Korma Mix", "Lamb Seasoning", "Lavender", "Lemon Grass", "Lemon Grass Chopped", "Lemon Pepper", "Lime Leaves", "Lime Leaves Ground", "Liquorice Root", "Mace Ground", "Mace Whole", "Mango Powder", "Marjoram", "Methi", "Methi Leaves", "Mexican Salsa Mix", "Mint", "Mixed Herbs", "Mixed Spice", "Mulled Cider Spices", "Mulled Wine Spices", "Mustard Powder", "Mustard Seed Black", "Mustard Seed Brown", "Mustard Seed White", "Mustard Seed Yellow", "Nigella", "Nutmeg Ground", "Nutmeg Whole", "Onion Seed", "Orange Zest", "Oregano", "Paella Seasoning", "Paprika", "Paprika Hungarian", "Paprika Smoked", "Parsley", "Parsley Flat Leaf", "Pepper Black Coarse", "Pepper Black Ground", "Pepper White Ground", "Peppercorns Black", "Peppercorns Cracked Black", "Peppercorns Green", "Peppercorns Mixed", "Peppercorns Pink", "Peppercorns Szechwan", "Peppercorns White", "Pickling Spice", "Pimento Berries", "Pimento Ground", "Piri Piri Seasoning", "Pizza Topping Mix", "Poppy Seed", "Pot Marjoram", "Poudre de Colombo", "Ras el Hanout", "Rice Paper", "Rogan Josh Curry Powder", "Rogan Josh Mix", "Rose Baie", "Rosemary", "Saffron", "Sage", "Sea Salt Coarse", "Seasoning Salt", "Self Adhesive Spice Labels", "Sesame Seed", "Spearmint", "Spice Charts", "Steak Seasoning", "Sumac Ground", "Sweet Basil", "Sweet Laurel", "Tagine Seasoning", "Tandoori Masala", "Tandoori Mix", "Tarragon", "Thai Creen Curry Mix", "Thai Red Curry Mix", "Thai Stir Fry", "Thyme", "Tikka Masala", "Tikka Masala Curry Powder", "Turmeric", "Turmeric Powder", "Vanilla Bean", "Vanilla Pods", "Vegetable Seasoning", "Zahtar Spice Mix"]
    
    food_names = ["Miso Soup", "Butajiru", "Dwaeli gukbap", "Zoni", "Stracciatella alla Romana", "Gnocchi", "Pappardelle", "Cencioni", "Schupfnudeln", "Maccheroni alla chitarra", "Durian", "Anona da Madeira", "Lucuma", "Cocona", "Maracuja dos Acore", "Sarma", "Fylla", "Futoska sarma", "Yarpaq dolmasi", "Tolma, Golabki", "Pizza Margherita", "Pizza quattro formaggi", "Caprese Pizza", "Pizza capricciosa", "Pizza Napoltetana", "New York Style Pizza", "Pizza ai funghi", "Pizza alla diavola", "Detroit Style Pizza", "Satay", "Shashlik", "Pinchitos", "Mtsvadi", "Shish kebab", "Souvla", "Banchan", "Chirinabe", "Smorgasbord", "Kaiseki", "Plato tipico", "Dim sum", "Mole", "Mojo de ajo", "Sambal", "Mala Sauce", "Rouille", "Pique Criollo", "Eclair", "Liers vlaaike", "Mille feuilles", "Presnac", "Beignets", "Pastel de nata", "Nougat", "Nogha", "Mousse", "Zefir", "French pralines", "Peladillas", "Grilled Cheese", "Egg Sandwich", "Submarine Sandwich", "Sandwiches de miga", "Po Boy Smorgastarta", "Bruschetta", "Crostini", "Istarska supa", "Brandade", "Migas, Riganada", "Kombu", "Wakame", "Hijiki", "Nori", "Dulse", "Welsh Laverbread", "Pavlova", "Postre Balcarce", "Chaja", "Kardinalschnitte", "Spanische Windtorte", "Victoria Sponge", "Parfait", "Souffle glace", "Spumoni", "Granita di caffe", "Granita al limone", "Granita di gelsi", "Spring Rolls", "Pho cuon", "Crostini", "Egg Roll Charales", "Badrijani", "Borek", "Banitsa", "Bulbul yuvasi", "Boyoz", "Kandil simidi", "Kalburabasti", "Churros", "Tawa tawa", "Shakoy", "Isle of Wight Doughnuts", "Borrachuelos", "Fondue", "Goma dare", "Comeback Sauce", "Karengo, Dulse", "Macaroni", "Penne", "Mafalde", "Linguine", "Trofie", "Bavette", "Fish and Chips", "Tian nu la", "Fiskefrikadeller", "Rodspaettefilet", "Sole meniere", "Mojama", "Pad Thai", "Pancit malabon", " Char kway teow", "Beef chow fun", "Pancit bihon", "Putu mayam", "Churrasco", "Asado", "Yakniku", "Australian Barbecue", "Fantanyeros", "Antikristo", "Quesadilla", "Sincronizadas", "Tortilla con quesillo", "Entomatadas", "Smazeny syr", "Korokke", "Parmigiano Reggiano", "Great Lakes Cheshire", "Cave Rebel", "Gruyere", "Belper Knolle", "Ascutney Mountain", "Chutney", "Lutenica", "Pikliz", "Ajvar", "Pindur", "Mooncake", "Pinza Bolognese", "Mkhabez", "Kouign amann", "Canele", "Eccles Cake", "Dashi", "Zoni Sumashijiru", "Stracciatella alla Romana", "Birds Nest Soup", "Penne Mafalde", "Linguine", "Trofie", "Bavette", "Conchiglioni", "Ceviche Gravlax", "Tiradito", "Sashimi Kokoda", "Ota ika", "Baguette", "Cuban Bread", "Pan de barra", "Ciabatta", "Pepperoni Roll", "Pan amasado", "Guacomole", "Avocado Chutney", "Bell Pepper Chutney", "Gooseberry Chutney", "Almond Chutney", "Chocolate chip cookie", "Whoopie Pie", "Alfajor", "Madeleines", "Bokkepootjes", "Black and White Cookie", "Tamal", "Tlacoyo", "Garnacha", "Tlayuda", "Zanzibar pizza", "Xianbing", "Bibimbap", "Zamarod pulao", "Kamameshi", "Kimchi", "bokkeumbap", "Trinidad pelau", "Paloo", "Naan", "Mjukkaka", "Obi non", "Mekitsa", "Cebularz Lubelski", "Roti canai", "Miso", "Doenjang", "Soy Sauce", "Zha", "Cai", "Doubanjiang", "Yuzukosho", "Bulgogi", "Souvla", "Shashlik", "Griot", "Zhangcha", "Duck", "Kelaguen mannok", "Tonkatsu", "Kotlet schabowy", "Kotlet mielony", "Sweet and Sour Pork", "Sweet and Sour Spare Ribs", "Wasabi", "Tasmanian Wasabi", "Nalca", "Duruka Lilly Pilly", "Trigonella Caerulea", "Sundae", "La dame blanche", "Spumoni", "Misa", "Sorbetes", "Stracciatella", "Fajitas", "Souvla", "Bulgogi", "Tocino", "Madfoon", "Shashlik", "Hummus", "Tahini", "Muhammara", "Baba ghanoush", "Hummus Beiruti", "Hummus kawarma", "Pho", "Mohinga", "Nudelsuppe", "Feu", "Aush", "Assam laksa", "Mac and cheese", "Macaroni Pie", "Nachos", "Onion Samosa", "Chuchitos", "Knish", "Aloo tikki", "Entomatadas", "Burrito", "Tantuni", "Mulita", "Chimichanga", "Kathi Roll", "Taquitos", "Fried chicken", "Ayam goreng", "Crispy Fried Chicken", "Ayam penyet", "Orange Chicken", "Pozharsky Cutlet", "Pasta Carbonara", "Pasta alla Gricia", "Spaghetti al guanciale", "Shabu shabu", "Kavarma", "Jerk Chicken", "Chop Suey", "Maori Boil Up", "Fondue Bourguignonne", "Biryani", "Chicken kabouli", "Dan bauk", "Ruz al Bukhari", "Maqluba Mathlotha", "Wonton", "Jiaozi", "Har gow", "Cha siu bao ", "Gyoza", "Shumai", "Soba", "Juwari Soba", "Shinano Soba", "Sanuki", "Udon", "Hiyamugi", "Quiche", "Pork Pie", "Bacon and Egg Pie", "Zwiebelkuchen", "Pastilla", "Khachapuri", "Fudge", "Barfi", "Daheen", "Tablet", "Masghati", "Pecan Pralines", "Onigiri", "Fofos de arroz", "Temaki", "Undrallu", "Tekkamaki", "Kappamaki", "Tiramisu", "Zuppa Inglese", "Dobos torte", "Pave Zuccotto", "Baba au rhum", "Ricotta", "Istarska skuta", "Paska skuta", "Myzithra", "Casu axedu", "Xynotyro", "Lasagna", "Lasagnette", "Tagliatelle", "Strozzapreti", "Pici", "Penne", "Tagliatelle al ragu alla Bolognese", "Lasagne alla Bolognese", "Makaronia me kima", "Spag", "Bol", "Spaghetti and Meatballs", "Gyoza", "Har gow", "Jiaozi", "Wonton", "Momo", "Guotie", "Baozi", "Kozhukkatta", "Topoi", "Banh gio Hejin bahoan", "Festival", "Pretzel", "Pane carasau", "Pain de Campagne", "Pain de mie", "Houska", "Waterford Blaa", "Kimchi", "Fukujinzuke", "Pieczarki marynowane", "Mei gan cai", "Pao cai", "Chinese Pickles", "Feta", "Anthotyro", "Anari", "Souroto", "Kefalotyri", "Malaka", "Risotto", "Risotto con le salamelle", "Panissa (Piedmont) ", "Risotto alla paesana", "Risotto ai funghi", "Ice Cream Float", "Huckabuck", "Havij bastani", "Kulfi falooda", "Affogato", "Roti", "Chapati", "Nane taftoon", "Kulcha", "Paratha", "Khakhra", "Macarons", "Scottish Shortbread", "Koloocheh", "Vaniljekranse", "Naan berenji", "Jodenkoek", "Yakitori", "Jujeh kabab", "Pollo asado", "Inasal na manok", "Ayam percik Hendl", "Donut", "Vdolky", "Cronut", "Munkk", "Smultring", "Beaver Tails", "Pommes frites", "Poutine", "Patatje oorlog", "Bonda", "Licke police", "Kuku sib zamini", "Cheddar", "Rumi", "Meyer Vintage", "Gouda", "Gouda Holland", "Gruyere", "Parmigiano Reggiano", "Barbecue ribs", "Australian Barbecue", "Fatanyeros", "Asado", "Churrasco", "Parrilla", "Wagashi", "Varenye", "Chapssaltteok Akumaki", "Dasik", "Gur Cake", "Cheeseburger", "Juicy Lucy", "Chili Burger", "Ramen Burger", "Bofsandwich", "KiwiBurger", "Mozzarella", "Prince Jean", "Fromage", "blanc", "Foggy Morning", "Paneer", "Dolcelatte", "Paella", "Tahchin", "Risotto ai frutti di mare", "Kamameshi", "Arroz con pollo", "Chukadon", "Mousse", "Nougat", "Zefir", "Szpajza", "French meringue", "Amareta", "Brownie", "Souffle au chocolat", "Needhams", "Nanaimo Bars", "Brigadeiro", "Mousse au chocolat", "Udon", "Somen", "Saang Mein", "Himokawa", "Cumian", "Misua", "Jiaozi", "Wonton", "Cha siu bao", "Xiaolongbao", "Pyzy", "Tangbao", "Spaghetti", "Ciriole", "Penne", "Mafalde", "Linguine Trofie", "Dim sum", "Merienda", "Anju", "Koldt Bord", "Plato tipico", "Smorgisbord", "Sashimi", "Ceviche", "Gravlax", "Tiradito", "Kokoda", "Poisson cru", "Yakiniku", "Teppanyaki", "Asado", "Antikristo", "Parrilla", "Khorkhog", "Tortilla", "Totopo", "Pita Bread", "Lavash", "Bhakri", "Khakhra", "Croissan", "Medialunas", "Kringle", "Cronut", "Empanadas de manzana", "Kouign amann", "Cupcake", "Brownies", "Cheesecake Brownies", "Shio daifuku", "Alfajor de Medina", "Sidonia", "Fudge", "Tofu" "Yuba", "Mochi", "Zenzai", "Yaksik", "Puto", "Red Bean Cake", "Palitaw", "Cellophane noodles", "Rice Vermicelli", "Mung Bean Sheets", "Soba", "Misua", "Somen", "Ramen", "Okinawa soba", "Cup Noodles", "Pancit Lomi", "Laksa", "Kongguksu", "Tacos", "Bakwan", "Baleada", "Tostada", "Tlayuda", "Sgagliozza", "Suchi" "Kimbap" "Onigiri" "Injeolmi" "Hoedeopbap" "Chungmu gimbap", "Burger", "Pizza", "Tarte flambee", "Stew chicken", "grilled fish", "ackee and saltfish", "Fried Breadfruit", "Chocolate cake", "Curry chicken", "Curry goat", "Baked chicken", "fried rice"]
    
    meal_types = ["Breakfast", "Lunch", "Dinner"]
    
    measurements = ["", "tsp", "tbsp", "c", "pt", "qt", "gal", "g", "kg", "fl oz", "oz", "lbs", "ml", "l"]
    
    measurementSizes = [".000", ".500",
                        ".175", ".375", ".625", ".875", 
                        ".250", ".750",
                        ".333", ".667"]
    
    steps = ["S0", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"]
    
    meal_images = ["./assets/img/bbq_chicken.jpg", "./assets/img/fried_chicken.jpg", "./assets/img/tandoori_chicken.jpg", "./assets/img/fish_fillet.jpg", "./assets/img/fried_fish.jpg"]
    
    def age(self):
        return random.randint(18,75)
    
    def calorie_goal(self):
        return random.randint(1200, 4000)
    
    def food_name(self):
        return fake.random.choice(self.food_names)
    
    def grams(self):
        return random.randint(35,500)
    
    def height(self):
        return random.randint(144, 214)
     
    def ingredient(self):
        return fake.random.choice(self.ingredients)
    
    def meal_image(self):
        return fake.random.choice(self.meal_images)
    
    def meal_type(self):
        return fake.random.choice(self.meal_types)
    
    def measurement(self):
        return fake.random.choice(self.measurements)
    
    def quantity(self):
        return str(random.randint(0,10)) + fake.random.choice(self.measurementSizes)

    def step(self):
        return fake.random.choice(self.steps)
        
    def weight(self):
        return random.randint(63, 275)
 
## then add new provider to faker instance
fake.add_provider(MyProvider)


ids = {
    "user" : 0, "recipe" : 0,
    "ingredient" : [], "measurement" : [],
    "Breakfast" : [], "Lunch" : [], "Dinner" : [],
    "daily_meal" : [], "meal_plan" : []
}

recipeNames = []
recipeSteps = defaultdict(list)

##Now, let’s decide on the kind of data that we’re going to take from the Faker instance to be stored in the fake variable.
#200,000 fake users
#-- myuser (usr_id, usrname, password, email, age, weight, height, calorie_goal, date_joined) 
f1 = open("test_populate_user.sql", "w")
f1.write("--Populating user table\n")
for i in range(20):
    ids["user"] = ids["user"] + 1
    username = fake.first_name() + str(i)
    password = fake.password()
    email = username + "@gmail.com"
    age = fake.age() 
    weight = fake.weight()
    height = fake.height()
    calorie_goal = fake.calorie_goal()
    f1.write("insert into myuser(usrname, pssword, email, age, weight, height, calorie_goal) values ('{}', '{}', '{}', {}, {}, {}, {});\n".format(username, password, email, age, weight, height, calorie_goal))
f1.close()

#600,000 fake recipes
#-- recipe (recipe_id, recipe_name, recipe_description)
f2 = open("test_populate_recipe.sql", "w")
f2.write("--Populating recipe table\n")
for i in range(60):
    ids["recipe"] = ids["recipe"] + 1
    rname = fake.food_name()
    recipeNames.append(rname)
    recipe_description = fake.sentence()
    f2.write("insert into recipe(recipe_name, recipe_description) values ('{}', '{}');\n".format(rname, recipe_description))
f2.close()

#-- ingredient (ingredient_id, ingredient_name, protein, fats, carbs, calories)
f3 = open("test_populate_ingredient.sql", "w")
f3.write("--Populating ingredient table\n")
for i in range(50):
    iid = "I" + "{:06d}".format(i)
    ids["ingredient"].append(iid)
    ingredient_name = fake.ingredient()
    pro = fake.grams()
    fts = fake.grams()
    cbs = fake.grams()
    cal = pro*4 + cbs*4 + fts*9
    f3.write("insert into ingredient(ingredient_id, ingredient_name, protein, fats, carbs, calories) values ('{}', '{}', {}, {}, {}, {});\n".format(iid, ingredient_name, pro, fts, cbs, cal))
f3.close()

#-- kitchen_inventory (usr_id, ingredient_id)
f4 = open("test_populate_kitchen_inventory.sql", "w")
f4.write("--Populating kitchen_inventory table\n")
for i in range(20):
    user_id = random.randint(1,ids["user"])
    ingredient_id = fake.random.choice(ids["ingredient"])
    f4.write("insert into kitchen_inventory(usr_id, ingredient_id) values ('{}', '{}');\n".format(user_id, ingredient_id))
f4.close()

#-- measurement (measurement_id, measurement_name)
f5 = open("test_populate_measurement.sql", "w")
f5.write("--Populating measurement table\n")
measurements = ["", "tsp", "tbsp", "c", "pt", "qt", "gal", "g", "kg", "fl oz", "oz", "lbs", "ml", "l"];
for i in range(12):
 ##MANUALLY
    mmid = "MM" + "{:02d}".format(i)
    ids["measurement"].append(mmid)
    measurement_name = measurements[0]
    measurements = measurements[1:]
    f5.write("insert into measurement(measurement_id, measurement_name) values ('{}', '{}');\n".format(mmid, measurement_name))
f5.close()

#-- recipe_info (usr_id, recipe_id, date_created)
f6 = open("test_populate_recipe_info.sql", "w")
f6.write("--Populating recipe_info table\n")
#every recipe has an owner
for i in range(1,61):
    user_id = random.randint(1,ids["user"])
    recipe_id = i
    f6.write("insert into recipe_info(usr_id, recipe_id) values ('{}', '{}');\n".format(user_id, recipe_id))
f6.close()

#-- recipe_instruction(recipe_id, step_id, instruction)
f7 = open("test_populate_recipe_instruction.sql", "w")
f7.write("--Populating recipe_instruction table\n")
#each recipe has at least one step
for i in range(1,61):
    recipe_id = i
    step_id = "S0"
    recipeSteps[recipe_id].append( step_id )
    instruction = fake.sentence()
    f7.write("insert into recipe_instruction(recipe_id, step_id, instruction) values ('{}', '{}', '{}');\n".format(recipe_id, step_id, instruction))
#more instructions
for i in range(60):
    recipe_id = random.randint(1,ids["recipe"])
    step_id = "S" + str(random.randint(1,9))
    recipeSteps[recipe_id].append( step_id )
    instruction = fake.sentence()
    f7.write("insert into recipe_instruction(recipe_id, step_id, instruction) values ('{}', '{}', '{}');\n".format(recipe_id, step_id, instruction))
f7.close()

#-- recipe_ingredient(recipe_id,step_id, ingredient_id, measurement_id, quantity)
f8 = open("test_populate_recipe_ingredient.sql", "w")
f8.write("--Populating recipe_ingredient table\n")
#each recipe calls for at least one ingredient
for i in range(1,61):
    recipe_id = i
    step_id = "S0"
    ingredient_id = fake.random.choice(ids["ingredient"])
    measurement_id = fake.random.choice(ids["measurement"])
    quantity = fake.quantity()
    f8.write("insert into recipe_ingredient(recipe_id, step_id, ingredient_id, measurement_id, quantity) values ('{}', '{}', '{}', '{}', {});\n".format(recipe_id,step_id, ingredient_id, measurement_id, quantity))
#other ingredients
for i in range(60):
    recipe_id = random.randint(1,ids["recipe"])
    step_id = fake.random.choice(recipeSteps[recipe_id])
    ingredient_id = fake.random.choice(ids["ingredient"])
    measurement_id = fake.random.choice(ids["measurement"])
    quantity = fake.quantity()
    f8.write("insert into recipe_ingredient(recipe_id, step_id, ingredient_id, measurement_id, quantity) values ('{}', '{}', '{}', '{}', {});\n".format(recipe_id,step_id, ingredient_id, measurement_id, quantity))
f8.close()

#-- meal (meal_id, recipe_id, meal_name, meal_type, meal_image, servings)
f9 = open("test_populate_meal.sql", "w")
f9.write("--Populating meal table\n")
# need at leaast one meal from each type
#breakfast
mid = "M000000"
recipe_id = 1
meal_name = recipeNames[0]
ids["Breakfast"].append(mid)
meal_image = fake.meal_image()
servings = random.randint(1,5)
f9.write("insert into meal(meal_id, recipe_id, meal_name, meal_type, meal_image, servings) values ('{}', '{}', '{}', 'Breakfast', '{}', {});\n".format(mid, recipe_id, meal_name, meal_image, servings))

#lunch
mid = "M000001"
recipe_id = 2
meal_name = recipeNames[1]
ids["Lunch"].append(mid)
meal_image = fake.meal_image()
servings = random.randint(1,5)
f9.write("insert into meal(meal_id, recipe_id, meal_name, meal_type, meal_image, servings) values ('{}', '{}', '{}', 'Lunch', '{}', {});\n".format(mid, recipe_id, meal_name, meal_image, servings))

#dinner
mid = "M000002"
recipe_id = 3
meal_name = recipeNames[2]
ids["Dinner"].append(mid)
meal_image = fake.meal_image()
servings = random.randint(1,5)
f9.write("insert into meal(meal_id, recipe_id, meal_name, meal_type, meal_image, servings) values ('{}', '{}', '{}', 'Dinner', '{}', {});\n".format(mid, recipe_id, meal_name, meal_image, servings))

#more meals
for i in range(3,60):
    mid = "M" + "{:06d}".format(i)
    recipe_id = i+1
    meal_name = recipeNames[i]
    mtype = fake.meal_type()
    ids[mtype].append(mid)
    meal_image = fake.meal_image()
    servings = random.randint(1,5)
    f9.write("insert into meal(meal_id, recipe_id, meal_name, meal_type, meal_image, servings) values ('{}', '{}', '{}', '{}', '{}', {});\n".format(mid, recipe_id, meal_name, mtype, meal_image, servings))
f9.close()

#-- daily_meal (daily_meal_id, breakfast, lunch, dinner)
f10 = open("test_populate_daily_meal.sql", "w")
f10.write("--Populating daily_meal table\n")
for i in range(50):
    dmid = "DM" + "{:06d}".format(i)
    ids["daily_meal"].append(dmid)
    breakfast = fake.random.choice(ids["Breakfast"])
    lunch = fake.random.choice(ids["Lunch"])
    dinner = fake.random.choice(ids["Dinner"])
    f10.write("insert into daily_meal(daily_meal_id, breakfast, lunch, dinner) values ('{}', '{}', '{}', '{}');\n".format(dmid, breakfast, lunch, dinner))
f10.close()

#-- mealplan (mealplan_id, day1, day2, day3, day4, day5, day6, day7)
f11 = open("test_populate_meal_plan.sql", "w")
f11.write("--Populating mealplan table\n")
for i in range(25):
    mpid = "MP" + "{:06d}".format(i)
    ids["meal_plan"].append(mpid)
    day1 = fake.random.choice(ids["daily_meal"])
    day2 = fake.random.choice(ids["daily_meal"])
    day3 = fake.random.choice(ids["daily_meal"])
    day4 = fake.random.choice(ids["daily_meal"])
    day5 = fake.random.choice(ids["daily_meal"])
    day6 = fake.random.choice(ids["daily_meal"])
    day7 = fake.random.choice(ids["daily_meal"])
    f11.write("insert into mealplan(mealplan_id, day1, day2, day3, day4, day5, day6, day7) values ('{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}');\n".format(mpid, day1, day2, day3, day4, day5, day6, day7))
f11.close()

#-- meal_schedule (mealplan_id, usr_id, start_date, end_date)
f12 = open("test_populate_meal_schedule.sql", "w")
f12.write("--Populating meal_schedule table\n")
for i in range(20):
    meal_plan_id = fake.random.choice(ids["meal_plan"])
    user_id = random.randint(1,ids["user"])
    start = fake.date()
    end_date = fake.date_between_dates(fake.date_object())
    f12.write("insert into meal_schedule(mealplan_id, usr_id, startdate, enddate) values ('{}', {}, '{}', '{}');\n".format(meal_plan_id, user_id, start, end_date))
f12.close()
