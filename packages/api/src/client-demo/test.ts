import { useEnv } from '@web/core';
const { getHttpBaseUrl } = useEnv;

const BASE_URL = getHttpBaseUrl();

export default {
  testGet: {
    url: `${BASE_URL}/test`,
    method: 'get',
  },
  testPost: {
    url: `${BASE_URL}/test`,
    method: 'post',
  },
  testDel: {
    url: `${BASE_URL}/test`,
    method: 'delete',
  },
  testPut: {
    url: `${BASE_URL}/test`,
    method: 'put',
  },
};
