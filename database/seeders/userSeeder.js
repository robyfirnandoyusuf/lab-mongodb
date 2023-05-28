// seeder.js

const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const User = require('../../models/User');

mongoose.connect('mongodb://127.0.0.1:27017/vulnerablemean', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const seedUsers = async () => {
    try {
        await db.dropCollection('user');
    } catch (error) {
        console.log('Error dropping collection: ', error);
    }

    const usernames = [
        "guest",
        "sarahsmith22",
        "alexjohnson77",
        "emilybrown45",
        "davidwilson33",
        "amycarter98",
        "mikeroberts21",
        "lisawalker76",
        "brianharris55",
        "jessicataylor87",

        "admin",
        "alexander92",
        "sophie18",
        "nathan_d",
        "olivia_m",
        "daniel88",
        "victoria23",
        "william_j",
        "emily_c",
        "mason_w",

        "ganesha",
        "sophia_jones",
        "liam_thompson",
        "olivia_hall",
        "noah_lee",
        "ava_wilson",
        "ethan_clark",
        "mia_adams",
        "jackson_baker",
        "sophie_garcia",

        "sudosu",
        "bobsmith",
        "emily1990",
        "alexgreen",
        "lauraw",
        "robertm",
        "sarahmiller",
        "michaelscott",
        "juliarose",
        "davidbrown",

        "jackson94",
        "sophia28",
        "maximus86",
        "isabella11",
        "liam73",
        "olivia42",
        "ethan09",
        "mia57",
        "noah25",
        "amelia68",
    ];

    const first_names = [
        "John",
        "Sarah",
        "Alex",
        "Emily",
        "David",
        "Amy",
        "Mike",
        "Lisa",
        "Brian",
        "Jessica",

        "Jessica",
        "Alexander",
        "Sophie",
        "Nathan",
        "Olivia",
        "Daniel",
        "Victoria",
        "William",
        "Emily",
        "Mason",

        "Lucas",
        "Sophia",
        "Liam",
        "Olivia",
        "Noah",
        "Ava",
        "Ethan",
        "Mia",
        "Jackson",
        "Sophie",

        "Alice",
        "Bob",
        "Emily",
        "Alex",
        "Laura",
        "Robert",
        "Sarah",
        "Michael",
        "Julia",
        "David",

        "Jackson",
        "Sophia",
        "Maximus",
        "Isabella",
        "Liam",
        "Olivia",
        "Ethan",
        "Mia",
        "Noah",
        "Amelia",
    ]

    const last_names = [
        "Doe",
        "Smith",
        "Johnson",
        "Brown",
        "Wilson",
        "Carter",
        "Roberts",
        "Walker",
        "Harris",
        "Taylor",

        "Williams",
        "Johnson",
        "Brown",
        "Davis",
        "Miller",
        "Anderson",
        "Taylor",
        "Jackson",
        "Campbell",
        "Wilson",

        "Miller",
        "Jones",
        "Thompson",
        "Hall",
        "Lee",
        "Wilson",
        "Clark",
        "Adams",
        "Baker",
        "Garcia",

        "Johnson",
        "Smith",
        "Davis",
        "Green",
        "Williams",
        "Martin",
        "Miller",
        "Scott",
        "Rose",
        "Brown",

        "Smith",
        "Johnson",
        "Williams",
        "Brown",
        "Taylor",
        "Anderson",
        "Wilson",
        "Clark",
        "Lewis",
        "Young",
    ]

    const passwords = [
        // Alfabet lowercase
        "abcdefghijk",
        "klmnopqrstu",
        "bcdefghijkl",
        "efghijklmno",
        "opqrstuvwxy",
        "yzabcdefghi",
        "ijklmnopqrs",
        "defghijklmn",
        "cdefghijklm",
        "mnopqrstuvw",

        // Alfabet lowercase & uppercase
        "SuPeRsEcR3T",
        "QrStUvWxYzA",
        "mNoPkLjIhGf",
        "XcVbNmZqWeR",
        "aBcDeFgHiJk",
        "YtHnJuIkOlP",
        "qWeRtYuIoPa",
        "lKjHgFdSaZx",
        "pOiUyTrEwQa",
        "zXcVbNmLkJh",

        // Alfabet lowercase dan numerik
        "ganesha1273",
        "3rt7fjy6u80",
        "qazxsw23e5t",
        "8yhn7ujm3wa",
        "4rfvgt5bhu7",
        "90o9i8u7y65",
        "bgt5nhy6kju",
        "1qaz2wsx3ed",
        "rfvbgt5nhy6",
        "7ujm8ik9ol0",

        // Alfabet lowercase, uppercase, numerik dan simbolik
        "L1g7tM3Up!_",
        "S3cur1tY!-#",
        "P@ssw0rd!#-",
        "C0mpl3x!-@#",
        "Str0ng!@-#",
        "R3s1st@nc3!-",
        "F1r3w@ll!@#",
        "H@ck3r!-@#",
        "Pr0t3ct!#-",
        "Saf3guard!-@#",

        // Alfabet uppercase
        "UCANTBEATME",
        "POWERHOUSE",
        "CHALLENGER",
        "FANTASTICX",
        "STRONGHOLD",
        "MASTERMIND",
        "IMPRESSIVE",
        "BREAKTHROU",
        "VICTORIOUS",
        "SPECTACULA",
    ];

    const emails = [
        "johndoe89@example.com",
        "sarahsmith22@example.com",
        "alexjohnson77@example.com",
        "emilybrown45@example.com",
        "davidwilson33@example.com",
        "amycarter98@example.com",
        "mikeroberts21@example.com",
        "lisawalker76@example.com",
        "brianharris55@example.com",
        "jessicataylor87@example.com",

        "jessica21@example.com",
        "alexander92@example.com",
        "sophie18@example.com",
        "nathan_d@example.com",
        "olivia_m@example.com",
        "daniel88@example.com",
        "victoria23@example.com",
        "william_j@example.com",
        "emily_c@example.com",
        "mason_w@example.com",

        "lucas.miller@example.com",
        "sophia.jones@example.com",
        "liam.thompson@example.com",
        "olivia.hall@example.com",
        "noah.lee@example.com",
        "ava.wilson@example.com",
        "ethan.clark@example.com",
        "mia.adams@example.com",
        "jackson.baker@example.com",
        "sophie.garcia@example.com",

        "alice123@example.com",
        "bobsmith@example.com",
        "emily1990@example.com",
        "alexgreen@example.com",
        "lauraw@example.com",
        "robertm@example.com",
        "sarahmiller@example.com",
        "michaelscott@example.com",
        "juliarose@example.com",
        "davidbrown@example.com",

        "jackson94@example.com",
        "sophia28@example.com",
        "maximus86@example.com",
        "isabella11@example.com",
        "liam73@example.com",
        "olivia42@example.com",
        "ethan09@example.com",
        "mia57@example.com",
        "noah25@example.com",
        "amelia68@example.com",
    ];


    const users = await Promise.all(usernames.map(async (username, index) => {

        return {
            username: username,
            password: passwords[index],
            first_name: first_names[index],
            last_name: last_names[index],
            role: "user",
            email: emails[index]
        };
    }));


    try {
        // console.log(users)
        await User.deleteMany({})
        const result = await User.insertMany(users);
        console.log('Users seeded successfully: ', users.length);
    } catch (error) {
        console.log('Error seeding users: ', error);
    }
};

module.exports = seedUsers;
