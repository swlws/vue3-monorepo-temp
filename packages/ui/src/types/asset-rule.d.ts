// ------------------------------------------------------
// SDS、ST两个工程共用资产规则配置的TS声明
// ------------------------------------------------------

export type TRegexp = {
  pattern: string;
  mode: string;
  /**
   * 指定组
   * 指定匹配结果是哪个组，若正则没有分组或分组未匹配，则为匹配到的全部内容
   */
  index: number;
  i: boolean;
  // m: boolean;
  // g: boolean;
};

/**
 * 资产识别规则
 * 根据采集的各类资产数据判断是此资产的规则，可以使用多个数据来源，每一个数据来源可以使用多个匹配规则，一条规则命中就会识别为此资产
 */
export type TDetector = {
  keyname: string; //数据来源
  value: TRegexp[]; //匹配规则
};

/**
 * 识别规则例外
 * 根据采集的各类资产数据判断不是此资产的规则，可以使用多个数据来源，每一个数据来源可以使用多个匹配规则，一条规则命中就会识别为不是此资产，优先级高于资产识别规则
 */
export type TExclude = {
  keyname: string; //数据来源
  value: TRegexp[]; //匹配规则
};

/**
 * 资产详情分析规则
 * 对资产的安装路径、配置路径、可执行文件路径等信息进行分析
 */
export type TMatcher = {
  /**
   * 数据获取
   * 进行资产详情分析的数据来源
   */
  src: {
    /**
     * 获取方式
     * ref 引用：已采集到的资产数据
     */
    type: 'ref';
    keyname: string; // 数据来源
  };
  /**
   * 分析方式
   * 对安装路径、配置路径等信息的分析规则
   */
  dest: {
    /**
     * 分析方式
     * ref 引用：直接使用已采集到的资产数据，在表达式中使用时用${src}表示
     * regexp 正则表达式：对已采集到的数据进行正则匹配
     */
    type: 'ref' | 'regexp';
    keyname: string; //分析结果归属
    value: string | TRegexp[]; //表达式 | 匹配规则
  };
};

export type TConfig = {
  /**
   * 识别规则逻辑运算
   * 对每一个数据来源命中结果的逻辑运算，或运算表示一条匹配规则命中即可，与运算表示每个数据来源都要有至少一条匹配规则命中
   * and:与运算， or: 或运算
   */
  logic: 'and' | 'or';
  platform: 'common' | 'linux' | 'windows'; // 平台
  detector: TDetector[];
  exclude: TExclude[];
  matcher: TMatcher[];
};

/**
 * 资产清点-规则配置
 */
export type TAssetRule = {
  _id: string;
  asset_name: string;
  asset_category: string[];
  rule: {
    type: 'pkg' | 'svc' | 'pro';
    cfg: TConfig[];
  }[];
  create_time: string; // 创建时间
  last_update_time: string; // 更新时间
  internal: boolean; // true为内置；false为非内置
};
