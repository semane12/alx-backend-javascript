import asyncUploadUser from "./utils.js";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
