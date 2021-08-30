window.userData = {
    courseTitle: "机器学习",
    courseSubTitle: "**课程子标题**",
    courseIntroducion:"AlphaGo退役了，它赢了柯洁，也战胜了围棋五虎上将，标志着人工智能算法达到了新的高度，人工智能、深度学习、机器学习等话题也上了大家的餐桌，成了茶余饭后的谈资。本文将紧接上一讲《比你更了解你，浅谈用户画像》，我们来聊聊机器学习这个话题，本讲以入门介绍为主，技术介绍在后面的几讲展开。",
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
        title: '区块title',
        navTitle: '导航标题1', // 该字段会被自动收录到导航栏，删除该字段，则不会自动收录，相同的 navTitle 会跳转到相同的位置
        textItems: [{
            title: '区块普通文字条目标题',
            contents: ["普通文字条目普通段落内容1",
                ["列表1", "列表2", "列表3", "列表4"],
                "普通文字条目普通段落内容2",
                ["列表1", "列表2", "列表3", "列表4"],
            ],
        }],
        tableData: { // 删除该字段，则不显示表格
            heads: ['表头1', '表头2', '表头3', '表头4', '表头5'],
            rows: [['**数据项1-1**', '数据项1-2', '数据项1-3', '数据项1-4', '[第一周课件下载](./resources/机器学习(一)：5分钟理解机器学习并上手实践 - CaiYongji - 博客园.pdf)'],
                ['数据项2-1', '数据项2-2', '数据项2-3', '数据项2-4', '[第二周通读 github.com](https://github.com)']]
        }
    }, {
        title: 'Frequently Asked Questions',
        navTitle: "FAQ",
        textItems: [{
            contents: ["**Q**: What are the prerequisites for the course?",
                "**A**: [Google](https://google.com)"],
        }],
    }]
}