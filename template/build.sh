target=$1

function run {
  npm install
  npm run build -- --target=$target
}

if [ -d node_modules ];
then
  # Try running, if it fails then clear node modules and try again
  run || {
    rm -rf node_modules
    run
  }
else
  # Node modules was not installed in the first place, so don't bother
  # trying to reinstall
  run
fi
