// 常用js

$(document).ready(function () {
  let plan = [
    {
      time: '05:30',
      title: '高雄機場(航廈1)',
      remark: '7:00 起飛',
      transportation: 'airplane',
      transRemark: '',
      arrive: ['高雄', '日本'],
      isCheck: false,
    },
    {
      time: '11:45',
      title: '成田機場(航廈1)',
      remark: '領成田車票、劃位、買午餐、買西瓜卡',
      transportation: '',
      isCheck: false,
    },
    {
      time: '13:45',
      title: 'NEX成田特快',
      remark: '13:15/14:21有班次',
      transportation: '',
      isCheck: false,
    },
    {
      time: '15:11',
      title: '新宿站',
      remark: '南口出站',
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '新宿燦路都廣場大飯店',
      remark: `確認號碼<span>4014557871</span>`,
      transportation: 'mrt',
      transRemark: 'JR山手線',
      arrive: ['新宿', '原宿'],
      isCheck: true,
    },
    {
      time: '16:00',
      title: '明治神宮',
      remark: '',
      transportation: 'mrt',
      transRemark: 'JR山手線',
      arrive: ['原宿', '澀谷'],
      isCheck: false,
    },
    {
      time: '17:20',
      title: 'SHIBUYA SKY',
      remark: '往東口方向出站',
      transportation: 'mrt',
      transRemark: 'JR山手線',
      arrive: ['澀谷', '原宿'],
      isCheck: false,
    },
    {
      time: '',
      title: 'AFURI拉麵',
      remark: '22:30結束',
      transportation: 'mrt',
      transRemark: 'JR山手線',
      arrive: ['原宿', '新宿'],
      isCheck: false,
    },
    {
      time: '',
      title: '歌舞伎町一番街',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '新宿黃金街(昭和風酒吧)',
      remark: 'Bistro Pavo',
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '返回飯店',
      remark: '新宿燦路都廣場大飯店',
      transportation: '',
      isCheck: false,
    },
  ]
  let plan2 = [
    {
      time: '8:00',
      title: '新宿站',
      remark: ``,
      transportation: '',
      isCheck: false,
    },
    {
      time: '8:30',
      title: '',
      remark: '',
      transportation: 'fuji',
      transRemark: '富士回遊7號',
      arrive: ['新宿', '富士山'],
      isCheck: false,
    },
    {
      time: '10:26',
      title: '河口湖站',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '11:00',
      title: 'BUDGET租車店',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '12:00',
      title: 'ほうとう (餺飥) 不動',
      remark: `午餐`,
      transportation: 'car',
      arrive: ['自駕', ''],
      transRemark: '車程11分',
      isCheck: false,
    },
    {
      time: '13:30',
      title: '新倉富士淺間神社',
      remark: ``,
      transportation: 'car',
      arrive: ['自駕', ''],
      transRemark: '車程20分',
      isCheck: false,
    },
    {
      time: '15:00',
      title: '忍野八海',
      remark: ``,
      transportation: 'car',
      arrive: ['自駕', ''],
      transRemark: '車程15分',
      isCheck: false,
    },

    {
      time: '16:30',
      title: '日川時計店',
      remark: ``,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: 'Kumonoue Fuji Hotel 雲ノ上富士ホテル',
      remark: `訂單編號<span>1146934252</span><br>
      晚餐:ZOO(日式) / M2(西式)`,
      transportation: '',
      isCheck: true,
    },
  ]

  function addPlan(target, plan) {
    let Target = document.querySelector(target)
    let planContent = ''
    if (Target !== null) {
      plan.forEach((item) => {
        let hasTime =
          item.time == ''
            ? `<p class="timeline_time">
            <span class="no_time">00:00</span>
          </p>`
            : `<p class="timeline_time">${item.time}</p>`
        let isCheck = item.isCheck ? `<h6 class="checkIn">check in</h6>` : ''
        let hasTitle = item.title == '' ? '' : `<h3>${item.title}</h3>`
        let hasRemark = item.remark == '' ? '' : `<h5>${item.remark}</h5>`
        let hasTrans =
          item.transportation == ''
            ? ''
            : `
          <div class="transportation ${item.transportation}">
            <div>
              <p>${item.arrive[0]}</p>
              ${item.arrive[1] == '' ? '' : `<p>${item.arrive[1]}</p>`}
              
            </div>
            <span>${item.transRemark}</span>
          </div>
        `
        planContent += `
          <div class="timeline_item">
            ${hasTime}
              <div class="timeline_info">
                ${isCheck}
                ${hasTitle}
                ${hasRemark}
                ${hasTrans}
              </div>
            </div>
        `
      })
      Target.innerHTML = planContent
    }
  }

  addPlan('.day01', plan)
  addPlan('.day02', plan2)
})
