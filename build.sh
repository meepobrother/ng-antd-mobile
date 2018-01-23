
#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf dist

$(npm bin)/ng-packagr -p src/app/antd-mobile/notice-bar/package.json
$(npm bin)/ng-packagr -p src/app/antd-mobile/package.json
