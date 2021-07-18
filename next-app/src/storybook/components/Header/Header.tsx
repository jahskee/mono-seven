import AppBar7 from './components/TopMenuBar/TopMenuBar';
import HeroImage from './components/HeroImage/HeroImage';
import Card from '@material-ui/core/Card';
function Header() {
  return (
    <Card>
      <AppBar7 />
      <HeroImage />
    </Card>
  )
}

export default Header;