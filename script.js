const products = {
  home: { title: 'قميص المنتخب — الأساسي', description: 'القميص الأحمر المستوحى من ألوان المنتخب اليمني. خيارك الأول للتشجيع في الملعب ومشاهدة المباريات.' },
  away: { title: 'قميص المنتخب — الاحتياطي', description: 'تصميم أبيض بلمسات حمراء وسوداء مستوحاة من علم اليمن، بقصة مريحة تناسب يومك.' },
  training: { title: 'قميص الإحماء والتدريب', description: 'قميص رياضي داكن وخفيف، مستوحى من طقم تدريب المنتخب ومناسب للحركة والتمارين.' }
};

const dialog = document.querySelector('.product-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogDescription = document.querySelector('#dialog-description');
const dialogClose = document.querySelector('.dialog-close');
const toast = document.querySelector('.toast');
let toastTimer;

document.querySelectorAll('[data-open]').forEach((button) => {
  button.addEventListener('click', () => {
    const product = products[button.dataset.open];
    if (!product) return;
    dialogTitle.textContent = product.title;
    dialogDescription.textContent = product.description;
    dialog.showModal();
  });
});

dialogClose.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll('.whatsapp, .dialog-order').forEach((link) => {
  link.addEventListener('click', () => {
    toast.textContent = 'سيتم فتح واتساب للتواصل مع متجر الراية';
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
  });
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
