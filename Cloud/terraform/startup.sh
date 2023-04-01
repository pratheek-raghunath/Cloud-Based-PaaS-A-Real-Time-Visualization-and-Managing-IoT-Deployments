sudo apt-get update
sudo apt-get install -y mosquitto
echo "allow_anonymous true" >> /etc/mosquitto/mosquitto.conf

#Install docker and docker-compose
# Install Docker
sudo apt install apt-transport-https ca-certificates curl software-properties-common gnupg lsb-release -y
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg --batch --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update -y
sudo apt install docker-ce nano -y

sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -L https://github.com/docker/compose/releases/download/v2.17.2/docker-compose-`uname -s`-`uname -m` -o /bin/docker-compose
sudo chmod +x /bin/docker-compose

#Clone repo
#git clone https://orensaldanha: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@github.com/orensaldanha/cloud-temp
git clone https://pratheek-raghunath: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@github.com/pratheek-raghunath/Cloud-based-Paas-Iot-Management-Deployment

#Install nginx
sudo apt install nginx
sudo ufw allow 'Nginx HTTP'
mv /Cloud-based-Paas-Iot-Management-Deployment/Cloud/terraform/orensaldanha.live /etc/nginx/sites-enabled/orensaldanha.live
sudo systemctl restart nginx 