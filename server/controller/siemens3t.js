const fs = require('fs');
const sh = require('child_process').exec

//const DEFAULT_ROOT = "/home/zhw/Desktop/thesis_test/"
const DEFAULT_ROOT_DOCKER = '/usr/local/nodeapp/'
const path_mag = '/usr/local/nodeapp/DICOMs/swi_1mm_5TE_prisma4_r3_6'
const path_ph = '/usr/local/nodeapp/DICOMs/swi_1mm_5TE_prisma4_r3_7'
const path_out = '/usr/local/nodeapp/DICOMs/path_out'

exports.magic = async (req, res) => {
    try {
        console.log('receving args')

        const { options } = req.body
        const optionsString = JSON.stringify(options)

        // store .json file later for .m to read in as params
        const fileName = options.uid
        const jsonFilePath = DEFAULT_ROOT_DOCKER + fileName
        await fs.writeFileSync(`${jsonFilePath}.json`, optionsString)
        // fs.writeFile(`${jsonFilePath}.json`, optionsString, (err) => {
        //     if(err) return console.log(err)
        //     // execute codes here
        console.log("The json file was saved!");
        // })
        const runtime_root = "/usr/local/MATLAB/MATLAB_Runtime/v96"
        const runtime_root_docker = "/usr/local/MATLAB/MATLAB_Runtime/v96"

        sh(`${DEFAULT_ROOT_DOCKER}deploy_folder/run_qsm_r2s_prisma_docker.sh ${runtime_root} ${path_mag} ${path_ph} ${jsonFilePath} ${path_out} >/usr/local/nodeapp/matlabout.txt 2>/usr/local/nodeapp/matlaboerr.txt`, (error, stdout, stderr) => {
            console.log("hongfu testing outputs")
            console.log(stdout)
            if (error !== null) {
                console.log(`exec error: ${error}`);
            } else {
                // var result = fs.readFileSync(`${jsonFilePath}.txt`, { encoding: 'utf8', flag: 'r' })
                res.json({ path_out })
            }
        });
    } catch (error) {
        // error handle
        console.log('qsm standalone execution error!')
        return res.status(400).send('QSM processing failed in server')
    }
}

exports.siemens3T = async (req, res) => {
    try {
        console.log('receving args')

        const { options } = req.body
        const optionsString = JSON.stringify(options)

        // store .json file later for .m to read in as params
        const fileName = options.uid
        const jsonFilePath = DEFAULT_ROOT_DOCKER + fileName
        await fs.writeFileSync(`${jsonFilePath}.json`, optionsString)
        // fs.writeFile(`${jsonFilePath}.json`, optionsString, (err) => {
        //     if(err) return console.log(err)
        //     // execute codes here
        //     console.log("The json file was saved!");
        // })
        const runtime_root = "/usr/local/MATLAB/MATLAB_Runtime/v96"
        const runtime_root_docker = "/usr/local/MATLAB/MATLAB_Runtime/v96"

        sh(`sudo sh ${DEFAULT_ROOT_DOCKER}mymagic2/for_redistribution_files_only/run_mymagic.sh ${runtime_root_docker} ${jsonFilePath}`, (error, stdout, stderr) => {
            if (error !== null) {
                console.log(`exec error: ${error}`);
            } else {
                var result = fs.readFileSync(`${jsonFilePath}.txt`, { encoding: 'utf8', flag: 'r' })
                res.json({ result })
            }
        });
    } catch (error) {
        // error handle
        return res.status(400).send('QSM processing failed in server')
        console.log('error!!!!!!!!!!!!!!!')
    }
}

