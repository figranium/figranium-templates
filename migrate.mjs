import { config } from 'dotenv';
import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

config({ path: '.env.local' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Check if the presets table has the expected columns (author_name, configuration, etc.)
// Returns true if the schema is missing columns, meaning it needs a rebuild
async function needsSchemaRebuild(client) {
    try {
        const result = await client.query(`
            SELECT column_name
            FROM information_schema.columns
            WHERE table_schema = 'app' AND table_name = 'presets'
        `);
        const columns = result.rows.map(r => r.column_name);
        const required = ['author_name', 'configuration', 'target_url', 'expected_output', 'icon', 'time_estimate', 'user_id', 'updated_at'];
        const missing = required.filter(col => !columns.includes(col));
        return missing.length > 0;
    } catch {
        // Table doesn't exist, so we need to create it
        return true;
    }
}

async function migrate() {
    const client = await pool.connect();
    try {
        // Ensure the app schema exists and set search_path
        await client.query('CREATE SCHEMA IF NOT EXISTS app;');
        await client.query('SET search_path TO app, public;');

        // Drop and recreate app tables only if they exist with an incompatible schema
        // This preserves data when the schema is already correct
        if (await needsSchemaRebuild(client)) {
            await client.query('DROP TABLE IF EXISTS app.preset_downloads CASCADE;');
            await client.query('DROP TABLE IF EXISTS app.presets CASCADE;');
            await client.query('DROP TABLE IF EXISTS app.verification_tokens CASCADE;');
            await client.query('DROP TABLE IF EXISTS app.users CASCADE;');
            console.log('Dropped existing app tables (outdated schema).');
        } else {
            console.log('App tables already have the correct schema.');
        }

        // Apply the full schema (creates tables if they don't exist)
        const schemaPath = path.resolve(__dirname, 'db/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');
        await client.query(schemaSql);
        console.log('Schema applied successfully.');

        // Seed presets if the table is empty
        const countResult = await client.query('SELECT COUNT(*) FROM app.presets');
        const count = parseInt(countResult.rows[0].count, 10);

        if (count === 0) {
            console.log('Seeding presets...');
            const presets = [
                {
                    title: 'Amazon Product Scraper',
                    description: 'Scrape product details, prices, and reviews from Amazon product pages.',
                    author_name: 'Figranium',
                    type: 'SCRAPE',
                    icon: 'shopping_cart',
                    downloads: 1250,
                    time_estimate: '45s',
                    category: 'Shopping',
                    configuration: JSON.stringify({
                        mode: 'scrape',
                        url: 'https://www.amazon.com/dp/B0EXAMPLE',
                        selectors: {
                            title: '#productTitle',
                            price: '.a-price-whole',
                            reviews: '#acrCustomerReviewText'
                        }
                    }),
                    target_url: 'https://www.amazon.com/dp/B0EXAMPLE',
                    expected_output: 'JSON with product title, price, and review count'
                },
                {
                    title: 'LinkedIn Lead Generator',
                    description: 'Extract leads and contact information from LinkedIn search results.',
                    author_name: 'Figranium',
                    type: 'AGENT',
                    icon: 'work',
                    downloads: 980,
                    time_estimate: '2m',
                    category: 'Lead Gen',
                    configuration: JSON.stringify({
                        mode: 'agent',
                        url: 'https://www.linkedin.com/search/results/people/',
                        steps: [
                            'Search for target role',
                            'Extract profile names and titles',
                            'Collect company information'
                        ]
                    }),
                    target_url: 'https://www.linkedin.com/search/results/people/',
                    expected_output: 'List of leads with name, title, and company'
                },
                {
                    title: 'Twitter Sentiment Monitor',
                    description: 'Monitor Twitter/X for brand mentions and analyze sentiment in real-time.',
                    author_name: 'Figranium',
                    type: 'AGENT',
                    icon: 'monitor_heart',
                    downloads: 745,
                    time_estimate: '1m 30s',
                    category: 'Monitoring',
                    configuration: JSON.stringify({
                        mode: 'agent',
                        url: 'https://twitter.com/search',
                        steps: [
                            'Search for brand mentions',
                            'Collect recent tweets',
                            'Analyze sentiment'
                        ]
                    }),
                    target_url: 'https://twitter.com/search',
                    expected_output: 'Sentiment analysis report with tweet samples'
                },
                {
                    title: 'YouTube Video Metadata Extractor',
                    description: 'Extract video titles, descriptions, and engagement metrics from YouTube.',
                    author_name: 'Figranium',
                    type: 'SCRAPE',
                    icon: 'play_circle',
                    downloads: 620,
                    time_estimate: '30s',
                    category: 'Videos',
                    configuration: JSON.stringify({
                        mode: 'scrape',
                        url: 'https://www.youtube.com/watch?v=EXAMPLE',
                        selectors: {
                            title: 'h1.ytd-watch-metadata',
                            views: '.view-count',
                            likes: '#top-level-buttons-computed'
                        }
                    }),
                    target_url: 'https://www.youtube.com/watch?v=EXAMPLE',
                    expected_output: 'Video metadata including title, views, and likes'
                },
                {
                    title: 'Real Estate Listing Monitor',
                    description: 'Monitor real estate listings for price changes and new properties.',
                    author_name: 'Figranium',
                    type: 'AGENT',
                    icon: 'home',
                    downloads: 510,
                    time_estimate: '3m',
                    category: 'Real Estate',
                    configuration: JSON.stringify({
                        mode: 'agent',
                        url: 'https://www.zillow.com/homes/',
                        steps: [
                            'Search for properties in target area',
                            'Extract listing details',
                            'Track price changes'
                        ]
                    }),
                    target_url: 'https://www.zillow.com/homes/',
                    expected_output: 'Property listings with price history'
                },
                {
                    title: 'News Article Aggregator',
                    description: 'Aggregate news articles from multiple sources and categorize them.',
                    author_name: 'Figranium',
                    type: 'SCRAPE',
                    icon: 'newspaper',
                    downloads: 430,
                    time_estimate: '1m',
                    category: 'News',
                    configuration: JSON.stringify({
                        mode: 'scrape',
                        url: 'https://news.google.com/',
                        selectors: {
                            headlines: '.DY5T1d',
                            sources: '.wEwyrc'
                        }
                    }),
                    target_url: 'https://news.google.com/',
                    expected_output: 'Categorized news headlines with sources'
                },
                {
                    title: 'E-commerce Price Tracker',
                    description: 'Track product prices across multiple e-commerce sites and alert on drops.',
                    author_name: 'Figranium',
                    type: 'AGENT',
                    icon: 'trending_down',
                    downloads: 890,
                    time_estimate: '2m 30s',
                    category: 'Shopping',
                    configuration: JSON.stringify({
                        mode: 'agent',
                        url: 'https://www.bestbuy.com/',
                        steps: [
                            'Search for product',
                            'Extract price from multiple retailers',
                            'Compare and alert on price drops'
                        ]
                    }),
                    target_url: 'https://www.bestbuy.com/',
                    expected_output: 'Price comparison table with alerts'
                },
                {
                    title: 'Job Board Scraper',
                    description: 'Scrape job listings from multiple job boards and filter by criteria.',
                    author_name: 'Figranium',
                    type: 'SCRAPE',
                    icon: 'work_outline',
                    downloads: 350,
                    time_estimate: '1m 15s',
                    category: 'Jobs',
                    configuration: JSON.stringify({
                        mode: 'scrape',
                        url: 'https://www.indeed.com/jobs',
                        selectors: {
                            jobTitle: '.jobTitle',
                            company: '.companyName',
                            location: '.companyLocation'
                        }
                    }),
                    target_url: 'https://www.indeed.com/jobs',
                    expected_output: 'Job listings with title, company, and location'
                },
                {
                    title: 'Restaurant Review Analyzer',
                    description: 'Analyze restaurant reviews across platforms to identify common themes.',
                    author_name: 'Figranium',
                    type: 'AGENT',
                    icon: 'restaurant',
                    downloads: 280,
                    time_estimate: '2m',
                    category: 'Reviews',
                    configuration: JSON.stringify({
                        mode: 'agent',
                        url: 'https://www.yelp.com/',
                        steps: [
                            'Search for restaurant',
                            'Collect reviews from multiple platforms',
                            'Analyze common themes and sentiment'
                        ]
                    }),
                    target_url: 'https://www.yelp.com/',
                    expected_output: 'Review analysis with common themes and ratings'
                },
                {
                    title: 'SEO Keyword Research Tool',
                    description: 'Extract keyword data and search volumes from SEO tools.',
                    author_name: 'Figranium',
                    type: 'SCRAPE',
                    icon: 'search',
                    downloads: 670,
                    time_estimate: '45s',
                    category: 'SEO',
                    configuration: JSON.stringify({
                        mode: 'scrape',
                        url: 'https://ahrefs.com/keyword-difficulty',
                        selectors: {
                            keyword: '.keyword-cell',
                            volume: '.volume-cell',
                            difficulty: '.difficulty-cell'
                        }
                    }),
                    target_url: 'https://ahrefs.com/keyword-difficulty',
                    expected_output: 'Keyword data with search volume and difficulty scores'
                },
                {
                    title: 'Travel Deal Finder',
                    description: 'Monitor travel sites for flight and hotel deals to your favorite destinations.',
                    author_name: 'Figranium',
                    type: 'AGENT',
                    icon: 'flight',
                    downloads: 540,
                    time_estimate: '3m 30s',
                    category: 'Travel',
                    configuration: JSON.stringify({
                        mode: 'agent',
                        url: 'https://www.skyscanner.com/',
                        steps: [
                            'Search for flights to target destinations',
                            'Extract flight prices and times',
                            'Monitor for price drops'
                        ]
                    }),
                    target_url: 'https://www.skyscanner.com/',
                    expected_output: 'Flight deals with prices and dates'
                },
                {
                    title: 'Social Media Content Curator',
                    description: 'Curate trending content from social media platforms for your niche.',
                    author_name: 'Figranium',
                    type: 'AGENT',
                    icon: 'share',
                    downloads: 390,
                    time_estimate: '1m 45s',
                    category: 'Social Media',
                    configuration: JSON.stringify({
                        mode: 'agent',
                        url: 'https://www.reddit.com/r/popular/',
                        steps: [
                            'Browse trending content',
                            'Filter by niche relevance',
                            'Collect top posts with engagement metrics'
                        ]
                    }),
                    target_url: 'https://www.reddit.com/r/popular/',
                    expected_output: 'Curated content list with engagement metrics'
                }
            ];

            for (const preset of presets) {
                await client.query(
                    `INSERT INTO app.presets 
                     (title, description, author_name, type, icon, downloads, time_estimate, category, configuration, target_url, expected_output)
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
                    [preset.title, preset.description, preset.author_name, preset.type, preset.icon, preset.downloads, preset.time_estimate, preset.category, preset.configuration, preset.target_url, preset.expected_output]
                );
            }
            console.log(`Seeded ${presets.length} presets.`);
        } else {
            console.log(`Presets table already has ${count} rows. Skipping seed.`);
        }

        // Performance: Add indexes for frequently sorted and filtered columns
        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_presets_downloads ON app.presets(downloads DESC);
            CREATE INDEX IF NOT EXISTS idx_presets_created_at ON app.presets(created_at DESC);
            CREATE INDEX IF NOT EXISTS idx_presets_category ON app.presets(category);
        `);

        console.log('Migration successful');
    } catch (err) {
        console.error('Migration failed', err);
        throw err;
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();