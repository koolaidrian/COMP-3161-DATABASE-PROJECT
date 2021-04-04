create database mealplanner;

use mealplanner;

--CREATE TABLES

-- my_user (usr_id, usrname, pssword, email, age, weight, height, calorie_goal, date_joined) 
create table my_user (
	usr_id int auto_increment not null,
	usrname varchar(80) not null,
	pssword varchar(80) not null,
	email varchar(80) not null,
	age int,
	weight int,
	height int,
	calorie_goal int not null,
	date_joined timestamp,
	primary key(usr_id)
);

-- recipe (recipe_id, recipe_name, recipe_description)
create table recipe (
	recipe_id int auto_increment not null,
	recipe_name varchar(80) not null,
	recipe_description varchar(250) not null,
	primary key(recipe_id)
);

-- ingredient (ingredient_id, ingredient_name, protein, fats, carbs, calories)
create table ingredient (
	ingredient_id varchar(7) not null,
	ingredient_name varchar(80) not null,
	protein int not null,
	fats int not null,
	carbs int not null,
	calories int not null,
	primary key(ingredient_id)
);

-- inventory (usr_id, ingredient_id)
create table kitchen_inventory (
	usr_id int not null,
	ingredient_id varchar(7) not null,
	primary key(usr_id, ingredient_id),
    foreign key(usr_id) references my_user(usr_id) on update cascade on delete cascade,
    foreign key(ingredient_id) references ingredient(ingredient_id) on update cascade on delete cascade
);

-- measurement (measurement_id, measurement_name)
create table measurement (
	measurement_id varchar(8) not null,
	measurement_name varchar(10) not null,
	primary key(measurement_id)
);

-- recipe_info (usr_id, recipe_id, date_created)
create table recipe_info (
	usr_id int not null,
	recipe_id int not null,
	date_created timestamp not null,
	primary key(recipe_id),
    foreign key(usr_id) references my_user(usr_id) on update cascade on delete cascade,
    foreign key(recipe_id) references recipe(recipe_id) on update cascade on delete cascade
);

-- recipe_instruction(recipe_id, step_id, instruction)
create table recipe_instruction(
	recipe_id int not null,
	step_id varchar(2) not null,
	instruction varchar(250) not null,
	primary key(recipe_id, step_id),
    foreign key(recipe_id) references recipe(recipe_id) on update cascade on delete cascade
);

-- recipe_ingredient(recipe_id,step_id, ingredient_id, measurement_id, quantity)
create table recipe_ingredient(
	recipe_id int not null,
	step_id varchar(2) not null,
	ingredient_id varchar(7) not null,
	measurement_id varchar(8) not null,
	quantity decimal(10,3),
	primary key(recipe_id, step_id, ingredient_id),
    foreign key(recipe_id) references recipe(recipe_id) on update cascade on delete cascade,
    foreign key(step_id) references recipe_instruction(step_id) on update cascade on delete cascade,
    foreign key(ingredient_id) references ingredient(ingredient_id) on update cascade on delete cascade,
    foreign key(measurement_id) references measurement(measurement_id) on update cascade on delete cascade
);

-- meal (meal_id, recipe_id, meal_name, meal_type, meal_image, servings)
create table meal (
	meal_id varchar(7) not null,
	recipe_id int not null,
	meal_name varchar(80) not null,
	meal_type varchar(9) not null,
	meal_image varchar(120) not null,
	servings int not null,
	primary key(meal_id),
    foreign key(recipe_id) references recipe(recipe_id) on update cascade on delete cascade
);

-- daily_meal (daily_meal_id, breakfast, lunch, dinner)
create table daily_meal (
	daily_meal_id varchar(8) not null,
	breakfast varchar(7) not null,
	lunch varchar(7) not null,
	dinner varchar(7) not null,
	primary key(daily_meal_id),
	foreign key(breakfast) references meal(meal_id) on update cascade on delete cascade,
	foreign key(lunch) references meal(meal_id) on update cascade on delete cascade,
	foreign key(dinner) references meal(meal_id) on update cascade on delete cascade
);

-- meal_plan (meal_plan_id, day1, day2, day3, day4, day5, day6, day7)
create table meal_plan (
	meal_plan_id varchar(8) not null,
	day1 varchar(8) not null,
	day2 varchar(8) not null,
	day3 varchar(8) not null,
	day4 varchar(8) not null,
	day5 varchar(8) not null,
	day6 varchar(8) not null,
	day7  varchar(8) not null,
	primary key(meal_plan_id),
	foreign key(day1) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day2) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day3) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day4) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day5) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day6) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day7) references daily_meal(daily_meal_id) on update cascade on delete cascade
);

-- meal_schedule (meal_plan_id, usr_id, start_date, end_date)
create table meal_schedule (
	meal_plan_id varchar(8) not null,
	usr_id int not null,
	start_date date not null,
	end_date date not null,
	primary key(meal_plan_id, usr_id, start_date),
    foreign key(meal_plan_id) references meal_plan(meal_plan_id) on update cascade on delete cascade,
    foreign key(usr_id) references my_user(usr_id) on update cascade on delete cascade
);

--STORED PROCEDURES

delimiter //
create procedure get_kitchen_inventory (in uid INT)
begin
select distinct ingredient.ingredient_name from kitchen_inventory inner join 
ingredient where kitchen_inventory.usr_id = uid and kitchen_inventory.ingredient_id = ingredient.ingredient_id;
end//
delimiter ;
