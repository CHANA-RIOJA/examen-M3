const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'firstapi',
    port: '5432'
}) 

const getUsers = async (req, res) => {
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('select * from users where cedula_identidad = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento } = req.body;

    const response = await pool.query('insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento) values ($1, $2, $3, $4, $5)', [cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento}
        }
    })
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento } = req.body;
    const response = await pool.query('update users set cedula_identidad = $1, nombre = $2, primer_apellido = $3, segundo_apellido = $4, fecha_de_nacimiento = $5 where cedula_identidad = $6',[
            cedula_identidad,
            nombre,
            primer_apellido,
            segundo_apellido,
            fecha_de_nacimiento,
            cedula_identidad
    ]);
    console.log(response);
    res.json('User Update Succesfully');
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('delete from users where cedula_identidad = $1', [id]);
    console.log(response);
    res.json(`User ${id} delete succesfully`);
};

const promUsers = async (req, res) => {
    const response = await pool.query('SELECT AVG(EXTRACT(YEAR FROM AGE(NOW(),fecha_de_nacimiento))) AS promedio_edades FROM users');
    console.log(response);
    res.json(response.rows);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    promUsers
}