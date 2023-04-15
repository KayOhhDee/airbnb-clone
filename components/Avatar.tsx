'use client';

import Image from "next/image";

function Avatar() {
  return (
    <Image className="rounded-full" height={30} width={30} src="/images/avatar.jpg" alt="avatar" />
  )
}

export default Avatar