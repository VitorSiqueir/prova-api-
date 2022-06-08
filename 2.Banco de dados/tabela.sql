create database ProvaDB;

use ProvaDB;

create table tb_vilão (
	id_vilão	int,
    nm_vilão	varchar(100),
    ds_maldades	varchar(200),
    bt_super_poder	boolean
);

INSERT INTO tb_vilão (id_vilão, nm_vilão,ds_maldades, bt_super_poder)
				VALUES (1, bruno, sessions, true);


    SELECT  id_vilão	id,
            nm_vilão	nome,
            ds_maldades	maldadades,
            bt_super_poder poder

        FROM   	tb_vilão