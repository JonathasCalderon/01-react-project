export default function TabButton({children, isSelected, ...miscProps}) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...miscProps}>
        {children}
      </button>
    </li>
  )
}
