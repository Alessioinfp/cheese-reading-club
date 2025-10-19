// 书籍数据
const booksData = {
  outsider: {
    title: '局外人',
    author: '阿尔贝·加缪',
    cover: 'images/局外人.webp',
    description: '《局外人》是法国作家加缪的代表作，讲述了一个对一切都漠然处之的小职员默尔索的故事。他在母亲去世后表现冷漠，后来又无故杀人，最终被判处死刑。',
    quote: '"在我们的社会里，任何不在母亲葬礼上哭泣的人，都有可能被判死刑。"'
  },
  alchemist: {
    title: '牧羊少年奇幻之旅',
    author: '保罗·科埃略',
    cover: 'images/牧羊少年奇幻之旅.webp',
    description: '一个名叫圣地亚哥的西班牙牧羊少年，为了追寻自己反复出现在梦中的宝藏，踏上了充满奇遇与启示的旅程。在旅途中，他遇到了各种人物，学会了倾听内心，理解世界的语言。',
    quote: '"当你真心渴望某样东西时，整个宇宙都会联合起来帮助你完成。"'
  }
};

// 存储数据
let bookData = {};
let currentBook = '';
let timerInterval = null;
let timerSeconds = 0;

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
const targetDate = new Date('2025-10-25T09:00:00').getTime();

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
const modalCoverImg = document.getElementById('modalCoverImg');

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
      modalCoverImg.src = book.cover;
      modal.classList.add('active');
      
      // 加载保存的数据
      loadBookData(bookKey);
    }
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  stopTimer();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    stopTimer();
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

// 阅读计时器
const startTimerBtn = document.getElementById('startTimer');
const stopTimerBtn = document.getElementById('stopTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const readingTimeDisplay = document.getElementById('readingTime');

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      timerSeconds++;
      readingTimeDisplay.textContent = formatTime(timerSeconds);
      
      if (!bookData[currentBook]) bookData[currentBook] = {};
      bookData[currentBook].readingTime = timerSeconds;
      saveData();
    }, 1000);
  }
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  stopTimer();
  timerSeconds = 0;
  readingTimeDisplay.textContent = formatTime(timerSeconds);
  
  if (bookData[currentBook]) {
    bookData[currentBook].readingTime = 0;
    saveData();
  }
}

startTimerBtn.addEventListener('click', startTimer);
stopTimerBtn.addEventListener('click', stopTimer);
resetTimerBtn.addEventListener('click', resetTimer);

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
  
  // 加载阅读时长
  if (data.readingTime) {
    timerSeconds = data.readingTime;
    readingTimeDisplay.textContent = formatTime(timerSeconds);
  } else {
    timerSeconds = 0;
    readingTimeDisplay.textContent = formatTime(0);
  }
  
  // 加载笔记
  if (data.notes) {
    bookNotes.value = data.notes;
  } else {
    bookNotes.value = '';
  }
}

// 搜索功能
const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const allBooks = bookList.querySelectorAll('.book-item');
  
  allBooks.forEach(book => {
    const title = book.querySelector('.book-title').textContent.toLowerCase();
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
