import ProfileCard from "../ui/account/profile-card";
import LogoutButton from "../ui/account/log-out-button";

export default function Home() {
  return (
      <main className="flex flex-col items-center mt-30 ">
        <ProfileCard/>
        <LogoutButton />
      </main>
        
      
  );
}
