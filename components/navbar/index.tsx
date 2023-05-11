'use client';

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import SearchFilter from "./SearchFilter";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";

interface NavbarProps {
  currentUser ?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <SearchFilter />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}

export default Navbar