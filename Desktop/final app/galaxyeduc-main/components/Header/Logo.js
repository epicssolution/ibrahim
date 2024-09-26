import Image from "next/image"; 
import Link from "next/link";
import profileImg from "../../images/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark" >
      <div  className="w-16 rounded-full overflow-hidden border border-solid  border-dark mr-4 ">
        <Image 
          src={profileImg} 
          alt="Profile image of the Education Consultant" 
         className="w-full h-auto rounded-full  "
         width={64} 
          height={64} 
           />
      </div>
     
    </Link>
  );
}

export default Logo;
