
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../Api/auth";
import { useEffect, useState } from "react"; 
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import toast from "react-hot-toast";



const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const mutation = useMutation({
    mutationFn:loginUser,
    onSuccess: (data:any) => {
      
      toast.success('Successfully logged in!');
      localStorage.setItem("user",JSON.stringify(data.user))
      
      
    },
    onError: (error: any) => {
      
      toast.error(error.response.data.message);
      
    }});


  

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
    
  };

  return (
    <form onSubmit={onSubmit}
    className="border border-slate-300 p-4 rounded-[8px] W-[320px] h-[314px] "
    >
      <h2 className="mx-auto w-[230px] leading-[38px] text-[#232323] text-[30px] font-[700] h-[38px]">Welcome back!</h2>

      <div className="relative">
      
      <CiMail  size={16} className="absolute left-2 top-[21px]"/>

      <input
      onChange={(e) => setEmail(e.target.value)}
       className="pl-8 text-md border-[1px] rounded-[8px] border-[#D6D6D6]
      w-[320px] my-[6px] h-[48px] border-b border-slate-300 outline-none p-2"
       type="email" placeholder="UID"  />
      <p>{errors.email?.message}</p>
      </div>



    <div className="relative">

      <IoLockClosedOutline size={16} className="absolute left-2 top-[14px]" />
    
    

      <input 
       onChange={(e) => setPassword(e.target.value)}
      className="pl-8 border-[1px] rounded-[8px] border-[#D6D6D6] text-md
       w-[320px] h-[48px] mb-[6px] border-b border-slate-300 outline-none p-2"
       type={showPassword ? "text" : "password"}
       placeholder="Password" />
      <p>{errors.password?.message}</p>

      <div className="cursor-pointer absolute right-2 top-1/3  ">

      {showPassword ?  <FaRegEye  onClick={() => setShowPassword(!showPassword)} 
      />
      :
      <FaRegEyeSlash  onClick={() => setShowPassword(!showPassword)} 
      />
    }
      </div>
     
      
  
  </div>



      <button className="w-[320px] h-[60px] mt-auto
       text-2xl bg-[#2B3A67] text-[#FCFCFC] leading-[28px]
       cursor-pointer border-[1px] border-[#2B3A67] py-[16px] px-[24px] rounded-[8px]" 
       type="submit">
         
        Login</button>
    </form>
  );
};

export default LoginPage;
