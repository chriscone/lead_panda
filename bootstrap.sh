NEW_DIR="C:\User\wasadmin\Desktop\lead_panda"
NEW_DIR_NAME="lead_panda"
OLD_DIR=""

echo "start getting bootstrapped..."

echo "creating new directory on the desktop"
mkdir $NEW_DIR

echo "moving files to the new directory"
cp . $NEW_DIR

pwd >> OLD_DIR

echo "pwd"
pwd

echo "old dir"
$OLD_DIR

echo "navigate to new directory"
cd  $NEW_DIR

echo "clean up the git clone dir"
#rm -R OLD_DIR

echo "loading dependencies"
npm install

echo "executing test"
npm test

echo "end bootstrapping"