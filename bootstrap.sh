echo "start getting bootstrapped..."

echo "loading dependencies"
npm install

echo "executing unit test"
npm test

echo "end bootstrapping"

echo "success!"