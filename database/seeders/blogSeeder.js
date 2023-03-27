// seeder.js

const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Blog = require('../../models/Blog');
const User = require('../../models/User');

mongoose.connect('mongodb://127.0.0.1:27017/vulnerablemean', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const seedBlogPosts = async () => {
    try {
        await db.dropCollection('blog');
    } catch (error) {
        console.log('Error dropping collection: ', error);
    }

    const postTitles = [
        'MongoDB Injection Like a Ninja with Binary Search Approach',
        'Understanding NoSQL Security: Best Practices and Common Attacks',
        'Securing Your NoSQL Database: A Comprehensive Guide',
        'Preventing NoSQL Injection Attacks: Tips and Techniques',
        'NoSQL Encryption: How to Protect Sensitive Data in Your Database',
        'Hardening Your NoSQL Environment: Security Measures You Should Implement',
    ];

    const postContents = [
        faker.lorem.paragraphs(),
        faker.lorem.paragraphs(),
        faker.lorem.paragraphs(),
        faker.lorem.paragraphs(),
        faker.lorem.paragraphs(),
        faker.lorem.paragraphs(),
    ];

    const postImages = [
        'https://cdn.pixabay.com/photo/2020/03/30/08/53/ninja-4983545_1280.png',
        'https://cdn.acunetix.com/wp_content/uploads/2020/03/nosql-injection-910x478.png',
        'https://www.netsolutions.com/insights/wp-content/uploads/2022/03/an-ultimate-guide-to-database-security.webp',
        'https://redfoxsec.com/wp-content/uploads/2022/04/nosql-new.png',
        'https://uploads-ssl.webflow.com/60d5e12b5c772dbf7315804e/63b6be39d64e148fd11afe95_sql-or-nosql-databases-which-one-is-best-for-storing-data-in-your-organisation.png',
        'https://assets.northflank.com/nodemongo_9c3caf6f45.png',
    ]

    const posts = await Promise.all(postTitles.map(async (title, index) => {
        let user = await User.aggregate([{ $sample: { size: 1 } }]);

        let featured = 0
        if (index == 0) {
            featured = 1
        }
        return {
            title: title,
            image: postImages[index],
            featured: featured,
            content: postContents[index],
            createdBy: user[0].username,
            createdAt: new Date()
        };
    }));


    try {
        // console.log(posts)
        await Blog.deleteMany({})
        const result = await Blog.insertMany(posts);
        console.log('Blog posts seeded successfully: ', posts.length);
    } catch (error) {
        console.log('Error seeding blog posts: ', error);
    }
};

module.exports = seedBlogPosts;
