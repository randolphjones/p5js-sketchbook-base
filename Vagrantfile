Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty32"

  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update -y
    sudo apt-get upgrade -y
    sudo apt-get install nodejs -y
    sudo ln -s /usr/bin/nodejs /usr/bin/node
    sudo apt-get install npm -y
    sudo apt-get install git -y
    cd /vagrant/
    sudo npm install -no-bin-links
    sudo npm install -g forever
    sudo npm install -g bower
    bower install --allow-root
  SHELL

  config.vm.provision "shell", run: "always", inline: <<-SHELL
    cd /vagrant
    forever --uid "server" -a start server.js
    # node /vagrant/server
    echo server started
  SHELL
end
