import Link from "next/link";

const casinoLink = "https://one-vv4466.com/?open=register&p=1nzx&sub1=1&sub2=2&sub3=3&sub4=4&sub5=5";

type Rating = { rank: string; label: string; badge: string; features: string[]; };

const rating: Rating[] = [
  { rank: "01", label: "1win", badge: "Лучший выбор", features: ["Казино и ставки в одном кабинете", "Стартовый бонус на первые депозиты", "Вывод на кошельки и крипту"] },
  { rank: "02", label: "Gama Casino", badge: "Топ по слотам", features: ["Слоты Pragmatic Play и Play'n GO", "Демо без регистрации", "Кэшбэк по неделям"] },
  { rank: "03", label: "Daddy Casino", badge: "Стартовый бонус", features: ["Приветственный пакет и фриспины", "Промокод в форме регистрации", "Android-приложение"] },
  { rank: "04", label: "Eva Casino", badge: "Live-дилеры", features: ["Live-рулетка и блэкджек с дилерами", "Уровни лояльности", "Чат 24/7"] },
  { rank: "05", label: "Kush Casino", badge: "Джекпоты", features: ["Слоты с джекпотами", "Crash-игры и plinko", "Регистрация за минуту"] },
  { rank: "06", label: "Banda Casino", badge: "Турниры", features: ["Турниры по слотам", "Релоад-бонусы", "Мобильная версия"] },
  { rank: "07", label: "Leebet", badge: "Казино и спорт", features: ["Общий баланс казино и спорта", "Фрибеты", "Лайв-ставки"] },
  { rank: "08", label: "Wilder Casino", badge: "Быстрый вывод", features: ["Вывод на кошельки и крипту", "Новинки провайдеров", "Кэшбэк без вейджера"] },
  { rank: "09", label: "Vavada", badge: "Стабильные зеркала", features: ["Давно на рынке СНГ", "Фриспины новичкам", "Стабильные зеркала"] },
  { rank: "10", label: "Pin-Up Casino", badge: "Большой каталог", features: ["Тысячи слотов и live-столов", "Ставки на спорт", "Программа лояльности"] },
];

const checks = [
  ["01", "Лицензия и правила", "Открытые условия, понятные ограничения и информация о проверках."],
  ["02", "Касса в манатах", "Счёт в AZN, местные карты и доступные способы вывода."],
  ["03", "Стартовый пакет", "Разбираем механику бонусов до того, как она станет сюрпризом."],
  ["04", "Каталог", "Смотрим на студии, live-разделы, демо и навигацию по играм."],
  ["05", "Поддержка", "Проверяем скорость и качество ответа русскоязычной команды."],
  ["06", "Телефон", "Оцениваем удобство мобильной версии, а не только десктопа."],
];

const bonuses = [
  ["Стартовый пакет", "Проценты на первые депозиты и счёт в манатах."],
  ["Бесплатные вращения", "Условия для популярных слотов без лишней путаницы."],
  ["Возврат проигрыша", "Кэшбэк за период без ввода отдельного кода."],
  ["Код при регистрации", "Промокод, который усиливает стартовый пакет."],
];

const faq = [
  ["По каким правилам составлена десятка для Азербайджана?", "Порядок формируется с учётом условий, методов оплаты, мобильного опыта, поддержки и правил предложений. Перед регистрацией всегда проверяйте актуальные условия на сайте выбранной площадки."],
  ["Что лучше выбрать новичку из Азербайджана?", "Начните с площадки с ясными правилами, удобной поддержкой и небольшими личными лимитами. Не относитесь к игре как к способу заработать."],
  ["Обязательно ли открывать счёт в манатах?", "Нет. Валюта зависит от выбранной площадки, но счёт в AZN может сделать расчёты понятнее. Всегда проверяйте условия конвертации."],
  ["Как активировать стартовый бонус?", "Обычно код вводится при регистрации или первом пополнении. Перед активацией прочитайте требования по отыгрышу и срок действия."],
  ["Сколько ждать вывода на карту AZ-банка?", "Срок зависит от проверки аккаунта, метода оплаты и правил сервиса. Верификацию лучше пройти заранее."],
  ["Можно ли играть из Азербайджана на манаты?", "Доступность валют и способов оплаты зависит от выбранной площадки. Уточняйте условия на официальном сайте до регистрации и пополнения счёта."],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono mb-6 text-[10px] font-bold uppercase tracking-[.18em] text-[#8bb8ff]">{children}</p>;
}

function ArrowLink({ children, href = "#guide" }: { children: React.ReactNode; href?: string }) {
  return <Link href={href} className="group inline-flex items-center gap-3 text-sm font-bold text-[#f3f6fb] transition hover:text-[#8bb8ff]">{children}<span className="text-xl text-[#8bb8ff] transition-transform group-hover:translate-x-1">→</span></Link>;
}

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#10182a] text-[#f3f6fb]">
      <div className="noise pointer-events-none fixed inset-0 z-50 opacity-[.045]" />
      <header className="relative z-10 border-b border-white/12">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center px-5 sm:px-8">
          <Link href="#top" className="font-display flex items-center gap-3 text-sm font-extrabold tracking-[-.08em]">
            <span className="grid h-8 w-8 grid-cols-3 gap-0.5 border-2 border-[#f3f6fb] p-1 -rotate-6"><i className="bg-[#8bb8ff]" /><i className="bg-[#8bb8ff]" /><i className="bg-[#8bb8ff]" /></span>
            <span>РИТМ<br /><b className="text-[9px] tracking-[.25em] text-[#8bb8ff]">ИГРЫ</b></span>
          </Link>
          <nav className="ml-auto hidden items-center gap-7 text-[11px] font-bold uppercase tracking-[.08em] text-[#bec9dc] md:flex">
            <Link href="#rating" className="text-[#8bb8ff]">Рейтинг</Link><Link href="#checks">Проверки</Link><Link href="#bonuses">Бонусы</Link><Link href="#faq">Вопросы</Link>
          </nav>
          <Link href="#guide" className="ml-8 hidden rounded-full border border-[#8bb8ff]/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[.08em] text-[#8bb8ff] transition hover:bg-[#8bb8ff] hover:text-[#10182a] sm:block">Методика ↗</Link>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[680px] max-w-[1400px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:py-28">
        <div className="absolute -right-80 top-8 h-[540px] w-[540px] rounded-full bg-[#8bb8ff]/10 blur-3xl" />
        <div className="relative z-[1]">
          <Eyebrow><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#8bb8ff] shadow-[0_0_0_5px_rgba(139,184,255,.18)]" /> Рейтинг казино для Азербайджана</Eyebrow>
          <h1 className="font-display max-w-3xl text-[clamp(3rem,7vw,6.6rem)] font-bold leading-[.91] tracking-[-.08em]">Выбирать<br />с <span className="text-[#8bb8ff]">азартом,</span><br />играть<br />осознанно.</h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[#bec9dc]">Редакционный гид по критериям выбора платформ: понятные правила, платежи, условия бонусов и поддержка на русском языке.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5"><Link href="#rating" className="inline-flex items-center gap-5 rounded-2xl bg-[#8bb8ff] px-5 py-4 text-sm font-extrabold text-[#10182a] transition hover:-translate-y-1 hover:shadow-[6px_7px_0_#8bb8ff]">Открыть рейтинг <span className="text-lg">↓</span></Link><ArrowLink href="#checks">Как выбираем</ArrowLink></div>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[.12em] text-[#94a4bd]">18+ · играйте ответственно</p>
        </div>
        <div className="relative z-[1] mx-auto h-[360px] w-full max-w-[570px] sm:h-[470px]">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] rounded-[50%] border border-white/20" /><div className="absolute left-1/2 top-1/2 h-[270px] w-[420px] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] rounded-[50%] border border-white/20" /><div className="absolute left-1/2 top-1/2 h-[135px] w-[260px] -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] rounded-[50%] border border-white/20" />
          <span className="font-display absolute left-4 bottom-8 text-7xl font-bold tracking-[-.12em] text-[#f3f6fb] sm:text-8xl">01<i className="font-mono ml-2 text-base not-italic text-[#8bb8ff]">/10</i></span>
          <span className="absolute left-[23%] top-7 text-4xl text-[#8bb8ff]">✦</span><span className="absolute bottom-16 right-[12%] text-2xl text-[#8bb8ff]">✦</span>
          <div className="orb absolute left-1/2 top-1/2 grid h-48 w-48 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#8bb8ff] shadow-[inset_-17px_-17px_0_rgba(0,0,0,.15),20px_25px_40px_rgba(0,0,0,.22)] sm:h-60 sm:w-60"><span className="font-display grid h-[70%] w-[70%] place-items-center rounded-full border border-[#10182a]/50 text-7xl font-bold text-[#10182a] sm:text-8xl">R</span></div>
          <div className="absolute right-1 top-[30%] rotate-[8deg] rounded-2xl bg-[#8bb8ff] px-4 py-3 text-[#10182a] shadow-[5px_5px_0_#8bb8ff]"><span className="font-mono block text-[9px] font-bold uppercase tracking-widest">Оценка</span><b className="font-display text-4xl tracking-[-.12em]">9.8</b><small className="font-mono ml-1 text-[10px] font-bold">/10</small></div>
          <span className="absolute bottom-[11%] left-[20%] -rotate-6 rounded-full border border-white/30 bg-[#10182a] px-3 py-2 text-[10px] font-bold uppercase tracking-wider">безопасность</span><span className="absolute right-3 top-[15%] -rotate-6 rounded-full border border-white/30 bg-[#10182a] px-3 py-2 text-[10px] font-bold uppercase tracking-wider">выплаты</span>
        </div>
      </section>

      <section className="relative -rotate-[1.15deg] bg-[#8bb8ff] py-5 text-[#10182a]"><div className="ticker-track flex w-max items-center gap-7 whitespace-nowrap font-display text-[11px] font-bold tracking-[.02em]"><span>ПРОЗРАЧНЫЕ УСЛОВИЯ</span><b>✦</b><span>ПРОВЕРЕННЫЕ ПЛАТЕЖИ</span><b>✦</b><span>ПОДДЕРЖКА НА РУССКОМ</span><b>✦</b><span>ОТВЕТСТВЕННАЯ ИГРА</span><b>✦</b><span>ПРОЗРАЧНЫЕ УСЛОВИЯ</span><b>✦</b><span>ПРОВЕРЕННЫЕ ПЛАТЕЖИ</span></div></section>

      <section id="rating" className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div>
            <Eyebrow>Рейтинг казино</Eyebrow>
            <h2 className="font-display text-5xl font-bold leading-[.96] tracking-[-.075em] sm:text-6xl">Десятка лучших<br />казино для<br /><span className="text-[#8bb8ff]">Азербайджана.</span></h2>
            <a href={casinoLink} target="_blank" rel="sponsored noopener noreferrer" className="mt-9 inline-flex rounded-lg bg-[#8bb8ff] px-5 py-4 text-xs font-extrabold text-[#10182a] transition hover:-translate-y-1 hover:shadow-[5px_6px_0_rgba(243,246,251,.75)]">Лучшее казино ↗</a>
            <p className="mt-7 max-w-sm text-sm leading-7 text-[#bec9dc]">Топ 10 казино Азербайджана с возможностью открыть счёт в манатах, изучить условия бонусов и проверить доступные способы вывода.</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[.12em] text-[#94a4bd]">Переходы по кнопкам могут быть партнёрскими</p>
          </div>
          <ol className="relative grid gap-0 before:absolute before:bottom-0 before:left-[23px] before:top-0 before:w-px before:bg-[#8bb8ff]/35 sm:before:left-[31px]">
            {rating.map((item) => <li key={item.rank} className="relative grid gap-5 py-7 first:pt-0 last:pb-0 sm:grid-cols-[72px_1fr_126px] sm:items-start sm:gap-7">
              <span className="font-display relative z-[1] grid h-12 w-12 place-items-center rounded-full border border-[#8bb8ff] bg-[#10182a] text-sm font-bold text-[#8bb8ff] sm:h-16 sm:w-16 sm:text-lg">{item.rank}</span>
              <div className="border-b border-white/15 pb-7 sm:pb-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2"><h3 className="font-display text-2xl font-bold tracking-[-.055em] sm:text-3xl">{item.label}</h3><span className="font-mono text-[10px] font-bold uppercase tracking-[.13em] text-[#8bb8ff]">{item.badge}</span></div>
                <ul className="mt-4 grid gap-2 text-xs leading-5 text-[#bec9dc] sm:grid-cols-3">{item.features.map((feature) => <li key={feature} className="before:mr-2 before:text-[#8bb8ff] before:content-['/']">{feature}</li>)}</ul>
              </div>
              <a href={casinoLink} target="_blank" rel="sponsored noopener noreferrer" className="inline-flex w-fit items-center gap-2 border-b border-[#8bb8ff] pb-1 text-xs font-extrabold text-[#f3f6fb] transition hover:text-[#8bb8ff] sm:justify-self-end">Открыть <span className="text-base">↗</span></a>
            </li>)}
          </ol>
        </div>
      </section>

      <section id="checks" className="border-y border-white/12 bg-[#17213a]"><div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-28"><Eyebrow>02 · методика</Eyebrow><h2 className="font-display text-4xl font-bold tracking-[-.065em] sm:text-5xl">Как выбирали: шесть проверок</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-[#bec9dc]">Рейтинг учитывает условия работы, платёжные методы, скорость ответа поддержки, мобильный опыт и правила акций. Не подменяем проверку громкими обещаниями.</p><div className="mt-10 grid border-t border-white/15 md:grid-cols-2 lg:grid-cols-3">{checks.map(([number, title, copy]) => <article key={number} className="border-b border-white/15 p-5 first:pl-0 md:[&:nth-child(2n)]:border-l md:[&:nth-child(2n)]:pl-6 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+2)]:pl-6 lg:[&:nth-child(3n+3)]:border-l lg:[&:nth-child(3n+3)]:pl-6"><span className="font-mono grid h-9 w-9 place-items-center rounded-xl bg-[#8bb8ff]/15 text-[10px] font-bold text-[#8bb8ff]">{number}</span><h3 className="mt-5 font-display text-base font-bold tracking-[-.04em]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#aebbd0]">{copy}</p></article>)}</div></div></section>

      <section id="bonuses" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-30"><div className="border-b border-white/15 pb-20"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start"><div><Eyebrow>03 · условия акций</Eyebrow><h2 className="font-display text-4xl font-bold tracking-[-.065em] sm:text-5xl">Бонусы за регистрацию<br />и промокоды</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[#bec9dc]">Стартовые предложения могут включать пакет на первые пополнения, фриспины, кэшбэк или промокод. Сравнивайте не только размер бонуса, но и правила его использования.</p></div><Link href="#guide" className="shrink-0 rounded-xl bg-[#8bb8ff] px-5 py-4 text-xs font-extrabold text-[#10182a] transition hover:-translate-y-1 hover:shadow-[5px_6px_0_#8bb8ff]">Узнать условия</Link></div><div className="mt-10 grid border-y border-white/15 md:grid-cols-2 lg:grid-cols-4">{bonuses.map(([title, copy], index) => <article key={title} className="min-h-36 py-6 pr-6 md:px-6 md:first:pl-0 md:[&:nth-child(2n)]:border-l lg:[&:nth-child(n+2)]:border-l"><span className="font-mono text-xs font-bold text-[#8bb8ff]">0{index + 1}</span><h3 className="mt-5 font-display text-sm font-bold tracking-[-.04em]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#aebbd0]">{copy}</p></article>)}</div><p className="mt-4 border-l-2 border-[#8bb8ff] bg-white/[.05] px-4 py-4 text-xs leading-6 text-[#bec9dc]"><b className="text-[#f3f6fb]">Важно.</b> У любого бонуса есть условия использования и срок действия. Изучайте правила до активации.</p></div>
        <div id="guide" className="grid gap-10 py-20 lg:grid-cols-[1.1fr_.9fr]"><div><Eyebrow>04 · платежи</Eyebrow><h2 className="font-display text-4xl font-bold tracking-[-.065em] sm:text-5xl">Счёт в манатах:<br />пополнение и вывод</h2><ul className="mt-7 grid gap-3 text-sm text-[#dce5f5] sm:grid-cols-2"><li>• Карты AZ-банков</li><li>• Электронные кошельки</li><li>• Криптовалюта</li><li>• Мобильные платежи</li></ul></div><p className="self-end text-sm leading-8 text-[#bec9dc]">Доступные методы могут отличаться у каждой площадки. Перед пополнением сверяйте лимиты, комиссии, сроки обработки и требования верификации.</p></div>
      </section>

      <section id="faq" className="border-t border-white/12 bg-[#17213a]"><div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8"><Eyebrow>07 · справка</Eyebrow><h2 className="font-display text-4xl font-bold tracking-[-.065em] sm:text-5xl">Вопросы и ответы</h2><div className="mt-8 grid gap-2">{faq.map(([question, answer], index) => <details key={question} open={index === 4} className="group rounded-xl border border-white/15 bg-[#202c47] open:border-[#8bb8ff]/65"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-sm font-bold marker:content-none"><span>{question}</span><span className="text-lg text-[#8bb8ff] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-4xl px-5 pb-5 text-sm leading-7 text-[#bec9dc]">{answer}</p></details>)}</div></div></section>

      <footer className="border-t border-white/12 bg-[#10182a]"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.45fr_1fr_1fr_1fr]"><div><div className="font-display text-xl font-bold tracking-[-.08em]">РИТМ<br /><span className="text-[10px] tracking-[.25em] text-[#8bb8ff]">ИГРЫ</span></div><p className="mt-6 max-w-xs text-xs leading-6 text-[#afbdd2]">Информационный рейтинг. Мы можем получать партнёрское вознаграждение за переходы по ссылкам. Это не влияет на необходимость самостоятельно проверять условия выбранной площадки.</p></div><div><p className="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[#98a8c0]">Разделы</p><div className="mt-5 grid gap-3 text-xs text-[#d5e0f2]"><Link href="#rating">Рейтинг</Link><Link href="#checks">Как выбираем</Link><Link href="#bonuses">Бонусы</Link><Link href="#faq">Вопросы</Link></div></div><div><p className="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[#98a8c0]">Игрокам</p><div className="mt-5 grid gap-3 text-xs text-[#d5e0f2]"><Link href="#guide">Платёжный гид</Link><Link href="#faq">Ответственная игра</Link><Link href="#faq">Политика конфиденциальности</Link></div></div><div><p className="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[#98a8c0]">Способы оплаты</p><div className="mt-5 flex max-w-52 flex-wrap gap-2">{["Visa", "Mastercard", "AZN", "USDT", "BTC"].map((tag) => <span key={tag} className="rounded-md border border-white/20 px-3 py-2 font-mono text-[10px] font-bold text-[#d5e0f2]">{tag}</span>)}</div></div></div><div className="border-t border-white/12 px-5 py-5 text-center font-mono text-[9px] uppercase tracking-[.12em] text-[#8999b3] sm:px-8">18+ · играйте ответственно · © 2026 Ритм игры</div></footer>
    </main>
  );
}
