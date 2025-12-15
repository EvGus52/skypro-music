import styles from './filterItem.module.css';
import cn from 'classnames';

type FilterItemProps = {
  title: string;
  isOpen: boolean;
  items: string[];
  onToggle: () => void;
  activeItems: string[];
  filterType: string;
  onItemClick: (filterType: string, item: string) => void;
};

export default function FilterItem({
  title,
  isOpen,
  items,
  onToggle,
  activeItems,
  filterType,
  onItemClick,
}: FilterItemProps) {
  const handleItemClick = (e: React.MouseEvent, item: string) => {
    e.stopPropagation(); // Предотвращаем всплытие события, чтобы фильтр не закрывался
    onItemClick(filterType, item);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем закрытие фильтра при клике внутри
  };

  const activeCount = activeItems.length;

  return (
    <div className={styles.filter__buttonContainer}>
      <div
        className={cn(styles.filter__button, {
          [styles.active]: activeCount > 0,
        })}
        onClick={onToggle}
      >
        {title}
        {activeCount > 0 && (
          <span className={styles.filter__badge}>{activeCount}</span>
        )}
      </div>
      {isOpen && (
        <div
          className={styles.filter__dropdown}
          onMouseDown={handleMouseDown}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={styles.filter__list}>
            {items.map((item) => (
              <li
                key={item}
                className={styles.filter__item}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => handleItemClick(e, item)}
              >
                <span
                  className={cn(styles.filter__link, {
                    [styles.active]: activeItems.includes(item),
                  })}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
