NEW_DIR="C:\User\wasadmin\Desktop\lead_panda"
NEW_DIR_NAME="lead_panda"
OLD_DIR=""

echo "start getting bootstrapped..."

echo "loading dependencies"
npm install

echo "executing unit test"
npm test

echo "end bootstrapping"