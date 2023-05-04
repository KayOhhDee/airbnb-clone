'use client';

import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import SearchFilter from "./SearchFilter";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser ?: User | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log(currentUser)
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <SearchFilter />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar