import type {
  DefaultRuleGroupType,

} from '../../types/index.noReact';
import { parseMongoDB } from './parseMongoDB';

const emptyRuleGroup: DefaultRuleGroupType = { combinator: 'and', rules: [] };

describe('自定义测试', () => {
  it("$sort operator", () => {
    const res = parseMongoDB({"$and":[{"limit":50},{"day.close":{"$sort":1}}]});
    console.log(res);
  })
});