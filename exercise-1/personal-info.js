/**
 * This file generates a file called `personal-info.json`
 * in the current working directory.
 * 
 * To run this file, enter the following command in the
 * terminal:
 * 
 *     node personal-info.js
 */

const fs = require('fs');

const data = {
    "id": 1,
    "name": {
        "firstName": "Tung Lam",
        "lastName": "Vu"
    },
    "dateOfBirth": {
        "year": 2004,
        "month": 2,
        "day": 5
    },
    "placeOfResidence": {
        "country": {
            "name": "Vietnam",
            "code": "vi_VN"
        },
        "city": {
            "name": "Hanoi",
            "postcode": 10000
        },
        "district": "Thanh Xuan"
    },
    "faculty": "FIT",
    "school": "UET",
    "university": "VNU",
    "class": "QH-2022-I/CQ-C-A-CLC4",
    "phone": "0123456789",
    "email": "lamvutung@example.com",
    "sports": [
        "chess",
        "badminton"
    ],
    "hobbies": [
        "computer programming"
    ]
};

const rawData = JSON.stringify(data);

fs.writeFileSync('personal-info.json', rawData);
