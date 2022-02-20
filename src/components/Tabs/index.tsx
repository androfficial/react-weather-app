export const Tabs = () => {
  const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];
  return (
    <div className='home__tabs tabs'>
      <div className='tabs__wrapper'>
        {tabs.map((tab) => (
          <div className='tabs__item' key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className='tabs__cancel cancel'>Отменить</div>
    </div>
  );
};
