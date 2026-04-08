import Login from '../../components/Login'
// import { redirect } from "next/navigation"
// import { auth } from "../../auth"
// import { headers } from "next/headers"

export default function SignIn() {
  // Fake session for styling (so page doesn't crash)
  const session = null; // pretend nobody is signed in

  // You can also fake a user if needed:
  // const session = { user: { name: "Test User", onboardingComplete: false } };

  // Normally we redirect if session exists, but for styling we skip this
  // if (session){
  //   if (session.user.onboardingComplete == false){
  //     redirect('/onboarding');
  //   } else {
  //     redirect('/dashboard');
  //   }
  // }
  
  return (
    <Login/>
  );
}
