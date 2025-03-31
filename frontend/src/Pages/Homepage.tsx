

function Homepage() {
    const user=JSON.parse(localStorage.getItem("user"))
    
    
  return (
    <div className="text-[#232323] text-[30px] font-[700]">
        Welcome {user.email.split("@")[0]}
    </div>
  )
}

export default Homepage
