var fs = require('fs');

//Criando arquivo com o file system

// fs
//     .writeFile('data.txt', 'Hello world from FETECNO', (err) => {
//         if (err){
//             throw err;
//         }
//     });

// Lendo arquivos

// fs
//     .readFile('data.txt', (err, data) => {
//         if (err){
//             throw err;
//         }
//
//         console.log(data.toString('utf8'));
//     });

fs
    .readdir('.', (err, files) => {
        if (err){
            throw err;
        }

        for (var file in files){
            console.log(files[file]);
        }
    });