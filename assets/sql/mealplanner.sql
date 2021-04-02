
DROP DATABASE IF EXISTS mealplanner;
CREATE DATABASE mealplanner;
USE mealplanner;


create table Users(
	UID int auto_increment not null,
	Username varchar(80),
	Password varchar(80),
	Email varchar(80),
	Age int,
	Weight int,
	Height int,
	CalorieGoal int,
	primary key(UID)
	
);