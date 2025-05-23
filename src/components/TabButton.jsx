export default function TabButton({ children, onSelect }) {
  return (
    // event listener props
    <li>
      <button onClick={onSelect} >{children}</button>
    </li> // 'children' contains anything that comes between component tags (in App.jsx)
  )
}