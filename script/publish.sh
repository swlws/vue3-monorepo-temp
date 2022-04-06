# !/bin/bash

root_path=$(pwd)
complie_dir=${root_path}/dist
publish_dir=${root_path}/../complie-clients
project_names=$(ls ${complie_dir})

echo " Clear Previous Version"
for name in ${project_names}
do
  if [ -d "${publish_dir}/${name}" ]; then
    cd "${publish_dir}/${name}"  
    rm -rf ./* 
    svn st | awk '{if ($1 == "!") {print $2}}' | xargs svn rm
    svn commit -m "[ ${name} ] delete previous version" 
  else
    echo "Dir '${publish_dir}/${name}' Not Exist"
    exit
  fi
done

echo "\n Begining Zip Files"
for name in ${project_names}
do
  client_origin="${root_path}/packages/${name}"
  client_dist="${complie_dir}/${name}"
  cp "${client_origin}/package.json" "${client_origin}/CHANGELOG.md" ${client_dist}
  cd ${client_dist} && zip -r "../${name}.zip" *
done

echo "\n Move Zip File To Publish Dir And Unzip"
mv -f ${complie_dir}/*.zip ${publish_dir}
for name in ${project_names}
do
  unzip -o ${publish_dir}/${name}.zip -d ${publish_dir}/${name}
done
rm -rf ${publish_dir}/*.zip 

echo "\n Commit To Svn"
for name in ${project_names}
do
  cd ${publish_dir}/${name}
  svn st | awk '{if ($1 == "?") {print $2} }' | xargs svn add
  svn commit -m "[ ${name} ] publish latest version"  
done

