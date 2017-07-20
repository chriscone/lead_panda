echo "start getting bootstrapped..."

echo "loading dependencies"
npm install

echo "executing unit test"
npm test

echo "end bootstrapping"

echo "success!"

git clone https://github.com/chriscone/lead_panda.git C:\User\wasadmin\Desktop\lead_panda
cd C:\User\wasadmin\Desktop\lead_panda
sh boostrap.sh