VERSION=v6.4.0;

# Creates directory for downloads, and downloads node
cd ~/ && mkdir temp && cd temp;
wget https://nodejs.org/dist/v6.4.0/node-v6.4.0-linux-armv6l.tar.gz;

wget https://nodejs.org/dist/v6.4.0/node-v6.4.0-linux-x64.tar.gz
tar -xzf node-v6.4.0-linux-x64.tar.gz;
sudo rm node-v6.4.0-linux-x64.tar.gz;
sudo mv node-v6.4.0-linux-x64 /opt/nodejs/;

tar -xzf node-v6.4.0-linux-armv6l.tar.gz;
# Remove the tar after extracing it.
sudo rm node-v6.4.0-linux-armv6l.tar.gz;
# This line will clear existing nodejs
sudo rm -rf /opt/nodejs;
# This next line will copy Node over to the appropriate folder.
sudo mv node-v6.4.0-linux-armv6l /opt/nodejs/;
# Remove existing symlinks
sudo unlink /usr/bin/node;
sudo unlink /usr/sbin/node;
sudo unlink /sbin/node;
sudo unlink /usr/local/bin/node;
sudo unlink /usr/bin/npm;
sudo unlink /usr/sbin/npm;
sudo unlink /sbin/npm;
sudo unlink /usr/local/bin/npm;
# Create symlinks to node && npm/op 
sudo ln -s /opt/nodejs/bin/node /usr/bin/node;
sudo ln -s /opt/nodejs/bin/node /usr/sbin/node;
sudo ln -s /opt/nodejs/bin/node /sbin/node;
sudo ln -s /opt/nodejs/bin/node /usr/local/bin/node;
sudo ln -s /opt/nodejs/bin/npm /usr/bin/npm;
sudo ln -s /opt/nodejs/bin/npm /usr/sbin/npm;
sudo ln -s /opt/nodejs/bin/npm /sbin/npm;
sudo ln -s /opt/nodejs/bin/npm /usr/local/bin/npm;


#sudo sed -i.bak "1i#\!/bin/sh \-e\nnode /home/pi/nextion/bin/index.js 2> /home/pi/nextion/errorOutput.log > /home/pi/nextion/output.log &" /etc/rc.local

npm install -G babel-polyfill pngjs pushbullet request-promise-native serialport sharp three debug

node /home/pi/nextion/bin/index.js 2> /home/pi/nextion/errorOutput.log > /home/pi/nextion/output.log
git pull origin master