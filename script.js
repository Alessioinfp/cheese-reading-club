// 书籍数据
const booksData = {
  outsider: {
    title: '局外人',
    author: '阿尔贝·加缪',
    description: '《局外人》是法国作家加缪的代表作，讲述了一个对一切都漠然处之的小职员默尔索的故事。他在母亲去世后表现冷漠，后来又无故杀人，最终被判处死刑。',
    quote: '"在我们的社会里，任何不在母亲葬礼上哭泣的人，都有可能被判死刑。"'
  },
  alchemist: {
    title: '牧羊少年奇幻之旅',
    author: '保罗·科埃略',
    description: '一个名叫圣地亚哥的西班牙牧羊少年，为了追寻自己反复出现在梦中的宝藏，踏上了充满奇遇与启示的旅程。在旅途中，他遇到了各种人物，学会了倾听内心，理解世界的语言。',
    quote: '"当你真心渴望某样东西时，整个宇宙都会联合起来帮助你完成。"'
  },
  misogyny: {
    title: '厌女',
    author: '上野千鹤子',
    description: '本书探讨了日本社会中根深蒂固的厌女情结（misogyny）——一种对“独立女性”的敌意。上野指出，社会并不讨厌女人本身，而是厌恶那些拒绝依附男性、活出自我的女人。',
    quote: '“女性主义不是让女人憎恨男人，而是让女人不再憎恨自己。”'
  },
  MyBrilliantFriend: {
    title: '我的天才女友',
    author: '埃莱娜·费兰特',
    description: '《我的天才女友》是意大利作家埃莱娜·费兰特的代表作，讲述了两个女孩从童年到成年的人生故事。她们在成长过程中经历了友谊、爱情、家庭和事业的各种挑战。',
    quote: '"我们不是我们所收集的、得到的、所读的东西，只要我们还活着，我们就是爱，我们所爱的事物，我们爱人的动作，我们爱人的本身。"'
  },
  IntimateRelationships: {
    title: '亲密关系',
    author: '罗兰·米勒',
    description: '《亲密关系》是美国心理学家罗兰·米勒的代表作，探讨了人际关系中的亲密、吸引、冲突和承诺等主题。本书通过实证研究，揭示了人们在亲密关系中的心理需求和行为模式。',
    quote: '"亲密关系是人类社会中最基本、最重要的人际关系之一。"'
  },
  Education: {
    title: '你当像鸟飞往你的山',
    author: '塔拉·韦斯特弗',
    description: '《你当像鸟飞往你的山》是美国作家塔拉·韦斯特弗的自传体小说，讲述了她从摩门教家庭逃离，接受教育，最终成为一名学者的故事。',
    quote: '"教育意味着获得不同的视角，理解不同的人、经历和历史。"'
  },
  BraveNewWorld: {
    title: '美丽新世界',
    author: '奥尔德斯·赫胥黎',
    description: '《美丽新世界》是英国作家奥尔德斯·赫胥黎的科幻小说，讲述了一个未来社会中人们的生活和思想。在这个社会中，人们被剥夺了自由和个性，成为了社会的工具。',
    quote: '"自由意志是一种幻觉。"'
  },
  TheCourageToBeHated: {
    title: '被讨厌的勇气',
    author: '岸见一郎',
    description: '《被讨厌的勇气》是日本作家岸见一郎的代表作，探讨了人际关系中的勇气、自由和独立。本书通过对话的形式，揭示了人们如何通过改变自己的思维方式，实现自我成长和幸福。',
    quote: '"勇气不是不害怕，而是即使害怕，也要继续前行。"'
  },
  zoo: {
    title: '动物园',
    author:'乙一',
    description: '日本作家乙一的短篇小说集，书中收录了多篇风格各异的短篇故事。通过悬疑、惊悚与感人的情节，作品探讨了人性、孤独与人际关系的微妙情感。乙一擅长用细腻的笔触描写人物心理，故事既有紧张的推理感，也常带有温暖或令人深思的结局。',
    quote: '"妈妈要杀我的话，她会怎么下手呢？或许是老一套地拿硬物敲我的头；或许是另一个老一套地掐紧我的脖子；还是把我从公寓阳台推下去，再伪装成自杀？"'
  },
  toad: {
    title: '蛤蟆先生去看心理医生',
    author: '罗伯特·戴博德',
    description: '《蛤蟆先生去看心理医生》是英国作家罗伯特·戴博德的代表作，讲述了一个蛤蟆先生去看心理医生，通过与心理医生的对话，逐渐认识自己，改变自己的故事。',
    quote: '"我们每个人都有不同程度的自卑感，因为我们都想让自己更优秀，让自己更完美。"'
  },
  thinking: {
    title: '思考快与慢',
    author: '丹尼尔 卡尔曼',
    description: '《思考，快与慢》是诺贝尔经济学奖得主丹尼尔·卡尼曼的代表作。书中提出了人类思维的两种系统：快速、直觉的“系统一”和缓慢、理性的“系统二”，通过大量心理学实验，揭示了人们在判断和决策中常见的偏见与错误，帮助读者更理性地认识自己的思维方式。 ',
    quote: '"直觉往往是迅速而有力的，但它并不总是可靠。 "'
  },
   KillMockingbird: {
    title: '杀死一只知更鸟',
    author: '丹尼尔 卡尔曼',
    description: '《思考，快与慢》是诺贝尔经济学奖得主丹尼尔·卡尼曼的代表作。书中提出了人类思维的两种系统：快速、直觉的“系统一”和缓慢、理性的“系统二”，通过大量心理学实验，揭示了人们在判断和决策中常见的偏见与错误，帮助读者更理性地认识自己的思维方式。 ',
    quote: '"直觉往往是迅速而有力的，但它并不总是可靠。 "'
  },
};

// 存储数据
let bookData = {};
let currentBook = '';

// 主题切换
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 视差效果
const header = document.getElementById('header');
const logoHeader = document.querySelector('.logo-header');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = scrolled * 0.5;
  
  if (logoHeader) {
    logoHeader.style.transform = `translateY(${parallax}px)`;
  }
});

// 倒计时功能
const targetDate = new Date('2025-11-22T09:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (distance < 0) {
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '0';
    document.getElementById('minutes').textContent = '0';
    document.getElementById('seconds').textContent = '0';
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 书籍详情弹出层
const bookItems = document.querySelectorAll('.book-item[data-book]');
const modal = document.getElementById('bookModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalDescription = document.getElementById('modalDescription');
const modalQuote = document.getElementById('modalQuote');

bookItems.forEach(item => {
  item.addEventListener('click', () => {
    const bookKey = item.getAttribute('data-book');
    const book = booksData[bookKey];
    
    if (book) {
      currentBook = bookKey;
      modalTitle.textContent = book.title;
      modalAuthor.textContent = `作者：${book.author}`;
      modalDescription.textContent = book.description;
      modalQuote.textContent = book.quote;
      modalQuote.style.fontStyle = 'italic';
      modalQuote.style.color = 'var(--accent-color)';
      // 每次打开前先重置，再加载该书数据，避免状态串联
      resetModalState();
      modal.classList.add('active');
      loadBookData(bookKey);
    }
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  resetModalState();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    resetModalState();
  }
});

// 评分系统
const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('ratingDisplay');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('active');
    }
    
    ratingDisplay.textContent = `你的评分：${rating} 星`;
    
    if (!bookData[currentBook]) bookData[currentBook] = {};
    bookData[currentBook].rating = rating;
    saveData();
  });
});

// 阅读进度
const progressBtns = document.querySelectorAll('.progress-btn');

progressBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    progressBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const progress = btn.getAttribute('data-progress');
    if (!bookData[currentBook]) bookData[currentBook] = {};
    bookData[currentBook].progress = progress;
    
    // 更新书籍列表中的状态标签
    const statusBadge = document.querySelector(`[data-status="${currentBook}"]`);
    if (statusBadge) {
      statusBadge.classList.remove('reading', 'finished');
      if (progress === 'reading') {
        statusBadge.textContent = '正在读';
        statusBadge.classList.add('reading');
      } else if (progress === 'finished') {
        statusBadge.textContent = '已读完';
        statusBadge.classList.add('finished');
      } else {
        statusBadge.textContent = '未读';
      }
    }
    
    saveData();
  });
});


// 笔记保存
const bookNotes = document.getElementById('bookNotes');
const saveNoteBtn = document.getElementById('saveNote');

saveNoteBtn.addEventListener('click', () => {
  const note = bookNotes.value;
  
  if (!bookData[currentBook]) bookData[currentBook] = {};
  bookData[currentBook].notes = note;
  saveData();
  
  alert('笔记已保存！');
});

// 重置弹窗状态，避免不同书籍之间相互影响
function resetModalState() {
  // 评分清空
  stars.forEach(s => s.classList.remove('active'));
  ratingDisplay.textContent = '还未评分';

  // 进度重置为未开始
  progressBtns.forEach(btn => btn.classList.remove('active'));
  const notStartedBtn = Array.from(progressBtns).find(b => b.getAttribute('data-progress') === 'not-started');
  if (notStartedBtn) notStartedBtn.classList.add('active');

  // 笔记清空
  bookNotes.value = '';
}

// 数据持久化
function saveData() {
  try {
    localStorage.setItem('cheeseBookData', JSON.stringify(bookData));
  } catch (e) {
    console.log('数据保存失败');
  }
}

function loadData() {
  try {
    const data = localStorage.getItem('cheeseBookData');
    if (data) {
      bookData = JSON.parse(data);
    }
  } catch (e) {
    console.log('数据加载失败');
  }
}

function loadBookData(bookKey) {
  if (!bookData[bookKey]) return;
  
  const data = bookData[bookKey];
  
  // 加载评分
  if (data.rating) {
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < data.rating; i++) {
      stars[i].classList.add('active');
    }
    ratingDisplay.textContent = `你的评分：${data.rating} 星`;
  } else {
    stars.forEach(s => s.classList.remove('active'));
    ratingDisplay.textContent = '还未评分';
  }
  
  // 加载进度
  if (data.progress) {
    progressBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-progress') === data.progress) {
        btn.classList.add('active');
      }
    });
  }
  
  // 加载笔记
  if (data.notes) {
    bookNotes.value = data.notes;
  } else {
    bookNotes.value = '';
  }
}

// 搜索功能（支持多个书架列表）
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const allBooks = document.querySelectorAll('.book-item');
  
  allBooks.forEach(book => {
    const titleEl = book.querySelector('.book-title');
    const title = titleEl ? titleEl.textContent.toLowerCase() : '';
    if (title.includes(searchTerm)) {
      book.style.display = 'block';
      book.style.animation = 'fadeIn 0.5s ease';
    } else {
      book.style.display = 'none';
    }
  });
});

// 打卡日历
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let checkedDates = new Set();

function renderCalendar() {
  const calendarGrid = document.getElementById('calendarGrid');
  const calendarMonth = document.getElementById('calendarMonth');
  const checkedDaysDisplay = document.getElementById('checkedDays');
  
  calendarGrid.innerHTML = '';
  
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', 
                      '七月', '八月', '九月', '十月', '十一月', '十二月'];
  calendarMonth.textContent = `${currentYear}年 ${monthNames[currentMonth]}`;
  
  // 添加空白天数
  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement('div');
    calendarGrid.appendChild(emptyDay);
  }
  
  // 添加日期
  let checkedCount = 0;
  const today = new Date();
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('calendar-day');
    dayElement.textContent = day;
    
    const dateKey = `${currentYear}-${currentMonth}-${day}`;
    
    // 检查是否是今天
    if (today.getFullYear() === currentYear && 
        today.getMonth() === currentMonth && 
        today.getDate() === day) {
      dayElement.classList.add('today');
    }
    
    // 检查是否已打卡
    if (checkedDates.has(dateKey)) {
      dayElement.classList.add('checked');
      checkedCount++;
    }
    
    dayElement.addEventListener('click', () => {
      if (checkedDates.has(dateKey)) {
        checkedDates.delete(dateKey);
        dayElement.classList.remove('checked');
      } else {
        checkedDates.add(dateKey);
        dayElement.classList.add('checked');
      }
      saveCalendarData();
      renderCalendar();
    });
    
    calendarGrid.appendChild(dayElement);
  }
  
  checkedDaysDisplay.textContent = checkedCount;
}

document.getElementById('prevMonth').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

function saveCalendarData() {
  try {
    localStorage.setItem('cheeseCalendarData', JSON.stringify(Array.from(checkedDates)));
  } catch (e) {
    console.log('日历数据保存失败');
  }
}

function loadCalendarData() {
  try {
    const data = localStorage.getItem('cheeseCalendarData');
    if (data) {
      checkedDates = new Set(JSON.parse(data));
    }
  } catch (e) {
    console.log('日历数据加载失败');
  }
}

// 初始化（页面加载时执行）
loadData();
loadCalendarData();
renderCalendar();
