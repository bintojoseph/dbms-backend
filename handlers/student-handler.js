const pool = require('../config/psql');


const getStudents = (request, response) => {
    pool.query('SELECT * FROM student ORDER BY id ASC', (error, results) => {
        if (error) {
            return response.status(400).json({
                success: false,
                error: error.name,
                message: error.message
            })
        }
        response.status(200).json(results.rows)
    })
}



module.exports = {
    getStudents,
}