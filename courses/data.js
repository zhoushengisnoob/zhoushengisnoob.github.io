window.userData = {
    courseTitle: "数据挖掘与应用",
    courseSubTitle: "Data Mining and Application",
    courseIntroduction: "随着信息技术的快速发展，人类生产生活中产生了海量的数据。分析和挖掘数据中的潜在模式以及客观规律，对于提升生活质量，生产效率具有重要的意义。\n" +
        "本课程主要讲述数据挖掘相关的基本概念，经典任务，前沿技术以及在实际生产生活中的应用。学习本课程有望在掌握数据挖掘相关知识的同时也培养相关的实践动手能力。",
    notifications: [
    // {
    //     content: '第二次课将在2021.09.26授课',
    //     level: 'info'
    // }
        // , {
        //     content: '课程通知内容',
        //     level: 'warning'
        // }, {
        //     content: '课程通知内容',
        //     level: 'success'
        // }, {
        //     content: '交**作业**了[提交地址](http://github.com)',
        //     level: 'danger'
        // }
    ],
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: './resources/zhousheng.png',
            name: '[周晟](https://zhoushengisnoob.github.io/)'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: './resources/zhuonan.jpg',
            name: '[郑卓男](https://github.com/zfx233)'
        }, {
            url: './resources/huwei.jpg',
            name: '[胡伟](https://github.com/X4tar)'
        }, {
            url: './resources/xhj.jpg',
            name: '[徐鸿嘉](https://github.com/Frostland12138)'
        }]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: '准备知识',
            contents: ["选择此课程的同学建议具备以下知识：",
                ["1. 计算机科学与技术基础知识", "2. 线性代数基础", "3. 概率论基础", "4. Python / Matlab 基础代码能力"],
                "课程第一周将详细介绍具体的准备知识要求"]
        }, {
            title: '参考书目',
            contents: [["1.《数据挖掘 概念与技术》，机械工业出版社，2012", "2. 《统计学习方法》，清华大学出版社，2019", "3. 《数据可视化》，陈为等著，电子工业出版社，2019", "4. 《大数据平台异常检测分析的若干关键技术研究》，肖如良编著，电子工业出版社，2020",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            textItems: [{
                title: "课程PPT将在授课后一天更新"
            }],
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['2021-09-16', '数据挖掘与应用简介', '介绍课程的主要内容，形式，要求', ' <a href="./resources/DMCourse_1.pdf" target="_blank">DMCourse_1.pdf</a> '],
                    // ['2021-09-23', '数据预处理技术', '介绍数据采集与数据预处理技术，包括数据清洗，归约与变换', ''],
                    ['2021-09-26', '数据分类技术', '介绍常见的数据分类技术和回归任务，包括决策树、线性回归、线性判别、初探SVM', ' <a href="./resources/DMCourse_2.pdf" target="_blank">DMCourse_2.pdf</a> '],
                    ['2021-09-30', '数据分类技术2', '介绍贝叶斯分类器、深入理解SVM','<a href="./resources/DMCourse_3.pdf" target="_blank">DMCourse_3.pdf</a> <a href="./resources/titanic.zip" target="_blank">titanic.zip</a>'],
                    ['2021-10-14', '数据聚类技术', '介绍常见的聚类检测技术和指标，包括Kmeans改进版、谱聚类、层次聚类、高斯混合模型聚类、DBSCAN聚类等技术', '<a href="./resources/DMCourse_4.pdf" target="_blank">DMCourse_4.pdf</a>'],
                    ['2021-10-21', '深度聚类', '介绍常见的深度聚类技术，如嵌入式聚类系列、对比聚类系列、伪标签系列等，以及基于聚类的表征学习和其他数据类型的聚类。', '<a href="./resources/DMCourse_5.pdf" target="_blank">DMCourse_5.pdf</a>'],
                    ['', '图数据挖掘技术', '介绍常见的图数据挖掘技术，包括图神经网络，节点分类，图分类等技术', ''],
                    ['', '数据挖掘的工业应用 ', '介绍数据挖掘在工业系统中的应用，包括推荐系统，检索系统和电子商务等', '']]
            }
        },
        {
            title: '常见问题',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**：本课程的考核形式是什么?",
                    "**A**：课程将设置随堂测试(3*10%) + 期末报告(70%)",
                    "**Q**：本课程如何考勤？",
                    "**A**：本课程不单独设置考勤，以随堂测试为准",
                    "**Q**：课程是否安排答疑？",
                    "**A**：老师和助教将在钉钉群内答疑"
                ]
            }],
        }]
}