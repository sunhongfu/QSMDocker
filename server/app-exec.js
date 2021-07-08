const sh = require('child_process').exec;

const express = require('express');
const fs = require('fs');
const cors = require('cors')
const path = require('path')
const { 
    notFound,
    errorHandler,
} = require('./middleware/errorHandler')
const siemens3tRoute = require('./routes/siemens3t')

// express app
const app = express();

// register view engine
// app.set('view engine', 'ejs');

// body parser
app.use(express.json());
app.use(express.urlencoded());
// cross origin
app.use(cors())
app.use('/public', express.static(path.join(__dirname, '/public')))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    next();
});

// routes
app.use('/api', siemens3tRoute)

// index page
app.get('/', (req, res)=> {
    res.sendFile('./index.html', {root: __dirname});
})

// app.post('/magic', async (req, res) => {
//     // extract options chosen by user
//     const { options } = req.body
//     const optionsString = JSON.stringify(options)
    
//     // store .json file later for .m to read in as params
//     const fileName = options.uid
//     const jsonFilePath = 'C:/Users/MSI/Desktop/thesis_test/' + fileName
//     await fs.writeFileSync(`${jsonFilePath}.json`, optionsString)
//     // fs.writeFile(`${jsonFilePath}.json`, optionsString, (err) => {
//     //     if(err) return console.log(err)
//     //     // execute codes here
//     //     console.log("The json file was saved!");
//     // })

//     sh(`sh C:/Users/MSI/Desktop/thesis_test/mymagic/for_redistribution_files_only/run_mymagic.sh D:/m_runtime/v97 ${jsonFilePath}`, (error, stdout, stderr) => {
//         if (error !== null) {
//             console.log(`exec error: ${error}`);
//         } else {
//             var result = fs.readFileSync(`${jsonFilePath}.txt`, {encoding:'utf8', flag:'r'})
//             res.json({result})
//         }
//     });
// })

app.post('/write-json', (req, res) => {
    const { options } = req.body
    const optionsString = JSON.stringify(options)
    fs.writeFile(`C:/Users/MSI/Desktop/thesis_test/${options.uid}.json`, optionsString, (err) => {
        if(err) return console.log(err)
        // execute codes here
        console.log("The file was saved!");
    })
})

// app.use(notFound)
// app.use(errorHandler)

// listen to port 5001
app.listen(5001, console.log(`Server running in port 5001`));

//
// const child = spawn('pwd');
// child.on('exit', function (code, signal) {
//     console.log('child process exited with ' +
//                 `code ${code} and signal ${signal}`);
//   });

//   child.stdout.on('data', (data) => {
//     console.log(`child stdout:\n${data}`);
//   });
  
//   child.stderr.on('data', (data) => {
//     console.error(`child stderr:\n${data}`);
//   });
