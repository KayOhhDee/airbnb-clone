'use client';

import Container from "../../Container";
import Logo from "./Logo";
import SearchFilter from "./SearchFilter";
import UserMenu from "./UserMenu";

export default function Navbar() {
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