# Sequelize Training Project

This project demonstrates Sequelize basics including models, migrations, and database operations.

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Migrations**
   ```bash
   npm run migrate
   ```

3. **Test the Model**
   ```bash
   node test-user-model.js
   ```

## Project Structure

```
├── config/
│   └── config.json          # Database configuration
├── migrations/
│   └── 20251001102928-create-user.js  # User table migration
├── models/
│   ├── index.js            # Sequelize initialization
│   └── user.js             # User model definition
├── seeders/                # Database seeders (empty)
├── package.json            # Project dependencies
└── test-user-model.js      # Test script
```

## User Model Features

The User model includes:
- **firstName**: String (required, 2-50 characters)
- **lastName**: String (required, 2-50 characters)  
- **email**: String (required, unique, valid email format)
- **age**: Integer (optional, 0-120 range)
- **timestamps**: createdAt and updatedAt (automatic)

## Available NPM Scripts

- `npm run migrate` - Run pending migrations
- `npm run migrate:undo` - Undo last migration
- `npm run seed` - Run database seeders

## Database

This project uses SQLite for easy setup and portability. The database file is `database.sqlite`.

## Key Sequelize Concepts Demonstrated

1. **Models**: Object-relational mapping with validations
2. **Migrations**: Version control for database schema
3. **Associations**: Ready for relationships (see `associate` method in User model)
4. **CRUD Operations**: Create, read operations shown in test script

## Next Steps

- Add more models (Post, Comment, etc.)
- Create associations between models
- Add database seeders
- Implement more complex queries