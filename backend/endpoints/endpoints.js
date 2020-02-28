// Node.js server
const {deleteEducation} = require("../db/Objects/EducationFunc");
const {getEducation} = require("../db/Objects/EducationFunc");
const {createEducation} = require("../db/Objects/EducationFunc");
const {getProut} = require("../db/Objects/Prout");
const {createProut} = require("../db/Objects/Prout");
const {endpoints} = require('@wildcard-api/server');

endpoints.myFirstEndpoint = async function () {
    // The `this` object is the `context` object we defined in `getContext`.
   // console.log('The logged-in user is: ', this.user.username);
    const a = await getProut();
    const b = a.map(a => { return {test1 : a.test1,test2: a.test2}})
    console.log("damdam", a);
    return {msg: 'Hello, from my first Wildcard endpoint'};
};



endpoints.writingEndpoint = async function () {
    const a = await createEducation();
    return a;
};

endpoints.getEducationObject = async function () {
    const education = await getEducation();
    console.log("education", education);
    return education;
};

endpoints.deleteEducationObject = async function (id) {
    console.log('id', id);
    const education = await deleteEducation(id);
    console.log("education", education);
    return education;
};

