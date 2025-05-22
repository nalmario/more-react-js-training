export default function TabButton({children}) {
  return (
    <li><button>{children}</button></li> // 'children' contains anything that comes between component tags (in App.jsx)
  )
}