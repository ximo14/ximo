import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeChanger = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    
    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        console.log(currentTheme)
        if (currentTheme === 'light') {
            return (
                <HiMoon className='w-10 h-10 text-gray-900 transform hover:scale-[1.1] transition-all' role='button' onClick={() => setTheme('dark')} />
            )
        } else {
            return (
                <HiSun className='w-10 h-10 text-yellow-400 transform hover:scale-[1.1] transition-all' role='button' onClick={() => setTheme('light')} />
            )
        }
   };

   return (
       <div>
           {renderThemeChanger()}
       </div>
   )
}

export default ThemeChanger;