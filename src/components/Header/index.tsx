import logo from '@images/icons/pet-icon.svg';
import { List } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

const Header = () => {
  return (
    <div
      className="bg-blue-sky p-1 md:p-2 shadow-md drop-shadow-md justify-between flex items-center text-white"
      data-testid="header"
    >
      <Image src={logo} alt="Pet Icon Logo" priority={true} />
      <List size={32} />
    </div>
  );
};
export default Header;
