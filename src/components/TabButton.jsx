export default function TabButton({ children, isSelected, ...props }) { // also using prop forwarding here
  return (
    // event listener props
    <li>
      <button className={isSelected ? 'active' : undefined} {...props} >
        {children}
      </button>
    </li> // 'children' contains anything that comes between component tags (in App.jsx)
  )
}