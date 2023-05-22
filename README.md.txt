MI PRIMER API REST - INSTRUCCIONES
AUTOR: CHANA RIOJA DOUGLAS OSCAR C.I.: 8426117 LP.
===================== ANTES DE EJECUTAR ===================== 

1. Descargar la carpeta del proyecto del Github

2. Crear la Base de Datos para el proyecto(los scrpits de creación de BD, tabla y tambien para poder insertar datos de prueba se encuentran en la carpeta database/database.sql): Para la ejecucion de los scripts puede utilizar "SQL Shell (psql)"
NOTA: 	→para poder ver el listado de DB utilizamos el comando \l,
	→para poder utilizar una BD utilizamos el comando \c <nombre de la BD>
	→para poder ver la(s) tabla(s) utilizamos el comando \dt
	→para poder ver los registros de la tabla utilizamos el comando select * from <nombre de la tabla>
Vale recalcar que todo se realiza en "SQL Shell (psql)".

3. Si cambio el nombre de la BD o existe alguna configuracion distinta en PostgreSQL(hot, user, password, database, port), debe cambiar los parametros dentro de la carpeta src/controllers/index.controller.js

===================== PARA EJECUTAR ===================== 

1. Para poder ejecutar el API REST primero debemos descargar "imsonia rest" en el siguiente link https://insomnia.rest/ > hacer click en Get Started for Free > en la opcion Free click en Download y por ultimo click en Download Imsomnia for Windows. En caso de que seas usuario Linux la Web reconocera tu S.O.

2. Ejecutar el archivo descargado e instalar.

3. Ya abierto el programa Imsomnia crear New Request precionando Ctrl+N > poner el nombre que desee (sugerencia: restapi-postgresql) > en la ventana del medio escoger el formato JSON > donde se puede ver una URL poner la URL donde se ejecutara nuestro programa que son los siguientes:
		       metodo |                      		link                   |           	Funcion
		        ►GET        		http://localhost:3000/users           	    	Para listar todos los Usuarios
			►GET        		http://localhost:3000/users/8426117		Para buscar un usuario por su C.I.(Ej. 8426117)
			►POST			http://localhost:3000/users			Para crear un nuevo Usuario
						Ejemplo para el cuerpo JSON:
						{
							"cedula_identidad": "8421778",
							"nombre": "Nicol",
							"primer_apellido": "Chavez",
							"segundo_apellido": "Teran",
							"fecha_de_nacimiento": "1997/09/11"
						}
			►DELETE			http://localhost:3000/users/8421778		Para eliminar un usuario por su C.I. (Ej. 8421778)
			►PUT			http://localhost:3000/users/8421778		Para modificar el registro de un usuario por su C.I. (Ej. 8421778)
						Ejemplo para el cuerpo JSON:
						{
							"cedula_identidad": "8421778",
							"nombre": "Nicol Gabriela",
							"primer_apellido": "Chavez",
							"segundo_apellido": "Teran",
							"fecha_de_nacimiento": "1997/09/11"
						}
			►GET			http://localhost:3000/promedio-edad		Para ver el promedio de las edades de los usuarios.

De igual manera se reflejan los resultados de cada uno de los endpoints en consola. Para mejor sentido de ubicacion del programa Imsomnia se adjuntara una imagen.
