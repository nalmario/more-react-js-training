export default function TabButton({ children, onSelect, isSelected }) {
  return (
    // event listener props
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect} >{children}</button>
    </li> // 'children' contains anything that comes between component tags (in App.jsx)
  )
}