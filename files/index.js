const research = [
  {
    researchTitle: 'Scalable Graph Learning', // 标题
    researchData: {
      // link: 'http://yangy.org/img/abnormal.jpg', // 插图链接,
      data: [
        'We make efforts from both model-centric and data-centric way. In the data-centric way, we are currently exploring the <b>Graph Condensation</b> task, which aims at learning a new graph that much smaller than the original one, while GNNs trained on the condensed graph can perform as well as the one trained on the original graph. In the model-centric way, we have broad interests including the <b>knowledge distillation</b> for lightweight GNNs and directly <b>optimize the GNNs</b> design for large scale graph.',
      ], // 详细内容（每个段落对应一个数据，文本内容中双引号前需加 \ 符号）
    },
    researchPapers: [
      {
        text: '[Graph Condensation Survey, Arxiv 2024]', // 引用文本
        link: '#test', // 引用链接
      },
      {
        text: '[Scalable Graph-based Recommendation, WWW 2024]', // 引用文本
        link: '#test', // 引用链接
      },
      {
        text: '[Dynamic Graph Pre-training, ICDE 2024]', // 引用文本
        link: '#test', // 引用链接
      },
    ],
    researchBenchmark: [],
  },
  {
    researchTitle: 'Robust Graph Learning', // 标题
    researchData: {
      // link: 'http://yangy.org/img/abnormal.jpg', // 插图链接,
      data: [
        'We make efforts from both model-centric and data-centric way. In the data-centric way, we are currently exploring the <b>Graph Structure Learning</b> task, which aims at update/denoise the observed graph so that GNNs trained on the revised graph perform better than the original one. In the model-centric way, we have broad interests including introducing the high-order <b>clustering</b> information into GNNs and <b>redisgn the messaging schema</b> of GNNs on the observed graph to reduce the negative impact of noise on graph.',
      ], // 详细内容（每个段落对应一个数据，文本内容中双引号前需加 \ 符号）
    },
    researchPapers: [
      {
        text: '[Deep Clustering Survey, Arxiv 2024]', // 引用文本
        link: '#test', // 引用链接
      },
      {
        text: '[Robust Graph-based Recommendation, WWW 2024]', // 引用文本
        link: '#test', // 引用链接
      },
      {
        text: '[Graph Structure Learning Benchmark, NeurIPS 2023]', // 引用文本
        link: '#test', // 引用链接
      },
      {
        text: '[Graph Clustering with GSL, CIKM 2023]', // 引用文本
        link: '#test', // 引用链接
      },
      {
        text: '[Reinforcement Neighborhood Selection, ICDM 2023]', // 引用文本
        link: '#test', // 引用链接
      },
    ],
    researchBenchmark: [],
  },
]

$(document).ready(function () {
  var researchDiv = $('#research')
  $.each(research, function (index, item) {
    var container = $('<div></div>')
      .css('backgroundColor', '#f6fbfe') // 对应 Recent Research 小节中的背景色
      .css('padding', '5px')
      .css('width', '670px')
      .css('marginBottom', '10px')
    var researchTitleDiv = $('<div></div>').attr('id', 'researchTitle')
    var researchDataDiv = $('<div></div>').attr('id', 'researchData')
    var imgDiv = $('<img />')
    var researchPapersDiv = $('<div></div>').attr('id', 'researchPapers')
    var researchBenchmarkDiv = $('<div></div>').attr('id', 'researchBenchmark')

    container.append(researchTitleDiv)
    container.append(researchDataDiv)
    researchDataDiv.append(imgDiv)
    container.append(researchPapersDiv)
    container.append(researchBenchmarkDiv)

    researchTitleDiv.text(item.researchTitle)
    imgDiv.attr('src', item.researchData.link)

    // 遍历data数组
    var pTag = ''
    $.each(item.researchData.data, function (index, item1) {
      // 为每个数组元素创建一个新的p标签
      var pText = '<p>' + item1 + '</p>'
      pTag += pText // 设置p标签的文本内容为当前数组元素
      // 将新创建的p标签添加到researchData div中
      // researchDataDiv.append(pTag)
    })
    researchDataDiv.html(pTag)

    var splitTag = $('<span></span>').text(', ')

    if (item.researchPapers.length != 0) {
      var paperSpan = $('<span></span>')
        .text('Paper: ')
        .css('font-weight', 'bold')
      researchPapersDiv.append(paperSpan)
      $.each(item.researchPapers, function (index, item1) {
        var paperTag = $('<a></a>').attr('href', item1.link).text(item1.text)
        // 锚点跳转 item1.link为待跳转元素的id值
        $(`mark${index}`).click(function (e) {
          e.preventDefault()
          var target = $(item1.link)
          $('html body').animate(
            {
              scrollTop: $(target).offset().top,
            },
            1000
          )
        })
        if (index != 0) {
          researchPapersDiv.append(splitTag)
        }
        researchPapersDiv.append(paperTag)
      })
    }

    if (item.researchBenchmark.length != 0) {
      var markSpan = $('<span></span>')
        .text('Benchmark: ')
        .css('font-weight', 'bold')
      researchBenchmarkDiv.append(markSpan)
      $.each(item.researchBenchmark, function (index, item1) {
        var markTag = $('<a></a>')
          .attr('href', item1.link)
          .attr('id', `mark${index}`)
          .text(item1.text)

        // 锚点跳转 item1.link为待跳转元素的id值
        $(`mark${index}`).click(function (e) {
          e.preventDefault()
          var target = $(item1.link)
          $('html body').animate(
            {
              scrollTop: $(target).offset().top,
            },
            1000
          )
        })

        if (index != 0) {
          researchBenchmarkDiv.append(splitTag)
        }
        researchBenchmarkDiv.append(markTag)
      })
    }

    researchDiv.append(container)
  })
})
