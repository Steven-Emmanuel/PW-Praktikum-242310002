import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme} className="btn btn-outline-secondary">
      <i className={`bi ${dark ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
      {dark ? ' Light' : ' Dark'}
    </button>
  )
}
