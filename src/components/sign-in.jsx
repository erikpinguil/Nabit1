import { signIn } from "../auth"

 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("resend", formData)
      }}
    >
       <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 350, margin: "40px auto", padding: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h2>Sign in to Nabit</h2>
       </div>
       <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 350, margin: "10px auto", padding: 10, display: "flex", justifyContent: "center", alignItems: "center"}}><img src="/nabit logo.png" alt="Logo" /></div>
       <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 350, margin: "40px auto", padding: 20}}>
      <input 
          type="text"
          name="email"
          placeholder="Email"
          style={{ fontSize: "18px", color: "#666", padding: "10px", width: "100%",borderRadius: 6,cursor: "pointer"}}/>
      <button type="submit"
        style={{background: "#c41230",color: "white", fontSize: "17px",marginTop: "30px",padding: "5px 5px", width: "107%", border: "none", borderRadius: 6, cursor: "pointer"}}
      >Sign in with Resend</button>
      <div></div></div>
      <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 200, margin: "10px auto", padding: 5, display: "flex", justifyContent: "center", alignItems: "center",fontSize: "14px"}}>
         <h2 style={{ whiteSpace: "nowrap", margin: 0 }}>
        New to Nabit?</h2>
        <button type="submit"     //registration button
        style={{color: "#c41230",marginTop: "2px", padding: "5px", width: "100%", border: "none", background: "none", cursor: "pointer", fontSize: "16px"}}>Register</button>
      </div>
    </form>
  )
}