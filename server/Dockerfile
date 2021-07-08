FROM ubuntu:latest

# ubuntu install basic tools
RUN apt update && apt install -y \ 
    wget \
    python \
    unzip \
    curl \
    sudo \
    libxt6 \
    libxtst6 \
    libxrender1 \
    libxcomposite1

# download and install FSL
ENV PYTHONHTTPSVERIFY=0 
RUN wget --no-check-certificate https://fsl.fmrib.ox.ac.uk/fsldownloads/fslinstaller.py && python fslinstaller.py -d /usr/local/fsl -V 6.0.4 && rm -rf /usr/local/fsl/src

# install MATLAB runtime
COPY src/MATLAB_Runtime_R2019a_Update_9_glnxa64.zip /usr/local/
RUN cd  /usr/local && \
    unzip MATLAB_Runtime_R2019a_Update_9_glnxa64.zip && \
    rm MATLAB_Runtime_R2019a_Update_9_glnxa64.zip && \
    ./install -mode silent -agreeToLicense yes

# install/copy 3DSRNCP program
RUN mkdir /root/bin
COPY src/3DSRNCP /root/bin/

# install nodejs and npm
RUN curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN apt install -y nodejs

# setup MATLAB MCR environment
ENV MCR_CACHE_VERBOSE=true
ENV MCR_CACHE_ROOT=/tmp
ENV SHELL=/bin/bash
ENV MATLAB_SHELL=/bin/bash

# setup FSL environment
ENV FSLDIR=/usr/local/fsl
ENV PATH=$PATH:$FSLDIR/bin
ENV LD_LIBRARY_PATH=$FSLDIR/lib
ENV FSLOUTPUTTYPE=NIFTI_GZ

# port
EXPOSE 5000

# default cmd 
CMD ["/bin/bash"]














