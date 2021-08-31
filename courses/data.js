window.userData = {
    courseTitle: "机器学习",
    courseSubTitle: "Machine Learning",
    courseIntroduction: "随着信息技术的快速发展，人类生产生活中产生了海量的数据。分析和挖掘数据中的潜在模式以及客观规律，对于提升生活质量，生产效率具有重要的意义。\n" +
        "本课程主要讲述数据挖掘相关的基本概念，经典任务，前沿技术以及在实际生产生活中的应用。学习本课程有望在掌握数据挖掘相关知识的同时也培养相关的实践动手能力。",
    notifications: [{
        content: '课程通知内容',
        level: 'info'
    }, {
        content: '课程通知内容',
        level: 'warning'
    }, {
        content: '课程通知内容',
        level: 'success'
    }, {
        content: '交**作业**了[提交地址](http://github.com)',
        level: 'danger'
    }],
    avatarGroup: [{
        groupName: "任课老师",
        members: [{
            url: 'http://web.stanford.edu/class/cs224w/images/Jure.jpg',
            name: '名字'
        }]
    }, {
        groupName: "助教",
        members: [{
            url: 'http://web.stanford.edu/class/cs224w/images/Jure.jpg',
            name: '名字'
        }, {
            url: 'http://web.stanford.edu/class/cs224w/images/Jure.jpg',
            name: '名字'
        }, {
            url: 'http://web.stanford.edu/class/cs224w/images/Jure.jpg',
            name: '名字'
        }, {
            url: 'http://web.stanford.edu/class/cs224w/images/Jure.jpg',
            name: '名字'
        }]
    },
    ],
    sections: [{
        title: '课程信息',
        navTitle: '课程信息', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: '准备知识',
            contents: ["选择此课程的同学建议具备以下知识：",
                ["1. 计算机科学与技术基础知识", "2. 线性代数基础", "3. 概率论基础", "4. Python / Matlab 基础代码能力"]]
        }, {
            title: '参考书目',
            contents: [["1.《数据挖掘 概念与技术》，机械工业出版社，2012", "2. 《统计学习方法》，清华大学出版社，2019", "3. 《数据可视化》，陈为等著，电子工业出版社，2019", "4. 《大数据平台异常检测分析的若干关键技术研究》，肖如良编著，电子工业出版社，2020",
                "5. 《深入浅出图神经网络:GNN 原理解析》，刘忠雨，李彦霖，周洋编著，机械工业出版社，2020"]]
        }]
    },
        {
            title: '课程大纲',
            navTitle: '课程大纲', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
            tableData: { // 删除该字段，则不显示表格
                heads: ['时间', '课程内容', '课程概述', '课程PPT'],
                rows: [['**数据项1-1**', '数据项1-2', '数据项1-3', '[第一周课件下载](./resources/机器学习(一)：5分钟理解机器学习并上手实践 - CaiYongji - 博客园.pdf)'],
                    ['数据项2-1', '数据项2-2', '数据项2-3', '[第二周通读 github.com](https://github.com)']]
            }
        },
        {
            title: 'Frequently Asked Questions',
            navTitle: "FAQ",
            textItems: [{
                contents: ["**Q**: What are the prerequisites for the course?",
                    "**A**: [Google](https://google.com)"],
            }],
        }]
}