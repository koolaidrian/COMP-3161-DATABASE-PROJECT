-- CODE FILLED WITH STORED PROCEDURE ERRORS
-- TABLE CREATIONS  ARE FINE

DROP DATABASE IF EXISTS mealplanner;
CREATE DATABASE mealplanner;
USE mealplanner;

--CREATE TABLES

-- myuser (usr_id, usrname, pssword, email, age, weight, height, calorie_goal, date_joined) 
create table myuser (
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
	foreign key(usr_id) references myuser(usr_id) on update cascade on delete cascade,
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
	dte_created timestamp not null,
	primary key(recipe_id),
	foreign key(usr_id) references myuser(usr_id) on update cascade on delete cascade,
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
	foreign key(recipe_id, step_id) references recipe_instruction(recipe_id,step_id) on update cascade on delete cascade,
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

-- mealplan (mealplan_id, day1, day2, day3, day4, day5, day6, day7)
create table mealplan (
	mealplan_id varchar(8) not null,
	day1 varchar(8) not null,
	day2 varchar(8) not null,
	day3 varchar(8) not null,
	day4 varchar(8) not null,
	day5 varchar(8) not null,
	day6 varchar(8) not null,
	day7 varchar(8) not null,
	primary key(mealplan_id),
	foreign key(day1) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day2) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day3) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day4) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day5) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day6) references daily_meal(daily_meal_id) on update cascade on delete cascade,
	foreign key(day7) references daily_meal(daily_meal_id) on update cascade on delete cascade
);

-- meal_schedule (mealplan_id, status, usr_id, start_date, end_date)
create table meal_schedule (
	mealplan_id varchar(8) not null,
	status varchar(10) not null,
	usr_id int not null,
	startdate date not null,
	enddate date not null,
	primary key(mealplan_id, usr_id, startdate),
	foreign key(mealplan_id) references mealplan(mealplan_id) on update cascade on delete cascade,
	foreign key(usr_id) references myuser(usr_id) on update cascade on delete cascade
);

--STORED PROCEDURES

-- get kitchen inventory of a specific user
delimiter //
create procedure get_kitchen_inventory (in uid INT)
begin
	select distinct ingredient.ingredient_name from kitchen_inventory 
	inner join ingredient where kitchen_inventory.usr_id = uid and kitchen_inventory.ingredient_id = ingredient.ingredient_id;
end//
delimiter ;

-- get user id
delimiter //
create procedure get_usr_id (in uname varchar(80))
begin
	select usr_id from myuser where usrname = uname;
end//
delimiter ;

-- get meals created by a specific user
delimiter //
create procedure get_num_usr_meal (in uid INT)
begin
	select count(meal_id) as num_meals 
	from meal
	inner join recipe_info where recipe_info.usr_id = uid and recipe_info.recipe_id = meal.recipe_id;
end//
delimiter ;

-- get breakfast meals created by a specific user
delimiter //
create procedure get_usr_breakfast_meals (in uid INT)
begin
	select meal_id, meal_name, meal_type, meal_image, recipe_description 
	from meal 
	inner join recipe_info on recipe_info.usr_id = uid and recipe_info.recipe_id = meal.recipe_id and meal_type = "Breakfast" 
	inner join recipe on recipe.recipe_id = recipe_info.recipe_id;
end//
delimiter ;

-- get lunch meals created by a specific user
delimiter //
create procedure get_usr_lunch_meals (in uid INT)
begin
	select meal_id, meal_name, meal_type, meal_image, recipe_description 
	from meal 
	inner join recipe_info on recipe_info.usr_id = uid and recipe_info.recipe_id = meal.recipe_id and meal_type = "Lunch" 
	inner join recipe on recipe.recipe_id = recipe_info.recipe_id;
end//
delimiter ;

-- get dinner meals created by a specific user
delimiter //
create procedure get_usr_dinner_meals (in uid INT)
begin
	select meal_id, meal_name, meal_type, meal_image, recipe_description 
	from meal 
	inner join recipe_info on recipe_info.usr_id = uid and recipe_info.recipe_id = meal.recipe_id and meal_type = "Dinner" 
	inner join recipe on recipe.recipe_id = recipe_info.recipe_id;
end//
delimiter ;

-- get recipe of a specific meal
delimiter //
create procedure get_recipe_info1 (in mid varchar(7))
begin
	select meal_name, meal_image, meal_type, recipe_description, dte_created, step_id, instruction
	from meal 
	join recipe_info on meal.meal_id = mid and meal.recipe_id = recipe_info.recipe_id
	join recipe on recipe_info.recipe_id = recipe.recipe_id
	left join recipe_instruction on recipe_info.recipe_id = recipe_instruction.recipe_id;
end//
delimiter ;

delimiter //
create procedure get_recipe_info2 (in mid varchar(7))
begin
	select meal_name, recipe_ingredient.step_id as step, instruction, ingredient_id, measurement_id, quantity
	from meal 
	join recipe_info on meal.meal_id = mid and meal.recipe_id = recipe_info.recipe_id
	join recipe on recipe_info.recipe_id = recipe.recipe_id
	join recipe_instruction on recipe_info.recipe_id = recipe_instruction.recipe_id
	join recipe_ingredient on recipe_info.recipe_id = recipe_ingredient.recipe_id and recipe_instruction.step_id = recipe_ingredient.step_id;
end//
delimiter ;


-- get ingredient name from id
delimiter //
create procedure get_ingredient_name (in iid varchar(7))
begin
	select ingredient_name from ingredient where ingredient_id = iid;
end//
delimiter ;

-- get measurement name from id
delimiter //
create procedure get_measurement_name (in mmid varchar(8))
begin
	select measurement_name from measurement where measurement_id = mmid;
end//
delimiter ;

-- get system ingredients
delimiter //
create procedure get_system_ingredients ()
begin
	select distinct ingredient_name from ingredient;
end//
delimiter ;

-- get ingredient id from name
delimiter //
create procedure get_ingredient_id (in name varchar(80))
begin
	select ingredient_id from ingredient where ingredient_name = name;
end//
delimiter ;

-- get measurement id from name
delimiter //
create procedure get_measuremnt_id (in name varchar(80))
begin
	select measurement_id from measurement where measurement_name = name;
end//
delimiter ;


-- add user kitchen ingredient
delimiter //
create procedure add_kitchen_ingredient (in iid varchar(7), usr_id INT)
begin
	insert into kitchen_inventory values (usr_id, iid);
end//
delimiter ;

-- remove user kitchen ingredient
delimiter //
create procedure remove_kitchen_ingredient (in iid varchar(7), usid INT)
begin
	delete from kitchen_inventory where usr_id = usid and ingredient_id = iid;
end//
delimiter ;

-- get current meal plan of specific user start and end date
delimiter //
create procedure get_user_startandend (in uid INT, mpid varchar(8))
begin
select startdate, enddate from meal_schedule 
where meal_schedule.usr_id = uid and meal_schedule.mealplan_id = mpid;
end//
delimiter ;

-- get current meal plan of specific user
delimiter //
create procedure get_current_mealplan (in uid INT)
begin
select meal_schedule.mealplan_id, day1, day2, day3, day4, day5, day6, day7 from meal_schedule inner join 
mealplan where meal_schedule.usr_id = uid and meal_schedule.status = "current" and meal_schedule.mealplan_id = mealplan.mealplan_id;
end//
delimiter ;

-- get daily_meal for day from specific meal plan
delimiter //
create procedure get_current_daily_meal_day1 (in mpid varchar(8))
begin
select day1 from mealplan where mealplan.mealplan_id = mpid;
end//
delimiter ;

-- get daily_meal for day from specific meal plan
delimiter //
create procedure get_current_daily_meal_day2 (in mpid varchar(8))
begin
select day2 from mealplan where mealplan.mealplan_id = mpid;
end//
delimiter ;

-- get daily_meal for day from specific meal plan
delimiter //
create procedure get_current_daily_meal_day3 (in mpid varchar(8))
begin
select day3 from mealplan where mealplan.mealplan_id = mpid;
end//
delimiter ;

-- get daily_meal for day from specific meal plan
delimiter //
create procedure get_current_daily_meal_day4 (in mpid varchar(8))
begin
select day4 from mealplan where mealplan.mealplan_id = mpid;
end//
delimiter ;

-- get daily_meal for day from specific meal plan
delimiter //
create procedure get_current_daily_meal_day5 (in mpid varchar(8))
begin
select day5 from mealplan where mealplan.mealplan_id = mpid;
end//
delimiter ;

-- get daily_meal for day from specific meal plan
delimiter //
create procedure get_current_daily_meal_day6 (in mpid varchar(8))
begin
select day6 from mealplan where mealplan.mealplan_id = mpid;
end//
delimiter ;

-- get daily_meal for day from specific meal plan
delimiter //
create procedure get_current_daily_meal_day7 (in mpid varchar(8))
begin
select day7 from mealplan where mealplan.mealplan_id = mpid;
end//
delimiter ;


-- get daily_meal meals by daily_meal id
delimiter //
create procedure get_daily_meal_meals (in dmid varchar(8))
begin
select breakfast, lunch, dinner from daily_meal where daily_meal_id = dmid;
end//
delimiter ;

-- get completed meal plan of specific user
delimiter //
create procedure get_completed_mealplan (in uid INT)
begin
select meal_schedule.mealplan_id,day1, day2, day3, day4, day5, day6, day7 from meal_schedule inner join 
mealplan where meal_schedule.usr_id = uid and meal_schedule.status = "completed" and meal_schedule.mealplan_id = mealplan.mealplan_id;

end//
delimiter ;

-- get incomplete meal plan of specific user
delimiter //
create procedure get_cancelled_mealplan (in uid INT)
begin
select meal_schedule.mealplan_id,day1, day2, day3, day4, day5, day6, day7 from meal_schedule inner join 
mealplan where meal_schedule.usr_id = uid and meal_schedule.status = "cancelled" and meal_schedule.mealplan_id = mealplan.mealplan_id;
end//
delimiter ;

-- get past meal plans of specific user
delimiter //
create procedure get_past_mealplan (in uid INT)
begin
select meal_schedule.mealplan_id,day1, day2, day3, day4, day5, day6, day7 from meal_schedule inner join 
mealplan where meal_schedule.usr_id = uid and meal_schedule.status != "completed" and meal_schedule.mealplan_id = mealplan.mealplan_id;
end//
delimiter ;

-- complete meal plan of specific user
delimiter //
create procedure completeplan (in uid INT, mpid varchar(8))
begin
update meal_schedule set status = "complete" where meal_schedule.usr_id = uid and meal_schedule.mealplan_id = mpid;
end//
delimiter ;

-- cancel meal plan of specific user
delimiter //
create procedure cancelplan (in uid INT, mpid varchar(8))
begin
update meal_schedule set status = "cancelled" where meal_schedule.usr_id = uid and meal_schedule.mealplan_id = mpid;
end//
delimiter ;

-- delete meal plan of specific user
delimiter //
create procedure deleteplan (in uid INT, mpid varchar(8))
begin
delete from meal_schedule where meal_schedule.usr_id = uid and meal_schedule.mealplan_id = mpid;
end//
delimiter ;

-- get total calories  of specific meal
delimiter //
create procedure get_meal_calories (in mid varchar(7))
begin
	select sum(calories) as cal
	from meal 
	join recipe_info on meal.meal_id = mid and meal.recipe_id = recipe_info.recipe_id
	join recipe on recipe_info.recipe_id = recipe.recipe_id
	join recipe_instruction on recipe_info.recipe_id = recipe_instruction.recipe_id
	join recipe_ingredient on recipe_info.recipe_id = recipe_ingredient.recipe_id and recipe_instruction.step_id = recipe_ingredient.step_id
	join ingredient on ingredient.ingredient_id = recipe_ingredient.ingredient_id
	group by meal_name;
end//
delimiter ;


-- get number of daily_meals
delimiter //
create procedure get_num_daily_meals ()
begin
	select count(daily_meal_id) as num_daily_meals
	from daily_meal;
end//
delimiter ;

-- get number of mealsplans
delimiter //
create procedure get_num_meal_plans ()
begin
	select count(mealplan_id) as num_mealplans
	from mealplan;
end//
delimiter ;

-- get all breakfast meals
delimiter //
create procedure get_all_breakfast_meals ()
begin
	select meal_id, meal_name
	from meal where meal_type = "Breakfast";
end//
delimiter ;

-- get all lunch meals
delimiter //
create procedure get_all_lunch_meals ()
begin
	select meal_id, meal_name
	from meal where meal_type = "Lunch";
end//
delimiter ;

-- get all dinner meals
delimiter //
create procedure get_all_dinner_meals ()
begin
	select meal_id, meal_name
	from meal where meal_type = "Dinner";
end//
delimiter ;

-- create daily meal
delimiter //
create procedure create_daily_meal (in dmid varchar(8), bID varchar(7), lID varchar(7), dID varchar(7))
begin
	insert into daily_meal values (dmid,bID,lID,dID);
end//
delimiter ;

-- create mealplan
delimiter //
create procedure create_mealplan (in mpid varchar(8), d1ID varchar(8), d2ID varchar(8), d3ID varchar(8), d4ID varchar(8), d5ID varchar(8), d6ID varchar(8), d7ID varchar(8))
begin
	insert into mealplan values (mpid,d1ID,d2ID,d3ID,d4ID,d5ID,d6ID,d7ID);
end//
delimiter ;

-- assign mealplan
delimiter //
create procedure assign_meal_plan (in mpid varchar(8), status varchar(10), usID INT, strtdate date, eddate date)
begin
	insert into meal_schedule values (mpid,status,usID, strtdate, eddate);
end//
delimiter ;
