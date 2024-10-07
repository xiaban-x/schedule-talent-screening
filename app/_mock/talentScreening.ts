import generateUsername from "@/app/_utils/generateUsername";

const provinces = [
    "北京", "天津", "上海", "重庆",  // 直辖市
    "河北", "山西", "辽宁", "吉林", "黑龙江",  // 华北和东北
    "江苏", "浙江", "安徽", "福建", "江西", "山东",  // 华东
    "河南", "湖北", "湖南",  // 华中
    "广东", "广西", "海南",  // 华南
    "四川", "贵州", "云南", "西藏",  // 西南
    "陕西", "甘肃", "青海", "宁夏", "新疆",  // 西北
    "内蒙古",  // 华北
    "中国香港", "中国澳门", "中国台湾"  // 特别行政区
];

const talentScreeningLabels = ['vlog博主', '探店博主', '时尚博主', '运动博主', '颜值博主', '美妆博主']

const talentScreeningData = new Array(84121).fill(0).map((_, index) => {
    const notesNum = Math.floor(Math.random() * 2000);
    return {
        key: index + 1,
        image: `/数据大屏材料/素人头像/pic (${(index+5)%30 + 1}).jpg`,
        user: generateUsername(),
        notesNum: notesNum,
        newWorkNum: Math.floor(Math.random() * notesNum / 5),
        fansNum: `${(Math.random() * 100).toFixed(1)}w`,
        explosiveNum: Math.floor(Math.random() * notesNum / 2),
    }
})

export {
    provinces,
    talentScreeningLabels,
    talentScreeningData,
}