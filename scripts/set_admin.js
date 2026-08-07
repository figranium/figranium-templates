const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL ? process.env.DATABASE_URL.replace('?sslmode=require', '') : '';

if (!connectionString) {
    console.error("DATABASE_URL not found in .env.local");
    process.exit(1);
}

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

async function setAdmin() {
    try {
        const client = await pool.connect();
        console.log("Connected to database.");

        // Get username from command line argument
        const username = process.argv[2];
        
        if (!username) {
            console.log("Usage: node scripts/set_admin.js <username>");
            console.log("\nExample: node scripts/set_admin.js Figranium");
            console.log("\nThis will set the specified user as an admin.");
            
            // Show existing users
            const result = await client.query('SELECT username, email, role FROM users');
            console.log("\nExisting users:");
            result.rows.forEach((user, i) => {
                console.log(`${i + 1}. ${user.username} (${user.email}) - Role: ${user.role || 'user'}`);
            });
            
            client.release();
            await pool.end();
            return;
        }

        console.log(`Setting user "${username}" as admin...`);
        
        const result = await client.query(
            'UPDATE users SET role = $1 WHERE username = $2 RETURNING username, email, role',
            ['admin', username]
        );

        if (result.rows.length === 0) {
            console.log(`\n❌ User "${username}" not found in database.`);
            console.log("\nAvailable users:");
            const allUsers = await client.query('SELECT username, email FROM users');
            allUsers.rows.forEach((user, i) => {
                console.log(`${i + 1}. ${user.username} (${user.email})`);
            });
        } else {
            const user = result.rows[0];
            console.log(`\n✅ Successfully set ${user.username} (${user.email}) as admin!`);
            console.log(`   Role: ${user.role}`);
            console.log(`\nThe admin badge will now appear next to this user's name on all presets.`);
        }

        client.release();
        await pool.end();
    } catch (err) {
        console.error("Error:", err.message);
        process.exit(1);
    }
}

setAdmin();