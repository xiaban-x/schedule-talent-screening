import generateUsername from "@/app/_utils/generateUsername";

const titles = [
    "不神化“3天不油”人肉测评！宣称没翻车",
    '我富布！它就是古希腊掌管橄榄的神！',
    '九敏！到底哪瓶才是古希腊掌管高质量的神？',
    '爆改油头女大都靠它！喝油大师实锤了！',
    '学生党平价化妆品推荐！测评不踩雷',
    '深扒！这些网红护肤品真的有效吗？',
    '夏季防晒大作战！这几款防晒霜强烈推荐',
    '日常护肤误区，你中招了吗？',
    '超A穿搭！这个秋冬必备的时尚单品',
    '瘦身饮食指南！教你科学减肥不反弹',
    '我的护发神器大公开！洗完头发顺滑到不行',
    '年度最火口红试色！哪个颜色最显白？',
    '眼妆教程！初学者必学的4款妆容',
    '从头到脚！夏季美白秘籍全揭秘',
    '熬夜党福音！这几款面膜让我起床超有精神',
    '日系风温柔穿搭，男朋友看了都夸好看',
    '这些平价好物，真的买了不后悔',
    '3分钟搞定懒人早餐！美味又健康',
    '深夜护肤日记，这款精华救了我的痘痘肌',
    '我试了10款平价香水，这几款你一定要试试',
    '减脂餐也可以很好吃！分享我的健康食谱',
    '打造素颜感底妆！这款粉底液遮瑕又轻薄',
    '原来大牌也有平替！省钱攻略了解一下',
    '职场小白如何穿出气场？时尚穿搭指南',
    '探店分享！这家咖啡馆颜值与口感并存',
    '我的清洁神器！用了它后再也不怕堵毛孔',
    '极简风穿搭攻略，教你如何越简单越高级',
    '换季护肤大作战！皮肤干燥用什么最好？',
    '出门必备！这些小物品让旅行更方便',
    '超详细化妆刷使用教程，新手必看！'
]
const contentCreationData = new Array(41241).fill(0).map((_, index) => {
    return {
        key: index + 1,
        image: `/数据大屏材料/素人头像/pic (${index % 30 + 1}).jpg`,
        user: generateUsername(),
        totalMoney: `￥${Math.floor(Math.random() * 96458)}`,
        title: titles[Math.floor(Math.random() * titles.length)],
        completionRate: `${(Math.random() * 100).toFixed(2)}%`,
        likes: `${(Math.random() * 9).toFixed(2)}w`,
        comments: `${(Math.random() * 12).toFixed(2)}w`,
        purchaseRate: `${(Math.random() * 70).toFixed(2)}%`,
    }
})

const contentCreationDetailData = new Array(90).fill(0).map((_, index) => {
    return {
        id: index + 1,
        userId: Math.floor(Math.random() * 9000000000 + 1000000000),
        viewingDuration: Math.floor(Math.random() * 30),
        purchaseQuantity: Math.floor(Math.random() * 20),
    }
})
export {
    contentCreationData,
    contentCreationDetailData,
}