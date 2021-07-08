cd /Users/uqhsun8/code/QSMDocker/client
docker image build --no-cache --tag qsmclient:1.0 .

cd /Users/uqhsun8/code/QSMDocker/server
docker image build --no-cache --tag qsmserver:1.0 .

docker run -it --name qsmclient_container -p 80:80 qsmclient:1.0 # type http://localhost in browser

docker run -it --name qsmserver_container -p 5001:5001 -v "/Users/uqhsun8/code/QSMDocker/server":/usr/local/nodeapp/ qsmserver:1.0 
cd /usr/local/nodeapp/
npm install  
npm run dev


# compile below script in shell for MATLAB standalone
mkdir '/home/parallels/Desktop/Parallels Shared Folders/Home/code/QSMDocker/server/deploy_folder'
mcc -R -nodisplay -R -singleCompThread -m -v -w enable -d '/home/parallels/Desktop/Parallels Shared Folders/Home/code/QSMDocker/server/deploy_folder' '/home/parallels/Desktop/Parallels Shared Folders/Home/code/QSMDocker/server/src/qsm_r2s_prisma_docker.m' -a ~/Documents/MATLAB/QSM/Misc/NIFTI/make_nii.m ~/Documents/MATLAB/QSM/Misc/NIFTI/save_nii.m ~/Documents/MATLAB/functions/MEDI_toolbox/functions/_LBV/LBV.m ~/Documents/MATLAB/functions/2d_Phase_QSM/ball2D.p ~/Documents/MATLAB/functions/2d_Phase_QSM/fftnc.m ~/Documents/MATLAB/functions/2d_Phase_QSM/ifftnc.m ~/Documents/MATLAB/functions/2d_Phase_QSM/ScalingFactor.p ~/Documents/MATLAB/functions/2d_Phase_QSM/EstimateX0.p ~/Documents/MATLAB/functions/2d_Phase_QSM/ball3D.m /usr/local/MATLAB/R2019a/toolbox/images/images/imclose.m