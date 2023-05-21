create database firstapi;

create table users(
    cedula_identidad varchar(40) primary key,
    nombre varchar(40),
    primer_apellido varchar(40),
    segundo_apellido varchar(40),
    fecha_de_nacimiento date
);

insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento)values
    ('8426117','Douglas','Chana','Rioja','1995/12/10'),
    ('8427834','Oscar','Chana','Rioja','1997/10/10');