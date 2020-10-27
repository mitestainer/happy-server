module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": {
        rejectUnauthorized: process.env.NODE_ENV === "production" ? true : false
    },
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    },
    "entities": [
        "./src/models/*.ts"
    ]
}