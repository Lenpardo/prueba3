 
	CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombre TEXT,
    apellidos TEXT,
    domicilio INTEGER,
    email TEXT,
    fono TEXT);

    
INSERT INTO user
    ( nombre, apellidos, domicilio, email,fono) VALUES 
    ('Lenis','Pardo Vega','avenida general oscar bonilla','len.pardo@duocuc.cl','+56956432505');
INSERT INTO contacto
    ( nombre, apellidos, domicilio, email,fono) VALUES 
    ('Antonia','Ghislaine ojeda','avenida general oscar bonilla','ejemplo@gmail.com','+56912345678');