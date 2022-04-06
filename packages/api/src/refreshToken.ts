import { useStorage, useEnv } from '@web/core';
const { getAppName } = useEnv;

function refreshToken() {
  const { setValue } = useStorage(getAppName());

  // setValue("token", {
  //   access_token: "xxx",
  // });
}

export default refreshToken;
