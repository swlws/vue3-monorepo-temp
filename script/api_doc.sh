#/bin/bash

# 遍历/packages/api/src下的目录文件，对应生成api文档

curr_dir=$(pwd)
api_dir=${curr_dir}/packages/api/src

for name in $(ls ${api_dir})
do
  if [ -d "${api_dir}/${name}" ]; then
    echo "\n${name}"
    apidoc -i ${api_dir}/${name} -o api-doc/${name} 
  fi
done