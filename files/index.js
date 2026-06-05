const research = [
  {
    researchTitle: 'AI for Social Good', // 标题
    researchData: {
      // link: 'http://yangy.org/img/abnormal.jpg', // 插图链接,
      data: [
        'We build AI systems that improve digital accessibility for <b>blind and low-vision (BLV) users</b> across mobile and web environments. Our recent work spans accessible understanding of <b>image tables, mobile charts, and GUI components</b>, as well as scalable auditing workflows for real-world web accessibility. A recurring theme is to combine multimodal perception, language generation, and user-centered interaction design so that AI can provide reliable, fine-grained, and actionable assistance in everyday digital experiences.',
      ], // 详细内容（每个段落对应一个数据，文本内容中双引号前需加 \ 符号）
    },
    researchPapers: [
      {
        text: '[TableNarrator, CHI 2025]', // 引用文本
        link: './papers/CHI2025.pdf', // 引用链接
      },
      {
        text: '[Focusability in UI Accessibility, WWW 2025]', // 引用文本
        link: './papers/WWW2025.pdf', // 引用链接
      },
      {
        text: '[ChartAccessMobile, W4A 2026]', // 引用文本
        link: './papers/W4A2026-1.pdf', // 引用链接
      },
      {
        text: '[GUI Component Description for BVI Users, W4A 2026]', // 引用文本
        link: './papers/W4A2026-2.pdf', // 引用链接
      },
      {
        text: '[Web Accessibility Audit with MLLM Copilots, AAAI 2026 AISI]', // 引用文本
        link: '#paper-aaai-2026-aisi', // 引用链接
      },
    ],
    researchBenchmark: [],
  },
  {
    researchTitle: 'Multi-modal Agent', // 标题
    researchData: {
      // link: 'http://yangy.org/img/abnormal.jpg', // 插图链接,
      data: [
        'We study <b>multi-modal agents</b> that can perceive, reason, and act in complex GUI environments. Our recent work focuses on four complementary directions: enriching agents with <b>structured environment memory</b>, improving <b>history-aware reasoning</b> for long-horizon interaction, building <b>process-aware benchmarks</b> for authentic evaluation, and developing <b>lightweight orchestration frameworks</b> that make MLLM-based agents scalable and deployable on real devices. Together, these efforts aim to make GUI agents more reliable, efficient, and practical in real-world mobile and desktop workflows.',
      ], // 详细内容（每个段落对应一个数据，文本内容中双引号前需加 \ 符号）
    },
    researchPapers: [
      {
        text: '[PG-Agent, ACM MM 2025]', // 引用文本
        link: './papers/MM2025.pdf', // 引用链接
      },
      {
        text: '[History-Aware Reasoning for GUI Agents, AAAI 2026]', // 引用文本
        link: './papers/AAAI2026-HAR.pdf', // 引用链接
      },
      {
        text: '[ProBench, AAAI 2026]', // 引用文本
        link: './papers/AAAI2026-ProBench.pdf', // 引用链接
      },
      {
        text: '[LAMO, Findings of ACL 2026]', // 引用文本
        link: './papers/ACL2026.pdf', // 引用链接
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
      .css('width', '100%')
      .css('maxWidth', '1100px')
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
