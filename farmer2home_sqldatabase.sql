create database farm2home;
use farm2home;

create table user_table
(
id varchar(50) primary key,
name varchar(50) not null,
password varchar(30) not null,
role char(1),
address varchar(200) not null,
isActive boolean default true,
registeredDate timestamp default now(),
mobile int(15) unique
);

create table product_table
(
id varchar(50) primary key,
name varchar(50) not null,
description varchar(200),
price float(10) not null,
type char(1),
farmer_id varchar(10) not null references user_table(id),
quantity float(10) not null,
category varchar(10) not null
);

create table cart_table
(
id varchar(50) primary key,
products varchar(250) references product_table(id),
statusDate timestamp not null
);

create table order_table
(
id varchar(50) primary key,
products varchar(250) references product_table(id),
statusDate timestamp not null
);

alter table product_table drop COLUMN id ;
ALTER table product_table modify COLUMN id int(15)  auto_increment ;
ALTER table product_table add COLUMN quality varchar(15);
use farm2home;
insert into user_table(id,name,password,role,mobile,address) values('2','farhan','bond007','c','1256789','ulhasnagar');
select * from user_table;
select * from product_table;
select * from subscription;
insert into product_table(id,name,description,price,type,farmer_id,quantity,category) values('2','tomamto','vegetable',100,'K','1',25,'vegetable');