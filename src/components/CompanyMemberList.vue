<template>
  <div>
    <el-link @click="returnHelloWorld()" type="primary" style="margin-left: -98%;margin-bottom: 1%">返回</el-link>
    <el-table
      :data="tableData"
      border
      height="774px"
      style="width: 100%;">
      <el-table-column
        prop="id"
        label="ID"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="90">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="230">
      </el-table-column>
      <el-table-column
        prop="group"
        label="组别"
        width="50">
      </el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="onTheJob"
        label="在职状态"
        width="180" :formatter="formatterOnTheJob">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CompanyMemberList",
  data(){
    return{
      tableData: [
        {
          "id": 1,
          "name": "周阗",
          "phone": "13550552702",
          "email": "1",
          "group": 2,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市成华区万年场(街道/镇)鲁能城一期5-2505"
        },
        {
          "id": 2,
          "name": "谢杰",
          "phone": "17765322520",
          "email": "1",
          "group": 1,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市温江区百信路188号(街道/镇)明信仕林府15栋2804"
        },
        {
          "id": 3,
          "name": "宋相吉",
          "phone": "18782402756",
          "email": "1",
          "group": 5,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市双流区华府大道三段869号(街道/镇)万锦城3栋2801号"
        },
        {
          "id": 4,
          "name": "米兵",
          "phone": "15608216607",
          "email": "1",
          "group": 2,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市龙泉驿区西河镇(街道/镇)招商依云上城一期4栋一单元3402号"
        },
        {
          "id": 5,
          "name": "廖乾助",
          "phone": "19138963169",
          "email": "1",
          "group": 1,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市武侯区和顺路(街道/镇)清河小区"
        },
        {
          "id": 6,
          "name": "汤亚萍",
          "phone": "18780338135",
          "email": "1",
          "group": 2,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市双流区剑南大道南段(街道/镇)骑龙家园二期2栋3单元"
        },
        {
          "id": 7,
          "name": "黄梁枭",
          "phone": "15281026785",
          "email": "huangliangxiao@yitong.com.cn",
          "group": null,
          "position": "4",
          "onTheJob": true,
          "address": "四川省成都市高新区中和(街道/镇)仁和路480号1栋2201号"
        },
        {
          "id": 8,
          "name": "王寅澄",
          "phone": "18980478817",
          "email": "wangyincheng@yitong.com.cn",
          "group": null,
          "position": "0,2",
          "onTheJob": true,
          "address": "四川省成都市成华区二仙桥街道(街道/镇)民兴北二路蓝润V客尚东1期"
        },
        {
          "id": 9,
          "name": "唐波",
          "phone": "13548430993",
          "email": "1",
          "group": 1,
          "position": "5",
          "onTheJob": true,
          "address": "四川省成都市武侯区玉林街道(街道/镇)玉洁东街2号院8栋1单元101"
        },
        {
          "id": 10,
          "name": "赵瑶",
          "phone": "17340174181",
          "email": "1",
          "group": 3,
          "position": "5",
          "onTheJob": true,
          "address": "四川省成都市双流区华西下街202号(街道/镇)广都花园3-3-13"
        },
        {
          "id": 11,
          "name": "施长瑞",
          "phone": "17621687058",
          "email": "1",
          "group": 2,
          "position": "5",
          "onTheJob": true,
          "address": "四川省成都市武侯区华兴街道(街道/镇)蓝光金悦城7-1-1703"
        },
        {
          "id": 12,
          "name": "黄子昂",
          "phone": "18108120386",
          "email": "1",
          "group": 6,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市天府新区梓州大道3139号(街道/镇)万科海悦汇城东区9-4206"
        },
        {
          "id": 13,
          "name": "唐君发",
          "phone": "13880499159",
          "email": "1",
          "group": 3,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市金牛区驷马桥街道(街道/镇)二环路北四段89号1819"
        },
        {
          "id": 14,
          "name": "王忠海",
          "phone": "17311308650",
          "email": "1",
          "group": 3,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市锦江区成龙路街道(街道/镇)海桐三期"
        },
        {
          "id": 15,
          "name": "宋敏",
          "phone": "18202817250",
          "email": "1",
          "group": 4,
          "position": "5",
          "onTheJob": true,
          "address": "四川省成都市武侯区肖家河街道(街道/镇)兴蓉街10号 佳利花园三期3单元"
        },
        {
          "id": 16,
          "name": "李磊",
          "phone": "14780401015",
          "email": "1",
          "group": 1,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市高新区中和(街道/镇)中德英伦联邦b区503"
        },
        {
          "id": 17,
          "name": "牟继攀",
          "phone": "13980361642",
          "email": "1",
          "group": 4,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市高新区中和镇中和大道(街道/镇)领馆区1号"
        },
        {
          "id": 18,
          "name": "万姝伶",
          "phone": "18280706061",
          "email": "1",
          "group": 6,
          "position": "3,5",
          "onTheJob": true,
          "address": "四川省成都市高新区老成仁路(街道/镇)育才竹岛"
        },
        {
          "id": 19,
          "name": "李常林",
          "phone": "17602847443",
          "email": "1",
          "group": 5,
          "position": "5",
          "onTheJob": true,
          "address": "四川省成都市双流区协和街道(街道/镇)骑龙家园二期"
        },
        {
          "id": 20,
          "name": "唐智林",
          "phone": "18226629710",
          "email": "1",
          "group": 4,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市龙泉驿区龙泉街道(街道/镇)果壳里的城"
        },
        {
          "id": 21,
          "name": "薛佳咪",
          "phone": "15208272725",
          "email": "1",
          "group": 1,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市双流区东升街道(街道/镇)航港路33号"
        },
        {
          "id": 22,
          "name": "罗静",
          "phone": "15680261580",
          "email": "luojing1@yitong.com.cn",
          "group": 5,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市天府新区华阳(街道/镇)华阳大道三段34号"
        },
        {
          "id": 23,
          "name": "韩佳",
          "phone": "18384556907",
          "email": "hanjia@yitong.com.cn",
          "group": 4,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市双流区东寺北二路(街道/镇)怡馨家园10栋一单元201"
        },
        {
          "id": 25,
          "name": "梁琪涔",
          "phone": "13668234387",
          "email": "liangqicen@yitong.com.cn",
          "group": 5,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市温江区柳城街道(街道/镇)德通桥路99号格澜威尔2栋3单元"
        },
        {
          "id": 26,
          "name": "刘建国",
          "phone": "18200487980",
          "email": "liujianguo@yitong.com.cn",
          "group": 4,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市双流区怡心街道(街道/镇)美城云庭2栋2单元704"
        },
        {
          "id": 27,
          "name": "冉意康",
          "phone": "13547180017",
          "email": "ranyikang@yitong.com.cn",
          "group": 4,
          "position": "5",
          "onTheJob": true,
          "address": "四川省成都市双流区怡心(街道/镇)中海右岸一期33栋1302"
        },
        {
          "id": 28,
          "name": "严坤",
          "phone": "18116758782",
          "email": "1",
          "group": 3,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市双流区华阳南湖西路(街道/镇)南湖锦苑2栋"
        },
        {
          "id": 29,
          "name": "宣凯",
          "phone": "17628042501",
          "email": "1",
          "group": 6,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市武侯区火车南站街道(街道/镇)科华中路193号院"
        },
        {
          "id": 30,
          "name": "唐元东",
          "phone": "18428035326",
          "email": "1",
          "group": 6,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市天府新区华阳街道(街道/镇)蓝岸丽景"
        },
        {
          "id": 31,
          "name": "满仲达",
          "phone": "13366461146",
          "email": "1",
          "group": 6,
          "position": "1",
          "onTheJob": true,
          "address": "四川省成都市高新区中和街道(街道/镇)红树湾二期"
        }
      ]
    }
  },
  methods:{
    formatterOnTheJob(row, column, cellValue, index){
        if (cellValue){
          return "在职";
        }else {
          return "离职";
        }
    },
    returnHelloWorld(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
