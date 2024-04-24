-- Crear tabla Users
create table Users (
	  id SERIAL PRIMARY KEY,
	  name varchar(100) not null,
	  email varchar(50) not null,
	  password varchar(100) not null,
	  createdAt date not null
);

-- Insertemos algunos valores
insert into Users (name, email, password, createdAt) values ('miguel', 'miguel@gmail.com', 'password', '2023-01-02');
insert into Users (name, email, password, createdAt) values ('juan camilo', 'juancamilo@gmail.com', 'password', '2024-03-14');
insert into Users (name, email, password, createdAt) values ('mateo', 'mateo@gmail.com', 'password', '2024-04-18');
insert into Users (name, email, password, createdAt) values ('carolina', 'carolina@gmail.com', 'password', '2024-08-22');
insert into Users (name, email, password, createdAt) values ('liliana', 'liliana@gmail.com', 'password', '2024-08-22');
insert into Users (name, email, password, createdAt) values ('césar', 'cesar@gmail.com', 'password', '2024-09-22');
insert into Users (name, email, password, createdAt) values ('hernán', 'hernan@gmail.com', 'password', '2024-12-01');
